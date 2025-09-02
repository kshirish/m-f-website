"use client";

import { Button } from "@/components/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ArrowRight, Shield, Clock, Users, Calculator } from "lucide-react";
import { useRouter } from "next/navigation";
import { scrollToContact } from "@/utils/scrollToContact";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1652469280598-48842f46be29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMG1vcnRnYWdlfGVufDF8fHx8MTc1NTg2MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern house representing mortgage services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm backdrop-blur-sm">
              🏠 Sydney's Trusted Mortgage Experts
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Dream Home
            <span className="block bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Expert mortgage, finance, and loan solutions across Sydney and
            beyond. We make your property dreams achievable with personalized
            service and competitive rates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              onClick={scrollToContact}
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-900 hover:bg-gray-100 px-8 py-4"
              onClick={() => router.push("/calculator")}
            >
              <Calculator className="mr-2 w-5 h-5" />
              Loan Calculator
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-900 hover:bg-gray-100 px-8 py-4"
              onClick={() => (window.location.href = "tel:0402742493")}
            >
              Call Now: 0402 742 493
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-400 mb-2" />
              <span className="text-sm">1000+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
