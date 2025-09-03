"use client";

import React from "react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouterContext } from "@/hooks/useRouterContext";

export default function SMSFPropertyInvestmentPage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-pulse delay-500"></div>

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

            <Badge className="mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-white text-sm px-4 py-2">
              SMSF
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              SMSF Property Investment:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">
                Maximizing Your Super
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-purple-100 mb-8">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <User className="mr-2 h-4 w-4" />
                <span>David Thompson</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                <span>18 February 2024</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Clock className="mr-2 h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-3xl">
              Learn how to leverage your Self-Managed Super Fund to build wealth
              through property investment with expert strategies and compliance
              guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Modern apartment buildings representing SMSF property investment"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <p className="text-xl text-gray-600 mb-8">
                Self-Managed Super Funds (SMSFs) offer a powerful way to build
                wealth for retirement through property investment. With the
                right strategy, you can leverage your superannuation to create
                substantial long-term returns.
              </p>

              <h2>What is SMSF Property Investment?</h2>
              <p>
                SMSF property investment allows you to use your superannuation
                funds to purchase investment property. Your SMSF becomes the
                legal owner of the property, and any rental income and capital
                gains flow back into your super fund.
              </p>

              <h2>Benefits of SMSF Property Investment</h2>

              <h3>Tax Advantages</h3>
              <p>
                SMSFs offer significant tax benefits for property investment:
              </p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Concessional Tax Rate:</strong> 15% tax on rental
                  income (vs. marginal tax rates)
                </li>
                <li>
                  <strong>Capital Gains Tax Relief:</strong> 10% CGT rate, or 0%
                  if held for 12+ months and sold in pension phase
                </li>
                <li>
                  <strong>Deductible Expenses:</strong> Property-related
                  expenses reduce taxable income
                </li>
              </ul>

              <h3>Control and Flexibility</h3>
              <p>
                With an SMSF, you have direct control over your investment
                decisions, property selection, and portfolio strategy. This
                level of control allows for more targeted investment approaches.
              </p>

              <h2>SMSF Property Investment Rules</h2>

              <h3>The Sole Purpose Test</h3>
              <p>
                All SMSF investments must be made for the sole purpose of
                providing retirement benefits to members. This means you cannot
                live in or holiday at SMSF-owned properties.
              </p>

              <h3>In-House Asset Rules</h3>
              <p>
                SMSFs cannot invest more than 5% of their total assets in
                related party investments. This prevents you from purchasing
                property from related parties like family members.
              </p>

              <h3>Borrowing Arrangements</h3>
              <p>
                SMSFs can borrow to purchase property through Limited Recourse
                Borrowing Arrangements (LRBAs), but strict rules apply:
              </p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Single acquirable asset per loan</li>
                <li>Property held in separate trust</li>
                <li>Limited recourse to SMSF assets</li>
                <li>Replacement and improvement restrictions</li>
              </ul>

              <h2>Types of Properties for SMSF Investment</h2>

              <h3>Residential Property</h3>
              <p>
                Houses, apartments, and townhouses are popular SMSF investments
                due to steady rental yields and potential for capital growth.
              </p>

              <h3>Commercial Property</h3>
              <p>
                Commercial properties can offer higher yields and may provide
                opportunities to lease back to your own business (under specific
                conditions).
              </p>

              <h3>Industrial Property</h3>
              <p>
                Warehouses and industrial properties can provide stable,
                long-term rental income with lower maintenance requirements.
              </p>

              <h2>SMSF Property Investment Strategy</h2>

              <h3>Diversification</h3>
              <p>
                While property can be a significant SMSF holding, consider
                diversifying with other assets like shares, bonds, and cash to
                manage risk.
              </p>

              <h3>Cash Flow Management</h3>
              <p>Ensure your SMSF has sufficient cash flow to meet:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Loan repayments (if applicable)</li>
                <li>Property maintenance and management costs</li>
                <li>Insurance premiums</li>
                <li>SMSF administration costs</li>
                <li>Member benefit payments</li>
              </ul>

              <h2>Getting Started with SMSF Property Investment</h2>

              <h3>Establish Your SMSF</h3>
              <p>
                Set up your SMSF with appropriate trust deed provisions allowing
                property investment. Ensure you have the necessary corporate
                trustee structure.
              </p>

              <h3>Build Your Capital Base</h3>
              <p>Accumulate sufficient funds through:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Regular superannuation contributions</li>
                <li>Rollovers from other super funds</li>
                <li>Government co-contributions (if eligible)</li>
                <li>Spouse contributions</li>
              </ul>

              <h3>Seek Professional Advice</h3>
              <p>
                SMSF property investment involves complex legal, tax, and
                compliance requirements. Professional advice from qualified
                advisors is essential.
              </p>

              <h2>Common Pitfalls to Avoid</h2>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Inadequate diversification:</strong> Don't put all
                  super funds into a single property
                </li>
                <li>
                  <strong>Insufficient cash reserves:</strong> Maintain
                  liquidity for expenses and member benefits
                </li>
                <li>
                  <strong>Compliance breaches:</strong> Understand and follow
                  all SMSF rules and regulations
                </li>
                <li>
                  <strong>Emotional decision-making:</strong> Make investment
                  decisions based on fundamentals, not emotions
                </li>
                <li>
                  <strong>Ignoring exit strategy:</strong> Plan how you'll
                  manage the property in pension phase
                </li>
              </ul>

              <h2>The Future of SMSF Property Investment</h2>
              <p>
                With ongoing changes to superannuation legislation and property
                markets, staying informed about regulatory updates is crucial.
                Consider how factors like population growth, infrastructure
                development, and economic trends will impact your investment.
              </p>

              <p>
                SMSF property investment can be a powerful wealth-building
                strategy when implemented correctly. The combination of tax
                advantages, control, and potential for long-term growth makes it
                an attractive option for eligible investors.
              </p>

              <p>
                However, success requires careful planning, ongoing compliance,
                and professional guidance. Before proceeding, ensure you
                understand all obligations and have the resources to manage your
                SMSF effectively.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore SMSF Property Investment?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our SMSF specialists can help you navigate the complexities and
                develop a strategy that aligns with your retirement goals.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Expert SMSF Advice
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
