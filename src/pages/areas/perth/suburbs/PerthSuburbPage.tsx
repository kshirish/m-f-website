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
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
} from "lucide-react";

interface PerthSuburbPageProps {
  suburb: string;
  description: string;
  medianPrice: string;
  growth: string;
  population: string;
  features: string[];
  nearbySuburbs: string[];
  imageQuery: string;
}

export default function PerthSuburbPage({
  suburb,
  description,
  medianPrice,
  growth,
  population,
  features,
  nearbySuburbs,
}: PerthSuburbPageProps) {
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
      <section className="relative py-20 bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={`https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`}
            alt={`${suburb} area`}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              <MapPin className="w-4 h-4 mr-2" />
              {suburb}, Perth, WA
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {suburb} Home Loans
              <span className="block text-orange-300">& Mortgage Services</span>
            </h1>

            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4"
              >
                Get Free {suburb} Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4"
                onClick={scrollToContact}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Area Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {suburb} Market Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle>Median House Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">
                    {medianPrice}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Annual Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {growth}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Population</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {population}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Area Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Why Choose {suburb}?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Suburbs */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Nearby Suburbs
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbySuburbs.map((nearbySuburb, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    {nearbySuburb}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {suburb} Mortgage Services
              </h2>
              <p className="text-xl text-gray-600">
                Specialized financial solutions for {suburb} residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Us for Your {suburb} Home Loan?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                `Local ${suburb} market expertise`,
                "Access to 50+ lenders",
                "No broker fees for most loans",
                "Pre-approval specialists",
                `${suburb} property insights`,
                "Same-day loan assessments",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 px-8 py-4"
            >
              Get Your Free {suburb} Quote Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Ready to Get Started in {suburb}?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our {suburb} mortgage specialists today for expert advice
              and competitive home loan rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (08) 9000 0000
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
