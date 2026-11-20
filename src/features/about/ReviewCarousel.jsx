"use client";

import { useLayoutEffect, useRef } from "react";
import { tns } from "tiny-slider/src/tiny-slider";

export default function ReviewCarousel({ children, settings }) {
  const wrapper = useRef(null);

  useLayoutEffect(() => {
    // Tiny Slider replaces its container when destroyed. The outer node stays mounted.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slider = tns({
      ...settings,
      autoplay: settings.autoplay && !reducedMotion,
      speed: reducedMotion ? 0 : settings.speed,
      container: wrapper.current.firstElementChild,
    });
    return () => slider?.destroy();
  }, [settings]);

  return (
    <div ref={wrapper}>
      <div>{children}</div>
    </div>
  );
}
