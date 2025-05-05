
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/96f74f5e-91cc-4df1-9388-5f797a8f1721.png" 
              alt="N8N Automation Logo" 
              className="w-6 h-6"
            />
            <span className="font-semibold">UpFlow</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {year} Upwork Proposal Automation. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#terms" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</a>
            <a 
              href="https://tchetan.gumroad.com/l/upwork-automation-n8n-template" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-primary hover:underline"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
