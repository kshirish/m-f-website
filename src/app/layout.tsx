import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mychoicemortgagefinance.com.au"),
  title: "Home Loans & Mortgage Broker Sydney | My Choice Mortgage & Finance",
  description:
    "Expert mortgage brokers in Sydney offering home loans, refinancing, and investment property finance. Get competitive rates and personalized service. Licensed broker since 2009.",
  keywords: [
    "home loans Sydney",
    "mortgage broker Sydney",
    "refinancing",
    "investment property loans",
    "first home buyer",
    "commercial finance",
    "personal loans",
    "debt consolidation",
  ],
  authors: [{ name: "My Choice Mortgage & Finance" }],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon.ico",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Home Loans & Mortgage Broker Sydney | My Choice Mortgage & Finance",
    description:
      "Expert mortgage brokers in Sydney offering competitive home loans, refinancing, and investment property finance. Licensed broker with 15+ years experience.",
    type: "website",
    locale: "en_AU",
    siteName: "My Choice Mortgage & Finance",
    url: "https://www.mychoicemortgagefinance.com.au",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "My Choice Mortgage & Finance - Sydney Mortgage Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Loans & Mortgage Broker Sydney | My Choice Mortgage & Finance",
    description:
      "Expert mortgage brokers in Sydney offering competitive home loans, refinancing, and investment property finance. Licensed broker with 15+ years experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "My Choice Mortgage & Finance",
    description:
      "Expert mortgage brokers in Sydney offering home loans, refinancing, and investment property finance",
    url: "https://www.mychoicemortgagefinance.com.au",
    telephone: "0402 742 493",
    email: "info@mychoicemortgagefinance.com.au",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      postalCode: "2749",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Sydney",
        addressCountry: "AU",
      },
      {
        "@type": "City",
        name: "Melbourne",
        addressCountry: "AU",
      },
      {
        "@type": "City",
        name: "Perth",
        addressCountry: "AU",
      },
      {
        "@type": "City",
        name: "Adelaide",
        addressCountry: "AU",
      },
    ],
    services: [
      "Home Loans",
      "Refinancing",
      "Investment Property Finance",
      "Commercial Finance",
      "Personal Loans",
    ],
    sameAs: [
      "https://www.facebook.com/mychoicemortgageaus",
      "https://maps.app.goo.gl/PEJSBPfNV9mxoJi8A",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={dmSans.className}>
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
