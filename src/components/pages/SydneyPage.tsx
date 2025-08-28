import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { MapPin, Phone, Clock, Users, Home, Building, Star, CheckCircle, ArrowRight } from "lucide-react";

export default function SydneyPage() {
  const sydneyStats = [
    { icon: Users, value: "500+", label: "Sydney Clients Served" },
    { icon: Home, value: "$250M+", label: "In Sydney Home Loans" },
    { icon: Building, value: "25+", label: "Sydney Suburbs Covered" },
    { icon: Star, value: "4.9/5", label: "Sydney Client Rating" }
  ];

  const majorSuburbs = [
    { name: "Sydney CBD", route: "#areas/sydney/cbd" },
    { name: "Parramatta", route: "#areas/sydney/parramatta" },
    { name: "Bondi", route: "#areas/sydney/bondi" },
    { name: "Manly", route: "#areas/sydney/manly" },
    { name: "Chatswood", route: "#areas/sydney/chatswood" },
    { name: "Penrith", route: "#areas/sydney/penrith" }
  ];

  const otherSuburbs = [
    "Hornsby", "Liverpool", "Bankstown", "Blacktown", "Campbelltown", "Sutherland"
  ];

  const services = [
    { title: "First Home Buyer Assistance", description: "Navigate Sydney's competitive market with expert guidance" },
    { title: "Investment Property Loans", description: "Capitalize on Sydney's strong rental market" },
    { title: "Commercial Property Finance", description: "Secure prime Sydney commercial real estate" },
    { title: "Refinancing Solutions", description: "Switch to better rates and save on your Sydney property" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1717883560409-14adc1074f0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NTU4NjE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sydney city skyline"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              Sydney - Our Home Base
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sydney's Trusted
              <span className="block text-yellow-300">Mortgage Experts</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Based in the heart of Sydney, we've been helping locals secure their dream homes 
              and investment properties across all Sydney suburbs for over 15 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8">
                Get Sydney Home Loan Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Phone className="mr-2 w-5 h-5" />
                Call Our Sydney Office
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sydney Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sydney by the Numbers</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sydneyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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

      {/* Sydney Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sydney-Specific Services</h2>
            <p className="text-xl text-gray-600">
              Local expertise for Sydney's unique property market
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
                  <Button variant="outline" className="w-full">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sydney Suburbs We Serve</h2>
            <p className="text-xl text-gray-600">
              From the CBD to the outer suburbs, we serve clients across Greater Sydney
            </p>
          </div>

          {/* Major Suburbs with dedicated pages */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Featured Sydney Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {majorSuburbs.map((suburb, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:bg-blue-50 cursor-pointer group"
                  onClick={() => window.location.hash = suburb.route}
                >
                  <CardContent className="p-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="font-medium mb-2">{suburb.name}</p>
                    <p className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">View Details →</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Suburbs */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Other Sydney Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {otherSuburbs.map((suburb, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow hover:bg-blue-50 cursor-pointer">
                  <CardContent className="p-0">
                    <MapPin className="w-4 h-4 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-medium">{suburb}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your suburb? We serve all of Greater Sydney!</p>
            <Button variant="outline">
              Contact Us About Your Area
            </Button>
          </div>
        </div>
      </section>

      {/* Local Office */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our Sydney Office
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Sydney's business district, our team of local 
                mortgage specialists is ready to help you navigate Sydney's property market.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">Level 5, 123 George Street, Sydney NSW 2000</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Sydney Direct Line</p>
                    <p className="text-gray-600">(02) 9000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600">Mon-Fri: 9AM-6PM | Sat: 9AM-2PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Book Sydney Appointment
                </Button>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>

            <Card className="p-6 bg-white shadow-xl">
              <CardHeader className="p-0 pb-6">
                <CardTitle>Sydney Market Insights</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Median House Price</span>
                    <span className="font-bold text-blue-600">$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Current Home Loan Rates</span>
                    <span className="font-bold text-green-600">from 5.99%*</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">First Home Buyer Grants</span>
                    <span className="font-bold text-purple-600">Up to $25K</span>
                  </div>
                </div>
                <Button className="w-full mt-6">
                  Get Personalized Sydney Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Buy in Sydney?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our Sydney-based experts are here to guide you through every step of the home buying process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8">
              Start Your Sydney Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Call Our Sydney Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}