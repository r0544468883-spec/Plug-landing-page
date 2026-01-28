import React from 'react';

const FeaturesVideo: React.FC = () => {
  return (
    <section className="py-8 px-6 magnetic-pull magnetic-pull-delay-4">
      <div className="max-w-2xl mx-auto">
        <div 
          className="relative rounded-2xl overflow-hidden border-2"
          style={{
            borderColor: 'hsl(var(--plug-mint) / 0.3)',
            boxShadow: '0 0 40px hsl(var(--plug-mint) / 0.2), 0 0 80px hsl(var(--plug-purple) / 0.1)',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            src="/videos/plug-features.mp4"
          />
          {/* Subtle glow overlay at edges */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 30px hsl(var(--plug-navy) / 0.5)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesVideo;
