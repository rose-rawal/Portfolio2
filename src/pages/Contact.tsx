import { useState } from "react";
import type { ChangeEvent } from "react";
import Page from "../components/Page.tsx";
import {
  FadeUp,
  Reveal,
  RollLabel,
  SectionLabel,
  SocialIconLink,
} from "../components/ui.tsx";
import { contact, profile, socials } from "../data/portfolio.ts";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <Page className="page--contact">
      <section className="p-head theme-light" data-theme="light">
        <div className="container">
          <SectionLabel>Contact</SectionLabel>
          <Reveal
            as="h1"
            className="h1 p-head__title"
            text="Speak Directly"
            delay={0.1}
          />
          <FadeUp className="p-head__lead" delay={0.25}>
            <p className="p1">{profile.contactBlurb}</p>
          </FadeUp>
          <FadeUp className="p-head__avail" delay={0.4}>
            <span className="avail">
              <i className="avail__dot" aria-hidden />
              {profile.availability}
            </span>
          </FadeUp>
        </div>
      </section>

      <section className="p-contact theme-light" data-theme="light">
        <div className="container p-contact__grid">
          <div className="p-contact__form-wrap">
            {sent ? (
              <div className="form-success">
                <h2 className="h2">Thank you</h2>
                <p className="p1">(We’ve received your message)</p>
                <p className="p1 text-gray">
                  I read every message personally and typically reply within
                  one business day.
                </p>
                <button
                  type="button"
                  className="hlink p-contact__again"
                  onClick={() => setSent(false)}
                >
                  <RollLabel label="Send another" />
                </button>
              </div>
            ) : (
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="field">
                  <input
                    id="name"
                    type="text"
                    placeholder=" "
                    required
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                  />
                  <label htmlFor="name" className="field__label">
                    Full Name*
                  </label>
                </div>

                <div className="field">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    required
                    value={form.email}
                    onChange={update("email")}
                    autoComplete="email"
                  />
                  <label htmlFor="email" className="field__label">
                    Email*
                  </label>
                </div>

                <div className="field field--area">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder=" "
                    required
                    value={form.message}
                    onChange={update("message")}
                  />
                  <label htmlFor="message" className="field__label">
                    Message*
                  </label>
                </div>

                <button className="btn form__submit" type="submit">
                  <span className="btn__fill" aria-hidden />
                  <span className="btn__label">
                    <RollLabel label="Submit Enquiry" />
                  </span>
                </button>
              </form>
            )}
          </div>

          <aside className="p-contact__aside">
            <div className="contact-block">
              <span className="l1 text-gray">Email</span>
              <a className="h3" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
            <div className="contact-block">
              <span className="l1 text-gray">Phone</span>
              <a
                className="h3"
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <div className="contact-block">
              <span className="l1 text-gray">Based in</span>
              <span className="h3">{contact.area}</span>
            </div>
            <div className="contact-block">
              <span className="l1 text-gray">Elsewhere</span>
              <ul className="contact-socials">
                {socials.map((s) => (
                  <li key={s.label}>
                    <SocialIconLink social={s} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Page>
  );
}
