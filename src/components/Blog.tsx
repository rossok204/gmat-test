
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Heart } from "lucide-react";

const articles = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "The Power of Mastery Learning in GMAT Preparation",
    excerpt: "Discover how mastery-based learning can transform your GMAT preparation journey. Learn how focusing on complete understanding rather than mere memorization leads to better results.",
    readTime: "5 min read"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Balancing GMAT Prep with Mental Health",
    excerpt: "Tips and strategies for maintaining your mental well-being while preparing for the GMAT. Learn how to create a sustainable study schedule that doesn't compromise your health.",
    readTime: "4 min read"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Why Traditional GMAT Courses Fall Short",
    excerpt: "An analysis of the limitations of traditional GMAT prep courses and how AI-powered tutoring addresses these challenges through personalization and adaptivity.",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gmat-purple/10 text-gmat-purple px-4 py-1 rounded-full text-sm font-medium">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Resources & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our articles to learn more about effective GMAT preparation strategies and tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gmat-purple/10 flex items-center justify-center mb-6">
                  {article.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <Button variant="link" className="text-gmat-purple hover:text-gmat-purple/80">
                    Read More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
