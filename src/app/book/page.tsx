"use client";

import { useState } from "react";
import { WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";
import PageIntro from "@/components/PageIntro";
import { offers } from "@/lib/content";

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

  const label = "label block text-mute";

  return (
    <div>
      <fieldset className="mb-12">
        <legend className="label text-mute">What can I help with?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {offers.map((o) => {
            const on = form.topic === o.topic;
            return (
              <button
                key={o.topic}
                type="button"
                aria-pressed={on}
                onClick={() => setForm((f) => ({ ...f, topic: on ? "" : o.topic }))}
                className={`rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-[background-color,color,box-shadow] duration-300 active:scale-[0.97] ${
                  on
                    ? "bg-signal text-signal-ink"
                    : "text-chalk shadow-[inset_0_0_0_1.5px_var(--line)] hover:shadow-[inset_0_0_0_1.5px_var(--chalk)]"
                }`}
              >
                {o.title}
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
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
            Company <span className="normal-case tracking-normal">(optional)</span>
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
            placeholder="Or tell me in a few words"
          />
        </div>
      </div>
      <div className="mt-10">
        <label htmlFor="bk-message" className={label}>
          Tell me what you&apos;re working on
        </label>
        <textarea
          id="bk-message"
          rows={4}
          className="field mt-2 resize-none"
          value={form.message}
          onChange={update("message")}
          placeholder="A sentence or two about what you're building."
        />
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-signal w-full"
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
          <button type="submit" className="btn btn-line w-full text-chalk">
            <EnvelopeSimple size={20} weight="bold" aria-hidden />
            Send by email
          </button>
        </form>
      </div>
      <p className="mt-6 text-sm text-mute">
        I reply personally, usually within a day. No account managers, just a
        direct line to me.
      </p>
    </div>
  );
}

export default function BookPage() {
  return (
    <main>
      <PageIntro
        title="Let's build something."
        intro="Strategy sessions, ecommerce builds, growth partnerships, talks and podcast guests. I take on a small number each quarter and reply to every message personally."
      />
      <section className="px-5 pb-28 sm:px-8 md:pb-40">
        <div className="max-w-4xl md:ml-[40%]">
          <BookForm />
        </div>
      </section>
    </main>
  );
}
