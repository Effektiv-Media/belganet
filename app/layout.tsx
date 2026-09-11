import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Jsonld } from "@/components/shared/Jsonld";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/lib/site";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
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

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

/**
 * Site-wide defaults only. Canonical URLs are deliberately NOT set here:
 * a root-level canonical is inherited by every page that forgets its own,
 * silently pointing it at the homepage. Each page sets its canonical via
 * `buildMetadata()`.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Städfirma i Blekinge & Kalmar`,
    // Short brand keeps page titles within ~60 chars; pages pass their
    // title WITHOUT a brand suffix.
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description:
    "Hemstäd, flyttstäd, kontorsstäd, fönsterputs och trädgårdsskötsel i Blekinge, Kalmar län och Växjö. RUT-avdrag direkt på fakturan. Begär en kostnadsfri offert!",
  openGraph: {
    siteName: SITE_NAME,
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased pb-20 md:pb-0">
        <Jsonld data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
        {children}
        <MobileStickyCta />
        <Analytics />
      </body>
    </html>
  );
}
