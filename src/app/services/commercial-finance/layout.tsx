import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial Finance Australia | Business Loans & Equipment Finance | My Choice",
  description:
    "Commercial finance solutions across Australia including business loans, equipment finance, commercial property loans, and asset finance. Expert broker service for businesses.",
  keywords: [
    "commercial finance Australia",
    "business loans Australia",
    "equipment finance",
    "commercial property loans",
    "asset finance",
    "business finance broker",
    "commercial mortgage",
    "working capital loans",
  ],
  openGraph: {
    title: "Commercial Finance Australia | Business Loans & Equipment Finance",
    description:
      "Commercial finance solutions for Australian businesses including business loans, equipment finance, and commercial property loans. Expert broker service.",
    type: "website",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/services/commercial-finance",
  },
  alternates: {
    canonical: "/services/commercial-finance",
  },
};

export default function CommercialFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Finance Australia",
    description:
      "Commercial finance solutions for businesses including business loans, equipment finance, and commercial property loans",
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
        name: "Business Loans",
        description: "Working capital and expansion loans for businesses",
      },
      {
        "@type": "Offer",
        name: "Equipment Finance",
        description: "Finance for business equipment and machinery",
      },
      {
        "@type": "Offer",
        name: "Commercial Property Loans",
        description: "Finance for commercial real estate purchases",
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
