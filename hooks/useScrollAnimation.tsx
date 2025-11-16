"use client";

import { useEffect, useRef } from "react";

interface Props {
  animationClass?: string;
  once?: boolean;
  options?: IntersectionObserverInit;
  onEnter?: () => void;
  onLeave?: () => void;
}

function useScrollAnimation<T extends HTMLElement>({
  animationClass = "animate-bounce",
  once = true,
  options = {
    threshold: 0.2,
    root: null,
    rootMargin: "0px",
  },
  onEnter,
  onLeave,
}: Props = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onEnter?.();

        element.classList.add(animationClass);
        if (once) observer.unobserve(element);
      } else {
        onLeave?.();

        // remove class in order to animation can re-run
        if (!once) element.classList.remove(animationClass);
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationClass, once, options, onEnter, onLeave]);

  return ref;
}

export default useScrollAnimation;
