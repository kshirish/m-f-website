import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Slider } from "@/components/slider";
import { Badge } from "@/components/badge";
import {
  Calculator as CalculatorIcon,
  DollarSign,
  TrendingUp,
  Clock,
  Phone,
  ArrowRight,
  Info,
} from "lucide-react";

export default function Calculator() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(600000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [repaymentFrequency, setRepaymentFrequency] = useState("monthly");

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);

  // Calculate loan payments
  useEffect(() => {
    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
      const principal = loanAmount;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      // Monthly payment calculation using PMT formula
      const monthlyPaymentCalc =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPaymentsCalc = monthlyPaymentCalc * numberOfPayments;
      const totalInterestCalc = totalPaymentsCalc - principal;

      setMonthlyPayment(monthlyPaymentCalc);
      setTotalPayments(totalPaymentsCalc);
      setTotalInterest(totalInterestCalc);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatCurrencyDetailed = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const getRepaymentAmount = () => {
    switch (repaymentFrequency) {
      case "weekly":
        return monthlyPayment / 4.33;
      case "fortnightly":
        return monthlyPayment / 2.17;
      case "monthly":
      default:
        return monthlyPayment;
    }
  };

  const getFrequencyText = () => {
    switch (repaymentFrequency) {
      case "weekly":
        return "per week";
      case "fortnightly":
        return "per fortnight";
      case "monthly":
      default:
        return "per month";
    }
  };

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
              <CalculatorIcon className="w-4 h-4 mr-2" />
              Free Calculator Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Loan Calculator
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Calculate your loan repayments instantly. Get accurate estimates
              for your home loan, personal loan, or any other financing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Calculator Inputs */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalculatorIcon className="w-5 h-5 text-blue-600" />
                  <span>Loan Calculator</span>
                </CardTitle>
                <CardDescription>
                  Enter your loan details to calculate repayments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Loan Amount */}
                <div className="space-y-3">
                  <Label
                    htmlFor="loanAmount"
                    className="flex items-center space-x-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>Loan Amount</span>
                  </Label>
                  <div className="space-y-3">
                    <Input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="text-lg"
                      min="50000"
                      max="10000000"
                    />
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      max={2000000}
                      min={50000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$50,000</span>
                      <span>$10,000,000</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                  <Label
                    htmlFor="interestRate"
                    className="flex items-center space-x-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Interest Rate (% p.a.)</span>
                  </Label>
                  <Input
                    id="interestRate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                    min="1"
                    max="15"
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-600 flex items-center space-x-1">
                    <Info className="w-3 h-3" />
                    <span>Current average rate: 6.5% p.a</span>
                  </p>
                </div>

                {/* Loan Term */}
                <div className="space-y-3">
                  <Label className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Loan Term (years)</span>
                  </Label>
                  <Select
                    value={loanTerm.toString()}
                    onValueChange={(value) => setLoanTerm(Number(value))}
                  >
                    <SelectTrigger className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 years</SelectItem>
                      <SelectItem value="10">10 years</SelectItem>
                      <SelectItem value="15">15 years</SelectItem>
                      <SelectItem value="20">20 years</SelectItem>
                      <SelectItem value="25">25 years</SelectItem>
                      <SelectItem value="30">30 years</SelectItem>
                      <SelectItem value="35">35 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Repayment Frequency */}
                <div className="space-y-3">
                  <Label>Repayment Frequency</Label>
                  <Select
                    value={repaymentFrequency}
                    onValueChange={setRepaymentFrequency}
                  >
                    <SelectTrigger className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="fortnightly">Fortnightly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Your Repayment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Main Repayment Amount */}
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {formatCurrencyDetailed(getRepaymentAmount())}
                  </div>
                  <div className="text-gray-600 capitalize">
                    {getFrequencyText()}
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {formatCurrency(totalInterest)}
                    </div>
                    <div className="text-sm text-gray-600">Total Interest</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {formatCurrency(totalPayments)}
                    </div>
                    <div className="text-sm text-gray-600">Total Payments</div>
                  </div>
                </div>

                {/* Loan Summary */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Loan Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="font-medium">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium">{interestRate}% p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Term:</span>
                      <span className="font-medium">{loanTerm} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium capitalize">
                        {repaymentFrequency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                    onClick={scrollToContact}
                  >
                    Apply for This Loan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-blue-600 hover:bg-blue-50"
                    onClick={scrollToContact}
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Speak to a Broker
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Understanding Your Loan
              </h2>
              <p className="text-xl text-gray-600">
                Use our calculator to make informed decisions about your
                borrowing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CalculatorIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Accurate Estimates</h3>
                  <p className="text-sm text-gray-600">
                    Get precise repayment calculations based on current market
                    rates
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Compare Options</h3>
                  <p className="text-sm text-gray-600">
                    Try different loan amounts and terms to find what works for
                    you
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Advice</h3>
                  <p className="text-sm text-gray-600">
                    Speak to our brokers for personalized loan recommendations
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Important Information</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>
                  • This calculator provides estimates only and should not be
                  relied upon for financial decisions
                </li>
                <li>
                  • Actual loan terms and rates may vary based on your credit
                  history and financial situation
                </li>
                <li>• Additional fees and charges may apply to your loan</li>
                <li>
                  • Contact us for a detailed loan assessment and personalized
                  quote
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our loan specialists are here to help you secure the best rates and
            terms for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8"
              onClick={scrollToContact}
            >
              Get Pre-Approved Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gray-900 hover:bg-white/10 px-8"
              onClick={() => (window.location.href = "tel:0402742493")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call 0402 742 493
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
