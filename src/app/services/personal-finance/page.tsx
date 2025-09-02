"use client";

import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Badge } from "@/components/badge";
import { scrollToContact } from "@/utils/scrollToContact";
import {
  CheckCircle,
  CreditCard,
  Calculator,
  Shield,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function PersonalFinancePage() {
  const loanTypes = [
    {
      title: "Personal Loans",
      rate: "from 5.99%*",
      description: "Unsecured loans for any personal use",
      features: [
        "Loan amounts up to $75,000",
        "Flexible repayment terms",
        "No asset security required",
        "Quick approval process",
      ],
    },
    {
      title: "Car Loans",
      rate: "from 6.99%*",
      description: "Finance your dream car with competitive rates",
      features: [
        "New & used car finance",
        "Loan amounts up to $150,000",
        "Balloon payment options",
        "Asset protection insurance",
      ],
    },
    {
      title: "Debt Consolidation",
      rate: "from 5.49%*",
      description: "Combine multiple debts into one easy payment",
      features: [
        "Simplify your finances",
        "Potentially lower interest",
        "One monthly payment",
        "Improve credit score",
      ],
    },
    {
      title: "Credit Cards",
      rate: "0% balance transfer*",
      description: "Low rate credit cards and balance transfers",
      features: [
        "Low ongoing rates",
        "0% balance transfer offers",
        "Rewards programs",
        "No annual fee options",
      ],
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Access to 30+ lenders for the best personal loan rates",
    },
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Same-day approval for most personal loan applications",
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Bank-level security for all your personal information",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated personal finance specialists available",
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
              <CreditCard className="w-4 h-4 mr-2" />
              Personal Finance Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Personal Loans Made
              <span className="block text-yellow-300">Simple</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From personal loans to car finance and debt consolidation. Get
              competitive rates starting from 5.49%* with same-day approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={scrollToContact}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10 px-8"
                onClick={() => (window.location.href = "tel:0402742493")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 0402 742 493
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Calculator className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Calculate Your Personal Loan
            </h3>
            <p className="text-gray-600 mb-6">
              Use our calculator to estimate your repayments and see how much
              you could borrow
            </p>
            <Button
              onClick={() => (window.location.href = "/calculator")}
              className="bg-blue-600 text-white hover:bg-blue-700 px-8"
            >
              Try Our Calculator
              <Calculator className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Personal Finance Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of personal finance solutions designed to
              meet your individual needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <span>{loan.title}</span>
                      </CardTitle>
                      <div className="text-2xl font-semibold text-blue-600 mt-2">
                        {loan.rate}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {loan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full border bg-white text-gray-900 hover:bg-gray-100"
                    onClick={scrollToContact}
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
              Why Choose Our Personal Finance?
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

      {/* Personal Loan Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get approved and funded within 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description:
                  "Complete our 5-minute application with instant pre-approval",
                icon: CreditCard,
              },
              {
                step: "2",
                title: "Get Approved",
                description:
                  "Receive approval within hours and choose your loan terms",
                icon: CheckCircle,
              },
              {
                step: "3",
                title: "Receive Funds",
                description:
                  "Money deposited directly into your account within 24 hours",
                icon: DollarSign,
              },
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="mb-2 text-sm font-semibold text-blue-600">
                    STEP {process.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Debt Consolidation Feature */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Struggling with Multiple Debts?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Consolidate your credit cards, personal loans, and other debts
                  into one simple payment with a potentially lower interest
                  rate.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Combine up to 10 different debts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Potentially save thousands in interest</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>One payment, one due date</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Improve your credit score over time</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={scrollToContact}
                >
                  Get Debt Consolidation Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="lg:order-first">
                <Card className="p-8 bg-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Debt Consolidation Example
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold text-red-600">
                        Before Consolidation:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Credit Card 1:</span>
                          <span>$312/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Credit Card 2:</span>
                          <span>$189/month</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Personal Loan:</span>
                          <span>$245/month</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>$746/month</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">
                        After Consolidation:
                      </h4>
                      <div className="text-2xl font-bold text-blue-600">
                        $524/month
                      </div>
                      <div className="text-sm text-blue-600">
                        Save $222 per month!
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Personal Loan?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free personal finance assessment and see how much you could
            save today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8"
              onClick={scrollToContact}
            >
              Start Your Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white/10 px-8"
              onClick={() => (window.location.href = "tel:0402742493")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 0402 742 493
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
