import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow, EASE_IN_OUT, Reveal, SocialIconLink } from "../components/ui.tsx";
import { contact, nav, profile, socials } from "../data/portfolio.ts";
import { scroll } from "../lib/smoothScroll.ts";

const items = [{ label: "Home", path: "/" }, ...nav];

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const location = useLocation();

  /* lock scrolling while open, close on navigation + escape */
  useEffect(() => {
    if (open) {
      scroll.stop();
      document.body.style.overflow = "hidden";
    } else {
      scroll.start();
      document.body.style.overflow = "";
    }
    return () => {
      scroll.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu theme-dark"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.8, ease: EASE_IN_OUT }}
        >
          <div className="menu__lines" aria-hidden>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span className="line-v" key={i} />
            ))}
          </div>

          <div className="menu__inner container">
            <ul className="menu__list">
              {items.map((item, i) => (
                <li className="menu__item" key={item.path}>
                  <Link
                    className="menu__link"
                    to={item.path}
                    onClick={onClose}
                  >
                    <span className="menu__num l1" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Reveal
                      as="span"
                      className="a2 menu__label"
                      text={item.label}
                      play={open}
                      delay={0.25 + i * 0.07}
                      stagger={0.05}
                    />
                    <span className="menu__arrow" aria-hidden>
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="menu__foot">
              <div className="menu__foot-col">
                <span className="l1 text-gray">Email</span>
                <a className="p1" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
              <div className="menu__foot-col">
                <span className="l1 text-gray">Phone</span>
                <a className="p1" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className="menu__foot-col">
                <span className="l1 text-gray">Elsewhere</span>
                <div className="menu__socials">
                  {socials.map((s) => (
                    <SocialIconLink key={s.label} social={s} />
                  ))}
                </div>
              </div>
              <div className="menu__foot-col menu__foot-col--end">
                <span className="l1 text-gray">Based in</span>
                <span className="p1">{profile.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
