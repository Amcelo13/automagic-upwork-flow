
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Automate Your <span className="text-gradient">Upwork Proposals</span> <br />
            With N8N Workflow Magic
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your freelancing with AI-powered proposal automation.
            Stand out from the competition and win more clients, effortlessly.
          </p>
        </div>
        
        <div className="video-container max-w-4xl mx-auto mb-12">
          <video 
            className="w-full aspect-video object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-creating-digital-systems-with-sorting-33109-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://tchetan.gumroad.com/l/upwork-automation-n8n-template" 
            target="_blank" 
            rel="noreferrer"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "rounded-md px-6 py-3 text-base md:text-lg font-medium",
              "green-gradient text-white shadow-lg shadow-primary/20",
              "hover:opacity-90 transition-all"
            )}
          >
            Get the Template <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
