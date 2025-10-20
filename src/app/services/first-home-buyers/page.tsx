"use client";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import { useRouterContext } from "@/hooks/useRouterContext";
import {
  CheckCircle,
  Home,
  Calculator,
  FileText,
  Users,
  Star,
  ArrowRight,
  Phone,
  Heart,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function FirstHomeBuyersPage() {
  const { scrollToSection } = useRouterContext();

  const buyerBenefits = [
    {
      title: "First Home Owner Grant",
      description: "Access government grants up to $25,000",
      features: [
        "State-based grant schemes",
        "New home construction bonus",
        "Regional area incentives",
        "No repayment required",
      ],
    },
    {
      title: "Low Deposit Options",
      description: "Buy with as little as 5% deposit",
      features: [
        "Guarantor loans available",
        "Family pledge options",
        "Lenders mortgage insurance",
        "Shared equity schemes",
      ],
    },
    {
      title: "Stamp Duty Savings",
      description: "Significant concessions for first home buyers",
      features: [
        "Full stamp duty exemptions",
        "Partial concessions available",
        "Off-the-plan concessions",
        "Save thousands in costs",
      ],
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Pre-Approval",
      description: "Get pre-approved to know your budget",
      timeline: "24-48 hours",
    },
    {
      step: 2,
      title: "Property Search",
      description: "Find your dream home within budget",
      timeline: "2-8 weeks",
    },
    {
      step: 3,
      title: "Final Approval",
      description: "Submit formal application",
      timeline: "7-14 days",
    },
    {
      step: 4,
      title: "Settlement",
      description: "Keys to your new home",
      timeline: "30-45 days",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <Heart className="w-4 h-4 mr-2" />
              First Home Buyers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your First Home
              <span className="block text-yellow-300">Dream Starts Here</span>
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Get expert guidance through your first home buying journey. Access
              grants, low deposit options, and stamp duty savings. Start from
              just 5% deposit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10 px-8"
                onClick={() =>
                  (window.location.href = `tel:${COMPANY_INFO.phone.replace(
                    /\s/g,
                    ""
                  )}`)
                }
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {COMPANY_INFO.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* First Home Buyer Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              First Home Buyer Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of government incentives and special programs
              designed specifically for first home buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {buyerBenefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Path to Homeownership
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get you into your first home
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <Badge variant="secondary">{step.timeline}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why First Home Buyers Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Dedicated first home buyer specialists
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Calculators</h3>
              <p className="text-gray-600">Know exactly what you can afford</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grant Applications</h3>
              <p className="text-gray-600">
                Help accessing all available grants
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-600">Rated 4.9/5 by first home buyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Buy Your First Home?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let our first home buyer specialists guide you through every step.
              Get pre-approved today and start your homeownership journey.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
