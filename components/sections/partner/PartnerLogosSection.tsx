"use client";

import { Container } from "@/components";
import { assets } from "@/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./style.css";

const PartnerLogosSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const reducedMotion = !window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (reducedMotion && scrollerRef.current) {
      scrollerRef.current.setAttribute("data-animated", String(true));
    }

    const scrollerInner = scrollerInnerRef.current;
    if (!scrollerInner) return;

    Array.from(scrollerInner.children).forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });
  }, []);

  return (
    <Container as="section" className="flex flex-col" id="partner-logos">
      {/* Header */}
      <div data-aos="fade-right" className="mt-10">
        <h2 className="text-xs font-medium uppercase font-inter text-primary-900">
          Có mặt tại
        </h2>
        <h1 className="mt-2 text-2xl tracking-wide capitalize lg:text-3xl font-lobster">
          Những Nhà Phân Phối
          <span className=" bg-clip-text text-transparent bg-linear-to-l from-primary-500 to-primary-900 before:content-['_'] ">
            Uy Tín
          </span>
        </h1>
      </div>

      {/* Scrolling logo area */}
      <div
        ref={scrollerRef}
        className="scroller"
        data-direction="left"
        data-speed="medium"
      >
        <ul ref={scrollerInnerRef} className="scroller__inner">
          {assets.partnerLogos.map((logo, idx) => (
            <li key={idx} className="flex items-center justify-center px-6">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                unoptimized
                className="h-10 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default PartnerLogosSection;
