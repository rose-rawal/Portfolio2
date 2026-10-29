import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { generalRoutes } from "./routes/generalRoutes.tsx";
import SmoothScroll from "./layout/SmoothScroll.tsx";
import Cursor from "./layout/Cursor.tsx";
import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import MenuOverlay from "./layout/MenuOverlay.tsx";
import Preloader from "./layout/Preloader.tsx";
import Curtain from "./layout/Curtain.tsx";
import CatLayer from "./layout/CatLayer.tsx";
import { scroll } from "./lib/smoothScroll.ts";
import { armClickSound } from "./lib/clickSound.ts";

/** ?nopreload skips the intro screen — handy for visual checks and testing. */
const skipIntro =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("nopreload");

function Shell() {
  const location = useLocation();
  const [preloading, setPreloading] = useState(!skipIntro);
  const [ready, setReady] = useState(skipIntro);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">(() => {
    try {
      return localStorage.getItem("mode") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  const onPreloaderDone = useCallback(() => setPreloading(false), []);
  const onToggleMode = useCallback(
    () => setMode((m) => (m === "dark" ? "light" : "dark")),
    []
  );

  /* Reflect the colour mode on <html> and persist the choice */
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    try {
      localStorage.setItem("mode", mode);
    } catch {
      /* storage unavailable — mode still works for this session */
    }
  }, [mode]);

  /* Tactile key-press feedback on every primary pointer press */
  useEffect(() => armClickSound(), []);

  /* ?y=NNN jumps straight to a scroll offset — used for visual checks. */
  useEffect(() => {
    const y = new URLSearchParams(window.location.search).get("y");
    if (!y) return;
    const id = window.setTimeout(() => {
      window.scrollTo(0, parseInt(y, 10) || 0);
    }, 350);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  return (
    <div className="shell">
      <SmoothScroll />
      <Cursor />

      <Header
        onMenu={() => setMenuOpen((open) => !open)}
        menuOpen={menuOpen}
        mode={mode}
        onToggleMode={onToggleMode}
      />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="main">
        <AnimatePresence mode="wait" onExitComplete={() => scroll.toTop()}>
          <Routes location={location} key={location.pathname}>
            {generalRoutes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component ready={ready} />}
              />
            ))}
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <Curtain pathname={location.pathname} />
      <CatLayer />

      <AnimatePresence onExitComplete={() => setReady(true)}>
        {preloading && (
          <Preloader key="preloader" onDone={onPreloaderDone} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
