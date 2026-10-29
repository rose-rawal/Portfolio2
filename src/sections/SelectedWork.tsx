import { Link } from "react-router-dom";
import {
  FadeUp,
  HoverLink,
  ParallaxImage,
  Reveal,
  RollLabel,
  SectionLabel,
} from "../components/ui.tsx";
import { professional } from "../data/portfolio.ts";

/** Home showcase: the client & enterprise work, in depth. */
export default function SelectedWork() {
  const featured = professional.slice(0, 3);

  return (
    <section className="s-work theme-light" data-theme="light" id="work">
      <div className="container">
        <div className="s-work__head">
          <SectionLabel>Selected Work</SectionLabel>
          <Reveal
            as="h2"
            className="h2 s-work__title"
            text="Built, Deployed, Alive"
            stagger={0.05}
          />
          <FadeUp className="s-work__intro" delay={0.1}>
            <p className="p1">
              Client and enterprise work — apps, platforms and the
              infrastructure they run on. Projects under NDA carry open-source
              imagery in place of real screens; personal builds live on the
              work page.
            </p>
            <Link className="hlink s-work__all" to="/work">
              <RollLabel label="All projects" />
            </Link>
          </FadeUp>
        </div>

        <div className="s-work__list">
          {featured.map((project, i) => (
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
                  eager={i < 2}
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
                  <p className="p1">{project.meta}</p>
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
                  {project.links ? (
                    project.links.map((link) => (
                      <HoverLink
                        key={link.label}
                        label={link.label}
                        href={link.url}
                        external
                      />
                    ))
                  ) : (
                    <Link className="hlink" to="/work">
                      <RollLabel label="View project" />
                    </Link>
                  )}
                </FadeUp>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
