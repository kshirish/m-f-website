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
  RefreshCw,
  Calculator,
  DollarSign,
  Star,
  ArrowRight,
  Phone,
  TrendingUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function RefinancingPage() {
  const { scrollToSection } = useRouterContext();

  const refinancingReasons = [
    {
      title: "Lower Interest Rates",
      description: "Switch to a better rate and save thousands",
      features: [
        "Rates from 5.99%* available",
        "Potential savings of $50,000+",
        "Rate comparison analysis",
        "Fixed and variable options",
      ],
    },
    {
      title: "Better Loan Features",
      description: "Access modern loan features and benefits",
      features: [
        "Offset accounts",
        "Redraw facilities",
        "No ongoing fees",
        "Split loan options",
      ],
    },
    {
      title: "Cash Out for Investments",
      description: "Access equity for investment opportunities",
      features: [
        "Property investment funding",
        "Renovation financing",
        "Debt consolidation",
        "Business investment capital",
      ],
    },
  ];

  const refinancingProcess = [
    {
      step: 1,
      title: "Health Check",
      description: "Free loan health check and comparison",
      timeline: "30 minutes",
    },
    {
      step: 2,
      title: "Application",
      description: "Submit refinancing application",
      timeline: "2-3 days",
    },
    {
      step: 3,
      title: "Approval",
      description: "Formal loan approval received",
      timeline: "7-14 days",
    },
    {
      step: 4,
      title: "Settlement",
      description: "Switch to your new loan",
      timeline: "30-45 days",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refinancing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Switch & Save
              <span className="block text-yellow-300">
                Thousands Every Year
              </span>
            </h1>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Could you be paying too much for your home loan? Switch to a
              better rate and save up to $50,000 over the life of your loan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Check My Rate
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

      {/* Refinancing Reasons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Refinance Your Home Loan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many compelling reasons to refinance your home loan.
              Discover how switching could benefit your financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {refinancingReasons.map((reason, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {reason.features.map((feature, featureIndex) => (
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

      {/* Refinancing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Refinancing Process
            </h2>
            <p className="text-xl text-gray-600">
              We make switching loans easy and hassle-free
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {refinancingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* When to Refinance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is It Time to Refinance?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-indigo-600" />
                    Signs You Should Refinance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Your rate is above current market rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>You're paying high ongoing fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Your loan lacks modern features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>You need access to equity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Poor service from current lender</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-3 text-indigo-600" />
                    What You Could Save
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Example: $500K Loan
                      </h4>
                      <p className="text-sm text-green-700">
                        Switching from 7.5% to 6.5% could save:
                      </p>
                      <p className="text-2xl font-bold text-green-800">
                        $37,000+
                      </p>
                      <p className="text-sm text-green-700">
                        Over the life of the loan
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Monthly Savings
                      </h4>
                      <p className="text-2xl font-bold text-blue-800">$270+</p>
                      <p className="text-sm text-blue-700">
                        Per month potential savings
                      </p>
                    </div>
                  </div>
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
              Why Choose Our Refinancing Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">
                Comprehensive loan comparison and analysis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximum Savings</h3>
              <p className="text-gray-600">
                Find the best rates and features available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Cost Switch</h3>
              <p className="text-gray-600">
                We cover many switching costs and fees
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hassle-Free</h3>
              <p className="text-gray-600">
                We handle all the paperwork and process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Save on Your Home Loan?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Don't overpay for your mortgage. Get a free loan health check and
              discover how much you could save by refinancing today.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Loan Health Check
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
