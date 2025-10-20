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
  PiggyBank,
  Calculator,
  Shield,
  Star,
  ArrowRight,
  Phone,
  TrendingUp,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function SMSFPage() {
  const { scrollToSection } = useRouterContext();

  const smsfBenefits = [
    {
      title: "Tax Advantages",
      description: "Maximize your tax efficiency with SMSF property",
      features: [
        "15% concessional tax rate",
        "0% tax in pension phase",
        "Capital gains tax benefits",
        "Deductible expenses",
      ],
    },
    {
      title: "Control & Flexibility",
      description: "Full control over your investment decisions",
      features: [
        "Choose your own investments",
        "Direct property ownership",
        "Investment strategy control",
        "Portfolio diversification",
      ],
    },
    {
      title: "Wealth Building",
      description: "Build substantial retirement wealth",
      features: [
        "Property capital growth",
        "Rental income benefits",
        "Leverage opportunities",
        "Long-term wealth creation",
      ],
    },
  ];

  const loanTypes = [
    {
      title: "SMSF Property Purchase",
      description: "Standard property acquisition loans",
      rate: "From 6.25%*",
      features: [
        "Residential and commercial",
        "Up to 80% LVR",
        "Interest only options",
        "Competitive rates",
      ],
    },
    {
      title: "Limited Recourse Borrowing",
      description: "LRBA compliant lending structures",
      rate: "From 6.45%*",
      features: [
        "Single acquirable asset",
        "Segregated ownership",
        "Compliant structures",
        "Professional setup",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <PiggyBank className="w-4 h-4 mr-2" />
              SMSF Loans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SMSF Property
              <span className="block text-yellow-300">Investment Loans</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Build wealth through your self-managed super fund. Access
              competitive SMSF property loans with tax-effective investment
              strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Start Your SMSF Journey
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

      {/* SMSF Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why SMSF Property Investment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supercharge your retirement savings with direct property
              investment through your self-managed super fund.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {smsfBenefits.map((benefit, index) => (
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

      {/* Loan Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SMSF Loan Options
            </h2>
            <p className="text-xl text-gray-600">
              Compliant lending solutions for your SMSF property investment
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{loan.title}</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">
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

      {/* Requirements & Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SMSF Loan Requirements
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-purple-600" />
                    SMSF Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Compliant SMSF established</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Audited financial statements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Investment strategy in place</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Sufficient cash flow/contributions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Professional trustee/members</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-purple-600" />
                    Loan Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Minimum 20% deposit required</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Property used for investment only</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>LRBA structure compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Professional property valuation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Legal structure documentation</span>
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
              Why Choose Our SMSF Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SMSF Specialists</h3>
              <p className="text-gray-600">Dedicated SMSF lending experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Compliant Structures
              </h3>
              <p className="text-gray-600">Fully compliant LRBA arrangements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wealth Building</h3>
              <p className="text-gray-600">
                Maximized retirement wealth growth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">End-to-end SMSF loan support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Supercharge Your Super?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Start building serious wealth through your SMSF. Our specialists
              will guide you through the entire process.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get SMSF Loan Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
