
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-bold gradient-text">
            GMAT AI Coach
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-gmat-purple transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-gmat-purple transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-gmat-purple transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-700 hover:text-gmat-purple transition-colors">
            FAQ
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="gradient-bg hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-gmat-purple p-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-gmat-purple p-2"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-gmat-purple p-2"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-gmat-purple p-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <Button className="gradient-bg hover:opacity-90 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
