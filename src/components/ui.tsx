import React, { useEffect, useId, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { socialIcons } from "./icons.tsx";

/** Shared easing curve for entrances and transitions. */
export const EASE: [number, number, number, number] = [0.25, 1, 0.5, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div" | "a" | "blockquote";

type RevealProps = {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
  /** when supplied, plays instead of triggering on scroll */
  play?: boolean;
  once?: boolean;
  href?: string;
  target?: string;
};

/**
 * Word-by-word masked reveal — each word rises out of an overflow-hidden mask.
 */
export function Reveal({
  text,
  as = "h1",
  className = "",
  delay = 0,
  stagger = 0.05,
  play,
  once = true,
  href,
  target,
}: RevealProps) {
  const Tag = as as React.ElementType;
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: { y: "125%" },
    show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
  };

  const shared = {
    className: `reveal ${className}`.trim(),
    variants: container,
    initial: "hidden" as const,
  };

  const content = words.map((word, i) => (
    <span className="reveal__mask" key={`${word}-${i}`}>
      <motion.span className="reveal__word" variants={child}>
        {word}
        {i < words.length - 1 ? "\u00A0" : ""}
      </motion.span>
    </span>
  ));

  const motionProps =
    play === undefined
      ? { whileInView: "show" as const, viewport: { once, margin: "-8% 0px -8% 0px" } }
      : { animate: play ? ("show" as const) : ("hidden" as const) };

  return (
    <Tag className={shared.className} href={href} target={target}>
      <motion.span
        className="reveal__inner"
        variants={shared.variants}
        initial={shared.initial}
        {...motionProps}
      >
        {content}
      </motion.span>
    </Tag>
  );
}

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  play?: boolean;
  once?: boolean;
};

export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 28,
  play,
  once = true,
}: FadeUpProps) {
  const hidden = { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };

  const motionProps =
    play === undefined
      ? { whileInView: shown, viewport: { once, margin: "-8% 0px -8% 0px" } }
      : { animate: play ? shown : hidden };

  return (
    <motion.div
      className={className}
      initial={hidden}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

/** Label preceded by a thin rule. */
export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`label-line ${className}`.trim()}>
      <span className="label-line__bar" aria-hidden />
      <span className="l1">{children}</span>
    </div>
  );
}

/** Two stacked copies of a label; the second rolls in on hover */
export function RollLabel({ label }: { label: string }) {
  return (
    <span className="hlink__box">
      <span className="hlink__stack">
        <span className="hlink__text">{label}</span>
        <span className="hlink__text" aria-hidden>
          {label}
        </span>
      </span>
    </span>
  );
}

/** Anchor whose label rolls up to a duplicate on hover */
export function HoverLink({
  label,
  href,
  external = false,
  className = "",
  onClick,
}: {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      className={`hlink ${className}`.trim()}
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      <RollLabel label={label} />
    </a>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10.669 6.276 4.931 12.014l-.943-.943 5.738-5.738H4.669V4h7.333v7.333h-1.333V6.276Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Pill button that fills from the left on hover */
export function PillButton({
  label,
  href,
  external = false,
  className = "",
  onClick,
}: {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      className={`btn ${className}`.trim()}
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      <span className="btn__fill" aria-hidden />
      <span className="btn__label">
        <RollLabel label={label} />
      </span>
      <span className="btn__ico" aria-hidden>
        <Arrow />
      </span>
    </a>
  );
}

/** Image that drifts slower than the scroll inside an overflow-hidden frame */
export function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 7,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-strength}%`, `${strength}%`]);

  return (
    <div className={`media ${className}`.trim()} ref={ref}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

/** Infinite horizontal marquee */
export function Marquee({
  items,
  className = "",
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  const group = (
    <div className="marquee__group" aria-hidden>
      {items.map((item, i) => (
        <React.Fragment key={`${item}-${i}`}>
          <span className="marquee__item">{item}</span>
          <span className="marquee__dot">✦</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`.trim()}>
      <div className={`marquee__track ${reverse ? "is-reverse" : ""}`}>
        {group}
        {group}
      </div>
    </div>
  );
}

/* Amoeba blob: seven points with uneven angular spacing and alternating
   bulges and pinches, joined by one smooth closed Catmull-Rom curve —
   a lumpy, cell-like silhouette with no sharp corners. */
const BLOB_ANGLES = [-1.5, -0.62, 0.3, 1.18, 2.1, 2.98, 3.95];
const BLOB_RADII = [0.38, 0.47, 0.4, 0.49, 0.41, 0.46, 0.36];
const BLOB_AMP = [0.028, 0.036, 0.03, 0.04, 0.03, 0.038, 0.026];
const BLOB_FREQ = [1.6, 2.2, 1.4, 2.5, 1.8, 2.0, 1.5];
const BLOB_PHASE = [0, 1.3, 2.6, 0.7, 3.9, 5.1, 2.2];

function blobPath(radii: number[]): string {
  const pts: [number, number][] = radii.map((r, i) => [
    0.5 + Math.cos(BLOB_ANGLES[i]) * r,
    0.5 + Math.sin(BLOB_ANGLES[i]) * r,
  ]);
  const n = pts.length;
  const p = (i: number) => pts[(i + n) % n];
  let d = `M${pts[0][0].toFixed(4)} ${pts[0][1].toFixed(4)}`;
  for (let i = 0; i < n; i++) {
    const p0 = p(i - 1);
    const p1 = p(i);
    const p2 = p(i + 1);
    const p3 = p(i + 2);
    d +=
      ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(4)}` +
      ` ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(4)}` +
      ` ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(4)}` +
      ` ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(4)}` +
      ` ${p2[0].toFixed(4)} ${p2[1].toFixed(4)}`;
  }
  return `${d} Z`;
}

const BLOB_REST = blobPath(BLOB_RADII);

/**
 * Portrait photo clipped to a simple organic blob — a clean silhouette
 * of 4–5 large, gentle curves, no outline. Hovering makes the outline
 * wriggle softly; the wriggle fades in and out so the shape never jumps
 * to a different pose when the pointer arrives or leaves.
 */
export function WigglePhoto({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const clipId = `wiggle-${uid}`;
  const path = useRef<SVGPathElement>(null);
  const raf = useRef(0);
  // phase keeps ticking across hovers; amp eases 0↔1 so every frame is continuous
  const anim = useRef({ phase: 0, amp: 0, target: 0, last: 0 });

  const stop = () => {
    cancelAnimationFrame(raf.current);
    raf.current = 0;
    anim.current.last = 0;
  };

  useEffect(() => stop, []);

  const tick = (now: number) => {
    const a = anim.current;
    const dt = a.last ? Math.min(0.05, (now - a.last) / 1000) : 0;
    a.last = now;
    a.phase += dt;
    // clamp the easing step so a late frame can't produce one visible hop
    const dtAmp = Math.min(dt, 1 / 60);
    const tau = a.target > a.amp ? 0.16 : 0.15;
    a.amp += (a.target - a.amp) * (1 - Math.exp(-dtAmp / tau));

    if (a.target === 0 && a.amp < 0.004) {
      a.amp = 0;
      path.current?.setAttribute("d", BLOB_REST);
      raf.current = 0;
      a.last = 0;
      return;
    }

    const d = blobPath(
      BLOB_RADII.map(
        (r, i) =>
          r +
          a.amp * Math.sin(a.phase * BLOB_FREQ[i] + BLOB_PHASE[i]) * BLOB_AMP[i]
      )
    );
    path.current?.setAttribute("d", d);
    raf.current = requestAnimationFrame(tick);
  };

  const handleEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    anim.current.target = 1;
    if (!raf.current) raf.current = requestAnimationFrame(tick);
  };

  const handleLeave = () => {
    anim.current.target = 0;
    if (!raf.current && anim.current.amp > 0)
      raf.current = requestAnimationFrame(tick);
  };

  return (
    <figure
      className={`wiggle ${className}`.trim()}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <svg
        className="wiggle__svg"
        width="0"
        height="0"
        aria-hidden
        focusable="false"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path ref={path} d={BLOB_REST} />
          </clipPath>
        </defs>
      </svg>
      <span className="wiggle__img" style={{ clipPath: `url(#${clipId})` }}>
        <img src={src} alt={alt} loading="lazy" />
      </span>
    </figure>
  );
}

/** Social link rendered as a circular icon button (label kept for a11y). */
export function SocialIconLink({
  social,
  className = "",
}: {
  social: { label: string; url: string };
  className?: string;
}) {
  const Icon = socialIcons[social.label];
  return (
    <a
      className={`social-ico ${className}`.trim()}
      href={social.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={social.label}
      title={social.label}
    >
      {Icon ? <Icon /> : <span>{social.label}</span>}
    </a>
  );
}
