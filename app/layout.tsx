import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Jsonld } from "@/components/shared/Jsonld";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Professionell städning i Sydsverige`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Vi erbjuder hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsservice i Ronneby, Karlskrona, Växjö, Kalmar och fler orter i Sydsverige. Kontakta oss idag för en offert!",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Professionell städning och allservice i Sydsverige. Hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsservice.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Professionell städning och allservice i Sydsverige. Hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsservice.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        <Jsonld data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
