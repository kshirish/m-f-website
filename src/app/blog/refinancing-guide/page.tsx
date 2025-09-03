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
  RefreshCw,
  DollarSign,
  Calculator,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Phone,
  FileText,
  Target,
  Percent,
} from "lucide-react";

export default function RefinancingGuidePage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  const tableOfContents = [
    { id: "why-refinance", title: "Why Refinance?" },
    { id: "when-to-refinance", title: "When to Refinance" },
    { id: "refinancing-costs", title: "Refinancing Costs" },
    { id: "the-process", title: "The Refinancing Process" },
    { id: "choosing-lender", title: "Choosing a New Lender" },
    { id: "common-mistakes", title: "Common Mistakes" },
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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
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
                Refinancing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Refinancing in 2024: How to Save Thousands on Your Mortgage
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-orange-100 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Michael Chen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>12 March 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>6 min read</span>
                </div>
              </div>

              <p className="text-xl text-orange-100 max-w-3xl">
                With interest rates fluctuating, now could be the perfect time
                to refinance. Learn what you need to know before making the
                switch and how to save thousands.
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
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Refinancing Guide"
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed mb-0">
                    Refinancing your home loan can potentially save you
                    thousands of dollars over the life of your loan. With the
                    current market conditions and competitive rates available,
                    2024 presents excellent opportunities for homeowners to
                    review their mortgage arrangements.
                  </p>
                </div>

                {/* Key Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-orange-600 mb-2">
                        $15,000
                      </div>
                      <p className="text-sm text-gray-600">
                        Average savings from refinancing
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        0.5%
                      </div>
                      <p className="text-sm text-gray-600">
                        Rate difference worth refinancing
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        30 days
                      </div>
                      <p className="text-sm text-gray-600">
                        Typical refinancing timeframe
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Why Refinance Section */}
                <section id="why-refinance" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <RefreshCw className="w-8 h-8 mr-3 text-orange-600" />
                    Why Refinance?
                  </h2>

                  <p className="text-lg mb-6">
                    There are several compelling reasons why homeowners choose
                    to refinance their mortgages:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-600">
                          <DollarSign className="w-5 h-5 mr-2" />
                          Lower Interest Rates
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Secure a lower rate to reduce monthly payments and
                          total interest paid.
                        </p>
                        <div className="bg-green-50 p-4 rounded">
                          <p className="font-semibold text-sm">
                            Example Savings:
                          </p>
                          <p className="text-sm">
                            $500k loan: 5.5% to 4.5% = $2,500/year savings
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-blue-600">
                          <Target className="w-5 h-5 mr-2" />
                          Better Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Offset accounts
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Redraw facilities
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            No monthly fees
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Extra repayment options
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-purple-600">
                          <TrendingUp className="w-5 h-5 mr-2" />
                          Access Equity
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Use your property's increased value for:
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li>• Home renovations</li>
                          <li>• Investment property purchase</li>
                          <li>• Debt consolidation</li>
                          <li>• Personal investments</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-orange-600">
                          <FileText className="w-5 h-5 mr-2" />
                          Consolidate Debt
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Combine high-interest debts into your lower-rate
                          mortgage:
                        </p>
                        <div className="bg-orange-50 p-3 rounded text-sm">
                          <p>Credit cards: 20% → Mortgage: 5.5%</p>
                          <p className="font-semibold text-orange-600">
                            Potential significant savings
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* When to Refinance */}
                <section id="when-to-refinance" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Clock className="w-8 h-8 mr-3 text-blue-600" />
                    When to Refinance
                  </h2>

                  <p className="text-lg mb-6">
                    Timing is crucial when refinancing. Here are the key
                    indicators that it might be time to switch:
                  </p>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle className="text-green-600">
                          Rate Differential
                        </CardTitle>
                        <CardDescription>
                          When the difference makes financial sense
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-green-600">
                              ✓ Worth Considering:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• 0.5% or more rate difference</li>
                              <li>• Significant feature improvements</li>
                              <li>• Lower ongoing fees</li>
                              <li>• Better customer service</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-red-600">
                              ✗ Probably Not Worth It:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Less than 0.25% difference</li>
                              <li>• High exit/entry costs</li>
                              <li>• Close to loan maturity</li>
                              <li>• Recent credit issues</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="text-blue-600">
                          Market Conditions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-blue-50 p-4 rounded mb-4">
                          <h4 className="font-semibold mb-2">
                            Current Market (March 2024):
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Competitive lending environment</li>
                            <li>• Banks competing for quality borrowers</li>
                            <li>• Cashback offers available</li>
                            <li>• Rate cuts expected by some economists</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Refinancing Costs */}
                <section id="refinancing-costs" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Percent className="w-8 h-8 mr-3 text-purple-600" />
                    Refinancing Costs
                  </h2>

                  <p className="text-lg mb-6">
                    Understanding the costs involved helps you calculate whether
                    refinancing will save you money:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">
                          Potential Costs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">
                              Exit fees (old lender)
                            </span>
                            <span className="text-sm font-semibold">
                              $0 - $500
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Application fees</span>
                            <span className="text-sm font-semibold">
                              $0 - $600
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Valuation fees</span>
                            <span className="text-sm font-semibold">
                              $0 - $300
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">Legal fees</span>
                            <span className="text-sm font-semibold">
                              $200 - $800
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm">
                              Mortgage registration
                            </span>
                            <span className="text-sm font-semibold">
                              $100 - $200
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-600">
                          Potential Savings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-green-50 p-4 rounded mb-4">
                          <h4 className="font-semibold mb-2">
                            Example Calculation:
                          </h4>
                          <p className="text-sm mb-2">Loan amount: $500,000</p>
                          <p className="text-sm mb-2">
                            Rate reduction: 5.5% to 4.5%
                          </p>
                          <p className="text-sm mb-2">Annual saving: $5,000</p>
                          <p className="text-sm mb-2">
                            Refinancing costs: $1,500
                          </p>
                          <p className="text-sm font-semibold text-green-600">
                            Break-even: 3.6 months
                          </p>
                        </div>
                        <div className="bg-green-100 p-3 rounded">
                          <p className="text-sm font-semibold text-green-700">
                            Net savings over 5 years: $23,500
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-lg text-center mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Explore Refinancing?
                  </h3>
                  <p className="text-lg mb-6">
                    Our mortgage brokers can help you compare options and
                    calculate potential savings. Get a free refinancing
                    assessment today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex items-center"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Refinancing Calculator
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center border-white text-white hover:bg-white hover:text-orange-600"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Free Assessment
                    </Button>
                  </div>
                </div>

                {/* Article Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary">Refinancing</Badge>
                  <Badge variant="secondary">Interest Rates</Badge>
                  <Badge variant="secondary">Mortgage Switch</Badge>
                  <Badge variant="secondary">Savings</Badge>
                  <Badge variant="secondary">Home Loans</Badge>
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
                          className="block w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-colors py-1"
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
                        <h4 className="font-medium text-sm mb-2 hover:text-orange-600">
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
                <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      Refinancing Expert
                    </CardTitle>
                    <CardDescription className="text-green-100 mb-4">
                      Get personalized advice on whether refinancing is right
                      for you.
                    </CardDescription>
                    <Button variant="secondary" className="w-full">
                      Speak to Expert
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
