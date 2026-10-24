import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Scene from "../model/cat/Scene.tsx";

/**
 * Keeps the 3D cat canvas alive across route changes.
 *
 * Creating the WebGL context and compiling its shaders costs hundreds of
 * milliseconds on weaker GPUs — enough to freeze the curtain reveal the
 * moment the home page mounted ("black screen vanished instantly").
 *
 * The Scene therefore stays mounted here for the lifetime of the app and
 * only the canvas DOM node is physically moved between the hidden holder
 * and the hero's model slot. React never re-creates it, so no context is
 * ever re-made and route changes cost nothing.
 */
export default function CatLayer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  const holdRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<Element | null>(null);

  /* The hero slot only appears once the home route has committed —
     AnimatePresence waits out the previous page's exit first — so poll for
     it with rAF while home is active, and park the canvas otherwise. */
  useEffect(() => {
    if (!isHome) {
      setSlot(null);
      return;
    }
    let raf = 0;
    const find = () => {
      const el = document.getElementById("hero-model");
      if (el) {
        setSlot(el);
        return;
      }
      raf = requestAnimationFrame(find);
    };
    find();
    return () => cancelAnimationFrame(raf);
  }, [isHome]);

  /* Relocate the canvas node (same element, same WebGL context) between
     the holder and the hero slot. Moving a canvas in the DOM preserves
     its context; r3f's ResizeObserver handles the buffer resize. */
  useEffect(() => {
    const hold = holdRef.current;
    if (!hold) return;
    if (!nodeRef.current) nodeRef.current = hold.firstElementChild;
    const node = nodeRef.current;
    if (!node) return;
    const dest = isHome && slot ? slot : hold;
    if (node.parentElement !== dest) dest.appendChild(node);
  }, [isHome, slot]);

  return (
    <div className="cat-hold" ref={holdRef} aria-hidden>
      <Scene active={isHome && !!slot} />
    </div>
  );
}
