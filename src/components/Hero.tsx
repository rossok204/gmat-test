
import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Star, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-4 md:px-8 hero-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className="animate-fade-in mb-4">
              <span className="bg-gmat-purple/10 text-gmat-purple px-4 py-1 rounded-full text-sm font-medium">
                AI-Powered GMAT Preparation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Personal <span className="gradient-text">AI Coach</span> for GMAT Success
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-12">
              Get customized 1-on-1 GMAT tutoring at a fraction of the cost of a human tutor. Achieve your target score with personalized study plans, adaptive practice, and real-time feedback.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="gradient-bg hover:opacity-90 text-white py-6 px-8 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg border-gmat-purple text-gmat-purple hover:bg-gmat-purple/10">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gmat-purple/20">
                  <Users size={14} className="text-gmat-purple" />
                </div>
                <p className="text-sm text-gray-600">5,000+ students</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gmat-purple/20">
                  <Star size={14} className="text-gmat-purple" />
                </div>
                <p className="text-sm text-gray-600">4.9/5 rating</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gmat-purple/20">
                  <Zap size={14} className="text-gmat-purple" />
                </div>
                <p className="text-sm text-gray-600">80+ point improvement</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="w-full h-[420px] bg-gradient-to-tr from-gmat-purple to-gmat-blue rounded-xl shadow-xl overflow-hidden animate-float">
                <div className="absolute inset-1 bg-white rounded-lg flex flex-col p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gmat-purple/20 flex items-center justify-center mr-3">
                      <GraduationCap className="text-gmat-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">GMAT AI Coach</h3>
                      <p className="text-xs text-gray-500">Your personal tutor</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      "I've analyzed your practice test results. Let's focus on improving your Data Sufficiency questions in Quantitative Reasoning. I've created a personalized study plan for this week."
                    </p>
                  </div>
                  
                  <div className="bg-gmat-purple/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700">
                      "Here's a question similar to the ones you've been struggling with. Try to solve it using the approach we discussed."
                    </p>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="w-3/4 bg-gray-200 h-12 rounded-md"></div>
                    <Button size="sm" className="gradient-bg">Send</Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <GraduationCap size={36} className="text-gmat-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
