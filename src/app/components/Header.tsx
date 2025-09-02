"use client";

import { Button } from "@/components/button";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/home"
    ) {
      router.push("/");
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
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="My Choice Mortgage & Finance Logo"
              width={32}
              height={32}
              className="w-12 h-12 object-cover"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">My Choice</h1>
              <p className="text-xs text-gray-600">Mortgage & Finance</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    href="/services/home-loans"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Home Loans
                  </Link>
                  <Link
                    href="/services/personal-finance"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Personal Finance
                  </Link>
                  <Link
                    href="/services/commercial-finance"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Commercial Finance
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                Areas
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link
                    href="/areas/sydney"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Sydney
                  </Link>
                  <Link
                    href="/areas/melbourne"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Melbourne
                  </Link>
                  <Link
                    href="/areas/perth"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Perth
                  </Link>
                  <Link
                    href="/areas/adelaide"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Adelaide
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/calculator"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Calculator
            </Link>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="text-gray-900 font-medium">Services</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/home-loans"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home Loans
                  </Link>
                  <Link
                    href="/services/personal-finance"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Personal Finance
                  </Link>
                  <Link
                    href="/services/commercial-finance"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Commercial Finance
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-900 font-medium">Areas</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/areas/sydney"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Sydney
                  </Link>
                  <Link
                    href="/areas/melbourne"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Melbourne
                  </Link>
                  <Link
                    href="/areas/perth"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Perth
                  </Link>
                  <Link
                    href="/areas/adelaide"
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Adelaide
                  </Link>
                </div>
              </div>

              <Link
                href="/calculator"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Calculator
              </Link>

              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:0402742493"
                    className="hover:text-blue-600 transition-colors"
                  >
                    0402 742 493
                  </a>
                </div>
                <Button
                  className="w-fit mt-4"
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
