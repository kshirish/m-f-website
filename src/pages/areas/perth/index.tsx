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

export default function PerthPage() {
  const navigate = useNavigate();
  const perthStats = [
    { icon: Users, value: "300+", label: "Perth Clients Served" },
    { icon: Home, value: "$180M+", label: "In Perth Home Loans" },
    { icon: Building, value: "20+", label: "Perth Suburbs Covered" },
    { icon: Star, value: "4.8/5", label: "Perth Client Rating" },
  ];

  const majorSuburbs = [
    { name: "Perth CBD", route: "/areas/perth/suburbs/cbd" },
    { name: "Fremantle", route: "/areas/perth/suburbs/fremantle" },
    { name: "Joondalup", route: "/areas/perth/suburbs/joondalup" },
    { name: "Subiaco", route: "/areas/perth/suburbs/subiaco" },
    { name: "Mandurah", route: "/areas/perth/suburbs/mandurah" },
    { name: "Rockingham", route: "/areas/perth/suburbs/rockingham" },
  ];

  const otherSuburbs = [
    "Midland",
    "Armadale",
    "Wanneroo",
    "Stirling",
    "Canning",
    "Swan",
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
      <section className="relative py-20 bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Perth skyline"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              <MapPin className="w-4 h-4 mr-2" />
              Perth, Western Australia
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Perth Mortgage
              <span className="block text-orange-300">& Finance Experts</span>
            </h1>

            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your trusted mortgage brokers serving Perth and surrounding
              suburbs. We understand the Western Australian property market and
              help you secure the best home loan deals across Perth's diverse
              neighborhoods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4"
              >
                Get Free Perth Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate("/calculator")}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                (08) 9000 0000
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {perthStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perth Suburbs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perth Suburbs We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the bustling CBD to coastal suburbs and growing outer
                areas, we provide expert mortgage services across Perth's
                diverse regions.
              </p>
            </div>

            {/* Major Suburbs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Major Perth Areas
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
                        <ArrowRight className="w-5 h-5 text-orange-600" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => navigate(suburb.route)}
                        className="w-full bg-orange-600 hover:bg-orange-700"
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
                Other Perth Suburbs We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {otherSuburbs.map((suburb, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    {suburb}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Don't see your suburb? We serve all Perth metropolitan areas and
                surrounding regions.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-orange-600 hover:bg-orange-700"
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
                Perth Mortgage Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive financial solutions tailored for Perth residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "First Home Buyer Perth",
                  description: "Special programs for Perth first-time buyers",
                  icon: Home,
                },
                {
                  title: "Perth Investment Loans",
                  description:
                    "Capitalize on Perth's rental market opportunities",
                  icon: Building,
                },
                {
                  title: "Perth Refinancing",
                  description: "Switch to better rates for your Perth property",
                  icon: Star,
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-orange-600 mb-4" />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Us for Your Perth Home Loan?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                "Local Perth market expertise",
                "Access to 50+ lenders",
                "No broker fees for most loans",
                "Pre-approval specialists",
                "Perth property insights",
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
              Get Your Free Perth Quote Today
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
              Ready to Get Started in Perth?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our Perth mortgage specialists today for expert advice and
              competitive home loan rates.
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
