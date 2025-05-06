
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Check if video is playing when it loads
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // Set initial state
      setIsPlaying(!videoElement.paused);

      // Add event listeners to keep state in sync
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Automate Your <span className="text-gradient">Upwork Proposals</span> <br />
            With IntelliWave AI and N8N
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your freelancing with AI-powered proposal automation.
            Stand out from the competition and win more clients, effortlessly.
          </p>
        </div>

        <div className="video-container max-w-4xl mx-auto mb-12 relative">
          <video
            ref={videoRef}
            className="w-full aspect-video object-contain bg-white scale-[1.05]"
            // loop
            // playsInline
            autoPlay={false}
            onClick={togglePlay}
          >
            <source src="/lovable-uploads/Final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-4 text-white hover:bg-primary/90 transition-colors"
              aria-label="Play video"
            >
              <Play className="w-8 h-8" />
            </button>
          )}
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
