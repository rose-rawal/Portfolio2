import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE_IN_OUT, Reveal } from "../components/ui.tsx";
import { profile } from "../data/portfolio.ts";

const DURATION = 2100;

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let raf = 0;
    let start = 0;
    const tick = (time: number) => {
      if (!start) start = time;
      const p = Math.min((time - start) / DURATION, 1);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else window.setTimeout(() => setDone(true), 420);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    if (done) onDone();
  }, [done, onDone]);

  const pad = String(pct).padStart(2, "0");

  return (
    <motion.div
      className="preloader theme-dark"
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: EASE_IN_OUT }}
      aria-hidden
    >
      <div className="preloader__lines">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span className="line-v" key={i} />
        ))}
      </div>

      <div className="preloader__head container">
        <span className="l1">{profile.brand}</span>
        <span className="l1">Portfolio — 2026</span>
      </div>

      <div className="preloader__center container">
        <Reveal
          as="h1"
          className="h1 preloader__title"
          text={profile.tagline}
          play
          delay={0.25}
          stagger={0.09}
        />
        <div className="preloader__meta">
          <motion.span
            className="l1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {profile.name} — {profile.role}
          </motion.span>
        </div>
      </div>

      <div className="preloader__foot container">
        <div className="preloader__id">
          <span className="l1">{profile.name}</span>
          <span className="h3 preloader__role">
            {profile.role} — {profile.location}
          </span>
        </div>
        <div className="preloader__load">
          <span className="h3">Loading</span>
          <span className="h3">{pad}%</span>
        </div>
        <div className="preloader__bar">
          <span style={{ width: `${pct}%` }} />
        </div>
      </div>
    </motion.div>
  );
}
