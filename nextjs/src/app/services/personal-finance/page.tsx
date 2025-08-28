import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalFinancePage from "@/components/pages/PersonalFinancePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance - My Choice Mortgage & Finance",
  description:
    "Personal loans, car finance, and holiday loans. Competitive rates and expert financial advice for all your personal finance needs.",
};

export default function PersonalFinance() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PersonalFinancePage />
      </main>
      <Footer />
    </div>
  );
}
