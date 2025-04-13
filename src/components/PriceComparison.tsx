
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PriceComparison = () => {
  const aiFeatures = [
    "Personalized study plan",
    "24/7 availability",
    "Unlimited practice questions",
    "Detailed performance analytics",
    "Score prediction",
    "Customized feedback"
  ];

  const humanFeatures = [
    "Limited availability",
    "Scheduled sessions only",
    "Fixed curriculum",
    "Basic progress tracking",
    "General advice",
    "Limited practice materials"
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gmat-purple/10 text-gmat-purple px-4 py-1 rounded-full text-sm font-medium">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            <span className="gradient-text">Save Thousands</span> on GMAT Preparation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get all the benefits of personalized tutoring at a fraction of the cost of traditional human tutors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="p-6 bg-gmat-purple text-white">
              <h3 className="text-xl font-semibold mb-2">Human GMAT Tutor</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$150</span>
                <span className="text-lg mb-1">/hour</span>
              </div>
              <p className="opacity-80 text-sm">
                Traditional tutoring with limited availability and high costs
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Typical GMAT preparation requires 100+ hours:
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-600 font-semibold">$15,000+</p>
                  <p className="text-sm text-red-600">Total cost for complete preparation</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {humanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full">
                Compare Options
              </Button>
            </div>
          </div>

          <div className="flex-1 border-2 border-gmat-purple rounded-xl overflow-hidden shadow-lg relative bg-white">
            <div className="absolute top-0 right-0 bg-gmat-purple text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
              RECOMMENDED
            </div>
            <div className="p-6 gradient-bg text-white">
              <h3 className="text-xl font-semibold mb-2">GMAT AI Coach</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-lg mb-1">/month</span>
              </div>
              <p className="opacity-80 text-sm">
                Complete AI-powered GMAT preparation with all features included
              </p>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Average preparation time of 3 months:
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-600 font-semibold">$147</p>
                  <p className="text-sm text-green-600">Total cost for complete preparation</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {aiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-gmat-purple mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full gradient-bg hover:opacity-90">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gmat-blue/5 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Not convinced yet?
              </h3>
              <p className="text-gray-600">
                Try GMAT AI Coach free for 7 days. No credit card required.
              </p>
            </div>
            <Button className="mt-4 md:mt-0 gradient-bg hover:opacity-90">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
