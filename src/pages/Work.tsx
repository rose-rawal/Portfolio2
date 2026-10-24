import Page from "../components/Page.tsx";
import {
  FadeUp,
  HoverLink,
  ParallaxImage,
  PillButton,
  Reveal,
  SectionLabel,
} from "../components/ui.tsx";
import { professional, projects } from "../data/portfolio.ts";

export default function Work() {
  return (
    <Page className="page--work">
      <section className="p-head theme-light" data-theme="light">
        <div className="container">
          <SectionLabel>Work</SectionLabel>
          <Reveal
            as="h1"
            className="h1 p-head__title"
            text="Projects I Have Shipped"
            delay={0.1}
          />
          <FadeUp className="p-head__lead" delay={0.25}>
            <p className="p1">
              Client and enterprise work — some of it public, some under NDA —
              plus personal projects you can open and run yourself.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="p-pro theme-light" data-theme="light">
        <div className="container">
          <div className="p-block__head">
            <SectionLabel>Professional</SectionLabel>
            <Reveal
              as="h2"
              className="h2 p-block__title"
              text="Client & Enterprise Work"
              stagger={0.05}
            />
            <FadeUp className="p-block__note" delay={0.15}>
              <p className="p1">
                Cleared to share. Projects under NDA carry open-source imagery
                in place of real screens; the public ones link straight to the
                live site.
              </p>
            </FadeUp>
          </div>
        </div>

        <div className="container p-pro__list">
          {professional.map((project, i) => (
            <article
              className={`proj ${i % 2 === 1 ? "proj--flip" : ""}`}
              key={project.name}
            >
              <FadeUp className="proj__media" delay={(i % 2) * 0.08}>
                <ParallaxImage
                  src={project.image}
                  alt={project.imageAlt}
                  className="proj__frame"
                  strength={6}
                />
                <span className="proj__index l1">{project.index}</span>
              </FadeUp>

              <div className="proj__body">
                <div className="proj__head">
                  <span className="l1">{project.index}</span>
                  <span className="proj__headRight">
                    <span className="l1 text-gray">
                      Built by {project.builtBy}
                    </span>
                    {project.nda && <span className="chip l1">Under NDA</span>}
                  </span>
                </div>

                <Reveal
                  as="h3"
                  className="h2 proj__title"
                  text={project.name}
                  stagger={0.06}
                />

                <FadeUp delay={0.05}>
                  <span className="h3 proj__kind">{project.kind}</span>
                </FadeUp>

                <FadeUp className="proj__desc" delay={0.1}>
                  <p className="p1">{project.longDescription}</p>
                </FadeUp>

                <FadeUp className="proj__stack" delay={0.14}>
                  <ul className="chips">
                    {project.stack.map((tech) => (
                      <li className="chip l1" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </FadeUp>

                {project.links && (
                  <FadeUp className="proj__links" delay={0.18}>
                    {project.links.map((link) => (
                      <HoverLink
                        key={link.label}
                        label={link.label}
                        href={link.url}
                        external
                      />
                    ))}
                  </FadeUp>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="p-work theme-light" data-theme="light">
        <div className="container">
          <div className="p-block__head">
            <SectionLabel>Personal</SectionLabel>
            <Reveal
              as="h2"
              className="h2 p-block__title"
              text="Built on My Own Time"
              stagger={0.05}
            />
          </div>
        </div>

        <div className="container p-work__list">
          {projects.map((project, i) => (
            <article
              className={`proj ${i % 2 === 1 ? "proj--flip" : ""}`}
              key={project.name}
            >
              <div className="proj__media">
                <ParallaxImage
                  src={project.image}
                  alt={project.imageAlt}
                  className="proj__frame"
                  strength={6}
                />
                <span className="proj__index l1">{project.index}</span>
              </div>

              <div className="proj__body">
                <div className="proj__head">
                  <span className="l1">{project.index}</span>
                  <span className="l1 text-gray">
                    Built by {project.builtBy}
                  </span>
                </div>

                <Reveal
                  as="h2"
                  className="h2 proj__title"
                  text={project.name}
                  stagger={0.06}
                />

                <FadeUp delay={0.05}>
                  <span className="h3 proj__kind">{project.kind}</span>
                </FadeUp>

                <FadeUp className="proj__desc" delay={0.1}>
                  <p className="p1">{project.longDescription}</p>
                </FadeUp>

                <FadeUp className="proj__stack" delay={0.14}>
                  <ul className="chips">
                    {project.stack.map((tech) => (
                      <li className="chip l1" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </FadeUp>

                <FadeUp className="proj__links" delay={0.18}>
                  {project.links.map((link) => (
                    <HoverLink
                      key={link.label}
                      label={link.label}
                      href={link.url}
                      external
                    />
                  ))}
                </FadeUp>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="p-cta theme-dark" data-theme="dark">
        <div className="container p-cta__inner">
          <SectionLabel>Next</SectionLabel>
          <Reveal
            as="h2"
            className="a2 p-cta__title"
            text={`Your project could be P${
              professional.length + projects.length + 1
            }`}
            stagger={0.05}
          />
          <FadeUp className="p-cta__btn" delay={0.15}>
            <PillButton label="Let’s Talk" href="/contact" />
          </FadeUp>
        </div>
      </section>
    </Page>
  );
}
