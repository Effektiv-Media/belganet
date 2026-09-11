import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Faq, HOME_FAQS } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";
import { Jsonld } from "@/components/shared/Jsonld";
import { faqPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Belganet Städ och Allservice – Professionell städning i Sydsverige",
  description:
    "Vi erbjuder hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsservice i Ronneby, Karlskrona, Växjö, Kalmar och fler orter i Sydsverige. Kontakta oss idag för en offert!",
  path: "/",
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
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
