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
  FileText,
  Calculator,
  Users,
  Star,
  ArrowRight,
  Phone,
  Briefcase,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function LowDocLoansPage() {
  const { scrollToSection } = useRouterContext();

  const loanTypes = [
    {
      title: "Self-Employed Loans",
      description: "Flexible documentation for business owners",
      features: [
        "Bank statements only",
        "BAS statements accepted",
        "ABN verification",
        "Accountant declarations",
      ],
    },
    {
      title: "Asset-Based Lending",
      description: "Loans based on asset security",
      features: [
        "Property equity focus",
        "Minimal income verification",
        "Fast approval times",
        "Competitive rates available",
      ],
    },
    {
      title: "PAYG Alternative Doc",
      description: "For PAYG employees with complex income",
      features: [
        "Bonus/commission heavy income",
        "Multiple income sources",
        "Contract employees",
        "Overseas income accepted",
      ],
    },
  ];

  const eligibilityRequirements = [
    {
      title: "Documentation Required",
      items: [
        "Last 12-24 months bank statements",
        "BAS statements (if applicable)",
        "ABN/GST registration",
        "Accountant letter/declaration",
        "Property valuation",
      ],
    },
    {
      title: "Minimum Requirements",
      items: [
        "Minimum 2 years in business/employment",
        "Strong credit history",
        "Adequate deposit (typically 20%+)",
        "Servicing capacity demonstrated",
        "Exit strategy if investment",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <FileText className="w-4 h-4 mr-2" />
              Low Doc Loans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplified Documentation
              <span className="block text-yellow-300">Faster Approvals</span>
            </h1>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Perfect for self-employed borrowers, business owners, and those
              with complex income structures. Get approved with minimal
              paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Apply Now
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
              Low Doc Loan Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for borrowers who don't fit the traditional
              income verification model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {loan.features.map((feature, featureIndex) => (
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

      {/* Eligibility & Documentation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Need to Apply
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined requirements for faster processing
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {eligibilityRequirements.map((requirement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-6 h-6 mr-3 text-orange-600" />
                    {requirement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Low Doc Loans?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Less Paperwork</h3>
              <p className="text-gray-600">Minimal documentation required</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick approval turnaround times</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Criteria</h3>
              <p className="text-gray-600">Accommodates complex income</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Specialist low doc loan brokers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Simplify Your Loan Application?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Don't let complex income structures hold you back. Our low doc
              loan specialists will find the right solution for your situation.
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Pre-Approved Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
