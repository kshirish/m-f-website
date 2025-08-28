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
  Home,
  Building,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdelaidePage() {
  const navigate = useNavigate();
  const adelaideStats = [
    { icon: Users, value: "250+", label: "Adelaide Clients Served" },
    { icon: Home, value: "$120M+", label: "In Adelaide Home Loans" },
    { icon: Building, value: "18+", label: "Adelaide Suburbs Covered" },
    { icon: Star, value: "4.8/5", label: "Adelaide Client Rating" },
  ];

  const majorSuburbs = [
    { name: "Adelaide CBD", route: "/areas/adelaide/suburbs/cbd" },
    { name: "North Adelaide", route: "/areas/adelaide/suburbs/north-adelaide" },
    { name: "Glenelg", route: "/areas/adelaide/suburbs/glenelg" },
    { name: "Burnside", route: "/areas/adelaide/suburbs/burnside" },
    { name: "Unley", route: "/areas/adelaide/suburbs/unley" },
    { name: "Norwood", route: "/areas/adelaide/suburbs/norwood" },
  ];

  const otherSuburbs = [
    "Prospect",
    "Walkerville",
    "Goodwood",
    "Hyde Park",
    "Dulwich",
    "Kensington",
  ];

  const scrollToContact = () => {
    if (
      window.location.hash === "#home" ||
      window.location.hash === "" ||
      window.location.hash === "#"
    ) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
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
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-pink-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Adelaide skyline"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-pink-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              <MapPin className="w-4 h-4 mr-2" />
              Adelaide, South Australia
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adelaide Mortgage
              <span className="block text-red-300">& Finance Experts</span>
            </h1>

            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your trusted mortgage brokers serving Adelaide and surrounding
              suburbs. We understand South Australia's property market and help
              you secure the best home loan deals across Adelaide's charming
              neighborhoods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-red-900 hover:bg-red-50 px-8 py-4"
              >
                Get Free Adelaide Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate("/calculator")}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-900 px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                (08) 8000 0000
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {adelaideStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-red-300" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adelaide Suburbs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Adelaide Suburbs We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the historic CBD to leafy eastern suburbs and coastal
                areas, we provide expert mortgage services across Adelaide's
                diverse regions.
              </p>
            </div>

            {/* Major Suburbs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Major Adelaide Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {majorSuburbs.map((suburb, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {suburb.name}
                        <ArrowRight className="w-5 h-5 text-red-600" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => navigate(suburb.route)}
                        className="w-full bg-red-600 hover:bg-red-700"
                      >
                        View {suburb.name} Services
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Suburbs */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Other Adelaide Suburbs We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {otherSuburbs.map((suburb, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    {suburb}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Don't see your suburb? We serve all Adelaide metropolitan areas
                and surrounding regions.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-700"
              >
                Contact Us About Your Area
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Adelaide Mortgage Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive financial solutions tailored for Adelaide
                residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "First Home Buyer Adelaide",
                  description:
                    "Special programs for Adelaide first-time buyers",
                  icon: Home,
                },
                {
                  title: "Adelaide Investment Loans",
                  description:
                    "Capitalize on Adelaide's rental market opportunities",
                  icon: Building,
                },
                {
                  title: "Adelaide Refinancing",
                  description:
                    "Switch to better rates for your Adelaide property",
                  icon: Star,
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-red-600 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-red-600 hover:bg-red-700"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Us for Your Adelaide Home Loan?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                "Local Adelaide market expertise",
                "Access to 50+ lenders",
                "No broker fees for most loans",
                "Pre-approval specialists",
                "Adelaide property insights",
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
              className="bg-red-600 hover:bg-red-700 px-8 py-4"
            >
              Get Your Free Adelaide Quote Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Ready to Get Started in Adelaide?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our Adelaide mortgage specialists today for expert advice
              and competitive home loan rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-red-600 hover:bg-red-700 px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (08) 8000 0000
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4"
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
