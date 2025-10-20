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
  CreditCard,
  Calculator,
  DollarSign,
  Star,
  ArrowRight,
  Phone,
  TrendingDown,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function DebtConsolidationPage() {
  const { scrollToSection } = useRouterContext();

  const consolidationBenefits = [
    {
      title: "Lower Interest Rates",
      description: "Reduce your overall interest payments",
      features: [
        "Home loan rates vs credit card rates",
        "Potential savings of thousands",
        "Fixed or variable rate options",
        "Rate reviews available",
      ],
    },
    {
      title: "Simplified Payments",
      description: "One payment instead of multiple",
      features: [
        "Single monthly payment",
        "Automated payment options",
        "Better budgeting control",
        "Reduced payment stress",
      ],
    },
    {
      title: "Improved Cash Flow",
      description: "Free up money for other priorities",
      features: [
        "Lower monthly payments",
        "Extended repayment terms",
        "Extra funds for savings",
        "Investment opportunities",
      ],
    },
  ];

  const debtTypes = [
    {
      name: "Credit Cards",
      currentRate: "19.99%+",
      newRate: "From 6.25%*",
      savings: "Up to 70% less interest",
    },
    {
      name: "Personal Loans",
      currentRate: "12.95%+",
      newRate: "From 6.25%*",
      savings: "Significant monthly savings",
    },
    {
      name: "Store Cards",
      currentRate: "22.99%+",
      newRate: "From 6.25%*",
      savings: "Massive interest reduction",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-teal-600 to-cyan-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <CreditCard className="w-4 h-4 mr-2" />
              Debt Consolidation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simplify Your Debts
              <span className="block text-yellow-300">Save Thousands</span>
            </h1>
            <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Consolidate high-interest debts into one low-rate loan. Reduce
              payments by up to 70% and take control of your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Calculate My Savings
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

      {/* Debt Consolidation Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Debt Consolidation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform multiple high-interest debts into one manageable
              low-rate payment and start saving immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consolidationBenefits.map((benefit, index) => (
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

      {/* Interest Rate Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interest Rate Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save by consolidating your debts
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {debtTypes.map((debt, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{debt.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Current Rate</p>
                        <p className="text-lg font-semibold text-red-600">
                          {debt.currentRate}
                        </p>
                      </div>
                      <TrendingDown className="w-8 h-8 text-green-600 mx-auto" />
                      <div>
                        <p className="text-sm text-gray-600">Our Rate</p>
                        <p className="text-lg font-semibold text-green-600">
                          {debt.newRate}
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {debt.savings}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Debt Consolidation Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-teal-600" />
                    What Can Be Consolidated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Credit card debts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Personal loans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Store cards and finance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Other unsecured debts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-3 text-teal-600" />
                    Consolidation Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Home loan top-up (lowest rates)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Refinance with cash out</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Personal loan consolidation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Line of credit facilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Balance transfer options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Debt Consolidation Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Analysis</h3>
              <p className="text-gray-600">
                Comprehensive debt analysis and savings calculation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximum Savings</h3>
              <p className="text-gray-600">
                Find the lowest rates and best structure
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Debt Specialists</h3>
              <p className="text-gray-600">Expert advice on debt management</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued financial guidance and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Take Control of Your Debts?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Stop paying high interest rates. Let us show you how much you
              could save with debt consolidation. Get your free analysis today.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Debt Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
