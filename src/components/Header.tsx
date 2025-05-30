
import React from 'react';
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/d4b10973-99f4-4b22-a934-2f2eb6544791.png"
              alt="IntelliWave AI Logo"
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg text-gray-800">IntelliWave AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#creator" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Creator</a>
            <div className="flex items-center ml-4 space-x-4">
              <a
                href="https://github.com/Amcelo13"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thakurchetan20/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex md:hidden items-center space-x-3">
              <a
                href="https://github.com/Amcelo13"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thakurchetan20/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://tchetan.gumroad.com/l/upwork-automation-n8n-template"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "hidden md:inline-flex items-center justify-center",
                "rounded-md px-4 py-2 text-sm font-medium",
                "bg-primary text-white shadow",
                "hover:opacity-90 transition-all"
              )}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
