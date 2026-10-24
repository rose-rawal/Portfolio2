import { Link } from "react-router-dom";
import {
  FadeUp,
  ParallaxImage,
  Reveal,
  RollLabel,
  SectionLabel,
} from "../components/ui.tsx";
import { professional, projects } from "../data/portfolio.ts";

export default function SelectedWork() {
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
              Client and enterprise work — much of it under NDA — plus
              personal builds I ship on my own time. Every one deployed and
              running in the wild.
            </p>
            <Link className="hlink s-work__all" to="/work">
              <RollLabel label="All projects" />
            </Link>
          </FadeUp>
        </div>

        <div className="s-work__block">
          <SectionLabel>Professional — client &amp; enterprise</SectionLabel>
          <div className="s-work__pro">
            {professional.map((project) => (
              <FadeUp className="prow" key={project.name}>
                <span className="l1 text-gray">{project.index}</span>
                <span className="h3 prow__name">{project.name}</span>
                <span className="p1 text-gray prow__meta">
                  {project.meta}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="s-work__block">
          <SectionLabel>Personal projects</SectionLabel>
          <div className="s-work__list">
            {projects.slice(0, 2).map((project, i) => (
              <article
                className={`proj ${i % 2 === 1 ? "proj--flip" : ""}`}
                key={project.name}
              >
                <FadeUp className="proj__media" delay={(i % 2) * 0.08}>
                  <Link to="/work" aria-label={`View ${project.name}`}>
                    <ParallaxImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="proj__frame"
                      strength={6}
                      eager={i < 2}
                    />
                  </Link>
                  <span className="proj__index l1">{project.index}</span>
                </FadeUp>

                <div className="proj__body">
                  <div className="proj__head">
                    <span className="l1">{project.index}</span>
                    <span className="l1 text-gray">
                      Built by {project.builtBy}
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

                  <FadeUp className="proj__links" delay={0.15}>
                    <Link className="hlink" to="/work">
                      <RollLabel label="View project" />
                    </Link>
                  </FadeUp>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
