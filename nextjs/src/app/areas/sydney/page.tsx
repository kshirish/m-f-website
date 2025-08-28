import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SydneyPage from "@/components/pages/SydneyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sydney Mortgage & Finance Services - My Choice",
  description:
    "Expert mortgage and finance services in Sydney. Covering CBD, Parramatta, Bondi, Manly, and all Sydney suburbs.",
};

export default function Sydney() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SydneyPage />
      </main>
      <Footer />
    </div>
  );
}
