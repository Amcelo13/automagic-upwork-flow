
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import CreatorSection from '@/components/CreatorSection';
import Footer from '@/components/Footer';
import StickyButton from '@/components/StickyButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <CreatorSection />
      </main>
      <StickyButton />
      <Footer />
    </div>
  );
};

export default Index;
