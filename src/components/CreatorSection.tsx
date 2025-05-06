
import React from 'react';
import { cn } from "@/lib/utils";

const CreatorSection = () => {
  return (
    <section id="creator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                  <img 
                    src="/lovable-uploads/96f74f5e-91cc-4df1-9388-5f797a8f1721.png" 
                    alt="Creator of IntelliWave AI" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-2 bg-primary rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet the Creator of IntelliWave AI</h2>
              <h3 className="text-xl font-semibold text-gradient mb-2">Full Stack Developer | React, Next.js, Node.js, TypeScript</h3>
              <p className="text-gray-600 mb-6">
                🚀 Specialization in building high-performance, scalable applications. 
                With expertise in modern frontend and backend technologies, I deliver 
                seamless user experiences and robust server-side solutions.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">React</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">Next.js</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">Node.js</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">TypeScript</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">N8N</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">Automation</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">Microservices</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">Docker</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">AWS</span>
                <span className="px-3 py-1 bg-white shadow-sm rounded-full text-xs font-medium text-gray-700">Nginx</span>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://tchetan.gumroad.com/l/upwork-automation-n8n-template" 
                  target="_blank" 
                  rel="noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "rounded-md px-4 py-2 text-sm font-medium",
                    "green-gradient text-white",
                    "hover:opacity-90 transition-all"
                  )}
                >
                  Get the Template
                </a>
                <a 
                  href="https://linktree.com/chetelise" 
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "rounded-md px-4 py-2 text-sm font-medium",
                    "bg-white border border-gray-200",
                    "hover:border-primary transition-all"
                  )}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
