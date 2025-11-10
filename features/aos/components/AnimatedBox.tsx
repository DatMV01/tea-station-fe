"use client";

import React, { ReactNode } from "react";
 
type FadeAnimations =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-up-right"
  | "fade-up-left"
  | "fade-down-right"
  | "fade-down-left";

type FlipAnimations = "flip-up" | "flip-down" | "flip-left" | "flip-right";

type SlideAnimations =
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right";

type ZoomAnimations =
  | "zoom-in"
  | "zoom-in-up"
  | "zoom-in-down"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-out"
  | "zoom-out-up"
  | "zoom-out-down"
  | "zoom-out-left"
  | "zoom-out-right";

export type AOSAnimation =
  | FadeAnimations
  | FlipAnimations
  | SlideAnimations
  | ZoomAnimations;

export type AOSAnchorPlacement =
  | "top-bottom"
  | "top-center"
  | "top-top"
  | "center-bottom"
  | "center-center"
  | "center-top"
  | "bottom-bottom"
  | "bottom-center"
  | "bottom-top";

// Easing functions
export type AOSEasing =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "ease-in-back"
  | "ease-out-back"
  | "ease-in-out-back"
  | "ease-in-sine"
  | "ease-out-sine"
  | "ease-in-out-sine"
  | "ease-in-quad"
  | "ease-out-quad"
  | "ease-in-out-quad"
  | "ease-in-cubic"
  | "ease-out-cubic"
  | "ease-in-out-cubic"
  | "ease-in-quart"
  | "ease-out-quart"
  | "ease-in-out-quart";

interface AnimatedBoxProps {
  animation?: AOSAnimation;
  delay?: number;
  duration?: number;
  easing?: AOSEasing;
  once?: boolean;
  offset?: number;
  anchorPlacement?: AOSAnchorPlacement;
  className?: string;
  children: ReactNode;
}
 
export default function AnimatedBox({
  animation = "fade-up",
  delay = 0,
  duration = 800,
  easing = "ease-in-out",
  once = true,
  offset = 120,
  anchorPlacement = "top-bottom",
  className,
  children,
}: AnimatedBoxProps) {
 

  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-easing={easing}
      data-aos-once={once}
      data-aos-offset={offset}
      data-aos-anchor-placement={anchorPlacement}
      className={`transition-all ${className}`}
    >
      {children}
    </div>
  );
}
