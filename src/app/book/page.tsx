"use client";

import { useState } from "react";
import { WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { Section } from "@/components/Section";
import PageHero from "@/components/PageHero";

// Set your real WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = "201124444204";
const FORM_ENDPOINT = "https://formspree.io/f/xeebkabg";

function BookForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const whatsappHref = () => {
    const text = [
      `Hi Gheith, I'd like to get in touch.`,
      `Name: ${form.name || "-"}`,
      form.company ? `Company: ${form.company}` : "",
      form.topic ? `About: ${form.topic}` : "",
      form.message ? `Note: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const label = "block text-[0.95rem] font-semibold text-ink";

  return (
    <div className="rounded-[6px] bg-white p-6 border border-lime-line sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-name" className={label}>
            Name
          </label>
          <input
            id="bk-name"
            autoComplete="name"
            className="field mt-2"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="bk-email" className={label}>
            Email
          </label>
          <input
            id="bk-email"
            type="email"
            autoComplete="email"
            className="field mt-2"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="bk-company" className={label}>
            Company <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id="bk-company"
            autoComplete="organization"
            className="field mt-2"
            value={form.company}
            onChange={update("company")}
            placeholder="Brand or company"
          />
        </div>
        <div>
          <label htmlFor="bk-topic" className={label}>
            What&apos;s this about?
          </label>
          <input
            id="bk-topic"
            className="field mt-2"
            value={form.topic}
            onChange={update("topic")}
            placeholder="Advising, a venture, the podcast…"
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="bk-message" className={label}>
          Tell me what you&apos;re working on
        </label>
        <textarea
          id="bk-message"
          rows={5}
          className="field mt-2 resize-none"
          value={form.message}
          onChange={update("message")}
          placeholder="A sentence or two about what you're building."
        />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full"
        >
          <WhatsappLogo size={20} weight="bold" aria-hidden />
          Send via WhatsApp
        </a>
        <form action={FORM_ENDPOINT} method="POST">
          <input type="hidden" name="name" value={form.name} />
          <input type="hidden" name="email" value={form.email} />
          <input type="hidden" name="company" value={form.company} />
          <input type="hidden" name="topic" value={form.topic} />
          <input type="hidden" name="message" value={form.message} />
          <button type="submit" className="btn btn-ghost w-full text-ink">
            <EnvelopeSimple size={20} weight="bold" aria-hidden />
            Send by email
          </button>
        </form>
      </div>
      <p className="mt-5 text-sm text-ink-soft">
        I reply personally, usually within a day. No account managers, just a
        direct line to me.
      </p>
    </div>
  );
}

export default function BookPage() {
  return (
    <main>
      <PageHero
        title="Get in touch"
        intro="I take on a small number of advisory engagements, and I'm always happy to talk to founders and marketers building something. Tell me what you're working on."
      />
      <div className="bg-lime">
        <Section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <BookForm />
          </div>
        </Section>
      </div>
    </main>
  );
}
