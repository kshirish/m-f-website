"use client";

import React from "react";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import { ImageWithFallback } from "@/ui/ImageWithFallback";
import { useRouter } from "next/navigation";
import { useRouterContext } from "@/hooks/useRouterContext";
import {
  Clock,
  User,
  Calendar,
  ArrowLeft,
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Home,
  Users,
  Phone,
  MapPin,
  Target,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function MarketUpdatesPage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  const tableOfContents = [
    { id: "national-overview", title: "National Overview" },
    { id: "capital-cities", title: "Capital Cities Performance" },
    { id: "interest-rates", title: "Interest Rate Impact" },
    { id: "buyer-sentiment", title: "Buyer Sentiment" },
    { id: "outlook", title: "Market Outlook" },
    { id: "opportunities", title: "Investment Opportunities" },
  ];

  const relatedPosts = [
    {
      id: "first-home-buyer-guide",
      title: "Complete First Home Buyer Guide for 2024",
      excerpt:
        "Everything you need to know about buying your first home in Australia.",
      readTime: "8 min read",
    },
    {
      id: "investment-property-tips",
      title: "Investment Property Tax Benefits",
      excerpt:
        "Maximize your investment returns by understanding the tax implications.",
      readTime: "7 min read",
    },
  ];

  const cityData = [
    { city: "Sydney", change: "+2.1%", median: "$1,485,000", trend: "up" },
    { city: "Melbourne", change: "+1.8%", median: "$1,021,000", trend: "up" },
    { city: "Brisbane", change: "+3.2%", median: "$825,000", trend: "up" },
    { city: "Perth", change: "+4.1%", median: "$695,000", trend: "up" },
    { city: "Adelaide", change: "+2.9%", median: "$785,000", trend: "up" },
    { city: "Canberra", change: "+1.5%", median: "$965,000", trend: "up" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/blog")}
              className="mb-6 text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            <div className="mb-6">
              <Badge className="bg-yellow-500 text-yellow-900 mb-4">
                Market Updates
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Australian Property Market Update: March 2024
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-indigo-100 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Sarah Mitchell</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>22 February 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>6 min read</span>
                </div>
              </div>

              <p className="text-xl text-indigo-100 max-w-3xl">
                Latest insights into property market trends, price movements,
                and what this means for buyers and investors across Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {/* Featured Image */}
                <div className="mb-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Australian Property Market Update"
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed mb-0">
                    The Australian property market continues to show resilience
                    despite economic headwinds. This comprehensive update
                    examines the latest trends, price movements, and what they
                    mean for buyers, sellers, and investors in the current
                    landscape.
                  </p>
                </div>

                {/* Key Market Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                  <Card className="text-center  border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        +2.3%
                      </div>
                      <p className="text-xs text-gray-600">
                        National Growth (YoY)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center  border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center mb-2">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        28 days
                      </div>
                      <p className="text-xs text-gray-600">
                        Avg. Days on Market
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center  border-l-purple-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center mb-2">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        72%
                      </div>
                      <p className="text-xs text-gray-600">Clearance Rate</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center  border-l-orange-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        5.45%
                      </div>
                      <p className="text-xs text-gray-600">
                        Avg. Interest Rate
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* National Overview */}
                <section id="national-overview" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <BarChart3 className="w-8 h-8 mr-3 text-indigo-600" />
                    National Overview
                  </h2>

                  <p className="text-lg mb-6">
                    The Australian property market showed continued strength in
                    early 2024, with national dwelling values rising 2.3%
                    year-on-year. This growth, while moderate, demonstrates the
                    market's resilience amid economic uncertainty.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className=" border-l-green-500">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-600">
                          <TrendingUp className="w-5 h-5 mr-2" />
                          Positive Trends
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Population growth driving demand
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Low unemployment supporting borrowing capacity
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Strong construction pipeline
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            International migration rebound
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className=" border-l-orange-500">
                      <CardHeader>
                        <CardTitle className="flex items-center text-orange-600">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          Challenges
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 mr-2 text-orange-500 mt-1 flex-shrink-0" />
                            Interest rate uncertainty
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 mr-2 text-orange-500 mt-1 flex-shrink-0" />
                            Cost of living pressures
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 mr-2 text-orange-500 mt-1 flex-shrink-0" />
                            Housing affordability concerns
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-4 h-4 mr-2 text-orange-500 mt-1 flex-shrink-0" />
                            Supply chain constraints
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Capital Cities Performance */}
                <section id="capital-cities" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <MapPin className="w-8 h-8 mr-3 text-blue-600" />
                    Capital Cities Performance
                  </h2>

                  <p className="text-lg mb-6">
                    Performance varied across capital cities, with Perth leading
                    growth while Sydney and Melbourne showed more moderate
                    increases:
                  </p>

                  <div className="space-y-4 mb-8">
                    {cityData.map((city) => (
                      <Card
                        key={city.city}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Home className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg">
                                  {city.city}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  Median House Price: {city.median}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div
                                className={`flex items-center space-x-1 ${
                                  city.trend === "up"
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {city.trend === "up" ? (
                                  <TrendingUp className="w-4 h-4" />
                                ) : (
                                  <TrendingDown className="w-4 h-4" />
                                )}
                                <span className="font-bold">{city.change}</span>
                              </div>
                              <p className="text-xs text-gray-500">
                                Year on Year
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-600">
                          Market Leaders
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">Perth</span>
                              <span className="text-green-600 font-bold">
                                +4.1%
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Strong mining sector and interstate migration
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">Brisbane</span>
                              <span className="text-green-600 font-bold">
                                +3.2%
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Olympics infrastructure and lifestyle appeal
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-blue-600">
                          Stable Performers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">Sydney</span>
                              <span className="text-blue-600 font-bold">
                                +2.1%
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Mature market with steady demand
                            </p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold">Melbourne</span>
                              <span className="text-blue-600 font-bold">
                                +1.8%
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              Recovery from pandemic impacts
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Interest Rates Impact */}
                <section id="interest-rates" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Target className="w-8 h-8 mr-3 text-purple-600" />
                    Interest Rate Impact
                  </h2>

                  <p className="text-lg mb-6">
                    The RBA's monetary policy continues to influence market
                    dynamics, with current rates at 4.35% affecting both buyer
                    sentiment and borrowing capacity.
                  </p>

                  <Card className=" border-l-purple-500 mb-6">
                    <CardHeader>
                      <CardTitle>Current Rate Environment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-purple-50 rounded">
                          <div className="text-2xl font-bold text-purple-600 mb-1">
                            4.35%
                          </div>
                          <p className="text-sm text-gray-600">RBA Cash Rate</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            5.45%
                          </div>
                          <p className="text-sm text-gray-600">
                            Avg. Variable Rate
                          </p>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            4.89%
                          </div>
                          <p className="text-sm text-gray-600">
                            Avg. Fixed Rate (3yr)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Market Outlook */}
                <section id="outlook" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                    Market Outlook
                  </h2>

                  <p className="text-lg mb-6">
                    Looking ahead, several factors will shape the property
                    market through 2024:
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-green-800 mb-4">
                      Expert Predictions for 2024:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        Continued moderate growth of 2-4% nationally
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        Regional markets may outperform capitals
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        Interest rates likely to stabilize or decrease
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-1 flex-shrink-0" />
                        First home buyer activity to increase
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg text-center mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Enter the Market?
                  </h3>
                  <p className="text-lg mb-6">
                    Whether you're buying your first home or investing in
                    property, our experts can help you navigate current market
                    conditions and secure competitive finance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex items-center"
                    >
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Market Analysis Tool
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center border-white text-white hover:bg-white hover:text-indigo-600"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Expert Consultation
                    </Button>
                  </div>
                </div>

                {/* Article Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary">Market Analysis</Badge>
                  <Badge variant="secondary">Property Prices</Badge>
                  <Badge variant="secondary">Trends</Badge>
                  <Badge variant="secondary">Forecast</Badge>
                  <Badge variant="secondary">Capital Cities</Badge>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="block w-full text-left text-sm text-gray-600 hover:text-indigo-600 transition-colors py-1"
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((post) => (
                      <div
                        key={post.id}
                        className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                        onClick={() => router.push(`/blog/${post.id}`)}
                      >
                        <h4 className="font-medium text-sm mb-2 hover:text-indigo-600">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      Market Insights
                    </CardTitle>
                    <CardDescription className="text-blue-100 mb-4">
                      Get personalized market insights and advice for your
                      property goals.
                    </CardDescription>
                    <Button variant="secondary" className="w-full">
                      Speak to Analyst
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
