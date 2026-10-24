import { useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, Reveal, SectionLabel } from "../components/ui.tsx";
import { expertise } from "../data/portfolio.ts";

/** Numbered services list with a card that trails the cursor. */
export default function Expertise() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: ReactMouseEvent) => {
    const rect = wrap.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="s-expertise theme-light" data-theme="light">
      <div className="container">
        <div className="s-expertise__head">
          <SectionLabel>Services</SectionLabel>
          <Reveal
            as="h2"
            className="h2 s-expertise__title"
            text="Showcasing my Arsenal"
            stagger={0.05}
          />
        </div>

        <div
          className="exp"
          ref={wrap}
          onMouseMove={onMove}
          onMouseLeave={() => setActive(null)}
        >
          <ul className="exp__list">
            {expertise.map((item, i) => (
              <li
                className={`exp__item ${active === i ? "is-active" : ""}`}
                key={item.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >
                <span className="exp__num l1">{item.num}</span>
                <div className="exp__main">
                  <h3 className="exp__title">{item.title}</h3>
                  <p className="p1 exp__body">{item.body}</p>
                </div>
                <span className="exp__tags l1 text-gray">
                  {item.tags.join(" · ")}
                </span>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {active !== null && (
              <motion.div
                className="exp__preview"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, ease: EASE }}
                aria-hidden
              >
                <img src={expertise[active].image} alt="" />
                <span className="l1">{expertise[active].num}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
