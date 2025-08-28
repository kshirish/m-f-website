import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommercialFinancePage from "@/components/pages/CommercialFinancePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Finance - My Choice Mortgage & Finance",
  description:
    "Business loans, equipment finance, and commercial property solutions. Expert advice for growing your business.",
};

export default function CommercialFinance() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CommercialFinancePage />
      </main>
      <Footer />
    </div>
  );
}
