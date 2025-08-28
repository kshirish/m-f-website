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

export default function ParramattaPage() {
  const navigate = useNavigate();
  const parramattaStats = [
    { icon: Users, value: "350+", label: "Parramatta Clients Served" },
    { icon: Home, value: "$150M+", label: "In Parramatta Home Loans" },
    { icon: Building, value: "20+", label: "Parramatta Areas Covered" },
    { icon: Star, value: "4.9/5", label: "Parramatta Client Rating" },
  ];

  const majorSuburbs = [
    { name: "Parramatta CBD", route: "/areas/parramatta/suburbs/cbd" },
    { name: "Westmead", route: "/areas/parramatta/suburbs/westmead" },
    { name: "Harris Park", route: "/areas/parramatta/suburbs/harris-park" },
    { name: "Granville", route: "/areas/parramatta/suburbs/granville" },
    { name: "Merrylands", route: "/areas/parramatta/suburbs/merrylands" },
    { name: "Auburn", route: "/areas/parramatta/suburbs/auburn" },
  ];

  const otherSuburbs = [
    "Rosehill",
    "North Parramatta",
    "South Granville",
    "Clyde",
    "Dundas",
    "Telopea",
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
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Parramatta area"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <MapPin className="w-4 h-4 mr-2" />
              Parramatta, Western Sydney, NSW
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parramatta Mortgage
              <span className="block text-blue-300">& Finance Experts</span>
            </h1>

            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your trusted mortgage brokers serving Parramatta and the greater
              Western Sydney region. We understand the local property market and
              help you secure the best home loan deals across this thriving
              business hub.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4"
              >
                Get Free Parramatta Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate("/calculator")}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                (02) 9600 0000
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {parramattaStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parramatta Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Parramatta Areas We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the bustling CBD to surrounding suburbs and multicultural
                communities, we provide expert mortgage services across the
                greater Parramatta region.
              </p>
            </div>

            {/* Major Areas */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Major Parramatta Areas
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
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => navigate(suburb.route)}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        View {suburb.name} Services
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Other Areas */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Other Parramatta Areas We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {otherSuburbs.map((suburb, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    {suburb}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                Don't see your area? We serve all Parramatta region and
                surrounding communities.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700"
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
                Parramatta Mortgage Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive financial solutions tailored for Parramatta
                residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "First Home Buyer Parramatta",
                  description:
                    "Special programs for Parramatta first-time buyers",
                  icon: Home,
                },
                {
                  title: "Parramatta Investment Loans",
                  description:
                    "Capitalize on Parramatta's growth opportunities",
                  icon: Building,
                },
                {
                  title: "Parramatta Refinancing",
                  description:
                    "Switch to better rates for your Parramatta property",
                  icon: Star,
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-blue-600 hover:bg-blue-700"
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
              Why Choose Us for Your Parramatta Home Loan?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                "Local Parramatta market expertise",
                "Access to 50+ lenders",
                "No broker fees for most loans",
                "Pre-approval specialists",
                "Parramatta property insights",
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
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4"
            >
              Get Your Free Parramatta Quote Today
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
              Ready to Get Started in Parramatta?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our Parramatta mortgage specialists today for expert
              advice and competitive home loan rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (02) 9600 0000
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4"
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
