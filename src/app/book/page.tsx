"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";

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
      `Name: ${form.name || "—"}`,
      form.company ? `Company: ${form.company}` : "",
      form.topic ? `About: ${form.topic}` : "",
      form.message ? `Note: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const input =
    "w-full rounded-md border border-[var(--bone-line)] bg-[var(--bone)] px-4 py-3 text-sm outline-none focus:border-[var(--brass)]";

  return (
    <div className="rounded-xl border border-[var(--bone-line)] bg-white p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-[var(--ink)]">Name</label>
          <input
            className={`mt-1 ${input}`}
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-[var(--ink)]">Email</label>
          <input
            type="email"
            className={`mt-1 ${input}`}
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-[var(--ink)]">
            Company <span className="text-[var(--muted-soft)]">(optional)</span>
          </label>
          <input
            className={`mt-1 ${input}`}
            value={form.company}
            onChange={update("company")}
            placeholder="Brand or company"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-[var(--ink)]">
            What&apos;s this about?
          </label>
          <input
            className={`mt-1 ${input}`}
            value={form.topic}
            onChange={update("topic")}
            placeholder="Advising, a venture, the podcast…"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-[var(--ink)]">
          Tell me what you&apos;re working on
        </label>
        <textarea
          rows={4}
          className={`mt-1 ${input} resize-none`}
          value={form.message}
          onChange={update("message")}
          placeholder="A sentence or two about what you're building."
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-[var(--brass)] px-6 py-3 text-center text-sm font-medium text-[var(--pine)] transition-opacity hover:opacity-90"
        >
          Send via WhatsApp
        </a>
        <form action={FORM_ENDPOINT} method="POST" className="flex-1">
          <input type="hidden" name="name" value={form.name} />
          <input type="hidden" name="email" value={form.email} />
          <input type="hidden" name="company" value={form.company} />
          <input type="hidden" name="topic" value={form.topic} />
          <input type="hidden" name="message" value={form.message} />
          <button
            type="submit"
            className="w-full rounded-md border border-[var(--pine)] px-6 py-3 text-sm font-medium text-[var(--pine)] transition-colors hover:bg-[var(--pine)] hover:text-[var(--bone)]"
          >
            Send by email
          </button>
        </form>
      </div>
      <p className="mt-4 text-xs text-[var(--muted-soft)]">
        I reply personally, usually within a day. No account managers — just a
        direct line to me.
      </p>
    </div>
  );
}

export default function BookPage() {
  return (
    <main>
      <div className="bg-[var(--pine)] text-[var(--bone)]">
        <Section className="py-20">
          <Eyebrow>
            <span className="text-[var(--brass-soft)]">Get in touch</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-medium leading-tight md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            I take on a small number of advisory engagements, and I&apos;m
            always happy to talk to founders and marketers building something.
            Tell me what you&apos;re working on.
          </p>
        </Section>
      </div>

      <Section className="py-16">
        <BookForm />
      </Section>
    </main>
  );
}
