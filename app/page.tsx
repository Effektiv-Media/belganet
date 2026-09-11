import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Areas } from "@/components/home/Areas";
import { Faq, HOME_FAQS } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";
import { Jsonld } from "@/components/shared/Jsonld";
import { faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Belganet Städ och Allservice | Städfirma i Blekinge & Kalmar",
  description:
    "Hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsskötsel i Ronneby, Karlskrona, Växjö, Kalmar och fler orter. RUT-avdrag på fakturan. Begär offert!",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Jsonld data={faqPageSchema(HOME_FAQS)} />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <About />
        <Areas />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
