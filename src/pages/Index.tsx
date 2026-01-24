import React from 'react';
import { LanguageProvider } from '@/i18n/LanguageContext';
import SpaceshipBackground from '@/components/plug/SpaceshipBackground';
import Header from '@/components/plug/Header';
import Hero from '@/components/plug/Hero';
import Countdown from '@/components/plug/Countdown';
import SignupForm from '@/components/plug/SignupForm';
import Footer from '@/components/plug/Footer';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <SpaceshipBackground />
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center py-8">
          <div className="w-full max-w-4xl mx-auto perspective-container">
            <Hero />
            <Countdown />
            <SignupForm className="mt-8" />
          </div>
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
