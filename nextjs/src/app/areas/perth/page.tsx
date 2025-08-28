import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perth Mortgage & Finance Services - My Choice",
  description:
    "Expert mortgage and finance services in Perth. Local specialists for WA property markets and finance solutions.",
};

// Generic area page component for Perth
function PerthAreaPage() {
  const city = "Perth";
  const color = "orange";

  return (
    <div className="min-h-screen pt-16">
      <section
        className={`relative py-20 bg-gradient-to-br from-${color}-600 to-${color}-800 text-white`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {city} Mortgage
              <span className="block text-yellow-300">& Finance Services</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Providing expert mortgage and finance solutions to {city}{" "}
              residents. Our local specialists understand your market and are
              ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get {city} Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Call 1300 MY CHOICE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{city} Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Home Loans</h3>
              <p className="text-gray-600 text-sm">
                Competitive rates for {city} properties
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Refinancing</h3>
              <p className="text-gray-600 text-sm">
                Better rates for existing {city} homeowners
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Investment Loans</h3>
              <p className="text-gray-600 text-sm">
                Build your {city} property portfolio
              </p>
            </div>
          </div>
          <div className="mt-12">
            <button
              className={`bg-${color}-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-${color}-700 transition-colors`}
            >
              Contact Our {city} Specialists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Perth() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PerthAreaPage />
      </main>
      <Footer />
    </div>
  );
}
