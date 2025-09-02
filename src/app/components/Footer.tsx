import { Separator } from "@/ui/separator";
import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, getDerivedNavigation } from "@/constants/common";

export default function Footer() {
  const navigation = getDerivedNavigation();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={COMPANY_INFO.logo}
                alt={`${COMPANY_INFO.fullName} Logo`}
                width={32}
                height={32}
                className="w-12 h-12 object-cover"
              />
              <div>
                <h3 className="font-semibold">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-gray-400">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Australia's trusted mortgage and finance broker, helping you
              achieve your property and financial goals since{" "}
              {COMPANY_INFO.established}.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <span>ASIC Licensed & Insured</span>
            </div>
          </div>

          {/* Dynamic Sections from Navigation */}
          {navigation.footer.sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <p>{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 {COMPANY_INFO.fullName}. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/credit-guide"
              className="hover:text-white transition-colors"
            >
              Credit Guide
            </Link>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-8 p-4 bg-gray-900 rounded-lg">
          <div className="flex items-start space-x-3">
            <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                <strong>Important:</strong> {COMPANY_INFO.fullName} is a
                licensed credit representative (Credit Representative Number:
                {COMPANY_INFO.creditRepNumber}) of XYZ Finance Group Pty Ltd
                (Australian Credit Licence: 654321).
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
