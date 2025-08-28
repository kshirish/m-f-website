import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeLoansPage from "@/components/pages/HomeLoansPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loans & Mortgages - My Choice Mortgage & Finance",
  description:
    "Expert home loan and mortgage services. First home buyers, investment properties, and refinancing solutions across Australia.",
};

export default function HomeLoans() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeLoansPage />
      </main>
      <Footer />
    </div>
  );
}
