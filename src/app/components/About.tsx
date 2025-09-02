import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import { Award, Users, Clock, Shield, Star, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: TrendingUp, value: "$500M+", label: "Loans Processed" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency with no hidden fees or surprises. Your trust is our foundation.",
    },
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description:
        "Fast approvals and streamlined processes to get you the financing you need, when you need it.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "Every client receives individual attention with solutions tailored to their unique financial situation.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About My Choice Mortgage & Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in financial success. We've been helping
            Australians achieve their property and financial goals for over a
            decade with expertise, integrity, and care.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose My Choice Mortgage & Finance?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in Sydney with a vision to make financial services more
              accessible and personal, we've grown to become one of Australia's
              most trusted mortgage and finance brokers. Our team of licensed
              professionals brings decades of combined experience to every
              client interaction.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We work with over 50 lenders to ensure you get the best rates and
              terms available. Our commitment goes beyond just securing your
              loan – we're here to support you throughout your entire financial
              journey.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Learn More About Our Team
            </Button>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications & Memberships */}
        <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Licensed & Accredited
              </h3>
              <p className="text-gray-600">
                We maintain the highest industry standards and certifications
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>ASIC Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>MFAA Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Professional Indemnity Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span>FBAA Accredited</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
