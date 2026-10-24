import { FadeUp, PillButton, Reveal, SectionLabel } from "../components/ui.tsx";
import { contact, profile } from "../data/portfolio.ts";

export default function Quote() {
  return (
    <section className="s-quote theme-dark" data-theme="dark">
      <div className="container s-quote__grid">
        <SectionLabel>Principle</SectionLabel>

        <Reveal
          as="blockquote"
          className="a2 s-quote__text"
          text={`“${profile.quote}”`}
          stagger={0.05}
        />

        <FadeUp className="s-quote__body" delay={0.1}>
          <p className="p1">{profile.quoteBody}</p>
        </FadeUp>

        <FadeUp className="s-quote__cta" delay={0.16}>
          <PillButton label="Let’s Talk" href="/contact" />
          <a className="hlink s-quote__mail" href={`mailto:${contact.email}`}>
            <span className="hlink__box">
              <span className="hlink__stack">
                <span className="hlink__text">{contact.email}</span>
                <span className="hlink__text" aria-hidden>
                  {contact.email}
                </span>
              </span>
            </span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
