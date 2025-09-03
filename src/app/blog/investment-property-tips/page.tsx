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
  TrendingUp,
  DollarSign,
  FileText,
  CheckCircle,
  AlertCircle,
  Calculator,
  Users,
  Phone,
  Building,
  PieChart,
  Target,
} from "lucide-react";

export default function InvestmentPropertyTipsPage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  const tableOfContents = [
    { id: "negative-gearing", title: "Negative Gearing Explained" },
    { id: "depreciation", title: "Depreciation Benefits" },
    { id: "deductible-expenses", title: "Deductible Expenses" },
    { id: "capital-gains", title: "Capital Gains Tax" },
    { id: "record-keeping", title: "Record Keeping" },
    { id: "professional-advice", title: "Getting Professional Advice" },
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
      id: "refinancing-guide",
      title: "Refinancing in 2024: How to Save Thousands",
      excerpt:
        "With interest rates fluctuating, now could be the perfect time to refinance.",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
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
                Investment
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Investment Property Tax Benefits: What You Need to Know
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-green-100 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>David Thompson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>10 March 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>7 min read</span>
                </div>
              </div>

              <p className="text-xl text-green-100 max-w-3xl">
                Maximize your investment returns by understanding the tax
                implications and benefits of property investment in Australia.
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
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="Investment Property Tax Benefits"
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed mb-0">
                    Property investment can be a powerful wealth-building
                    strategy, especially when you understand how to maximize the
                    tax benefits available. This guide covers the key tax
                    implications and strategies that can help boost your
                    investment returns.
                  </p>
                </div>

                {/* Important Disclaimer */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">
                        Important Disclaimer
                      </h3>
                      <p className="text-yellow-700">
                        This information is general in nature and should not be
                        considered personal financial advice. Always consult
                        with a qualified tax advisor or accountant for advice
                        specific to your situation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Negative Gearing Section */}
                <section id="negative-gearing" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                    Negative Gearing Explained
                  </h2>

                  <p className="text-lg mb-6">
                    Negative gearing occurs when the costs of owning an
                    investment property exceed the rental income it generates.
                    This loss can be offset against your other taxable income.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-600">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          How It Works
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-4 rounded">
                            <p className="font-semibold">Example:</p>
                            <p className="text-sm">
                              Annual rental income: $20,000
                            </p>
                            <p className="text-sm">Annual expenses: $25,000</p>
                            <p className="text-sm text-green-600 font-semibold">
                              Tax deductible loss: $5,000
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="flex items-center text-blue-600">
                          <Target className="w-5 h-5 mr-2" />
                          Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Reduce your taxable income
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Lower your tax bill
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Improve cash flow through tax refund
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Build wealth through capital growth
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Depreciation Section */}
                <section id="depreciation" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Building className="w-8 h-8 mr-3 text-blue-600" />
                    Depreciation Benefits
                  </h2>

                  <p className="text-lg mb-6">
                    Depreciation allows you to claim tax deductions for the
                    decline in value of your investment property and its
                    fixtures and fittings over time.
                  </p>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-blue-600">
                          Building Depreciation (Capital Works)
                        </CardTitle>
                        <CardDescription>
                          2.5% per year for buildings constructed after 1987
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              What's Included:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Structural elements</li>
                              <li>• Roof and walls</li>
                              <li>• Flooring</li>
                              <li>• Built-in fixtures</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Example:</h4>
                            <div className="bg-blue-50 p-3 rounded">
                              <p className="text-sm">Building cost: $400,000</p>
                              <p className="text-sm">
                                Annual depreciation: $10,000
                              </p>
                              <p className="text-sm font-semibold text-blue-600">
                                Tax saving (37% bracket): $3,700/year
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-purple-600">
                          Plant & Equipment Depreciation
                        </CardTitle>
                        <CardDescription>
                          Diminishing value method for removable items
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              High Depreciation:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Dishwashers (20%)</li>
                              <li>• Washing machines (20%)</li>
                              <li>• Carpet (10%)</li>
                              <li>• Blinds (10%)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              Medium Depreciation:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Air conditioners (7.5%)</li>
                              <li>• Hot water systems (6.67%)</li>
                              <li>• Ceiling fans (7.5%)</li>
                              <li>• Light fittings (6.67%)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              Lower Depreciation:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Kitchen cabinets (5%)</li>
                              <li>• Bathroom fixtures (4%)</li>
                              <li>• Security systems (5%)</li>
                              <li>• Solar panels (6.67%)</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Deductible Expenses */}
                <section id="deductible-expenses" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <DollarSign className="w-8 h-8 mr-3 text-orange-600" />
                    Deductible Expenses
                  </h2>

                  <p className="text-lg mb-6">
                    Many expenses related to earning rental income can be
                    claimed as tax deductions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Loan Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Interest on loans
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Loan application fees
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Mortgage insurance
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Bank fees and charges
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Property Management
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Agent management fees
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Advertising for tenants
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Legal fees
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Accountant fees
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Maintenance & Repairs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Repairs and maintenance
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Council rates
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Water rates
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            Strata fees
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Capital Gains Tax */}
                <section id="capital-gains" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <PieChart className="w-8 h-8 mr-3 text-purple-600" />
                    Capital Gains Tax Considerations
                  </h2>

                  <p className="text-lg mb-6">
                    When you sell your investment property, you may be liable
                    for capital gains tax on any profit made. However, there are
                    strategies to minimize this:
                  </p>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-purple-500">
                      <CardHeader>
                        <CardTitle>50% CGT Discount</CardTitle>
                        <CardDescription>
                          Hold property for more than 12 months
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-purple-50 p-4 rounded mb-4">
                          <p className="text-sm font-semibold mb-2">Example:</p>
                          <p className="text-sm">Purchase price: $500,000</p>
                          <p className="text-sm">Sale price: $700,000</p>
                          <p className="text-sm">Capital gain: $200,000</p>
                          <p className="text-sm">
                            Taxable gain (50% discount): $100,000
                          </p>
                        </div>
                        <p className="text-sm text-gray-600">
                          The 50% discount can significantly reduce your tax
                          liability on investment properties held for more than
                          12 months.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Cost Base Inclusions</CardTitle>
                        <CardDescription>
                          Costs that can be added to reduce capital gains
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              Purchase Costs:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Stamp duty</li>
                              <li>• Legal fees</li>
                              <li>• Building inspections</li>
                              <li>• Conveyancing fees</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">
                              Improvement Costs:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Renovations</li>
                              <li>• Extensions</li>
                              <li>• Capital improvements</li>
                              <li>• Major repairs</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-lg text-center mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Invest in Property?
                  </h3>
                  <p className="text-lg mb-6">
                    Get expert advice on investment property finance and tax
                    strategies. Our specialists can help you maximize your
                    investment potential.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex items-center"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Investment Calculator
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center border-white text-white hover:bg-white hover:text-green-600"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Speak to a Specialist
                    </Button>
                  </div>
                </div>

                {/* Article Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary">Investment Property</Badge>
                  <Badge variant="secondary">Tax Benefits</Badge>
                  <Badge variant="secondary">Negative Gearing</Badge>
                  <Badge variant="secondary">Depreciation</Badge>
                  <Badge variant="secondary">Capital Gains</Badge>
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
                          className="block w-full text-left text-sm text-gray-600 hover:text-green-600 transition-colors py-1"
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
                        <h4 className="font-medium text-sm mb-2 hover:text-green-600">
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
                      Investment Specialist
                    </CardTitle>
                    <CardDescription className="text-blue-100 mb-4">
                      Get personalized advice on investment property finance and
                      tax strategies.
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
