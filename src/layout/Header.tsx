import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RollLabel } from "../components/ui.tsx";
import { IconMoon, IconSun } from "../components/icons.tsx";
import { nav, profile } from "../data/portfolio.ts";

function nepalTime() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const npt = new Date(utc + 5.75 * 3600000);
  return `${String(npt.getHours()).padStart(2, "0")}:${String(
    npt.getMinutes()
  ).padStart(2, "0")}`;
}

export default function Header({
  onMenu,
  menuOpen,
  mode,
  onToggleMode,
}: {
  onMenu: () => void;
  menuOpen: boolean;
  mode: "light" | "dark";
  onToggleMode: () => void;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [time, setTime] = useState(nepalTime);
  const location = useLocation();

  useEffect(() => {
    const id = window.setInterval(() => setTime(nepalTime()), 15000);
    return () => window.clearInterval(id);
  }, []);

  /* Swap header colour while scrolling across themed sections */
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const probe = 30;
      let next: "light" | "dark" = "light";
      document.querySelectorAll<HTMLElement>("[data-theme]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) {
          next = el.dataset.theme === "dark" ? "dark" : "light";
        }
      });
      setTheme((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    const settle = window.setTimeout(check, 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [location.pathname]);

  const dark = menuOpen || mode === "dark" || theme === "dark";

  return (
    <header className={`header ${dark ? "is-dark" : ""}`}>
      <div className="header__inner container">
        <div className="header__left">
          <button
            className="header__menu"
            onClick={onMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            <span className="header__dots" aria-hidden>
              <i />
              <i />
            </span>
            <span className="header__menu-label">{menuOpen ? "Close" : "Menu"}</span>
          </button>

          <nav className="header__nav" aria-label="Primary">
            {nav.map((item) => (
              <Link className="hlink" to={item.path} key={item.path}>
                <RollLabel label={item.label} />
              </Link>
            ))}
          </nav>
        </div>

        <Link to="/" className="header__logo" aria-label={`${profile.name} — home`}>
          {profile.name}
        </Link>

        <div className="header__right">
          <div className="header__meta">
            <span className="l1">{time}</span>
            <span className="l1">{profile.region}</span>
          </div>
          <button
            className="header__theme"
            type="button"
            onClick={onToggleMode}
            aria-label={
              mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mode === "dark" ? <IconSun /> : <IconMoon />}
          </button>
          <Link className="nav-cta" to="/contact">
            <span className="nav-cta__dot" aria-hidden />
            <span className="nav-cta__label">
              <RollLabel label="Let’s Talk" />
            </span>
            <span className="nav-cta__dot" aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}
