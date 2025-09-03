"use client";

import React from "react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouterContext } from "@/hooks/useRouterContext";

export default function WhenToRefinancePage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mb-6 hover:bg-blue-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Refinancing
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              When is the Right Time to Refinance Your Mortgage?
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Michael Chen</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>10 February 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Person reviewing financial documents for refinancing decision"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <p className="text-xl text-gray-600 mb-8">
                Refinancing your mortgage can save you thousands of dollars, but
                timing is everything. Understanding when to refinance and
                recognizing the key indicators can help you make the most of
                this financial strategy.
              </p>

              <h2>Key Indicators It's Time to Refinance</h2>

              <h3>1. Interest Rates Have Dropped</h3>
              <p>
                The most obvious reason to refinance is when interest rates fall
                significantly below your current rate. As a general rule, if you
                can secure a rate that's 0.5% or more below your current rate,
                refinancing may be worthwhile.
              </p>

              <p>
                <strong>Consider:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Current market rates vs. your existing rate</li>
                <li>The difference after factoring in fees</li>
                <li>How long you plan to stay in the property</li>
              </ul>

              <h3>2. Your Credit Score Has Improved</h3>
              <p>
                If your credit score has improved since you first obtained your
                mortgage, you may qualify for better rates and terms.
                Improvements in your credit profile can unlock premium lending
                options.
              </p>

              <p>
                <strong>Credit improvements include:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Higher credit score</li>
                <li>Increased income</li>
                <li>Reduced debt-to-income ratio</li>
                <li>More stable employment</li>
              </ul>

              <h3>3. You Want to Change Loan Features</h3>
              <p>
                Your financial needs may have changed since you first got your
                mortgage. Refinancing allows you to access different loan
                features that better suit your current situation.
              </p>

              <p>
                <strong>Feature changes might include:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Switching from variable to fixed rates (or vice versa)</li>
                <li>Adding an offset account</li>
                <li>Accessing redraw facilities</li>
                <li>Changing repayment frequency</li>
              </ul>

              <h3>4. You've Built Substantial Equity</h3>
              <p>
                If your property has increased in value or you've paid down your
                mortgage significantly, you may have access to better
                loan-to-value ratio (LVR) pricing tiers.
              </p>

              <p>
                <strong>Equity benefits:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Lower interest rates for lower LVRs</li>
                <li>Elimination of Lenders Mortgage Insurance</li>
                <li>Access to premium loan products</li>
                <li>Ability to access equity for other purposes</li>
              </ul>

              <h2>Market Timing Considerations</h2>

              <h3>Interest Rate Cycles</h3>
              <p>
                Understanding interest rate cycles can help you time your
                refinance:
              </p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Falling rate environment:</strong> Good time to lock
                  in lower rates
                </li>
                <li>
                  <strong>Rising rate environment:</strong> Consider fixing
                  rates if currently variable
                </li>
                <li>
                  <strong>Rate stability:</strong> Focus on features and fees
                  rather than rates
                </li>
              </ul>

              <h3>Economic Indicators</h3>
              <p>Monitor economic indicators that influence interest rates:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Reserve Bank cash rate decisions</li>
                <li>Inflation trends</li>
                <li>Employment data</li>
                <li>Housing market conditions</li>
              </ul>

              <h2>Personal Financial Timing</h2>

              <h3>Life Stage Considerations</h3>
              <p>
                Your life stage and financial goals should influence refinancing
                decisions:
              </p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Young professionals:</strong> Focus on features and
                  flexibility
                </li>
                <li>
                  <strong>Growing families:</strong> Prioritize stability and
                  offset accounts
                </li>
                <li>
                  <strong>Pre-retirement:</strong> Consider paying off loans
                  faster
                </li>
                <li>
                  <strong>Investors:</strong> Focus on tax-deductible features
                </li>
              </ul>

              <h3>Financial Stability</h3>
              <p>
                Ensure you're in a stable financial position before refinancing:
              </p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Stable employment or income</li>
                <li>Good savings buffer</li>
                <li>Manageable debt levels</li>
                <li>Clear financial goals</li>
              </ul>

              <h2>Calculating the Break-Even Point</h2>

              <h3>Cost-Benefit Analysis</h3>
              <p>Calculate whether refinancing makes financial sense:</p>

              <p>
                <strong>Costs to consider:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Application and establishment fees</li>
                <li>Valuation fees</li>
                <li>Legal and settlement costs</li>
                <li>Discharge fees from current lender</li>
              </ul>

              <p>
                <strong>Benefits to calculate:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Monthly payment reduction</li>
                <li>Interest savings over loan term</li>
                <li>Value of new features</li>
                <li>Potential for faster repayment</li>
              </ul>

              <h3>Break-Even Timeline</h3>
              <p>
                Determine how long it will take for savings to exceed costs:
              </p>

              <p>
                <em>
                  Break-even time = Total refinancing costs ÷ Monthly savings
                </em>
              </p>

              <p>
                If you plan to stay in the property longer than the break-even
                period, refinancing likely makes sense.
              </p>

              <h2>When NOT to Refinance</h2>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Late in loan term:</strong> Little interest left to
                  save on
                </li>
                <li>
                  <strong>Planning to move soon:</strong> Insufficient time to
                  recoup costs
                </li>
                <li>
                  <strong>Declined credit situation:</strong> May not qualify
                  for better rates
                </li>
                <li>
                  <strong>High exit fees:</strong> Costs may outweigh benefits
                </li>
                <li>
                  <strong>Stable, competitive current loan:</strong> Minimal
                  improvement available
                </li>
              </ul>

              <h2>Steps to Take Before Refinancing</h2>

              <ol>
                <li>
                  <strong>Review your current loan:</strong> Understand your
                  existing terms and fees
                </li>
                <li>
                  <strong>Check your credit report:</strong> Ensure it's
                  accurate and up-to-date
                </li>
                <li>
                  <strong>Calculate your equity:</strong> Get a current property
                  valuation
                </li>
                <li>
                  <strong>Research market rates:</strong> Compare offers from
                  multiple lenders
                </li>
                <li>
                  <strong>Consider your goals:</strong> What do you want to
                  achieve through refinancing?
                </li>
                <li>
                  <strong>Seek professional advice:</strong> Consult with a
                  mortgage broker or advisor
                </li>
              </ol>

              <h2>Making the Decision</h2>
              <p>
                The right time to refinance is when the financial benefits
                clearly outweigh the costs, and the timing aligns with your
                personal financial situation and goals.
              </p>

              <p>
                Don't rush into refinancing based on a single factor like
                interest rates. Consider the complete picture including fees,
                features, and your long-term financial strategy.
              </p>

              <p>
                Remember that refinancing is not just about getting a lower rate
                – it's about optimizing your entire mortgage structure to better
                serve your financial objectives.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Refinancing Options?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our refinancing specialists can help you determine if now is the
                right time to refinance and find the best options for your
                situation.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Expert Refinancing Advice
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
