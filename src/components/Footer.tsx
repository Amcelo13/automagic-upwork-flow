
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/d4b10973-99f4-4b22-a934-2f2eb6544791.png" 
              alt="UpFlow AI Logo" 
              className="w-6 h-6"
            />
            <span className="font-semibold text-gray-800">UpFlow AI</span>
          </div>
          
          <div className="text-sm text-gray-500">
            © {year} UpFlow AI - Upwork Proposal Automation. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="text-xs text-gray-500 hover:text-gray-800">Privacy Policy</a>
            <a href="#terms" className="text-xs text-gray-500 hover:text-gray-800">Terms of Service</a>
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
