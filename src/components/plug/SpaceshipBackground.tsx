import React from 'react';

const SpaceshipBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220 60% 8%) 0%, hsl(220 60% 10%) 50%, hsl(220 60% 12%) 100%)',
        }}
      />

      {/* Spaceship panel texture */}
      <div className="absolute inset-0 spaceship-panel opacity-60" />

      {/* Glowing panel lines - horizontal */}
      <div className="glow-line" style={{ top: '15%', left: '5%', width: '30%' }} />
      <div className="glow-line" style={{ top: '35%', left: '60%', width: '35%', animationDelay: '1s' }} />
      <div className="glow-line" style={{ top: '55%', left: '10%', width: '25%', animationDelay: '2s' }} />
      <div className="glow-line" style={{ top: '75%', left: '50%', width: '40%', animationDelay: '0.5s' }} />
      <div className="glow-line" style={{ top: '90%', left: '20%', width: '20%', animationDelay: '1.5s' }} />

      {/* Vertical accent lines */}
      <div 
        className="absolute h-full w-px opacity-20"
        style={{ 
          left: '20%', 
          background: 'linear-gradient(180deg, transparent, hsl(var(--plug-mint)), transparent)' 
        }} 
      />
      <div 
        className="absolute h-full w-px opacity-20"
        style={{ 
          left: '80%', 
          background: 'linear-gradient(180deg, transparent, hsl(var(--plug-mint)), transparent)' 
        }} 
      />

      {/* Corner accents */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 0% 0%, hsl(var(--plug-mint) / 0.3) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 100% 0%, hsl(var(--plug-mint) / 0.3) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-48 h-48 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, hsl(var(--plug-purple) / 0.4) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, hsl(var(--plug-purple) / 0.4) 0%, transparent 70%)',
        }}
      />

      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--plug-overlay)) 0%, transparent 30%, transparent 70%, hsl(var(--plug-overlay)) 100%)',
        }}
      />
    </div>
  );
};

export default SpaceshipBackground;
