
import React from 'react';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "UpFlow AI cut my proposal time by 80% and increased my client acquisition rate. One of the best investments for my freelancing career.",
    author: "Alex Morgan",
    position: "Web Developer",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The N8N template from UpFlow AI is extremely easy to set up and customize. Now I can focus on client work instead of hunting for jobs. Highly recommended!",
    author: "Sarah Chen",
    position: "UX Designer",
    avatar: "https://i.pravatar.cc/150?img=20"
  },
  {
    quote: "My proposal acceptance rate has doubled since using UpFlow AI. The personalized responses really make a difference in standing out from other freelancers.",
    author: "James Wilson",
    position: "Full Stack Developer",
    avatar: "https://i.pravatar.cc/150?img=67"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-gradient">Freelancers</span> Say About UpFlow AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from users who have transformed their Upwork success story with our automation solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "glass-effect rounded-xl p-6 shadow-lg",
                "backdrop-blur-sm bg-background/5 border border-white/10",
                "transition-all duration-300 hover:shadow-xl"
              )}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-primary/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
