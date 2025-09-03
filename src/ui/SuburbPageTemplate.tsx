"use client";

import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { ImageWithFallback } from "@/ui/ImageWithFallback";
import { Badge } from "@/ui/badge";
import { useRouterContext } from "@/hooks/useRouterContext";
import {
  MapPin,
  Phone,
  Users,
  Home,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { getSuburbById, getAreaById } from "@/constants/common";
import { useRouter } from "next/navigation";

interface SuburbPageTemplateProps {
  suburbId: string;
}

export default function SuburbPageTemplate({
  suburbId,
}: SuburbPageTemplateProps) {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  // Get suburb and area data from constants
  const suburbData = getSuburbById(suburbId);
  if (!suburbData) {
    return <div>Suburb not found</div>;
  }

  const areaData = getAreaById(suburbData.areaId);
  if (!areaData) {
    return <div>Area not found</div>;
  }

  // Get suburb-specific texts with fallbacks
  const texts = suburbData.pageTexts || {
    heroSubtitle: "Home Loans",
    primaryCTAButton: "Get {suburb} Quote",
    secondaryCTAButton: "Call Our Team",
    marketInsightsTitle: "{suburb} Market Insights",
    marketInsightsSubtitle: "Current market data for {suburb}",
    medianPriceLabel: "Median House Price",
    growthLabel: "Annual Growth",
    populationLabel: "Population",
    featuresTitle: "Why Choose {suburb}?",
    featuresSubtitle: "What makes {suburb} a great place to live",
    servicesTitle: "{suburb} Finance Services",
    servicesSubtitle: "Specialized lending solutions for {suburb} residents",
    servicesCTAButton: "Get {suburb} Quote",
    nearbyAreasTitle: "Nearby {area} Areas",
    nearbyAreasSubtitle: "We also serve these surrounding areas",
    finalCTATitle: "Ready to Buy in {suburb}?",
    finalCTADescription:
      "Our {suburb} specialists are here to guide you through every step of the home buying process.",
    finalPrimaryCTA: "Start Your {suburb} Application",
    finalSecondaryCTA: "Contact Our {suburb} Team",
  };

  // Get services with fallbacks
  const services = suburbData.services || [
    {
      title: "First Home Buyer Loans",
      description: `Special rates for first-time buyers in ${suburbData.name}`,
    },
    {
      title: "Investment Property Loans",
      description: `Capitalize on ${suburbData.name}'s rental market potential`,
    },
    {
      title: "Refinancing",
      description: `Switch to better rates for your ${suburbData.name} property`,
    },
    {
      title: "Property Valuation",
      description: `Free property valuations for ${suburbData.name} homes`,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className={`relative py-20 bg-gradient-to-br ${areaData.gradient} text-white overflow-hidden`}
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src={`https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`}
            alt={`${suburbData.name} area`}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              {suburbData.name}, {areaData.name} {areaData.state}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {suburbData.name}
              <span className="block text-yellow-300">
                {texts.heroSubtitle}
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {suburbData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8"
                onClick={() => scrollToSection("contact")}
              >
                {texts.primaryCTAButton.replace("{suburb}", suburbData.name)}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-900 hover:bg-white/10 px-8"
                onClick={() => scrollToSection("contact")}
              >
                <Phone className="mr-2 w-5 h-5" />
                {texts.secondaryCTAButton}
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
              {texts.marketInsightsTitle.replace("{suburb}", suburbData.name)}
            </h2>
            <p className="text-xl text-gray-600">
              {texts.marketInsightsSubtitle.replace(
                "{suburb}",
                suburbData.name
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {suburbData.medianPrice}
                </div>
                <div className="text-sm text-gray-600">
                  {texts.medianPriceLabel}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {suburbData.growth}
                </div>
                <div className="text-sm text-gray-600">{texts.growthLabel}</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {suburbData.population}
                </div>
                <div className="text-sm text-gray-600">
                  {texts.populationLabel}
                </div>
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
              {texts.featuresTitle.replace("{suburb}", suburbData.name)}
            </h2>
            <p className="text-xl text-gray-600">
              {texts.featuresSubtitle.replace("{suburb}", suburbData.name)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suburbData.features.map((feature, index) => (
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
              {texts.servicesTitle.replace("{suburb}", suburbData.name)}
            </h2>
            <p className="text-xl text-gray-600">
              {texts.servicesSubtitle.replace("{suburb}", suburbData.name)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Map service titles to appropriate service pages for internal linking
              const getServiceLink = (title: string) => {
                if (
                  title.toLowerCase().includes("first home buyer") ||
                  title.toLowerCase().includes("home loan")
                ) {
                  return "/services/home-loans";
                } else if (
                  title.toLowerCase().includes("investment") ||
                  title.toLowerCase().includes("property")
                ) {
                  return "/services/commercial-finance";
                } else if (title.toLowerCase().includes("refinanc")) {
                  return "/services/personal-finance";
                } else {
                  return "/services/home-loans"; // Default fallback
                }
              };

              return (
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
                  <CardContent className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => router.push(getServiceLink(service.title))}
                    >
                      Learn More About {service.title}
                    </Button>
                    <Button
                      variant="default"
                      className="w-full"
                      onClick={() => scrollToSection("contact")}
                    >
                      {texts.servicesCTAButton.replace(
                        "{suburb}",
                        suburbData.name
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {texts.nearbyAreasTitle.replace("{area}", areaData.name)}
            </h2>
            <p className="text-xl text-gray-600">{texts.nearbyAreasSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suburbData.nearbySuburbs.map((nearbySuburb, index) => (
              <Card
                key={index}
                className="p-4 text-center hover:shadow-md transition-shadow hover:bg-blue-50 cursor-pointer"
                onClick={() => {
                  // Convert suburb name to route - use kebab case
                  const suburbRoute = nearbySuburb
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, ""); // Remove special characters
                  router.push(`/areas/${areaData.id}/suburbs/${suburbRoute}`);
                }}
              >
                <CardContent className="p-0">
                  <MapPin className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                  <p className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    {nearbySuburb}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`py-20 bg-gradient-to-br ${areaData.gradient} text-white`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {texts.finalCTATitle.replace("{suburb}", suburbData.name)}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {texts.finalCTADescription.replace("{suburb}", suburbData.name)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8"
              onClick={() => scrollToSection("contact")}
            >
              {texts.primaryCTAButton.replace("{suburb}", suburbData.name)}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-900 hover:bg-white/10 px-8"
              onClick={() => scrollToSection("contact")}
            >
              {texts.finalSecondaryCTA.replace("{suburb}", suburbData.name)}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
