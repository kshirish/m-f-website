import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Badge } from "@/components/badge";
import {
  MapPin,
  Phone,
  Clock,
  Users,
  Home,
  Building,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
} from "lucide-react";

interface SydneySuburbPageProps {
  suburb: string;
  description: string;
  medianPrice: string;
  growth: string;
  population: string;
  features: string[];
  nearbySuburbs: string[];
  imageQuery: string;
}

export default function SydneySuburbPage({
  suburb,
  description,
  medianPrice,
  growth,
  population,
  features,
  nearbySuburbs,
  imageQuery,
}: SydneySuburbPageProps) {
  const services = [
    {
      title: "First Home Buyer Loans",
      description: `Special rates for first-time buyers in ${suburb}`,
    },
    {
      title: "Investment Property Loans",
      description: `Capitalize on ${suburb}'s rental market potential`,
    },
    {
      title: "Refinancing",
      description: `Switch to better rates for your ${suburb} property`,
    },
    {
      title: "Property Valuation",
      description: `Free property valuations for ${suburb} homes`,
    },
  ];

  const scrollToContact = () => {
    if (
      window.location.hash === "#home" ||
      window.location.hash === "" ||
      window.location.hash === "#"
    ) {
      // If we're on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.hash = "home";
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={`https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`}
            alt={`${suburb} area`}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              {suburb}, Sydney NSW
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {suburb}
              <span className="block text-yellow-300">Home Loans</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8"
                onClick={scrollToContact}
              >
                Get {suburb} Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-900 hover:bg-white/10 px-8"
                onClick={scrollToContact}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {suburb} Market Insights
            </h2>
            <p className="text-xl text-gray-600">
              Current market data for {suburb}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {medianPrice}
                </div>
                <div className="text-sm text-gray-600">Median House Price</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {growth}
                </div>
                <div className="text-sm text-gray-600">Annual Growth</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {population}
                </div>
                <div className="text-sm text-gray-600">Population</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Area Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose {suburb}?
            </h2>
            <p className="text-xl text-gray-600">
              What makes {suburb} a great place to live
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                  <p className="font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for This Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {suburb} Finance Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized lending solutions for {suburb} residents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Home className="w-5 h-5 text-blue-600" />
                    <span>{service.title}</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Get {suburb} Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nearby Sydney Areas
            </h2>
            <p className="text-xl text-gray-600">
              We also serve these surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbySuburbs.map((nearbySuburb, index) => (
              <Card
                key={index}
                className="p-4 text-center hover:shadow-md transition-shadow hover:bg-blue-50 cursor-pointer"
                onClick={() => {
                  const suburbRoutes: { [key: string]: string } = {
                    "Sydney CBD": "#areas/sydney/cbd",
                    Parramatta: "#areas/sydney/parramatta",
                    Penrith: "#areas/sydney/penrith",
                    Bondi: "#areas/sydney/bondi",
                    Manly: "#areas/sydney/manly",
                    Chatswood: "#areas/sydney/chatswood",
                  };
                  window.location.hash =
                    suburbRoutes[nearbySuburb] || "#areas/sydney";
                }}
              >
                <CardContent className="p-0">
                  <MapPin className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium">{nearbySuburb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Buy in {suburb}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our {suburb} specialists are here to guide you through every step of
            the home buying process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8"
              onClick={scrollToContact}
            >
              Start Your {suburb} Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-900 hover:bg-white/10 px-8"
              onClick={scrollToContact}
            >
              Contact Our {suburb} Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
