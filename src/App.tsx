import { useState, useEffect } from "react";
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

// Simple routing context
export const RouterContext = {
  navigate: (path: string) => {
    window.location.hash = path;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  },
  scrollToContact: () => {
    if (window.location.hash === '#home' || window.location.hash === '' || window.location.hash === '#') {
      // If we're on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.hash = 'home';
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial page
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      // Service Pages
      case 'services/home-loans':
        return <HomeLoansPage />;
      case 'services/personal-finance':
        return <PersonalFinancePage />;
      case 'services/commercial-finance':
        return <CommercialFinancePage />;
      
      // Service Area Pages
      case 'areas/sydney':
        return <SydneyPage />;
      case 'areas/melbourne':
        return <MelbournePage />;
      case 'areas/perth':
        return <GenericAreaPage city="Perth" />;
      case 'areas/adelaide':
        return <GenericAreaPage city="Adelaide" />;
      case 'areas/penrith':
        return <GenericAreaPage city="Penrith" />;
      case 'areas/parramatta':
        return <GenericAreaPage city="Parramatta" />;
      
      // Sydney Suburb Pages
      case 'areas/sydney/cbd':
        return <SydneyCBDPage />;
      case 'areas/sydney/parramatta':
        return <ParramattaPage />;
      case 'areas/sydney/penrith':
        return <PenrithPage />;
      case 'areas/sydney/bondi':
        return <BondiPage />;
      case 'areas/sydney/manly':
        return <ManlyPage />;
      case 'areas/sydney/chatswood':
        return <ChatswoodPage />;
      
      // Tools Pages
      case 'calculator':
        return <CalculatorPage />;
      
      // Home page
      case 'home':
      default:
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
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Generic area page component for smaller cities
function GenericAreaPage({ city }: { city: string }) {
  const getCityColor = (city: string) => {
    const colors: { [key: string]: string } = {
      'Perth': 'orange',
      'Adelaide': 'red',
      'Penrith': 'green',
      'Parramatta': 'blue'
    };
    return colors[city] || 'blue';
  };

  const color = getCityColor(city);

  return (
    <div className="min-h-screen pt-16">
      <section className={`relative py-20 bg-gradient-to-br from-${color}-600 to-${color}-800 text-white`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {city} Mortgage
              <span className="block text-yellow-300">& Finance Services</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Providing expert mortgage and finance solutions to {city} residents. 
              Our local specialists understand your market and are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => RouterContext.navigate('home')}
              >
                Get {city} Quote
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
                onClick={() => RouterContext.navigate('home')}
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
              <p className="text-gray-600 text-sm">Competitive rates for {city} properties</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Refinancing</h3>
              <p className="text-gray-600 text-sm">Better rates for existing {city} homeowners</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Investment Loans</h3>
              <p className="text-gray-600 text-sm">Build your {city} property portfolio</p>
            </div>
          </div>
          <div className="mt-12">
            <button 
              className={`bg-${color}-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-${color}-700 transition-colors`}
              onClick={() => RouterContext.navigate('home')}
            >
              Contact Our {city} Specialists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}