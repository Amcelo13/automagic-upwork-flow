
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 350);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a 
        href="https://tchetan.gumroad.com/l/upwork-automation-n8n-template" 
        target="_blank" 
        rel="noreferrer"
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "rounded-md px-6 py-3 text-base font-medium",
          "green-gradient text-white shadow-lg shadow-primary/20",
          "hover:opacity-90 transition-all"
        )}
      >
        Get the Template <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyButton;
