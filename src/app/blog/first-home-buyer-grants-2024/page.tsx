"use client";

import React from "react";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouterContext } from "@/hooks/useRouterContext";

export default function FirstHomeBuyerGrantsPage() {
  const router = useRouter();
  const { scrollToSection } = useRouterContext();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mb-6 hover:bg-green-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              First Home Buyers
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              First Home Buyer Grants and Schemes: Updated 2024
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Michael Chen</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>16 February 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>7 min read</span>
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Happy couple holding keys to their first home"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <p className="text-xl text-gray-600 mb-8">
                Buying your first home has never been more challenging, but
                government grants and schemes can provide significant financial
                assistance. Here's your complete guide to all available first
                home buyer benefits across Australia in 2024.
              </p>

              <h2>Federal Government Schemes</h2>

              <h3>First Home Loan Deposit Scheme (FHLDS)</h3>
              <p>
                The FHLDS helps eligible first home buyers purchase a home with
                a deposit as low as 5%, without paying Lenders Mortgage
                Insurance (LMI).
              </p>

              <p>
                <strong>Key Features:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Government guarantees up to 15% of the loan</li>
                <li>30,000 places available per year</li>
                <li>Property price caps apply by location</li>
                <li>Available for new and established homes</li>
              </ul>

              <p>
                <strong>Eligibility:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Australian citizens or permanent residents</li>
                <li>18 years or older</li>
                <li>Income limits: $125,000 (singles) or $200,000 (couples)</li>
                <li>Haven't owned property before</li>
              </ul>

              <h3>First Home Super Saver Scheme (FHSSS)</h3>
              <p>
                This scheme allows you to save for your first home inside your
                superannuation fund, taking advantage of the lower tax rate.
              </p>

              <p>
                <strong>Benefits:</strong>
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  Voluntary contributions taxed at 15% instead of marginal rate
                </li>
                <li>Maximum $15,000 per year, $50,000 total</li>
                <li>Includes deemed earnings when withdrawn</li>
                <li>Can be combined with other schemes</li>
              </ul>

              <h2>State-Based Grants and Concessions</h2>

              <h3>New South Wales</h3>

              <h4>First Home Buyer Assistance Scheme</h4>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Stamp duty exemption:</strong> Full exemption for
                  properties up to $650,000
                </li>
                <li>
                  <strong>Partial concession:</strong> Properties $650,000 -
                  $800,000
                </li>
                <li>
                  <strong>New Home Grant:</strong> $10,000 for new homes or
                  house and land packages
                </li>
              </ul>

              <h3>Victoria</h3>

              <h4>First Home Owner Grant</h4>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>$10,000 grant:</strong> For new homes valued up to
                  $750,000
                </li>
                <li>
                  <strong>Stamp duty concession:</strong> Up to $8,750 for
                  properties under $600,000
                </li>
                <li>
                  <strong>Regional exemption:</strong> No stamp duty on
                  properties up to $600,000 in regional areas
                </li>
              </ul>

              <h3>Queensland</h3>

              <h4>First Home Owner Grant</h4>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>$15,000 grant:</strong> For new homes valued up to
                  $750,000
                </li>
                <li>
                  <strong>Stamp duty concession:</strong> For properties up to
                  $550,000
                </li>
                <li>
                  <strong>First Home Vacant Land Grant:</strong> $15,000 for
                  vacant land up to $400,000
                </li>
              </ul>

              <h3>South Australia</h3>

              <h4>First Home Owner Grant</h4>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>$15,000 grant:</strong> For new homes valued up to
                  $575,000
                </li>
                <li>
                  <strong>Stamp duty concession:</strong> Graduated scale for
                  properties up to $500,000
                </li>
              </ul>

              <h3>Western Australia</h3>

              <h4>First Home Owner Grant</h4>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>$10,000 grant:</strong> For new homes valued up to
                  $750,000
                </li>
                <li>
                  <strong>Stamp duty rebate:</strong> Up to $19,400 for
                  properties under $430,000
                </li>
                <li>
                  <strong>Keystart loans:</strong> Low deposit home loans for
                  eligible buyers
                </li>
              </ul>

              <h3>Tasmania</h3>

              <h4>First Home Owner Grant</h4>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>$20,000 grant:</strong> For new homes valued up to
                  $600,000
                </li>
                <li>
                  <strong>Stamp duty concession:</strong> 50% reduction for
                  properties up to $600,000
                </li>
              </ul>

              <h2>How to Apply</h2>

              <h3>Research and Prepare</h3>
              <p>Before applying for any grants:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Check current income and property price limits</li>
                <li>Gather required documentation</li>
                <li>Confirm your eligibility for multiple schemes</li>
                <li>Understand application deadlines</li>
              </ul>

              <h3>Application Process</h3>
              <p>Most grants are applied for through:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Your lender (for federal schemes)</li>
                <li>State revenue offices (for state grants)</li>
                <li>Your conveyancer or solicitor</li>
              </ul>

              <h2>Maximizing Your Benefits</h2>

              <h3>Combining Schemes</h3>
              <p>You can often combine multiple schemes for maximum benefit:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>FHLDS + State stamp duty concessions</li>
                <li>FHSSS + First Home Owner Grant</li>
                <li>All schemes together where eligible</li>
              </ul>

              <h3>Timing Your Purchase</h3>
              <p>Consider timing factors such as:</p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Scheme availability and quotas</li>
                <li>Property market conditions</li>
                <li>Personal financial readiness</li>
                <li>Construction completion dates (for new homes)</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Not checking eligibility:</strong> Verify all criteria
                  before proceeding
                </li>
                <li>
                  <strong>Missing deadlines:</strong> Apply within required
                  timeframes
                </li>
                <li>
                  <strong>Inadequate documentation:</strong> Ensure all
                  paperwork is complete
                </li>
                <li>
                  <strong>Assuming automatic approval:</strong> Follow up on
                  applications
                </li>
                <li>
                  <strong>Not seeking advice:</strong> Professional guidance can
                  maximize benefits
                </li>
              </ul>

              <h2>Future Changes and Updates</h2>
              <p>
                Government schemes are subject to regular review and changes.
                Stay informed about:
              </p>

              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Annual budget announcements</li>
                <li>State government policy changes</li>
                <li>Economic conditions affecting schemes</li>
                <li>New initiatives and pilot programs</li>
              </ul>

              <h2>Getting Professional Help</h2>
              <p>
                While you can research and apply for grants yourself,
                professional assistance can ensure you don't miss any
                opportunities. Mortgage brokers and conveyancers can guide you
                through the process and help maximize your benefits.
              </p>

              <p>
                Remember that grant amounts, eligibility criteria, and property
                price caps change regularly. Always verify current details with
                official government sources before making any decisions.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Access Your First Home Buyer Benefits?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our specialists can help you navigate all available grants and
                schemes to maximize your first home buyer benefits.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                Get Expert First Home Buyer Advice
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
