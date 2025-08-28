import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import {
  Home,
  CreditCard,
  Building,
  ArrowRight,
  CheckCircle,
  Calculator,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const services = [
    {
      icon: Home,
      title: "Home Loans & Mortgages",
      description:
        "Competitive rates for first-time buyers, refinancing, and investment properties.",
      image:
        "https://images.unsplash.com/photo-1652469280598-48842f46be29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMG1vcnRnYWdlfGVufDF8fHx8MTc1NTg2MTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "First home buyer loans",
        "Investment property loans",
        "Refinancing solutions",
        "Construction loans",
        "SMSF loans",
      ],
    },
    {
      icon: CreditCard,
      title: "Personal Finance",
      description:
        "Flexible personal loans for life's important moments and unexpected expenses.",
      image:
        "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwbW9uZXklMjBwbGFubmluZ3xlbnwxfHx8fDE3NTU4NjE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Personal loans",
        "Car loans",
        "Debt consolidation",
        "Home improvement loans",
        "Holiday loans",
      ],
    },
    {
      icon: Building,
      title: "Commercial Finance",
      description:
        "Comprehensive business financing solutions to help your enterprise grow and thrive.",
      image:
        "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGZpbmFuY2V8ZW58MXx8fHwxNzU1ODYxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Commercial property loans",
        "Business loans",
        "Equipment finance",
        "Working capital",
        "Trade finance",
      ],
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
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
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
                onClick={() => navigate("/calculator")}
              >
                Start Calculating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                    onClick={() => {
                      const serviceLinks: { [key: string]: string } = {
                        "Home Loans & Mortgages": "/services/home-loans",
                        "Personal Finance": "/services/personal-finance",
                        "Commercial Finance": "/services/commercial-finance",
                      };
                      navigate(serviceLinks[service.title] || "/services");
                    }}
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
