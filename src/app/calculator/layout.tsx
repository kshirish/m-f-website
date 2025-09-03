import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Loan Calculator Sydney | Mortgage Repayment Calculator | My Choice",
  description:
    "Free home loan calculator Sydney. Calculate mortgage repayments, borrowing capacity, and compare loan scenarios. Plan your home purchase with confidence using our mortgage calculator.",
  keywords: [
    "home loan calculator Sydney",
    "mortgage calculator",
    "loan repayment calculator",
    "borrowing capacity calculator",
    "mortgage repayments Sydney",
    "home loan repayments",
    "loan calculator Australia",
    "mortgage calculator free",
  ],
  openGraph: {
    title: "Home Loan Calculator Sydney | Mortgage Repayment Calculator",
    description:
      "Free home loan calculator to estimate mortgage repayments and borrowing capacity. Plan your Sydney home purchase with confidence.",
    type: "website",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/calculator",
  },
  alternates: {
    canonical: "/calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Home Loan Calculator",
    description:
      "Free home loan calculator to estimate mortgage repayments and borrowing capacity",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
    },
    provider: {
      "@type": "FinancialService",
      name: "My Choice Mortgage & Finance",
    },
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
