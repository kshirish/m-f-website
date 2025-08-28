import { Routes, Route } from "react-router-dom";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Calculator from "@/pages/calculator";

// Service Pages
import HomeLoansPage from "@/pages/services/home-loans";
import PersonalFinancePage from "@/pages/services/personal-finance";
import CommercialFinancePage from "@/pages/services/commercial-finance";

// Area Pages
import SydneyPage from "@/pages/areas/sydney";
import MelbournePage from "@/pages/areas/melbourne";
import PerthPage from "@/pages/areas/perth";
import AdelaidePage from "@/pages/areas/adelaide";
import PenrithAreaPage from "@/pages/areas/penrith";
import ParramattaAreaPage from "@/pages/areas/parramatta";

// Sydney Suburb Pages
import SydneyCBDPage from "@/pages/areas/sydney/suburbs/cbd";
import SydneyParramattaPage from "@/pages/areas/sydney/suburbs/parramatta";
import SydneyPenrithPage from "@/pages/areas/sydney/suburbs/penrith";
import BondiPage from "@/pages/areas/sydney/suburbs/bondi";
import ManlyPage from "@/pages/areas/sydney/suburbs/manly";
import ChatswoodPage from "@/pages/areas/sydney/suburbs/chatswood";

// Perth Suburb Pages
import PerthCBDPage from "@/pages/areas/perth/suburbs/cbd";
import FremantlePage from "@/pages/areas/perth/suburbs/fremantle";
import JoondalupPage from "@/pages/areas/perth/suburbs/joondalup";
import SubiacoPage from "@/pages/areas/perth/suburbs/subiaco";
import MandurahPage from "@/pages/areas/perth/suburbs/mandurah";
import RockinghamPage from "@/pages/areas/perth/suburbs/rockingham";

// Melbourne Suburb Pages
import MelbourneCBDPage from "@/pages/areas/melbourne/suburbs/cbd";
import SouthYarraPage from "@/pages/areas/melbourne/suburbs/south-yarra";
import BrightonPage from "@/pages/areas/melbourne/suburbs/brighton";
import RichmondPage from "@/pages/areas/melbourne/suburbs/richmond";
import StKildaPage from "@/pages/areas/melbourne/suburbs/st-kilda";
import DocklandsPage from "@/pages/areas/melbourne/suburbs/docklands";

// Adelaide Suburb Pages
import AdelaideCBDPage from "@/pages/areas/adelaide/suburbs/cbd";
import GlenelgPage from "@/pages/areas/adelaide/suburbs/glenelg";

import Header from "./Header";
import Footer from "./Footer";

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
function HomeComponent() {
  return <Home />;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          {/* Home routes */}
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />

          {/* Service routes */}
          <Route path="/services" element={<HomeComponent />} />
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
          <Route path="/areas/perth" element={<PerthPage />} />
          <Route path="/areas/adelaide" element={<AdelaidePage />} />
          <Route path="/areas/penrith" element={<PenrithAreaPage />} />
          <Route path="/areas/parramatta" element={<ParramattaAreaPage />} />

          {/* Sydney suburb routes */}
          <Route path="/areas/sydney/suburbs/cbd" element={<SydneyCBDPage />} />
          <Route
            path="/areas/sydney/suburbs/parramatta"
            element={<SydneyParramattaPage />}
          />
          <Route
            path="/areas/sydney/suburbs/penrith"
            element={<SydneyPenrithPage />}
          />
          <Route path="/areas/sydney/suburbs/bondi" element={<BondiPage />} />
          <Route path="/areas/sydney/suburbs/manly" element={<ManlyPage />} />
          <Route
            path="/areas/sydney/suburbs/chatswood"
            element={<ChatswoodPage />}
          />

          {/* Perth suburb routes */}
          <Route path="/areas/perth/suburbs/cbd" element={<PerthCBDPage />} />
          <Route
            path="/areas/perth/suburbs/fremantle"
            element={<FremantlePage />}
          />
          <Route
            path="/areas/perth/suburbs/joondalup"
            element={<JoondalupPage />}
          />
          <Route
            path="/areas/perth/suburbs/subiaco"
            element={<SubiacoPage />}
          />
          <Route
            path="/areas/perth/suburbs/mandurah"
            element={<MandurahPage />}
          />
          <Route
            path="/areas/perth/suburbs/rockingham"
            element={<RockinghamPage />}
          />

          {/* Melbourne suburb routes */}
          <Route
            path="/areas/melbourne/suburbs/cbd"
            element={<MelbourneCBDPage />}
          />
          <Route
            path="/areas/melbourne/suburbs/south-yarra"
            element={<SouthYarraPage />}
          />
          <Route
            path="/areas/melbourne/suburbs/brighton"
            element={<BrightonPage />}
          />
          <Route
            path="/areas/melbourne/suburbs/richmond"
            element={<RichmondPage />}
          />
          <Route
            path="/areas/melbourne/suburbs/st-kilda"
            element={<StKildaPage />}
          />
          <Route
            path="/areas/melbourne/suburbs/docklands"
            element={<DocklandsPage />}
          />

          {/* Adelaide suburb routes */}
          <Route
            path="/areas/adelaide/suburbs/cbd"
            element={<AdelaideCBDPage />}
          />
          <Route
            path="/areas/adelaide/suburbs/glenelg"
            element={<GlenelgPage />}
          />

          {/* Tool routes */}
          <Route path="/calculator" element={<Calculator />} />

          {/* About and Contact routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
