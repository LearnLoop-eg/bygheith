"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Section, Eyebrow } from "@/components/Section";
import { packages } from "@/lib/content";

// Set your real WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = "201000000000";
// Set your Formspree (or other) endpoint for the email route
const FORM_ENDPOINT = "https://formspree.io/f/your-id";

function BookForm() {
  const params = useSearchParams();
  const preset = params.get("package") ?? "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    pkg: preset,
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const whatsappHref = () => {
    const text = [
      `Hi Gheith, I'd like to book a free 15-min call.`,
      `Name: ${form.name || "—"}`,
      form.company ? `Company: ${form.company}` : "",
      form.pkg ? `Interested in: ${form.pkg}` : "",
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
            Interested in
          </label>
          <select
            className={`mt-1 ${input}`}
            value={form.pkg}
            onChange={update("pkg")}
          >
            <option value="">Not sure yet</option>
            {packages.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-[var(--ink)]">
          What do you want to solve?
        </label>
        <textarea
          rows={4}
          className={`mt-1 ${input} resize-none`}
          value={form.message}
          onChange={update("message")}
          placeholder="A sentence or two about your challenge."
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
          <input type="hidden" name="package" value={form.pkg} />
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
        I reply personally, usually within a day. The first 15-minute call is
        free — we align on scope, then settle details and payment together.
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
            <span className="text-[var(--brass-soft)]">Book</span>
          </Eyebrow>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-medium leading-tight md:text-5xl">
            Let&apos;s start with a free 15-minute call.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--sage)]">
            Tell me a little about what you&apos;re working on. We&apos;ll see
            if it&apos;s a fit, and take it from there — no pressure, no
            account managers.
          </p>
        </Section>
      </div>

      <Section className="py-16">
        <Suspense fallback={<div className="text-sm">Loading…</div>}>
          <BookForm />
        </Suspense>
      </Section>
    </main>
  );
}
