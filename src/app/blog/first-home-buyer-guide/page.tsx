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
  Home,
  DollarSign,
  FileText,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Calculator,
  Users,
  Phone,
} from "lucide-react";

export default function FirstHomeBuyerGuidePage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  const tableOfContents = [
    { id: "getting-started", title: "Getting Started" },
    { id: "deposit-requirements", title: "Deposit Requirements" },
    { id: "government-grants", title: "Government Grants & Schemes" },
    { id: "loan-types", title: "Types of Home Loans" },
    { id: "pre-approval", title: "Getting Pre-Approval" },
    { id: "property-search", title: "Searching for Property" },
    { id: "application-process", title: "Application Process" },
    { id: "settlement", title: "Settlement Process" },
  ];

  const relatedPosts = [
    {
      id: "refinancing-guide",
      title: "Refinancing in 2024: How to Save Thousands",
      excerpt:
        "With interest rates fluctuating, now could be the perfect time to refinance.",
      readTime: "6 min read",
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
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-40">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300/20 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/blog")}
              className="mb-6 text-white hover:bg-white/10 border border-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            <div className="mb-6">
              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 mb-6 text-sm px-4 py-2">
                <Home className="w-4 h-4 mr-2" />
                First Home Buyers Guide
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Complete First Home Buyer Guide for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                  2024
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <User className="w-5 h-5" />
                  <span>Sarah Mitchell</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <Calendar className="w-5 h-5" />
                  <span>15 March 2024</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min read</span>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl">
                Everything you need to know about buying your first home in
                Australia, from deposits and grants to choosing the right loan.
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
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                    alt="First Home Buyer Guide"
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Introduction */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <p className="text-lg leading-relaxed mb-0">
                    Buying your first home is one of life's biggest milestones
                    and financial decisions. With the right knowledge and
                    preparation, you can navigate the process with confidence.
                    This comprehensive guide covers everything first-time buyers
                    need to know in 2024.
                  </p>
                </div>

                {/* Getting Started Section */}
                <section id="getting-started" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Home className="w-8 h-8 mr-3 text-blue-600" />
                    Getting Started
                  </h2>

                  <p className="text-lg mb-6">
                    Before you start house hunting, it's crucial to understand
                    your financial position and what you can realistically
                    afford. Here's where to begin:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Calculator className="w-5 h-5 mr-2 text-green-600" />
                          Assess Your Finances
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Calculate your borrowing capacity
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Review your credit score
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Gather financial documents
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Create a savings plan
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-blue-600" />
                          Required Documents
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Recent payslips (3 months)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Bank statements (3-6 months)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Tax returns (2 years)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Identification documents
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Deposit Requirements */}
                <section id="deposit-requirements" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <DollarSign className="w-8 h-8 mr-3 text-green-600" />
                    Deposit Requirements
                  </h2>

                  <p className="text-lg mb-6">
                    The deposit is typically the largest hurdle for first home
                    buyers. Here's what you need to know about deposit
                    requirements in 2024:
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">
                          Standard Deposit: 20%
                        </h3>
                        <p className="text-yellow-700">
                          A 20% deposit allows you to avoid Lenders Mortgage
                          Insurance (LMI) and access better interest rates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center">
                          5% Deposit
                        </CardTitle>
                        <CardDescription className="text-center">
                          Minimum with LMI
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600">
                          Possible with some lenders but requires LMI and higher
                          rates
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-blue-500">
                      <CardHeader>
                        <CardTitle className="text-center text-blue-600">
                          10% Deposit
                        </CardTitle>
                        <CardDescription className="text-center">
                          Common choice
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600">
                          Good balance between affordability and loan terms
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-center text-green-600">
                          20% Deposit
                        </CardTitle>
                        <CardDescription className="text-center">
                          Ideal scenario
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600">
                          No LMI, better rates, and more lender options
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Government Grants */}
                <section id="government-grants" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-3 text-purple-600" />
                    Government Grants & Schemes
                  </h2>

                  <p className="text-lg mb-6">
                    The Australian government offers several schemes to help
                    first home buyers get into the property market:
                  </p>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle>
                          First Home Loan Deposit Scheme (FHLDS)
                        </CardTitle>
                        <CardDescription>
                          Government guarantee allowing 5% deposits
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Buy with just a 5% deposit
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Avoid Lenders Mortgage Insurance
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            Income caps apply ($90k individual, $120k couples)
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle>First Home Owner Grant (FHOG)</CardTitle>
                        <CardDescription>
                          State-based grants for new home purchases
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Grant amounts vary by state:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <p className="font-semibold">NSW</p>
                            <p className="text-sm">$10,000</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold">VIC</p>
                            <p className="text-sm">$10,000</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold">QLD</p>
                            <p className="text-sm">$15,000</p>
                          </div>
                          <div className="text-center">
                            <p className="font-semibold">WA</p>
                            <p className="text-sm">$10,000</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Loan Types */}
                <section id="loan-types" className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <FileText className="w-8 h-8 mr-3 text-orange-600" />
                    Types of Home Loans
                  </h2>

                  <p className="text-lg mb-6">
                    Understanding different loan types will help you choose the
                    best option for your situation:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-blue-600">
                          Variable Rate Loans
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Interest rate can go up or down with market
                          conditions.
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-green-600">
                            ✓ Pros:
                          </p>
                          <ul className="text-sm text-gray-600 ml-4">
                            <li>• Often lower initial rates</li>
                            <li>• Flexible features available</li>
                            <li>• Benefit from rate decreases</li>
                          </ul>
                          <p className="text-sm font-medium text-red-600 mt-3">
                            ✗ Cons:
                          </p>
                          <ul className="text-sm text-gray-600 ml-4">
                            <li>• Rate can increase</li>
                            <li>• Payment uncertainty</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-purple-600">
                          Fixed Rate Loans
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          Interest rate stays the same for a set period (1-5
                          years).
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-green-600">
                            ✓ Pros:
                          </p>
                          <ul className="text-sm text-gray-600 ml-4">
                            <li>• Predictable payments</li>
                            <li>• Budget certainty</li>
                            <li>• Protection from rate rises</li>
                          </ul>
                          <p className="text-sm font-medium text-red-600 mt-3">
                            ✗ Cons:
                          </p>
                          <ul className="text-sm text-gray-600 ml-4">
                            <li>• Miss out if rates fall</li>
                            <li>• Limited flexibility</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center mb-12">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Start Your Home Buying Journey?
                  </h3>
                  <p className="text-lg mb-6">
                    Get expert advice tailored to your situation. Our mortgage
                    brokers can help you navigate the process and find the best
                    loan for your needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex items-center"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate Borrowing Power
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center border-white text-white hover:bg-white hover:text-blue-600"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Speak to an Expert
                    </Button>
                  </div>
                </div>

                {/* Article Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="secondary">First Home</Badge>
                  <Badge variant="secondary">Government Grants</Badge>
                  <Badge variant="secondary">Deposits</Badge>
                  <Badge variant="secondary">FHLDS</Badge>
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
                          className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
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
                        <h4 className="font-medium text-sm mb-2 hover:text-blue-600">
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
                      Need Personal Advice?
                    </CardTitle>
                    <CardDescription className="text-green-100 mb-4">
                      Ready to take the next step? Speak with one of our
                      mortgage experts.
                    </CardDescription>
                    <Button variant="secondary" className="w-full">
                      Get Expert Advice
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
