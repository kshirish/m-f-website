import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParramattaPage from "@/components/pages/suburbs/ParramattaPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parramatta Mortgage & Finance - My Choice",
  description:
    "Mortgage and finance services in Parramatta. Local expertise for Western Sydney property markets.",
};

export default function Parramatta() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ParramattaPage />
      </main>
      <Footer />
    </div>
  );
}
