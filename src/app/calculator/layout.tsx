import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan Calculator | My Choice: Mortgage and Finance",
  description:
    "Calculate your home loan repayments with our free mortgage calculator. Estimate borrowing capacity, compare loan scenarios, and plan your home purchase.",
  keywords: [
    "home loan calculator",
    "mortgage calculator",
    "loan repayment calculator",
    "borrowing capacity calculator",
    "home loan repayments",
    "mortgage repayments",
    "loan calculator Australia",
  ],
  openGraph: {
    title: "Home Loan Calculator | My Choice: Mortgage and Finance",
    description:
      "Calculate your home loan repayments with our free mortgage calculator. Plan your home purchase with confidence.",
    type: "website",
    locale: "en_AU",
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
  return children;
}
