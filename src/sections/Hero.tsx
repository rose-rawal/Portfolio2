import { Reveal, RollLabel, SectionLabel } from "../components/ui.tsx";
import { profile } from "../data/portfolio.ts";
import { scroll } from "../lib/smoothScroll.ts";

export default function Hero({ play }: { play: boolean }) {
  return (
    <section className="hero theme-light" data-theme="light" id="hero">
      <div className="hero__lines" aria-hidden>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span className="line-v" key={i} />
        ))}
      </div>

      <div className="container hero__head">
        <SectionLabel>
          {profile.role} — {profile.location}
        </SectionLabel>
      </div>

      <div className="container hero__stage">
        <Reveal
          as="h1"
          className="h1 hero__title"
          text={profile.heroTitle}
          play={play}
          delay={0.15}
          stagger={0.07}
        />
        <div className="hero__model" id="hero-model" aria-hidden />
      </div>

      <div className="container hero__foot">
        <a
          className="hlink hero__scroll"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scroll.to("#about", -20);
          }}
        >
          <RollLabel label="scroll to explore" />
        </a>
        <span className="avail">
          <i className="avail__dot" aria-hidden />
          {profile.availability}
        </span>
        <span className="l1 text-gray hero__year">
          Portfolio — {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
