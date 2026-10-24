import { PillButton, WigglePhoto, Reveal, SectionLabel } from "../components/ui.tsx";
import rose from "../assets/rose-2.jpg";
import { profile } from "../data/portfolio.ts";

export default function AboutSection() {
  return (
    <section className="s-about theme-dark" data-theme="dark" id="about">
      <div className="container s-about__grid">
        <div className="s-about__media">
          <WigglePhoto
            src={rose}
            alt={`${profile.name}, ${profile.role}`}
            className="s-about__photo"
          />
          <div className="s-about__caption">
            <span className="l1 text-gray">{profile.location}</span>
            <span className="l1 text-gray">{profile.studies}</span>
          </div>
        </div>

        <div className="s-about__lead">
          <SectionLabel>About</SectionLabel>
          <Reveal
            as="h2"
            className="h2 s-about__title"
            text={`${profile.homeLead} ${profile.homeBody}`}
            stagger={0.035}
          />
        </div>

        <div className="s-about__content">
          <p className="l1 text-gray s-about__note">{profile.statement}</p>
          <p className="p1 s-about__desc">{profile.homeBlurb}</p>
          <div className="s-about__btn">
            <PillButton label="Learn more" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
