"use client";

import React, { useEffect, useRef, useState } from "react";

type Slide = {
  id: string | number;
  content: React.ReactNode; // could be <img />, JSX, text, etc.
};

type Props = {
  slides: Slide[];
  startIndex?: number;
  autoPlay?: boolean;
  interval?: number; // ms
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
};

export default function Carousel({
  slides,
  startIndex = 0,
  autoPlay = false,
  interval = 4000,
  showDots = true,
  showArrows = true,
  className = "",
}: Props) {
  console.log("Carousel render with slides:", slides);

  const [index, setIndex] = useState<number>(
    Math.min(Math.max(0, startIndex), Math.max(0, slides.length - 1))
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);

  // autoplay
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    clearTimer();
    timerRef.current = window.setInterval(() => {
      goNext();
    }, interval);
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlay, interval, slides.length]);

  function clearTimer() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goTo(i: number) {
    const n = slides.length;
    if (n === 0) return;
    setIndex(((i % n) + n) % n);
  }

  function goNext() {
    goTo(index + 1);
  }

  function goPrev() {
    goTo(index - 1);
  }

  // keyboard accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    containerRef.current?.addEventListener("keydown", onKey as any);
    return () =>
      containerRef.current?.removeEventListener("keydown", onKey as any);
  });

  // pointer / touch swipe handlers
  function onPointerDown(e: React.PointerEvent) {
    (e.target as Element).setPointerCapture(e.pointerId);
    touchStartX.current = e.clientX;
    touchDelta.current = 0;
    clearTimer();
  }

  function onPointerMove(e: React.PointerEvent) {
    if (touchStartX.current == null) return;
    touchDelta.current = e.clientX - touchStartX.current;
  }

  function onPointerUp(e: React.PointerEvent) {
    if (touchStartX.current == null) return;
    const delta = touchDelta.current;
    const threshold = 50; // px to trigger
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
    touchStartX.current = null;
    touchDelta.current = 0;
  }

  if (!slides || slides.length === 0) return null;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={`relative overflow-hidden w-full ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* slides wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${-index * 100}%)`,
        }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="w-full px-6 shrink-0 flex items-center justify-center"
          >
            {s.content}
          </div>
        ))}
      </div>

      {/* arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={() => {
              clearTimer();
              goPrev();
            }}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 p-2 rounded-full shadow-md hover:scale-105 transition-opacity border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              clearTimer();
              goNext();
            }}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 p-2 rounded-full shadow-md hover:scale-105 transition-opacity border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 flex gap-2 items-center">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                clearTimer();
                goTo(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`border-none transition-transform    ${i === index ? "scale-125" : "opacity-60"} `}
            >
              <span className="sr-only">{`Slide ${i + 1}`}</span>
              <div
                className={`w-2 aspect-square rounded-full ${i === index ? "bg-black/80" : "bg-black/50"}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/*
Usage example:

import Carousel from "./CarouselComponent";

const slides = [
  { id: 1, content: <img src="https://picsum.photos/800/500?random=1" className="w-full h-full object-cover" /> },
  { id: 2, content: <img src="https://picsum.photos/800/500?random=2" className="w-full h-full object-cover" /> },
  { id: 3, content: <img src="https://picsum.photos/800/500?random=3" className="w-full h-full object-cover" /> },
];

<Carousel slides={slides} autoPlay interval={3000} showDots showArrows className="rounded-2xl shadow-lg" />

Notes and customization:
- Tailwind is used for layout and appearance. Tweak heights (h-64, md:h-96) or make them aspect-ratio based.
- The component uses CSS transform for smooth transitions.
- It supports keyboard left/right, pointer/touch swipe, autoplay with clear on interaction.
- You can extend it to support infinite clones (for smoother infinite scroll), lazy loading of images, or progress bar.
*/
