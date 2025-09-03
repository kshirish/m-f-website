"use client";

import React, { useState } from "react";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Input } from "@/ui/input";
import { ImageWithFallback } from "@/ui/ImageWithFallback";
import { useRouter } from "next/navigation";
import { useRouterContext } from "@/hooks/useRouterContext";
import {
  Search,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Home,
  RefreshCw,
  BarChart3,
  CreditCard,
  Building,
  Users,
} from "lucide-react";

const blogPosts = [
  {
    id: "first-home-buyer-guide",
    title: "Complete First Home Buyer Guide for 2024",
    excerpt:
      "Everything you need to know about buying your first home in Australia, from deposits and grants to choosing the right loan.",
    author: "Sarah Mitchell",
    date: "15 March 2024",
    readTime: "8 min read",
    category: "First Home Buyers",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["First Home", "Government Grants", "Deposits", "FHLDS"],
  },
  {
    id: "investment-property-tips",
    title: "Investment Property Tax Benefits: What You Need to Know",
    excerpt:
      "Maximize your investment returns by understanding the tax implications and benefits of property investment in Australia.",
    author: "David Thompson",
    date: "10 March 2024",
    readTime: "7 min read",
    category: "Investment",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: [
      "Investment Property",
      "Tax Benefits",
      "Negative Gearing",
      "Depreciation",
    ],
  },
  {
    id: "refinancing-guide",
    title: "Refinancing in 2024: How to Save Thousands on Your Mortgage",
    excerpt:
      "With interest rates fluctuating, now could be the perfect time to refinance. Learn what you need to know before making the switch.",
    author: "Michael Chen",
    date: "12 March 2024",
    readTime: "6 min read",
    category: "Refinancing",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Refinancing", "Interest Rates", "Mortgage Switch", "Savings"],
  },
  {
    id: "market-updates",
    title: "Australian Property Market Update: March 2024",
    excerpt:
      "Latest insights into property market trends, price movements, and what this means for buyers and investors.",
    author: "Sarah Mitchell",
    date: "22 February 2024",
    readTime: "6 min read",
    category: "Market Updates",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Market Analysis", "Property Prices", "Trends", "Forecast"],
  },
  {
    id: "construction-loans-guide",
    title: "Construction Loans: Building Your Dream Home",
    excerpt:
      "A comprehensive guide to construction loans, from planning to completion. Understand the process and requirements.",
    author: "Sarah Mitchell",
    date: "20 February 2024",
    readTime: "9 min read",
    category: "Construction Loans",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Construction Loans", "Building", "Home Loans", "Planning"],
  },
  {
    id: "smsf-property-investment",
    title: "SMSF Property Investment: Maximizing Your Super",
    excerpt:
      "Learn how to use your self-managed super fund to invest in property and build wealth for retirement.",
    author: "David Thompson",
    date: "18 February 2024",
    readTime: "8 min read",
    category: "SMSF",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["SMSF", "Superannuation", "Property Investment", "Retirement"],
  },
  {
    id: "first-home-buyer-grants-2024",
    title: "First Home Buyer Grants and Schemes: Updated 2024",
    excerpt:
      "Complete breakdown of all available government grants and schemes for first home buyers across Australia.",
    author: "Michael Chen",
    date: "16 February 2024",
    readTime: "7 min read",
    category: "First Home Buyers",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["First Home Grants", "Government Schemes", "FHLDS", "Stamp Duty"],
  },
  {
    id: "when-to-refinance",
    title: "When is the Right Time to Refinance Your Mortgage?",
    excerpt:
      "Discover the key indicators that suggest it's time to refinance and how to time your refinance for maximum savings.",
    author: "Michael Chen",
    date: "10 February 2024",
    readTime: "6 min read",
    category: "Refinancing",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Refinancing Timing", "Interest Rates", "Mortgage Strategy"],
  },
];

const categories = [
  { name: "All Posts", count: 8, icon: BarChart3 },
  { name: "First Home Buyers", count: 2, icon: Home },
  { name: "Refinancing", count: 2, icon: RefreshCw },
  { name: "Investment", count: 1, icon: TrendingUp },
  { name: "Market Updates", count: 1, icon: BarChart3 },
  { name: "Construction Loans", count: 1, icon: Building },
  { name: "SMSF", count: 1, icon: Users },
];

const popularTopics = [
  { name: "First Home Buyers", count: 2, icon: Home },
  { name: "Refinancing", count: 2, icon: RefreshCw },
  { name: "Investment", count: 1, icon: TrendingUp },
  { name: "Market Updates", count: 1, icon: BarChart3 },
  { name: "Construction Loans", count: 1, icon: Building },
];

export default function BlogPage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [email, setEmail] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const latestPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Finance & Mortgage
              <span className="block text-yellow-300">Insights Blog</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Stay informed with expert insights, market updates, and practical
              advice on mortgages, property investment, and financial planning
              from Australia's trusted finance professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.name}
                  variant={
                    selectedCategory === category.name ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              {featuredPost && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
                  <Card
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => router.push(`/blog/${featuredPost.id}`)}
                  >
                    <div className="relative">
                      <Badge className="absolute top-4 left-4 z-10 bg-yellow-500 text-yellow-900">
                        Featured
                      </Badge>
                      <ImageWithFallback
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-4 text-sm mb-2">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{featuredPost.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3" variant="outline">
                        {featuredPost.category}
                      </Badge>
                      <CardTitle className="text-2xl mb-3 hover:text-blue-600 transition-colors">
                        {featuredPost.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-4">
                        {featuredPost.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredPost.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="group">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Latest Articles */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
                <div className="space-y-8">
                  {latestPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => router.push(`/blog/${post.id}`)}
                    >
                      <div className="grid grid-cols-1 gap-0">
                        <div className="">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl mb-3 hover:text-blue-600 transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="mb-4">
                            {post.excerpt}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{post.tags.length - 3} more
                              </Badge>
                            )}
                          </div>
                          <Button variant="outline" size="sm" className="group">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More Button */}
                {/* <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div> */}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Popular Topics */}
              <Card className="mt-16">
                <CardHeader>
                  <CardTitle>Popular Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {popularTopics.map((topic) => {
                    const IconComponent = topic.icon;
                    return (
                      <div
                        key={topic.name}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setSelectedCategory(topic.name)}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{topic.name}</span>
                        </div>
                        <Badge variant="secondary">{topic.count}</Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Need Personal Advice CTA */}
              <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg mb-2">
                    Need Personal Advice?
                  </CardTitle>
                  <CardDescription className="text-green-100 mb-4">
                    Ready to take the next step? Speak with one of our mortgage
                    experts.
                  </CardDescription>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Expert Advice
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
