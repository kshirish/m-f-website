import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorPage from "@/components/pages/CalculatorPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Calculator - My Choice Mortgage & Finance",
  description:
    "Calculate your mortgage repayments with our easy-to-use mortgage calculator. Get instant estimates for your home loan.",
};

export default function Calculator() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CalculatorPage />
      </main>
      <Footer />
    </div>
  );
}
