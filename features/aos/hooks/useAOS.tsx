"use client";

import { useEffect } from "react";
import AOS, { AosOptions } from "aos";

/**
 * Hook useAOS: Overrides individual AOS configuration for each component
 * - Can be used in parallel with AOSProvider
 * - When component unmount, refresh OAS
 */
export function useAOS(options?: AosOptions): void {
  useEffect(() => {
    if (options) {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        ...options,
      });
    }
    // clean listener when component unmount
    return () => {
      AOS.refresh();
    };
  }, [options]);
}
