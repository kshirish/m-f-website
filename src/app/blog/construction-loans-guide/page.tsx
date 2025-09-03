"use client";

import React from "react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouterContext } from "@/hooks/useRouterContext";

export default function ConstructionLoansGuidePage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-300/20 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mb-6 text-white hover:bg-white/10 border border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-red-400 text-white text-sm px-4 py-2">
              Construction Loans
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Construction Loans:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-pink-200">
                Building Your Dream Home
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-orange-100 mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <User className="mr-2 h-4 w-4" />
                <span>Sarah Mitchell</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                <span>20 February 2024</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="mr-2 h-4 w-4" />
                <span>9 min read</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed max-w-3xl">
              A comprehensive guide to construction loans, from planning to
              completion. Understand the process and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-200/30 to-orange-200/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="prose prose-lg max-w-none relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Construction site with building in progress"
                  className="w-full h-64 object-cover rounded-xl shadow-lg mb-8"
                />

                <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-gray-700 mb-0 leading-relaxed">
                    Building your dream home is an exciting journey, but it
                    requires careful financial planning. Construction loans
                    provide the funding you need during the building process,
                    but they work differently from traditional home loans.
                  </p>
                </div>

                <h2>What Are Construction Loans?</h2>
                <p>
                  Construction loans are short-term, variable-rate loans that
                  provide funds to build a home from the ground up. Unlike
                  traditional home loans where you receive the full amount
                  upfront, construction loans release funds in stages as your
                  build progresses.
                </p>

                <h2>How Construction Loans Work</h2>
                <p>The loan process involves several key stages:</p>

                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>
                    <strong>Application and Approval:</strong> Based on building
                    plans, contracts, and your financial position
                  </li>
                  <li>
                    <strong>Progressive Drawdowns:</strong> Funds released at
                    predetermined building milestones
                  </li>
                  <li>
                    <strong>Interest-Only Payments:</strong> During
                    construction, you typically pay interest only on drawn
                    amounts
                  </li>
                  <li>
                    <strong>Conversion:</strong> Once construction is complete,
                    the loan converts to a standard home loan
                  </li>
                </ul>

                <h2>Types of Construction Loans</h2>

                <h3>Construction-to-Permanent Loans</h3>
                <p>
                  These loans automatically convert to a traditional mortgage
                  once construction is complete. This option provides
                  convenience and eliminates the need to requalify for a new
                  loan.
                </p>

                <h3>Construction-Only Loans</h3>
                <p>
                  These short-term loans cover only the construction phase.
                  You'll need to secure separate permanent financing once the
                  build is complete.
                </p>

                <h2>Requirements and Eligibility</h2>
                <p>
                  Construction loans typically have stricter requirements than
                  traditional home loans:
                </p>

                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Higher deposit requirements (often 20-30%)</li>
                  <li>Detailed building plans and contracts</li>
                  <li>Licensed and insured builders</li>
                  <li>Proof of income stability</li>
                  <li>Good credit history</li>
                  <li>Building permits and council approvals</li>
                </ul>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center mt-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Ready to Start Building?
                  </h2>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Construction loans can help turn your dream home into
                    reality. Understanding the process and requirements will
                    help you navigate the journey successfully.
                  </p>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg"
                  >
                    Get Expert Advice
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
