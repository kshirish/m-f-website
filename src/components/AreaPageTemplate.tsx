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
import { getAreaById, getMajorSuburbsForArea } from "@/constants/common";
import { Area } from "@/constants/types";

// Icon mapping for services
const iconMap = {
  Home,
  Building,
  Star,
  Users,
  CheckCircle,
};

interface AreaPageProps {
  areaId: string;
}

export default function AreaPageTemplate({ areaId }: AreaPageProps) {
  const navigate = useNavigate();

  // Get area data from constants
  const areaData = getAreaById(areaId);
  if (!areaData) {
    return <div>Area not found</div>;
  }

  // Get major suburbs for this area
  const majorSuburbs = getMajorSuburbsForArea(areaId);

  // Convert stats to array format with icons
  const areaStats = [
    {
      icon: Users,
      value: areaData.stats.clients,
      label: areaData.statsLabels.clients,
    },
    {
      icon: Home,
      value: areaData.stats.loans,
      label: areaData.statsLabels.loans,
    },
    {
      icon: Building,
      value: areaData.stats.suburbs,
      label: areaData.statsLabels.suburbs,
    },
    {
      icon: Star,
      value: areaData.stats.rating,
      label: areaData.statsLabels.rating,
    },
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
      <section
        className={`relative py-20 bg-gradient-to-br ${areaData.gradient} text-white overflow-hidden`}
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src={areaData.heroImage}
            alt={`${areaData.name} area`}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/90 text-gray-800 hover:bg-white border border-white/20">
              <MapPin className="w-4 h-4 mr-2" />
              {areaData.tagline}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {areaData.displayName.split(" ").slice(0, -2).join(" ")}
              <span className="block text-orange-400">
                {areaData.displayName.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              {areaData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-gray-900 hover:bg-gray-50 px-8 font-semibold"
              >
                Get {areaData.name} Home Loan Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 font-semibold"
              >
                <Phone className="mr-2 w-5 h-5" />
                {areaData.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Area Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {areaData.name} by the Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {areaStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${areaData.accentColor}-600 to-${areaData.accentColor}-700 rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Area Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {areaData.name}-Specific Services
            </h2>
            <p className="text-xl text-gray-600">
              Local expertise for {areaData.name}'s unique property market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areaData.services.map((service, index) => {
              const IconComponent = service.icon
                ? iconMap[service.icon as keyof typeof iconMap]
                : CheckCircle;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <IconComponent
                        className={`w-5 h-5 text-${areaData.accentColor}-500`}
                      />
                      <span>{service.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Suburbs Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {areaData.name} Suburbs We Serve
            </h2>
            <p className="text-xl text-gray-600">
              From the CBD to the outer suburbs, we serve clients across Greater{" "}
              {areaData.name}
            </p>
          </div>

          {/* Major Suburbs with dedicated pages */}
          {majorSuburbs.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Featured {areaData.name} Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {majorSuburbs.map((suburb, index) => (
                  <Card
                    key={index}
                    className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:bg-${areaData.accentColor}-50 cursor-pointer group`}
                    onClick={() => navigate(suburb.route)}
                  >
                    <CardContent className="p-0">
                      <div
                        className={`w-10 h-10 bg-${areaData.accentColor}-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-${areaData.accentColor}-200 transition-colors`}
                      >
                        <MapPin
                          className={`w-5 h-5 text-${areaData.accentColor}-600`}
                        />
                      </div>
                      <p className="font-medium mb-2">{suburb.name}</p>
                      <p
                        className={`text-xs text-gray-500 group-hover:text-${areaData.accentColor}-600 transition-colors`}
                      >
                        View Details →
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Other Suburbs */}
          {areaData.otherSuburbs.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-4 text-center">
                Other {areaData.name} Areas We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {areaData.otherSuburbs.map((suburb, index) => (
                  <Card
                    key={index}
                    className={`p-4 text-center hover:shadow-md transition-shadow hover:bg-${areaData.accentColor}-50 cursor-pointer`}
                  >
                    <CardContent className="p-0">
                      <MapPin
                        className={`w-4 h-4 mx-auto mb-2 text-${areaData.accentColor}-600`}
                      />
                      <p className="text-sm font-medium">{suburb}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your suburb? We serve all of Greater {areaData.name}!
            </p>
            <Button
              variant="outline"
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  // If no contact section on current page, navigate to home with contact focus
                  window.location.href = "/#contact";
                }
              }}
            >
              Contact Us About Your Area
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us for Your {areaData.name} Property?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just mortgage brokers - we're your local property
              finance experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Market Knowledge",
                description: `Deep understanding of ${areaData.name}'s property market trends and opportunities`,
                icon: MapPin,
              },
              {
                title: "Competitive Rates",
                description:
                  "Access to exclusive deals and competitive rates from multiple lenders",
                icon: Star,
              },
              {
                title: "End-to-End Service",
                description:
                  "From pre-approval to settlement, we handle every step of your home loan journey",
                icon: CheckCircle,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${areaData.accentColor}-600 to-${areaData.accentColor}-700 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 bg-gradient-to-r from-${areaData.accentColor}-600 to-${areaData.accentColor}-700 text-white`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started in {areaData.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert team help you secure the perfect home loan for your{" "}
            {areaData.name} property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8"
            >
              Get Your Free Quote Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8"
            >
              <Phone className="mr-2 w-5 h-5" />
              {areaData.phone}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
