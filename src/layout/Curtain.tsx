import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EASE_IN_OUT } from "../components/ui.tsx";

type Phase = "idle" | "cover" | "reveal";

/** Dark panel that wipes up over the screen on every route change. */
export default function Curtain({ pathname }: { pathname: string }) {
  const first = useRef(true);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setPhase("cover");
    const reveal = window.setTimeout(() => setPhase("reveal"), 560);
    const idle = window.setTimeout(() => setPhase("idle"), 1200);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(idle);
    };
  }, [pathname]);

  if (phase === "idle") return null;

  return (
    <motion.div
      className="curtain"
      aria-hidden
      style={{
        transformOrigin: phase === "cover" ? "bottom" : "top",
      }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: phase === "cover" ? 1 : 0 }}
      transition={{ duration: 0.55, ease: EASE_IN_OUT }}
    />
  );
}
