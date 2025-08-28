"use client";

import { Button } from "./ui/button";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">MC</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">My Choice</h1>
              <p className="text-xs text-gray-600">Mortgage & Finance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <a
                    href="#services/home-loans"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    <div className="font-medium">Home Loans & Mortgages</div>
                    <div className="text-xs text-gray-500">
                      First home buyers, investment, refinancing
                    </div>
                  </a>
                  <a
                    href="#services/personal-finance"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    <div className="font-medium">Personal Finance</div>
                    <div className="text-xs text-gray-500">
                      Personal loans, car loans, holidays
                    </div>
                  </a>
                  <a
                    href="#services/commercial-finance"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                  >
                    <div className="font-medium">Commercial Finance</div>
                    <div className="text-xs text-gray-500">
                      Business loans, equipment finance
                    </div>
                  </a>
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
                    <a
                      href="#areas/sydney"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Sydney
                    </a>
                    <a
                      href="#areas/melbourne"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Melbourne
                    </a>
                    <a
                      href="#areas/perth"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Perth
                    </a>
                    <a
                      href="#areas/adelaide"
                      className="block px-2 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Adelaide
                    </a>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">
                      SYDNEY SUBURBS
                    </div>
                    <a
                      href="#areas/sydney/cbd"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Sydney CBD
                    </a>
                    <a
                      href="#areas/sydney/parramatta"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Parramatta
                    </a>
                    <a
                      href="#areas/sydney/bondi"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Bondi
                    </a>
                    <a
                      href="#areas/sydney/manly"
                      className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                    >
                      Manly
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#calculator"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Calculator
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>1300 MY CHOICE</span>
            </div>
            <Button>Get Quote</Button>
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
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>

              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-medium">
                  Services
                </div>
                <a
                  href="#services/home-loans"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Home Loans
                </a>
                <a
                  href="#services/personal-finance"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Personal Finance
                </a>
                <a
                  href="#services/commercial-finance"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Commercial Finance
                </a>
              </div>

              <div className="space-y-2">
                <div className="text-gray-500 text-sm font-medium">
                  Service Areas
                </div>
                <a
                  href="#areas/sydney"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Sydney
                </a>
                <a
                  href="#areas/melbourne"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Melbourne
                </a>
                <a
                  href="#areas/perth"
                  className="text-gray-700 hover:text-blue-600 transition-colors pl-4"
                >
                  Perth
                </a>
              </div>

              <a
                href="#calculator"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Calculator
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="w-4 h-4" />
                <span>1300 MY CHOICE</span>
              </div>
              <Button className="w-fit">Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
