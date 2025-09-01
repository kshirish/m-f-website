import { Separator } from "@/components/separator";
import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">MC</span>
              </div>
              <div>
                <h3 className="font-semibold">My Choice</h3>
                <p className="text-xs text-gray-400">Mortgage & Finance</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Australia's trusted mortgage and finance broker, helping you
              achieve your property and financial goals since 2009.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>ASIC Licensed & Insured</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#services/home-loans"
                  className="hover:text-white transition-colors"
                >
                  Home Loans
                </a>
              </li>
              <li>
                <a
                  href="#services/home-loans"
                  className="hover:text-white transition-colors"
                >
                  Refinancing
                </a>
              </li>
              <li>
                <a
                  href="#services/home-loans"
                  className="hover:text-white transition-colors"
                >
                  Investment Loans
                </a>
              </li>
              <li>
                <a
                  href="#services/personal-finance"
                  className="hover:text-white transition-colors"
                >
                  Personal Loans
                </a>
              </li>
              <li>
                <a
                  href="#services/commercial-finance"
                  className="hover:text-white transition-colors"
                >
                  Commercial Finance
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-white transition-colors"
                >
                  Loan Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#areas/sydney"
                  className="hover:text-white transition-colors"
                >
                  Sydney (Head Office)
                </a>
              </li>
              <li>
                <a
                  href="#areas/melbourne"
                  className="hover:text-white transition-colors"
                >
                  Melbourne
                </a>
              </li>
              <li>
                <a
                  href="#areas/perth"
                  className="hover:text-white transition-colors"
                >
                  Perth
                </a>
              </li>
              <li>
                <a
                  href="#areas/adelaide"
                  className="hover:text-white transition-colors"
                >
                  Adelaide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:0402742493"
                  className="hover:text-white transition-colors"
                >
                  0402 742 493
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@mychoicemortgagefinance.com.au"
                  className="hover:text-white transition-colors"
                >
                  info@mychoicemortgagefinance.com.au
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <p>NSW 2749, AUSTRALIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>
              &copy; 2024 My Choice Mortgage & Finance. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Credit Guide
            </a>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 p-4 bg-gray-900 rounded-lg">
          <div className="flex items-start space-x-3">
            <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                <strong>Important:</strong> My Choice Mortgage & Finance is a
                licensed credit representative (Credit Representative Number:
                123456) of XYZ Finance Group Pty Ltd (Australian Credit Licence:
                654321).
              </p>
              <p>
                This website contains general information only and does not take
                into account your objectives, financial situation or needs.
                Consider whether this information is appropriate for you and
                seek professional advice before making any financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
