import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceAreas from "./components/ServiceAreas";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Service Pages
import HomeLoansPage from "./components/pages/HomeLoansPage";
import PersonalFinancePage from "./components/pages/PersonalFinancePage";
import CommercialFinancePage from "./components/pages/CommercialFinancePage";

// Service Area Pages
import SydneyPage from "./components/pages/SydneyPage";
import MelbournePage from "./components/pages/MelbournePage";

// Sydney Suburb Pages
import SydneyCBDPage from "./components/pages/suburbs/SydneyCBDPage";
import ParramattaPage from "./components/pages/suburbs/ParramattaPage";
import PenrithPage from "./components/pages/suburbs/PenrithPage";
import BondiPage from "./components/pages/suburbs/BondiPage";
import ManlyPage from "./components/pages/suburbs/ManlyPage";
import ChatswoodPage from "./components/pages/suburbs/ChatswoodPage";

// Tools Pages
import CalculatorPage from "./components/pages/CalculatorPage";

// Router context for navigation (legacy support)
export const RouterContext = {
  navigate: (path: string) => {
    // For components that haven't been updated yet
    window.location.href = path;
  },
  scrollToContact: () => {
    const pathname = window.location.pathname;
    if (pathname === "/" || pathname === "/home") {
      // If we're on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.href = "/";
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  },
};

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceAreas />
      <About />
      <Contact />
    </>
  );
}

// Generic area page component for smaller cities
function GenericAreaPage({ city }: { city: string }) {
  const navigate = useNavigate();

  const getCityColor = (city: string) => {
    const colors: { [key: string]: string } = {
      Perth: "orange",
      Adelaide: "red",
      Penrith: "green",
      Parramatta: "blue",
    };
    return colors[city] || "blue";
  };

  const color = getCityColor(city);

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
              <button
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => navigate("/")}
              >
                Get {city} Quote
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
                onClick={() => navigate("/")}
              >
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
              onClick={() => navigate("/")}
            >
              Contact Our {city} Specialists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          {/* Home routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          {/* Service routes */}
          <Route path="/services" element={<HomePage />} />
          <Route path="/services/home-loans" element={<HomeLoansPage />} />
          <Route
            path="/services/personal-finance"
            element={<PersonalFinancePage />}
          />
          <Route
            path="/services/commercial-finance"
            element={<CommercialFinancePage />}
          />

          {/* Area routes */}
          <Route path="/areas/sydney" element={<SydneyPage />} />
          <Route path="/areas/melbourne" element={<MelbournePage />} />
          <Route
            path="/areas/perth"
            element={<GenericAreaPage city="Perth" />}
          />
          <Route
            path="/areas/adelaide"
            element={<GenericAreaPage city="Adelaide" />}
          />
          <Route
            path="/areas/penrith"
            element={<GenericAreaPage city="Penrith" />}
          />
          <Route
            path="/areas/parramatta"
            element={<GenericAreaPage city="Parramatta" />}
          />

          {/* Sydney suburb routes */}
          <Route path="/areas/sydney/suburbs/cbd" element={<SydneyCBDPage />} />
          <Route
            path="/areas/sydney/suburbs/parramatta"
            element={<ParramattaPage />}
          />
          <Route
            path="/areas/sydney/suburbs/penrith"
            element={<PenrithPage />}
          />
          <Route path="/areas/sydney/suburbs/bondi" element={<BondiPage />} />
          <Route path="/areas/sydney/suburbs/manly" element={<ManlyPage />} />
          <Route
            path="/areas/sydney/suburbs/chatswood"
            element={<ChatswoodPage />}
          />

          {/* Tool routes */}
          <Route path="/calculator" element={<CalculatorPage />} />

          {/* About and Contact routes */}
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
