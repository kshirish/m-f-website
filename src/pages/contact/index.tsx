import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take the next step? Contact our friendly team today for a
            free consultation and personalized quote tailored to your financial
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
              <CardHeader>
                <CardTitle className="text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:0402742493"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      0402 742 493
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@mychoicemortgagefinance.com.au"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      info@mychoicemortgagefinance.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">NSW 2749, AUSTRALIA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-300">Sat: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-300">Sun: By appointment</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-gray-400 mb-4">
                    Follow us on social media
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-gray-900 hover:bg-white/10"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-gray-900 hover:bg-white/10"
                    >
                      Facebook
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white text-gray-900 h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span>Get Your Free Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <Input type="tel" placeholder="04XX XXX XXX" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Needed
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home-loan">Home Loan</SelectItem>
                          <SelectItem value="refinance">Refinancing</SelectItem>
                          <SelectItem value="investment">
                            Investment Property
                          </SelectItem>
                          <SelectItem value="personal">
                            Personal Loan
                          </SelectItem>
                          <SelectItem value="commercial">
                            Commercial Finance
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Loan Amount
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select amount range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-300k">
                            Under $300,000
                          </SelectItem>
                          <SelectItem value="300k-500k">
                            $300,000 - $500,000
                          </SelectItem>
                          <SelectItem value="500k-750k">
                            $500,000 - $750,000
                          </SelectItem>
                          <SelectItem value="750k-1m">
                            $750,000 - $1,000,000
                          </SelectItem>
                          <SelectItem value="over-1m">
                            Over $1,000,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your financial goals and any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about my inquiry.
                    </label>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Send Message & Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-blue-600 text-white border-0 p-6 text-center hover:bg-blue-700 transition-colors cursor-pointer">
            <CardContent className="p-0">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Now</h3>
              <p className="text-blue-100 text-sm mb-4">
                Speak with an expert immediately
              </p>
              <a
                href="tel:0402742493"
                className="font-bold hover:text-blue-200 transition-colors"
              >
                0402 742 493
              </a>
            </CardContent>
          </Card>

          <Card
            className="bg-purple-600 text-white border-0 p-6 text-center hover:bg-purple-700 transition-colors cursor-pointer"
            onClick={() => {
              // Open chat widget or redirect to chat service
              window.open(
                "mailto:info@mychoicemortgagefinance.com.au?subject=Live Chat Request",
                "_blank"
              );
            }}
          >
            <CardContent className="p-0">
              <MessageCircle className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-purple-100 text-sm mb-4">
                Get instant answers online
              </p>
              <p className="font-bold">Start Chat</p>
            </CardContent>
          </Card>

          <Card
            className="bg-green-600 text-white border-0 p-6 text-center hover:bg-green-700 transition-colors cursor-pointer"
            onClick={() => {
              // Open calendar booking or phone call
              window.location.href = "tel:0402742493";
            }}
          >
            <CardContent className="p-0">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Book Appointment</h3>
              <p className="text-green-100 text-sm mb-4">
                Schedule a consultation
              </p>
              <p className="font-bold">Book Now</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
