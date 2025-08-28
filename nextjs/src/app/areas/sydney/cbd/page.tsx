import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SydneyCBDPage from "@/components/pages/suburbs/SydneyCBDPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sydney CBD Mortgage & Finance - My Choice",
  description:
    "Mortgage and finance services in Sydney CBD. Expert advice for CBD property purchases and refinancing.",
};

export default function SydneyCBD() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SydneyCBDPage />
      </main>
      <Footer />
    </div>
  );
}
