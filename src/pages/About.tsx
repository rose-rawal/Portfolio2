import Page from "../components/Page.tsx";
import {
  FadeUp,
  WigglePhoto,
  PillButton,
  Reveal,
  SectionLabel,
} from "../components/ui.tsx";
import rose from "../assets/rose-1.jpg";
import {
  certifications,
  contact,
  education,
  experience,
  languages,
  platforms,
  profile,
  skills,
} from "../data/portfolio.ts";

export default function About() {
  return (
    <Page className="page--about">
      <section className="p-head theme-light" data-theme="light">
        <div className="container">
          <SectionLabel>About</SectionLabel>
          <Reveal
            as="h1"
            className="h1 p-head__title"
            text={`Hey, I’m ${profile.name}`}
            delay={0.1}
          />
          <FadeUp className="p-head__lead" delay={0.25}>
            <p className="p1">{profile.shortBio}</p>
          </FadeUp>
        </div>
      </section>

      <section className="p-about theme-light" data-theme="light">
        <div className="container p-about__grid">
          <div className="p-about__media">
            <WigglePhoto
              src={rose}
              alt={`${profile.name}, ${profile.role}`}
              className="p-about__photo"
            />
            <span className="l1 text-gray p-about__cap">
              {profile.brand} — {profile.location}
            </span>
          </div>

          <div className="p-about__text">
            <Reveal
              as="h2"
              className="h2 p-about__lead"
              text={`${profile.aboutLead} ${profile.aboutBody}`}
              stagger={0.03}
            />
            <FadeUp className="p-about__desc" delay={0.1}>
              <p className="p1">{profile.aboutBlurb}</p>
            </FadeUp>

            <dl className="info-table">
              {[
                ["Name", profile.name],
                ["Studies", profile.studies],
                ["Course", profile.course],
                ["Location", contact.area],
                ["Role", profile.role],
                ["Email", contact.email],
              ].map(([label, value]) => (
                <div className="info-table__row" key={label}>
                  <dt className="l1 text-gray">{label}</dt>
                  <dd className="p1">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="p-edu p-exp theme-light" data-theme="light">
        <div className="container">
          <div className="p-block__head">
            <SectionLabel>Experience</SectionLabel>
            <Reveal
              as="h2"
              className="h2 p-block__title"
              text="Where I have worked"
              stagger={0.05}
            />
          </div>

          <ul className="rows">
            {experience.map((item, i) => (
              <FadeUp className="rows__item" key={item.company} delay={i * 0.06}>
                <span className="l1 text-gray rows__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="rows__main">
                  <span className="h3 rows__title">{item.company}</span>
                  <span className="p1 text-gray rows__sub">{item.role}</span>
                  {item.body ? (
                    <p className="p1 rows__body">{item.body}</p>
                  ) : null}
                </div>
                <span className="l1 rows__period">{item.period}</span>
                <span className="l1 rows__note">{item.note}</span>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="p-edu theme-light" data-theme="light">
        <div className="container">
          <div className="p-block__head">
            <SectionLabel>Education</SectionLabel>
            <Reveal
              as="h2"
              className="h2 p-block__title"
              text="Where I studied"
              stagger={0.05}
            />
          </div>

          <ul className="rows">
            {education.map((item, i) => (
              <FadeUp className="rows__item" key={item.degree} delay={i * 0.06}>
                <span className="l1 text-gray rows__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="rows__main">
                  <span className="h3 rows__title">{item.degree}</span>
                  <span className="p1 text-gray rows__sub">
                    {item.school} — {item.place}
                  </span>
                </div>
                <span className="l1 rows__period">{item.period}</span>
                <span className="l1 rows__note">{item.note}</span>
              </FadeUp>
            ))}
          </ul>

          <div className="p-certs">
            <div className="p-block__head">
              <SectionLabel>Training</SectionLabel>
            </div>
            <div className="p-certs__grid">
              {certifications.map((c, i) => (
                <FadeUp className="cert" key={c.title} delay={i * 0.08}>
                  <span className="l1 text-gray cert__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h3 cert__title">{c.title}</h3>
                  <p className="p1 cert__body">{c.body}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-skills theme-dark" data-theme="dark">
        <div className="container">
          <div className="p-block__head">
            <SectionLabel>Skills</SectionLabel>
            <Reveal
              as="h2"
              className="h2 p-block__title"
              text="Go Beyond"
              stagger={0.05}
            />
            <FadeUp className="p-block__note" delay={0.1}>
              <p className="p1">
                Web development is an ever growing field — these are the tools
                currently in the belt, and the ones going in next.
              </p>
            </FadeUp>
          </div>

          <ul className="skills">
            {skills.map((s, i) => (
              <FadeUp className="skills__item" key={s.name} delay={i * 0.03}>
                <span className="p1 skills__name">{s.name}</span>
                <span className="l1 text-gray skills__level">{s.level}</span>
              </FadeUp>
            ))}
          </ul>

          <div className="p-lang">
            <span className="l1 text-gray">Languages</span>
            <ul className="p-lang__list">
              {languages.map((l) => (
                <li className="p-lang__item" key={l.name}>
                  <span className="p1">{l.name}</span>
                  <span className="p-lang__dots" aria-label={`${l.level} of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i className={n <= l.level ? "is-on" : ""} key={n} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-plat">
            <span className="l1 text-gray">Ships &amp; deploys on</span>
            <ul className="chips">
              {platforms.map((p) => (
                <li className="chip l1" key={p}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="p-cta theme-dark" data-theme="dark">
        <div className="container p-cta__inner">
          <SectionLabel>Contact</SectionLabel>
          <Reveal
            as="h2"
            className="a2 p-cta__title"
            text={profile.tagline}
            stagger={0.06}
          />
          <FadeUp className="p-cta__btn" delay={0.15}>
            <PillButton label="Let’s Talk" href="/contact" />
          </FadeUp>
        </div>
      </section>
    </Page>
  );
}
