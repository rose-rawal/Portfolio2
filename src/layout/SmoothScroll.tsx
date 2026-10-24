import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";
import { createSmoothScroll } from "../lib/smoothScroll.ts";

export default function SmoothScroll() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    return createSmoothScroll();
  }, []);

  return null;
}
