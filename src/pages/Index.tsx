import React from 'react';
import SpaceshipBackground from '@/components/plug/SpaceshipBackground';
import Header from '@/components/plug/Header';
import Hero from '@/components/plug/Hero';
import Countdown from '@/components/plug/Countdown';
import FeaturesVideo from '@/components/plug/FeaturesVideo';
import PainPoints from '@/components/plug/PainPoints';
import FeatureGrid from '@/components/plug/FeatureGrid';
import SignupForm from '@/components/plug/SignupForm';
import FloatingCTA from '@/components/plug/FloatingCTA';
import Footer from '@/components/plug/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SpaceshipBackground />
      <Header />
      
      <main className="flex-1 flex flex-col items-center py-8">
        <div className="w-full max-w-5xl mx-auto perspective-container">
          <Hero />
          <Countdown />
          <FeaturesVideo />
          <PainPoints />
          <FeatureGrid />
          <SignupForm className="mt-8" id="signup-form" />
        </div>
      </main>
      
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
