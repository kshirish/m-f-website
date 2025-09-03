import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Loans Australia | First Home Buyer & Investment Property | My Choice",
  description:
    "Get competitive home loans across Australia. First home buyer specials, investment property loans, refinancing, and construction loans. Expert mortgage broker service with 15+ years experience.",
  keywords: [
    "home loans Australia",
    "first home buyer loans",
    "investment property loans",
    "refinancing Australia",
    "construction loans",
    "home loan rates",
    "mortgage broker Australia",
    "owner occupier loans",
  ],
  openGraph: {
    title: "Home Loans Australia | First Home Buyer & Investment Property",
    description:
      "Get competitive home loans across Australia. First home buyer specials, investment property loans, and refinancing with expert mortgage broker guidance.",
    type: "website",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/services/home-loans",
  },
  alternates: {
    canonical: "/services/home-loans",
  },
};

export default function HomeLoansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Loans Australia",
    description:
      "Competitive home loans for first home buyers, investors, and refinancing across Australia",
    provider: {
      "@type": "FinancialService",
      name: "My Choice Mortgage & Finance",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
      addressCountry: "AU",
    },
    offers: [
      {
        "@type": "Offer",
        name: "First Home Buyer Loans",
        description:
          "Special rates and government grants for first-time buyers",
      },
      {
        "@type": "Offer",
        name: "Investment Property Loans",
        description: "Competitive rates for property investors",
      },
      {
        "@type": "Offer",
        name: "Refinancing",
        description: "Lower your interest rate and save money",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
