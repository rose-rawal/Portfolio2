import { Link } from "react-router-dom";
import { Marquee, PillButton, RollLabel, SocialIconLink } from "../components/ui.tsx";
import { contact, credits, nav, profile, socials } from "../data/portfolio.ts";

const links = [{ label: "Home", path: "/" }, ...nav];

export default function Footer() {
  return (
    <footer className="footer theme-dark" data-theme="dark">
      <Marquee
        items={["Available for work", "Let’s build something", "Kathmandu, Nepal"]}
        className="footer__marquee"
      />

      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <span className="l1 text-gray">Explore</span>
            <ul className="footer__list">
              {links.map((l) => (
                <li key={l.path}>
                  <Link className="hlink p1" to={l.path}>
                    <RollLabel label={l.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <span className="l1 text-gray">Contact</span>
            <ul className="footer__list footer__list--data">
              <li>
                <span className="l1">M.</span>
                <a className="p1" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="l1">P.</span>
                <a
                  className="p1"
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="l1">A.</span>
                <span className="p1">{contact.location}</span>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--cta">
            <span className="l1 text-gray">Have a project?</span>
            <PillButton label="Let’s Talk" href="/contact" />
            <div className="footer__socials">
              {socials.map((s) => (
                <SocialIconLink key={s.label} social={s} />
              ))}
            </div>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden>
          <span className="a2">{profile.name}</span>
        </div>

        <div className="footer__bottom">
          <span className="l1 text-gray">
            © {new Date().getFullYear()} {profile.name}. All rights reserved
          </span>
          <span className="l1 text-gray">{profile.location}</span>
          <span className="l1 text-gray">Designed &amp; built by {profile.name}</span>
        </div>

        <div className="footer__credits">
          {credits.map((c) => (
            <span className="l1 text-gray" key={c.item}>
              {c.item} by{" "}
              <a href={c.authorUrl} target="_blank" rel="noreferrer noopener">
                {c.author}
              </a>{" "}
              on{" "}
              <a href={c.sourceUrl} target="_blank" rel="noreferrer noopener">
                {c.sourceLabel}
              </a>{" "}
              — licensed under{" "}
              <a href={c.licenseUrl} target="_blank" rel="noreferrer noopener">
                {c.license}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
