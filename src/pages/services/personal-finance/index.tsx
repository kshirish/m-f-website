import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Badge } from "@/components/badge";
import {
  CheckCircle,
  CreditCard,
  Car,
  Home,
  Plane,
  Calculator,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function PersonalFinancePage() {
  const loanTypes = [
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Flexible funding for life's important moments",
      features: [
        "$5,000 - $100,000",
        "Fixed interest rates",
        "No monthly fees",
        "Quick approval",
      ],
      rate: "from 7.99%",
    },
    {
      icon: Car,
      title: "Car Loans",
      description: "Get behind the wheel of your dream car",
      features: [
        "New & used cars",
        "Balloon payments",
        "100% finance available",
        "Trade-in options",
      ],
      rate: "from 6.49%",
    },
    {
      icon: Home,
      title: "Home Improvement",
      description: "Transform your home with our renovation loans",
      features: [
        "Up to $250,000",
        "No security required",
        "Staged payments",
        "Interest-only options",
      ],
      rate: "from 8.99%",
    },
    {
      icon: Plane,
      title: "Holiday Loans",
      description: "Make your travel dreams come true",
      features: [
        "Quick approval",
        "$2,000 - $50,000",
        "Flexible terms",
        "No early exit fees",
      ],
      rate: "from 9.99%",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get approved in as little as 1 hour",
    },
    {
      icon: Calculator,
      title: "Competitive Rates",
      description: "Compare 40+ lenders for the best deal",
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Bank-level security for all applications",
    },
    {
      icon: Star,
      title: "Expert Support",
      description: "Dedicated personal finance specialists",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <CreditCard className="w-4 h-4 mr-2" />
              Personal Finance Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fund Your
              <span className="block text-yellow-300">Life Goals</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Whether it's a new car, home renovation, or that dream holiday,
              our personal loans make it possible with competitive rates from
              6.49%* and fast approvals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 px-8"
                onClick={() => {
                  window.location.hash = "home";
                  setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-900 hover:bg-white/10 px-8"
                onClick={() => (window.location.href = "tel:0402742493")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 0402 742 493
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
              Personal Loan Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of personal finance solutions designed to
              meet your specific needs with competitive rates and flexible
              terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => {
              const IconComponent = loan.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                          <IconComponent className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle>{loan.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {loan.rate}*
                          </Badge>
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
                      className="w-full group-hover:bg-purple-600 transition-colors"
                      variant="outline"
                      onClick={() => {
                        window.location.hash = "home";
                        setTimeout(() => {
                          const contactSection =
                            document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }, 100);
                      }}
                    >
                      Apply for {loan.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculate Your Loan
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our loan calculator to estimate your repayments and find the
                loan amount that fits your budget. Get an instant estimate with
                our easy-to-use tool.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calculator className="w-5 h-5 text-purple-600" />
                  <span>Instant loan calculations</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span>No impact on credit score</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span>Secure and confidential</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-center">Loan Calculator</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <input
                        type="text"
                        placeholder="25,000"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Loan Term
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>2 years</option>
                      <option>3 years</option>
                      <option>5 years</option>
                      <option>7 years</option>
                    </select>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Estimated Monthly Repayment
                      </p>
                      <p className="text-2xl font-bold text-purple-600">
                        $652*
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        *Based on 7.99% p.a. rate
                      </p>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      window.location.hash = "home";
                      setTimeout(() => {
                        const contactSection =
                          document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                  >
                    Apply for This Loan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Personal Loans?
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
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-purple-600" />
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get your personal loan approved in as little as 1 hour with our
            streamlined application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8"
              onClick={() => {
                window.location.hash = "home";
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Apply Online Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-900 hover:bg-white/10 px-8"
              onClick={() => {
                window.location.hash = "home";
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Speak to a Specialist
            </Button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            *Rates and fees apply. Subject to credit assessment and approval.
          </p>
        </div>
      </section>
    </div>
  );
}
