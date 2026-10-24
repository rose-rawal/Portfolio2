import { useEffect, useRef } from "react";

/**
 * Custom cursor — a precise dot with a softly trailing ring that grows
 * over anything interactive. Hidden on touch devices.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      const host = dot.current?.parentElement;
      if (host && !host.classList.contains("is-live")) {
        rx = x;
        ry = y;
        if (ring.current) {
          ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        }
        host.classList.add("is-live");
      }
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest?.(
        "a, button, input, textarea, [data-cursor-grow]"
      );
      ring.current?.classList.toggle("is-active", Boolean(interactive));
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor" aria-hidden>
      <div className="cursor__ring" ref={ring} />
      <div className="cursor__dot" ref={dot} />
    </div>
  );
}
