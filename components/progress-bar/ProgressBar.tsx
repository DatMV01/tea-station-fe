"use client";

import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";

interface ProgressBarProps {
  percentage: number;
  duration?: number;
  once?: boolean;
  startFrom?: number;
  options?: IntersectionObserverInit;
  onEnter?: () => void;
  onLeave?: () => void;
}

export default function ProgressBar({
  percentage,
  duration = 1000,
  once = true,
  startFrom = 0,
  options = {
    threshold: 0.2,
    root: null,
    rootMargin: "0px",
  },
  onEnter,
  onLeave,
}: ProgressBarProps) {
  const [currentPercent, setCurrentPercent] = useState(startFrom);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        onEnter?.();

        // reset to 0 before animating to percentage
        setCurrentPercent(0);
        setCurrentPercent(percentage);

        if (once) observer.unobserve(element);
      } else {
        onLeave?.();

        if (!once) setCurrentPercent(0);
      }
    }, options);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [percentage, once, startFrom, onEnter, onLeave, options]);

  return (
    <div
      ref={ref}
      className="relative w-full h-2 bg-gray-200 rounded-full overflow-visible mt-10"
    >
      {/* Fill bar */}
      <div
        className={clsx(
          "absolute top-0 left-0 h-full rounded-full transition-all ease-out",
          "bg-linear-to-r from-green-500 to-green-900"
        )}
        style={{
          width: `${currentPercent}%`,
          transitionDuration: `${duration}ms`,
        }}
      />

      {/* Marker + text */}
      <div
        className="absolute -top-5 -translate-y-1/2 -translate-x-1/2 w-10 h-6 flex items-center justify-center"
        style={{
          left: `${currentPercent}%`,
          transitionDuration: `${duration}ms`,
        }}
      >
        <span
          className={clsx(
            "w-0 h-0 absolute top-5",
            "border-l-8 border-l-transparent",
            "border-r-8 border-r-transparent",
            "border-t-8 border-t-gray-200"
          )}
        />

        {/* Text % */}
        <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-900">
          {Math.round(currentPercent)}%
        </span>
      </div>
    </div>
  );
}
