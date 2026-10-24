import { FadeUp, Marquee, PillButton, Reveal, SectionLabel } from "../components/ui.tsx";
import { marqueeWords, profile } from "../data/portfolio.ts";

export default function Approach() {
  return (
    <section className="s-approach theme-dark" data-theme="dark">
      <div className="container">
        <SectionLabel>Approach</SectionLabel>

        <Reveal
          as="h2"
          className="a1 s-approach__title"
          text={profile.approachTitle}
          stagger={0.06}
        />

        <div className="s-approach__row">
          <FadeUp className="s-approach__note">
            <p className="l1 text-gray">{profile.approachNote}</p>
          </FadeUp>
          <FadeUp className="s-approach__desc" delay={0.08}>
            <p className="p1">{profile.approachBody}</p>
            <div className="s-approach__btn">
              <PillButton label="Learn more" href="/about" />
            </div>
          </FadeUp>
        </div>
      </div>

      <Marquee items={marqueeWords} className="s-approach__marquee" />
    </section>
  );
}
