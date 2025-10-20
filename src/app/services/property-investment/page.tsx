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
  TrendingUp,
  Calculator,
  Building,
  Star,
  ArrowRight,
  Phone,
  DollarSign,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function PropertyInvestmentPage() {
  const { scrollToSection } = useRouterContext();

  const investmentBenefits = [
    {
      title: "Capital Growth",
      description: "Build wealth through property appreciation",
      features: [
        "Long-term capital gains",
        "Property market growth",
        "Leverage opportunities",
        "Portfolio diversification",
      ],
    },
    {
      title: "Rental Income",
      description: "Generate passive income from tenants",
      features: [
        "Regular rental payments",
        "Potential positive gearing",
        "Income tax benefits",
        "Professional management options",
      ],
    },
    {
      title: "Tax Benefits",
      description: "Maximize your tax-effective investments",
      features: [
        "Negative gearing benefits",
        "Depreciation deductions",
        "Interest deductibility",
        "Capital gains tax discounts",
      ],
    },
  ];

  const loanTypes = [
    {
      title: "Investment Property Loans",
      description: "Standard investment property financing",
      rate: "From 6.45%*",
      features: [
        "Up to 90% LVR available",
        "Interest-only options",
        "Principal & interest",
        "Fixed and variable rates",
      ],
    },
    {
      title: "Portfolio Lending",
      description: "Multiple property investment loans",
      rate: "Competitive rates",
      features: [
        "Cross-collateralization options",
        "Portfolio assessment",
        "Streamlined approvals",
        "Professional investor rates",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Property Investment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Wealth Through
              <span className="block text-yellow-300">Property Investment</span>
            </h1>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Create multiple income streams and build long-term wealth with
              investment property loans. Expert guidance from property
              investment specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Start Investing
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

      {/* Investment Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Invest in Property?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Property investment offers unique advantages for building
              long-term wealth and creating multiple income streams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentBenefits.map((benefit, index) => (
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

      {/* Loan Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment Loan Options
            </h2>
            <p className="text-xl text-gray-600">
              Flexible financing solutions for property investors
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{loan.title}</CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800">
                      {loan.rate}
                    </Badge>
                  </div>
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

      {/* Investment Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment Property Strategy
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="w-6 h-6 mr-3 text-emerald-600" />
                    Property Selection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Growth area identification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Rental yield analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Market research and trends</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Infrastructure development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Demographic analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-emerald-600" />
                    Financial Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Cash flow projections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Tax implications assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Borrowing capacity calculation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Portfolio growth strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Exit strategy planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment Property Types
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Residential</h3>
              <p className="text-gray-600">
                Houses, townhouses, and units for rental income
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Commercial</h3>
              <p className="text-gray-600">
                Office spaces, retail, and industrial properties
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Off-the-Plan</h3>
              <p className="text-gray-600">
                New developments and construction projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Portfolio</h3>
              <p className="text-gray-600">
                Multiple property investment strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Investment Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment Experts</h3>
              <p className="text-gray-600">
                Specialist property investment advisors
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Analysis</h3>
              <p className="text-gray-600">
                Comprehensive investment analysis tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of investment markets
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued investment portfolio guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Building Wealth?
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Take the first step towards financial freedom through property
              investment. Our specialists will guide you through every step.
            </p>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Investment Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
