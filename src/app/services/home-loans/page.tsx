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
import { scrollToSection } from "@/utils/scrollToSection";
import {
  CheckCircle,
  Home,
  Calculator,
  FileText,
  Users,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function HomeLoansPage() {
  const loanTypes = [
    {
      title: "First Home Buyer Loans",
      description: "Special rates and government grants for first-time buyers",
      features: [
        "Low deposit options",
        "First Home Owner Grant",
        "Stamp duty concessions",
        "No LMI options available",
      ],
    },
    {
      title: "Investment Property Loans",
      description: "Competitive rates for your investment portfolio",
      features: [
        "Interest-only options",
        "Tax benefits",
        "Portfolio lending",
        "Rental income assessment",
      ],
    },
    {
      title: "Refinancing",
      description: "Switch to a better rate and save thousands",
      features: [
        "Rate comparison",
        "Cashback offers",
        "Debt consolidation",
        "Free property valuation",
      ],
    },
    {
      title: "Construction Loans",
      description: "Finance your dream home from the ground up",
      features: [
        "Progress payments",
        "Land + construction",
        "Offset account",
        "Convert to standard loan",
      ],
    },
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Competitive Rates",
      description: "Access to over 50+ lenders for the best rates",
    },
    {
      icon: FileText,
      title: "Fast Approval",
      description: "Pre-approvals in as little as 24 hours",
    },
    {
      icon: Users,
      title: "Expert Advice",
      description: "Dedicated loan specialists guide you through",
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Rated 4.9/5 stars by over 1000+ customers",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <Home className="w-4 h-4 mr-2" />
              Home Loans & Mortgages
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Dream Home
              <span className="block text-yellow-300">Awaits</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From first home buyers to seasoned investors, we offer competitive
              home loan solutions with rates starting from 5.99%*. Get
              pre-approved in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Get Pre-Approved Now
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

      {/* Loan Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Home Loan Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're buying your first home or expanding your investment
              portfolio, we have the right loan solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Home className="w-5 h-5 text-blue-600" />
                    <span>{loan.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {loan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-6"
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Home Loans?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get approved and move into your dream home faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description:
                  "Complete our quick online application in 10 minutes",
              },
              {
                step: "2",
                title: "Documentation",
                description:
                  "Upload required documents through our secure portal",
              },
              {
                step: "3",
                title: "Assessment",
                description:
                  "Our experts assess your application and find the best rates",
              },
              {
                step: "4",
                title: "Settlement",
                description:
                  "Get the keys to your new home and start living your dream",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free home loan assessment today and take the first step
            towards homeownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Application
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
      </section>
    </div>
  );
}
