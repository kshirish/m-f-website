import { Button } from "@/components/button";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/home"
    ) {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">MC</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">My Choice</h1>
              <p className="text-xs text-gray-600">Mortgage & Finance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    to="/services/home-loans"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    <div className="font-medium">Home Loans & Mortgages</div>
                    <div className="text-xs text-gray-500">
                      First home buyers, investment, refinancing
                    </div>
                  </Link>
                  <Link
                    to="/services/personal-finance"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    <div className="font-medium">Personal Finance</div>
                    <div className="text-xs text-gray-500">
                      Personal loans, car loans, holidays
                    </div>
                  </Link>
                  <Link
                    to="/services/commercial-finance"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    <div className="font-medium">Commercial Finance</div>
                    <div className="text-xs text-gray-500">
                      Business loans, equipment finance
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Service Areas <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <div className="px-4 py-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">
                      MAJOR CITIES
                    </div>
                    <Link
                      to="/areas/sydney"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Sydney
                    </Link>
                    <Link
                      to="/areas/melbourne"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Melbourne
                    </Link>
                    <Link
                      to="/areas/perth"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Perth
                    </Link>
                    <Link
                      to="/areas/adelaide"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Adelaide
                    </Link>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">
                      SYDNEY SUBURBS
                    </div>
                    <Link
                      to="/areas/sydney/suburbs/cbd"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Sydney CBD
                    </Link>
                    <Link
                      to="/areas/sydney/suburbs/bondi"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Bondi
                    </Link>
                    <Link
                      to="/areas/sydney/suburbs/manly"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Manly
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/calculator"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Calculator
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a
                href="tel:0402742493"
                className="hover:text-blue-600 transition-colors"
              >
                0402 742 493
              </a>
            </div>
            <Button onClick={() => scrollToSection("contact")}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-medium">
                  Services
                </div>
                <Link
                  to="/services/home-loans"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Home Loans
                </Link>
                <Link
                  to="/services/personal-finance"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Personal Finance
                </Link>
                <Link
                  to="/services/commercial-finance"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Commercial Finance
                </Link>
              </div>

              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-medium">
                  Service Areas
                </div>
                <Link
                  to="/areas/sydney"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Sydney
                </Link>
                <Link
                  to="/areas/melbourne"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Melbourne
                </Link>
                <Link
                  to="/areas/perth"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Perth
                </Link>
              </div>

              <Link
                to="/calculator"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Calculator
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:0402742493"
                  className="hover:text-blue-600 transition-colors"
                >
                  0402 742 493
                </a>
              </div>
              <Button
                className="w-fit"
                onClick={() => scrollToSection("contact")}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
