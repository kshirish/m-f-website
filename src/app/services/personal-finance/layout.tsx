import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Personal Finance & Loans Australia | Car Loans & Debt Consolidation | My Choice",
  description:
    "Personal finance solutions across Australia including car loans, personal loans, debt consolidation, and equipment finance. Compare rates and get expert advice from licensed brokers.",
  keywords: [
    "personal loans Australia",
    "car loans Australia",
    "debt consolidation",
    "equipment finance",
    "personal finance broker",
    "unsecured loans",
    "secured loans",
    "loan consolidation",
  ],
  openGraph: {
    title:
      "Personal Finance & Loans Australia | Car Loans & Debt Consolidation",
    description:
      "Personal finance solutions including car loans, personal loans, and debt consolidation across Australia. Expert broker advice and competitive rates.",
    type: "website",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/services/personal-finance",
  },
  alternates: {
    canonical: "/services/personal-finance",
  },
};

export default function PersonalFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Personal Finance Australia",
    description:
      "Personal finance solutions including car loans, personal loans, and debt consolidation",
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
        name: "Car Loans",
        description: "New and used car financing with competitive rates",
      },
      {
        "@type": "Offer",
        name: "Personal Loans",
        description: "Secured and unsecured personal loans",
      },
      {
        "@type": "Offer",
        name: "Debt Consolidation",
        description: "Combine multiple debts into one manageable payment",
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
