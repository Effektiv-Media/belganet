import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Integritetspolicy",
  description: `Så behandlar ${SITE_NAME} dina personuppgifter när du kontaktar oss eller anlitar våra tjänster.`,
  path: "/integritetspolicy",
});

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader navItems={[]} ctaHref="/#section-5" />
      <main className="pt-32 pb-24">
        <article className="max-w-2xl mx-auto px-6">
          <span className="section-heading-eyebrow">Integritetspolicy</span>
          <h1 className="font-serif text-3xl font-bold text-brand-navy mb-8">
            Hur vi hanterar dina personuppgifter
          </h1>

          <div className="prose-sans space-y-6 text-muted-foreground leading-relaxed font-sans">
            <p>
              {SITE_NAME} värnar om din integritet. Den här policyn förklarar
              vilka personuppgifter vi samlar in när du kontaktar oss via vårt
              kontaktformulär, hur vi använder dem och vilka rättigheter du har.
            </p>

            <h2 className="font-serif text-xl font-bold text-brand-navy pt-4">
              Vilka uppgifter samlar vi in?
            </h2>
            <p>
              När du fyller i ett kontaktformulär på vår webbplats samlar vi in
              namn, telefonnummer, e-postadress, eventuell adress/ort samt det
              meddelande du skriver till oss.
            </p>

            <h2 className="font-serif text-xl font-bold text-brand-navy pt-4">
              Hur använder vi uppgifterna?
            </h2>
            <p>
              Uppgifterna används enbart för att kunna besvara din förfrågan,
              lämna en offert och, om du blir kund, administrera och utföra
              det uppdrag du beställt, inklusive eventuell RUT-avdragsansökan
              hos Skatteverket.
            </p>

            <h2 className="font-serif text-xl font-bold text-brand-navy pt-4">
              Hur länge sparar vi uppgifterna?
            </h2>
            <p>
              Uppgifter från förfrågningar som inte leder till ett kundförhållande
              gallras normalt inom 12 månader. Uppgifter kopplade till pågående
              eller genomförda uppdrag sparas så länge det krävs för
              bokföringslagen och andra tillämpliga lagkrav.
            </p>

            <h2 className="font-serif text-xl font-bold text-brand-navy pt-4">
              Delar vi dina uppgifter med någon?
            </h2>
            <p>
              Vi delar endast uppgifter med tredje part när det krävs för att
              utföra tjänsten, till exempel vid ansökan om RUT-avdrag hos
              Skatteverket, eller med underleverantörer som hjälper oss driva
              webbplatsen (till exempel vår leverantör av e-postutskick för
              kontaktformuläret).
            </p>

            <h2 className="font-serif text-xl font-bold text-brand-navy pt-4">
              Dina rättigheter
            </h2>
            <p>
              Du har rätt att begära ett utdrag av vilka uppgifter vi har om
              dig, att få felaktiga uppgifter rättade, och att i vissa fall
              få dina uppgifter raderade. Kontakta oss på{" "}
              <a href={BUSINESS.emailHref} className="text-brand-amber hover:underline">
                {BUSINESS.email}
              </a>{" "}
              för frågor om dina personuppgifter.
            </p>

            <h2 className="font-serif text-xl font-bold text-brand-navy pt-4">
              Kontakt
            </h2>
            <p>
              {SITE_NAME}
              <br />
              Telefon: {BUSINESS.phone}
              <br />
              E-post: {BUSINESS.email}
            </p>
          </div>
        </article>
      </main>
      <LandingFooter />
    </div>
  );
}
