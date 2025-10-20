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
  Building,
  Calculator,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Hammer,
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/common";

export default function ConstructionLoansPage() {
  const { scrollToSection } = useRouterContext();

  const constructionTypes = [
    {
      title: "New Home Construction",
      description: "Build your dream home from scratch",
      features: [
        "Progress payment structure",
        "Land + construction packages",
        "Custom design flexibility",
        "Quality control oversight",
      ],
    },
    {
      title: "House & Land Packages",
      description: "Complete turnkey solutions",
      features: [
        "Fixed price contracts",
        "Established builders",
        "Faster settlement times",
        "Reduced risks",
      ],
    },
    {
      title: "Renovations & Extensions",
      description: "Major home improvements",
      features: [
        "Existing property leverage",
        "Staged payment releases",
        "Value-add opportunities",
        "Living during construction",
      ],
    },
  ];

  const loanProcess = [
    {
      step: 1,
      title: "Pre-Approval",
      description: "Get pre-approved for your construction budget",
      timeline: "2-5 days",
    },
    {
      step: 2,
      title: "Land Purchase",
      description: "Secure your land with construction loan approval",
      timeline: "30-45 days",
    },
    {
      step: 3,
      title: "Progress Payments",
      description: "Funds released at construction milestones",
      timeline: "4-12 months",
    },
    {
      step: 4,
      title: "Final Settlement",
      description: "Convert to standard home loan upon completion",
      timeline: "On completion",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <Building className="w-4 h-4 mr-2" />
              Construction Loans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Dream
              <span className="block text-yellow-300">From the Ground Up</span>
            </h1>
            <p className="text-xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Progressive funding for new home construction, house & land
              packages, and major renovations. Pay interest only on funds drawn
              down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                Start Building Today
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

      {/* Construction Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Construction Loan Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether building from scratch or renovating, we have the right
              construction loan solution for your project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {constructionTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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

      {/* Construction Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Construction Loans Work
            </h2>
            <p className="text-xl text-gray-600">
              Progressive payments aligned with construction milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Construction Loan Features
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Hammer className="w-6 h-6 mr-3 text-amber-600" />
                    Loan Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Interest-only during construction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Progressive payment structure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Fixed or variable rates available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Up to 95% LVR available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>No monthly fees during construction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-amber-600" />
                    Construction Stages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Slab down (foundation)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Frame stage completion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Lockup stage (roof & walls)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Fixing stage (internal work)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Practical completion</span>
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
              Why Choose Our Construction Loans?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Construction Experts
              </h3>
              <p className="text-gray-600">
                Specialized construction loan knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">
                Best construction loan rates available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Approvals</h3>
              <p className="text-gray-600">Quick pre-approval turnaround</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Support</h3>
              <p className="text-gray-600">Guidance throughout construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Building?
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Turn your building dreams into reality with our construction loan
              specialists. Get pre-approved and start building today.
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Construction Loan Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
