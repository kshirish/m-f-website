"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { ImageWithFallback } from "@/ui/ImageWithFallback";
import { Button } from "@/ui/button";
import {
  Home,
  CreditCard,
  Building,
  ArrowRight,
  CheckCircle,
  Calculator,
  FileText,
  PiggyBank,
  RefreshCw,
  TrendingUp,
  Heart,
  Hammer,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/constants/common";

export default function Services() {
  const router = useRouter();

  // Icon mapping for the services
  const iconMap: { [key: string]: any } = {
    Home: Heart,
    FileText: FileText,
    PiggyBank: PiggyBank,
    Building: Hammer,
    CreditCard: CreditCard,
    RefreshCw: RefreshCw,
    TrendingUp: TrendingUp,
  };

  const servicesData = [
    {
      id: "first-home-buyers",
      title: "First Home Buyers",
      description:
        "Expert guidance for first-time property buyers with government grants and low deposit options.",
      image:
        "https://images.unsplash.com/photo-1652469280598-48842f46be29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMG1vcnRnYWdlfGVufDF8fHx8MTc1NTg2MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Heart,
      href: "/services/first-home-buyers",
    },
    {
      id: "low-doc-loans",
      title: "Low Doc Loans",
      description:
        "Flexible documentation loans perfect for self-employed borrowers and complex income structures.",
      image:
        "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwbW9uZXklMjBwbGFubmluZ3xlbnwxfHx8fDE3NTU4NjE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: FileText,
      href: "/services/low-doc-loans",
    },
    {
      id: "smsf",
      title: "SMSF",
      description:
        "Self-managed super fund property investment loans with tax-effective strategies.",
      image:
        "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGZpbmFuY2V8ZW58MXx8fHwxNzU1ODYxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: PiggyBank,
      href: "/services/smsf",
    },
    {
      id: "construction-loans",
      title: "Construction Loans",
      description:
        "Progressive funding for new home construction and major renovation projects.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: Hammer,
      href: "/services/construction-loans",
    },
    {
      id: "debt-consolidation",
      title: "Debt Consolidation",
      description:
        "Simplify your finances by consolidating high-interest debts into one low-rate loan.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: CreditCard,
      href: "/services/debt-consolidation",
    },
    {
      id: "refinancing",
      title: "Refinancing",
      description:
        "Switch to better rates and save thousands on your existing home loan.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: RefreshCw,
      href: "/services/refinancing",
    },
    {
      id: "property-investment",
      title: "Property Investment",
      description:
        "Build wealth through investment property loans and portfolio building strategies.",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      icon: TrendingUp,
      href: "/services/property-investment",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your needs. From home
            loans to business finance, we're your trusted partner in achieving
            financial success.
          </p>
        </div>

        {/* Calculator Feature Card */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Free Loan Calculator
                  </h3>
                  <p className="text-blue-100">
                    Calculate your loan repayments instantly
                  </p>
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-blue-100 mb-1">Loan Amount</div>
                  <div className="text-xl font-bold">$50K - $10M</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-100 mb-1">
                    Interest Rates
                  </div>
                  <div className="text-xl font-bold">From 6.5%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-blue-100 mb-1">Loan Terms</div>
                  <div className="text-xl font-bold">5-35 Years</div>
                </div>
              </div>
              <Button
                className="w-full bg-white text-blue-700 hover:bg-gray-100"
                size="lg"
                onClick={() => router.push("/calculator")}
              >
                Start Calculating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                    onClick={() => router.push(service.href)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
