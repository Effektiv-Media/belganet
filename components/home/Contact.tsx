import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { ContactForm } from "@/components/shared/ContactForm";
import { RevealDiv } from "./RevealDiv";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Telefon", value: BUSINESS.phone, href: BUSINESS.phoneHref },
  { icon: Mail, label: "E-post", value: BUSINESS.email, href: BUSINESS.emailHref },
  {
    icon: MapPin,
    label: "Verksamhetsområde",
    value: BUSINESS.areaServedNames.join(", ").replace(/, ([^,]*)$/, " & $1"),
    href: null,
  },
  { icon: Clock, label: "Öppettider", value: BUSINESS.openingHours, href: null },
];

export function Contact() {
  return (
    <section id="section-5" className="py-24 bg-brand-surface" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">
        <RevealDiv className="text-center mb-16">
          <span className="section-heading-eyebrow">Kontakta oss</span>
          <h2 id="contact-heading" className="section-heading">
            Begär en kostnadsfri offert
          </h2>
          <p className="section-subheading">
            Fyll i formuläret nedan så återkommer jag inom 24 timmar med ett
            skräddarsytt erbjudande för dig.
          </p>
        </RevealDiv>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <RevealDiv className="lg:col-span-2">
            <div className="bg-linear-to-br from-brand-navy to-brand-navy-dark rounded-2xl p-8 h-full text-white shadow-2xl shadow-brand-amber/15 border border-white/5">
              <h3 className="font-serif text-2xl font-bold mb-2">Kontaktuppgifter</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8 font-sans">
                Jag finns tillgänglig för att svara på dina frågor och hjälpa dig
                boka städning.
              </p>
              <ul className="space-y-6" role="list">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-amber/15 flex items-center justify-center shrink-0 border border-brand-amber/20">
                      <Icon size={17} className="text-brand-amber" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-white/45 text-xs uppercase tracking-wider mb-1 font-sans">
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="text-white font-medium hover:text-brand-amber transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <span className="text-white font-medium text-sm">{value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-4 rounded-xl bg-brand-amber/10 border border-brand-amber/25">
                <div className="text-brand-amber font-bold text-sm uppercase tracking-wider mb-1 font-sans">
                  RUT-avdrag
                </div>
                <p className="text-white/65 text-xs leading-relaxed font-sans">
                  Privatpersoner kan använda RUT-avdrag och betala halva priset för
                  hemstäd, fönsterputs och trädgård. Jag sköter ansökan åt dig.
                </p>
              </div>
            </div>
          </RevealDiv>

          <RevealDiv delay={0.1} className="lg:col-span-3">
            <div
              id="contact-form"
              className="bg-white rounded-2xl border border-border p-8 shadow-xl shadow-brand-amber/8 scroll-mt-24"
            >
              <ContactForm source="Allmän förfrågan" />
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
