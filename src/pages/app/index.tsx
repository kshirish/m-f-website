import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Calculator from "@/pages/calculator";

// Service Pages
import HomeLoansPage from "@/pages/services/home-loans";
import PersonalFinancePage from "@/pages/services/personal-finance";
import CommercialFinancePage from "@/pages/services/commercial-finance";

// Route Factory for dynamic route generation
import RouteFactory from "@/factories/RouteFactory";

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
        <Suspense fallback={<div>Loading...</div>}>
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

            {/* Dynamically generated area and suburb routes */}
            <RouteFactory />

            {/* Tool routes */}
            <Route path="/calculator" element={<Calculator />} />

            {/* About and Contact routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
