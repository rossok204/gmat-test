
import React from "react";
import { 
  BookOpen, 
  BarChart3, 
  MessageSquare, 
  Clock, 
  Target, 
  Zap 
} from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <BookOpen className="h-6 w-6 text-gmat-purple" />,
      title: "Personalized Learning Path",
      description: "Our AI analyzes your strengths and weaknesses to create a custom study plan that evolves with your progress."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-gmat-purple" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your performance with comprehensive analytics that track your improvement over time."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-gmat-purple" />,
      title: "24/7 AI Tutoring",
      description: "Ask questions anytime and receive instant, detailed explanations tailored to your learning style."
    },
    {
      icon: <Clock className="h-6 w-6 text-gmat-purple" />,
      title: "Efficient Study Sessions",
      description: "Focus on what matters most with AI-optimized study sessions designed to maximize your learning in less time."
    },
    {
      icon: <Target className="h-6 w-6 text-gmat-purple" />,
      title: "Score Prediction",
      description: "Our AI predicts your GMAT score based on your current performance and helps you reach your target."
    },
    {
      icon: <Zap className="h-6 w-6 text-gmat-purple" />,
      title: "Rapid Improvement",
      description: "Students using GMAT AI Coach see an average improvement of 80+ points in their GMAT scores."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gmat-purple/10 text-gmat-purple px-4 py-1 rounded-full text-sm font-medium">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Everything You Need to <span className="gradient-text">Ace the GMAT</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive GMAT preparation with features designed to accelerate your learning and maximize your score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-gmat-purple/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
