import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MelbournePage from "@/components/pages/MelbournePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melbourne Mortgage & Finance Services - My Choice",
  description:
    "Expert mortgage and finance services in Melbourne. Comprehensive coverage across all Melbourne suburbs and areas.",
};

export default function Melbourne() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MelbournePage />
      </main>
      <Footer />
    </div>
  );
}
