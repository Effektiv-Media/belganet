"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  /** e.g. "Flyttstäd i Kalmar" or "Allmän förfrågan" — sent to the API so
   * the client can see which page a lead came from, matching the original
   * site's behaviour. */
  source: string;
  area?: string;
}

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-amber focus:border-brand-amber transition-colors font-sans";

export function ContactForm({ source, area }: ContactFormProps) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    // honeypot — real users never fill this in; bots often do.
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Något gick fel. Försök igen.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel. Försök igen.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-20 h-20 rounded-full bg-brand-amber/15 flex items-center justify-center">
          <CheckCircle2 size={44} className="text-brand-amber" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-navy">
          Tack för din förfrågan!
        </h3>
        <p className="text-muted-foreground font-sans max-w-sm leading-relaxed">
          Jag återkommer inom 24 timmar med ett personligt erbjudande{area ? ` för ${source.toLowerCase()} i ${area}` : ""}.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError(null);
            setValues({ name: "", phone: "", email: "", address: "", message: "", company: "" });
          }}
          className="mt-4 px-6 py-3 bg-brand-navy text-white font-semibold text-sm rounded-xl hover:bg-brand-navy-light transition-colors duration-200"
        >
          Skicka ny förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={`Offertformulär för ${source}`}>
      {/* Honeypot field — hidden from real users via CSS, bots often fill every input. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-company">Företag</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-semibold text-brand-navy mb-2 font-sans">
            Namn <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Ditt namn"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-sm font-semibold text-brand-navy mb-2 font-sans">
            Telefon <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={handleChange}
            placeholder="07X XXX XX XX"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="cf-email" className="block text-sm font-semibold text-brand-navy mb-2 font-sans">
            E-post <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="din@email.se"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-address" className="block text-sm font-semibold text-brand-navy mb-2 font-sans">
            Adress / Ort
          </label>
          <input
            id="cf-address"
            name="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            placeholder={area ? `Gatuadress, ${area}` : "Gatuadress, ort"}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="cf-message" className="block text-sm font-semibold text-brand-navy mb-2 font-sans">
          Beskriv ditt behov <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Berätta kort om vad du behöver hjälp med"
          className={inputClass}
        />
      </div>

      {error && (
        <p role="alert" className="mb-4 text-sm text-red-600 font-sans">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3.5 bg-brand-amber text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Skickar…" : "Skicka förfrågan"}
      </button>
      <p className="mt-4 text-xs text-muted-foreground font-sans">
        Jag svarar inom 24 timmar. Dina uppgifter hanteras konfidentiellt.
      </p>
    </form>
  );
}
