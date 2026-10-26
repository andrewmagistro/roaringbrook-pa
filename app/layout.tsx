import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roaring Brook Abstract | Pike County, PA Title Insurance & Closings",
  description:
    "Attorney-led title insurance, title searches, examination, and real estate closings in Milford and Pike County, PA. Owned and run by attorneys Jason Ohliger and Nick McIntyre.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TitleInsuranceAgency",
  name: "Roaring Brook Abstract",
  founder: [
    {
      "@type": "Person",
      name: "Jason R. Ohliger, Esq",
    },
    {
      "@type": "Person",
      name: "Nicholas J. McIntyre, Esq",
    },
  ],
  telephone: "+1-570-296-2663",
  email: "office@roaringbrookpa.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "410 Broad Street",
    addressLocality: "Milford",
    addressRegion: "PA",
    postalCode: "18337",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Milford, PA" },
    { "@type": "City", name: "Matamoras, PA" },
    { "@type": "City", name: "Dingmans Ferry, PA" },
    { "@type": "AdministrativeArea", name: "Pike County, PA" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {/* Film-grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Chatbot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* TODO: register a new reCAPTCHA v3 site key for roaringbrookpa.com in the
            Google reCAPTCHA admin console (the FL key is domain-locked to
            roaringbrookfl.com and will fail here) and set
            NEXT_PUBLIC_RECAPTCHA_SITE_KEY in the Vercel project env vars. */}
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}`}
          async
          defer
        />
      </body>
    </html>
  );
}
