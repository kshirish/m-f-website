import { Card, CardContent } from "@/components/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { MapPin, Phone, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceAreas() {
  const navigate = useNavigate();
  const areas = [
    { name: "Sydney", isMain: true },
    { name: "Perth", isMain: false },
    { name: "Melbourne", isMain: false },
    { name: "Adelaide", isMain: false },
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We proudly serve clients across major Australian cities, with our
              headquarters based in Sydney. No matter where you are, our expert
              team is ready to help you achieve your financial goals.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {areas.map((area, index) => (
                <Card
                  key={index}
                  className={`p-4 text-center transition-all duration-300 hover:shadow-md cursor-pointer ${
                    area.isMain
                      ? "bg-blue-50 border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    const areaLinks: { [key: string]: string } = {
                      Sydney: "/areas/sydney",
                      Melbourne: "/areas/melbourne",
                      Perth: "/areas/perth",
                      Adelaide: "/areas/adelaide",
                    };
                    navigate(areaLinks[area.name] || "/areas");
                  }}
                >
                  <CardContent className="p-0">
                    <MapPin
                      className={`w-6 h-6 mx-auto mb-2 ${
                        area.isMain ? "text-blue-600" : "text-gray-500"
                      }`}
                    />
                    <h3
                      className={`font-medium ${
                        area.isMain ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {area.name}
                    </h3>
                    {area.isMain && (
                      <span className="text-xs text-blue-600 mt-1 block">
                        Headquarters
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>
                  Call us at <strong>1300 MY CHOICE</strong> for immediate
                  assistance
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>
                  Available <strong>Monday to Friday</strong> 9AM - 6PM
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717883560409-14adc1074f0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NTU4NjE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sydney city skyline representing our service area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 p-6">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    6+
                  </div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
