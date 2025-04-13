
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "MBA Student, Stanford",
      image: "/placeholder.svg",
      content: "I improved my GMAT score from 650 to 740 in just 6 weeks using GMAT AI Coach. The personalized study plan and 24/7 support made all the difference.",
      score: "740",
      improvement: "+90"
    },
    {
      name: "Michael Chen",
      role: "Business Analyst",
      image: "/placeholder.svg",
      content: "After using expensive tutors with minimal results, GMAT AI Coach helped me understand my weaknesses and focus on what mattered. I went from 620 to 710!",
      score: "710",
      improvement: "+90"
    },
    {
      name: "Priya Patel",
      role: "Consultant",
      image: "/placeholder.svg",
      content: "The AI tutor knew exactly where I was going wrong with Quant questions. It was like having a personal coach available whenever I needed help.",
      score: "720",
      improvement: "+70"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gmat-purple/10 text-gmat-purple px-4 py-1 rounded-full text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Success Stories from <span className="gradient-text">Real Students</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered GMAT coaching has helped thousands of students achieve their target scores and get into their dream schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mt-auto">
                <div className="mr-4">
                  <p className="text-sm text-gray-500">Final Score</p>
                  <p className="font-semibold text-lg">{testimonial.score}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Improvement</p>
                  <p className="font-semibold text-lg text-green-600">{testimonial.improvement} points</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-semibold text-xl mb-2">
            Join over 5,000 successful students
          </p>
          <p className="text-gray-600 mb-8">
            Our students have been accepted into top MBA programs worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center font-bold">HARVARD</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center font-bold">STANFORD</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center font-bold">WHARTON</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center font-bold">INSEAD</div>
            <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center font-bold">MIT</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
