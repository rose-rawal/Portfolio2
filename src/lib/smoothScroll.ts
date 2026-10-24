import Lenis from "lenis";

let instance: Lenis | null = null;

/** Lenis smooth-scroll helpers shared across the app */
export const scroll = {
  stop() {
    instance?.stop();
  },
  start() {
    instance?.start();
  },
  toTop() {
    instance?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  },
  to(target: string | number, offset = 0) {
    const el =
      typeof target === "string" ? document.querySelector(target) : null;
    if (instance) instance.scrollTo((el as HTMLElement) ?? target, { offset });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  },
};

export function createSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 1,
    smoothWheel: true,
  });
  instance = lenis;

  let raf = 0;
  const loop = (time: number) => {
    lenis.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    lenis.destroy();
    if (instance === lenis) instance = null;
  };
}
