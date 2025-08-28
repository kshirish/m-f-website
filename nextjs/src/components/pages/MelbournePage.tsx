'use client';import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin, Phone, Clock, Users, Home, Building, Star, CheckCircle, ArrowRight } from "lucide-react";

export default function MelbournePage() {
  const melbourneStats = [
    { icon: Users, value: "300+", label: "Melbourne Clients" },
    { icon: Home, value: "$150M+", label: "In Melbourne Loans" },
    { icon: Building, value: "35+", label: "Melbourne Suburbs" },
    { icon: Star, value: "4.8/5", label: "Melbourne Rating" }
  ];

  const suburbs = [
    "Melbourne CBD", "South Yarra", "Brighton", "Richmond", "Fitzroy", "St Kilda",
    "Docklands", "Carlton", "Prahran", "Toorak", "Hawthorn", "Camberwell"
  ];

  const services = [
    { title: "Melbourne Market Expertise", description: "Deep knowledge of Melbourne's diverse property landscape" },
    { title: "Investment Opportunities", description: "Capitalize on Melbourne's growth corridors" },
    { title: "First Home Buyer Support", description: "Navigate Melbourne's competitive market with confidence" },
    { title: "Commercial Finance", description: "Fund your Melbourne business ventures" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-700 via-blue-800 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              Melbourne Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Melbourne's
              <span className="block text-yellow-300">Finance Partner</span>
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Serving Melbourne's vibrant property market with expert mortgage and finance solutions. 
              From the CBD to the outer suburbs, we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 px-8">
                Get Melbourne Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Phone className="mr-2 w-5 h-5" />
                Call 1300 MY CHOICE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Melbourne Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Melbourne Success Stories</h2>
            <p className="text-xl text-gray-600">Building relationships across Melbourne</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {melbourneStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Melbourne Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Melbourne-Focused Services</h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for Melbourne's unique market conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{service.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full hover:bg-green-600 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Melbourne Areas We Cover</h2>
            <p className="text-xl text-gray-600">
              From trendy inner-city to growing outer suburbs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {suburbs.map((suburb, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow hover:bg-green-50 cursor-pointer">
                <CardContent className="p-0">
                  <MapPin className="w-5 h-5 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-medium">{suburb}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">We serve all Melbourne metropolitan areas!</p>
            <Button variant="outline" className="hover:bg-green-600 hover:text-white">
              Find Your Melbourne Area
            </Button>
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Melbourne Market Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Melbourne specialists understand the local market dynamics, from the coffee 
                culture hubs to the emerging growth areas. We help you make informed decisions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Melbourne Specialists</p>
                    <p className="text-gray-600">1300 MY CHOICE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Service Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM | Sat: 9AM-2PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  Book Melbourne Consultation
                </Button>
                <Button variant="outline" className="hover:bg-green-600 hover:text-white">
                  Melbourne Market Report
                </Button>
              </div>
            </div>

            <Card className="p-6 bg-white shadow-xl">
              <CardHeader className="p-0 pb-6">
                <CardTitle>Melbourne Property Insights</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Median House Price</span>
                    <span className="font-bold text-green-600">$850K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Home Loan Rates</span>
                    <span className="font-bold text-blue-600">from 5.99%*</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Growth Areas</span>
                    <span className="font-bold text-purple-600">Outer North</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Get Melbourne Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Melbourne?</h2>
          <p className="text-xl mb-8 text-green-100">
            Let our Melbourne specialists help you navigate the property market and secure the best finance options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8">
              Start Melbourne Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Speak to Melbourne Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}