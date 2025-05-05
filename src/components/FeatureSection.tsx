
import React from 'react';
import { cn } from "@/lib/utils";

const features = [
  {
    icon: "⚡",
    title: "Automated Proposals",
    description: "Automatically generate personalized, high-converting proposals based on job requirements."
  },
  {
    icon: "🔍",
    title: "Job Matching",
    description: "Find the perfect jobs that match your skills and experience with intelligent filtering."
  },
  {
    icon: "⏱️",
    title: "Time Saving",
    description: "Reduce proposal writing time from hours to minutes with our smart templates."
  },
  {
    icon: "📈",
    title: "Higher Win Rate",
    description: "Craft compelling proposals that stand out from the competition and increase your success rate."
  },
  {
    icon: "🧩",
    title: "N8N Integration",
    description: "Leverage the power of N8N workflows for seamless automation across your entire process."
  },
  {
    icon: "🔄",
    title: "Easy Customization",
    description: "Adapt the templates to your specific needs and services without coding knowledge."
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span> of UpFlow AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our N8N-powered automation tool transforms how you approach Upwork jobs, 
            saving you time and increasing your chances of landing clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-background rounded-xl p-6 shadow-md",
                "border border-border/50 hover:border-primary/50",
                "transition-all duration-300 hover:-translate-y-1"
              )}
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
            <img 
              src="/lovable-uploads/a0afa86f-83b9-4f90-82c7-14e71f6eff72.png" 
              alt="Integration with Upwork, N8N, ChatGPT and Google Docs" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
