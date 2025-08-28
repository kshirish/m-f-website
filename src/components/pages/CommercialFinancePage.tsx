import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle, Building, TrendingUp, Briefcase, Factory, Users, Shield, Clock, Calculator, ArrowRight, Phone } from "lucide-react";

export default function CommercialFinancePage() {
  const financeOptions = [
    {
      icon: Building,
      title: "Commercial Property Loans",
      description: "Secure prime commercial real estate for your business",
      features: ["Up to 80% LVR", "Interest-only options", "Fixed & variable rates", "Principal & interest"],
      rate: "from 5.99%"
    },
    {
      icon: TrendingUp,
      title: "Business Loans",
      description: "Fuel your business growth with flexible funding",
      features: ["$50K - $5M available", "Unsecured options", "Fast approvals", "Working capital solutions"],
      rate: "from 6.99%"
    },
    {
      icon: Factory,
      title: "Equipment Finance",
      description: "Acquire the equipment your business needs to thrive",
      features: ["100% equipment finance", "Tax benefits available", "Chattel mortgage options", "Operating leases"],
      rate: "from 7.49%"
    },
    {
      icon: Briefcase,
      title: "Working Capital",
      description: "Maintain healthy cash flow with our working capital solutions",
      features: ["Line of credit facilities", "Invoice financing", "Trade finance", "Seasonal funding"],
      rate: "from 8.99%"
    }
  ];

  const industries = [
    "Manufacturing", "Retail", "Healthcare", "Technology", "Construction", 
    "Hospitality", "Transport", "Professional Services", "Agriculture", "Education"
  ];

  const benefits = [
    { icon: Users, title: "Dedicated Specialist", description: "Your own commercial finance expert" },
    { icon: Clock, title: "Fast Turnaround", description: "Pre-approval in 48 hours or less" },
    { icon: Calculator, title: "Competitive Rates", description: "Access to 30+ commercial lenders" },
    { icon: Shield, title: "Tailored Solutions", description: "Customized to your business needs" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <Building className="w-4 h-4 mr-2" />
              Commercial Finance Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your
              <span className="block text-yellow-300">Business</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From startup funding to expansion capital, our commercial finance solutions help 
              Australian businesses achieve their goals with competitive rates from 5.99%*.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100 px-8"
                onClick={() => {
                  window.location.hash = 'home';
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Get Business Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8"
                onClick={() => {
                  window.location.hash = 'home';
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 1300 MY CHOICE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Finance Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to expand, purchase equipment, or improve cash flow, 
              we have the commercial finance solution to match your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financeOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle>{option.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{option.rate}*</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full group-hover:bg-blue-600 transition-colors" 
                      variant="outline"
                      onClick={() => {
                        window.location.hash = 'home';
                        setTimeout(() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Our commercial finance experts understand the unique needs of various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:bg-blue-50">
                <CardContent className="p-0">
                  <Building className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">{industry}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Commercial Finance?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and designed for business owners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Consultation", description: "Discuss your business needs and finance requirements" },
              { step: "2", title: "Application & Documentation", description: "Complete application with required business documents" },
              { step: "3", title: "Lender Presentation", description: "We present your case to our panel of specialist lenders" },
              { step: "4", title: "Approval & Settlement", description: "Receive approval and settle your commercial finance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Speak with our commercial finance specialists today and discover the funding solutions 
            that can take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8"
              onClick={() => {
                window.location.hash = 'home';
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Get Business Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8"
              onClick={() => {
                window.location.hash = 'home';
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">*Rates subject to approval. Terms and conditions apply.</p>
        </div>
      </section>
    </div>
  );
}