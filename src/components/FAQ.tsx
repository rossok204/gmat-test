
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI coaching work?",
      answer: "Our AI GMAT Coach analyzes your performance data, identifies your strengths and weaknesses, and creates a personalized study plan. It adapts to your learning style and progress, providing customized practice questions, detailed explanations, and real-time feedback on your work."
    },
    {
      question: "Is GMAT AI Coach as effective as a human tutor?",
      answer: "For most students, yes! Our AI Coach has been trained on thousands of GMAT questions and teaching methodologies. It provides personalized, consistent guidance 24/7, and many students see better results with our AI Coach compared to traditional tutoring. Our data shows an average score improvement of 80+ points."
    },
    {
      question: "How long does it take to improve my GMAT score?",
      answer: "This varies by student, but with consistent use of GMAT AI Coach, most students see significant improvement within 4-8 weeks. The AI adapts to your pace and provides a projected timeline based on your target score and current performance."
    },
    {
      question: "What if I'm struggling with a specific section of the GMAT?",
      answer: "The AI Coach excels at identifying specific areas of weakness. It will provide additional focused practice on challenging sections, breaking down concepts into manageable pieces, and offering alternative explanations until you master the material."
    },
    {
      question: "Do you offer a score guarantee?",
      answer: "We offer a 50+ point improvement guarantee. If you complete the recommended study plan and don't improve by at least 50 points, we'll extend your subscription for free until you achieve this improvement."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. We also offer a 7-day free trial so you can test the platform before committing."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gmat-purple/10 text-gmat-purple px-4 py-1 rounded-full text-sm font-medium">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about GMAT AI Coach
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Contact our support team
          </p>
          <a 
            href="#contact" 
            className="text-gmat-purple hover:underline font-medium"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
