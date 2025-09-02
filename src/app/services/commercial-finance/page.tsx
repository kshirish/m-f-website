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
import { COMPANY_INFO } from "@/constants/common";
import {
  CheckCircle,
  Building,
  TrendingUp,
  Users,
  Shield,
  Briefcase,
  ArrowRight,
  Phone,
  DollarSign,
  Clock,
} from "lucide-react";

export default function CommercialFinancePage() {
  const { scrollToSection } = useRouterContext();
  const financeTypes = [
    {
      title: "Equipment Finance",
      rate: "from 4.99%*",
      description: "Finance machinery, vehicles, and business equipment",
      features: [
        "100% finance available",
        "Tax benefits & depreciation",
        "Flexible repayment terms",
        "Keep cash flow intact",
      ],
    },
    {
      title: "Business Loans",
      rate: "from 5.99%*",
      description: "Working capital and expansion loans",
      features: [
        "Up to $5 million",
        "Secured & unsecured options",
        "Fast approval process",
        "Flexible repayment terms",
      ],
    },
    {
      title: "Commercial Property",
      rate: "from 5.49%*",
      description: "Purchase or refinance commercial real estate",
      features: [
        "Owner-occupied properties",
        "Investment properties",
        "Development finance",
        "Up to 80% LVR",
      ],
    },
    {
      title: "Invoice Factoring",
      rate: "from 1.5%*",
      description: "Turn outstanding invoices into immediate cash",
      features: [
        "Improve cash flow",
        "80-90% advance rates",
        "No fixed contracts",
        "Credit protection available",
      ],
    },
    {
      title: "Asset Finance",
      rate: "from 5.99%*",
      description: "Finance vehicles, machinery, and business assets",
      features: [
        "Chattel mortgage options",
        "Operating lease available",
        "Balloon payment options",
        "Asset protection insurance",
      ],
    },
    {
      title: "Trade Finance",
      rate: "from 3.99%*",
      description: "International trade and import/export finance",
      features: [
        "Letters of credit",
        "Trade guarantees",
        "Import/export finance",
        "Currency hedging",
      ],
    },
  ];

  const industries = [
    "Manufacturing",
    "Construction",
    "Healthcare",
    "Technology",
    "Retail",
    "Agriculture",
    "Transport",
    "Professional Services",
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Access to 40+ commercial lenders for best rates",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround with dedicated commercial team",
    },
    {
      icon: Shield,
      title: "Expert Advice",
      description: "Specialist commercial finance brokers",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Relationship management throughout loan term",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <Building className="w-4 h-4 mr-2" />
              Commercial Finance Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Business with
              <span className="block text-purple-300">Smart Finance</span>
            </h1>
            <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
              Commercial finance solutions tailored for your business. Equipment
              finance, business loans, commercial property, and working capital
              from 4.99%*.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Get Business Quote
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

      {/* Finance Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Commercial Finance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business finance options to support your growth,
              cash flow, and investment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeTypes.map((finance, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <Building className="w-5 h-5 text-blue-600" />
                        <span>{finance.title}</span>
                      </CardTitle>
                      <div className="text-xl font-semibold text-blue-600 mt-2">
                        {finance.rate}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {finance.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {finance.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full border bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized finance solutions across all business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <Briefcase className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h3>{industry}</h3>
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
              Why Choose Our Commercial Finance?
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

      {/* Equipment Finance Feature */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Equipment Finance Made Simple
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Finance any business equipment with flexible terms and
                  competitive rates. Preserve your cash flow while accessing the
                  equipment you need to grow.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Finance 100% of equipment cost</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Tax benefits and depreciation advantages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>New and used equipment eligible</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Quick approval and settlement</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Equipment Finance Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div>
                <Card className="p-8 bg-white shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Equipment Finance Example
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-semibold mb-2">Equipment Value:</h4>
                      <div className="text-2xl font-bold text-blue-600">
                        $100,000
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Term:</span>
                        <div className="font-semibold">5 years</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Rate:</span>
                        <div className="font-semibold">5.99%*</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Monthly Payment:</span>
                        <div className="font-semibold">$1,933</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Balloon:</span>
                        <div className="font-semibold">$15,000</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center text-sm text-blue-600">
                        <CheckCircle className="w-4 h-4 inline mr-2 text-green-500" />
                        <div>Preserve $100,000 cash flow</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Commercial Finance Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional service from application to settlement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "Discuss your business needs and finance requirements",
                icon: Users,
              },
              {
                step: "2",
                title: "Application & Documentation",
                description:
                  "Submit application with required business documents",
                icon: Briefcase,
              },
              {
                step: "3",
                title: "Lender Assessment",
                description:
                  "Our team presents your application to suitable lenders",
                icon: TrendingUp,
              },
              {
                step: "4",
                title: "Approval & Settlement",
                description: "Receive approval and complete settlement process",
                icon: CheckCircle,
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Finance Your Business Growth?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Get a free commercial finance assessment and discover how we can
            help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Commercial Quote
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
