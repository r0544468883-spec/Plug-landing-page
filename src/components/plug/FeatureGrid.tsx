import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Search, Mic, IdCard, MessageSquare, BarChart3 } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Search,
      titleKey: 'featureQuickSearchTitle' as const,
      descKey: 'featureQuickSearchDesc' as const,
      highlight: true,
    },
    {
      icon: Mic,
      titleKey: 'featureInterviewTitle' as const,
      descKey: 'featureInterviewDesc' as const,
    },
    {
      icon: IdCard,
      titleKey: 'featureCandidateIdTitle' as const,
      descKey: 'featureCandidateIdDesc' as const,
    },
    {
      icon: MessageSquare,
      titleKey: 'featureDirectContactTitle' as const,
      descKey: 'featureDirectContactDesc' as const,
    },
    {
      icon: BarChart3,
      titleKey: 'featureAnalyticsTitle' as const,
      descKey: 'featureAnalyticsDesc' as const,
    },
  ];

  return (
    <section className="relative py-12 px-6 overflow-hidden">
      {/* Video Background - Desktop: left side */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-1/2 lg:w-2/5 object-cover opacity-40 z-0 hidden sm:block pointer-events-none"
        src="/videos/plug-features.mp4"
      />
      
      {/* Video Background - Mobile: full background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 sm:hidden pointer-events-none"
        src="/videos/plug-features.mp4"
      />
      
      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, hsl(var(--background) / 0.6), hsl(var(--background) / 0.95))',
        }}
      />
      
      {/* Content - above video */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-foreground">
          {t('featuresTitle')}
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('featuresSubtitle')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  feature.highlight ? 'relative overflow-hidden' : ''
                }`}
                style={{
                  borderColor: 'hsl(var(--plug-mint) / 0.3)',
                  boxShadow: feature.highlight 
                    ? '0 0 30px hsl(var(--plug-mint) / 0.3)' 
                    : '0 0 15px hsl(var(--plug-mint) / 0.1)',
                }}
              >
                {feature.highlight && (
                  <div 
                    className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold"
                    style={{
                      background: 'hsl(var(--plug-mint))',
                      color: 'hsl(var(--plug-navy))',
                    }}
                  >
                    ✨ MAGIC
                  </div>
                )}
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: 'hsl(var(--plug-mint) / 0.15)',
                    }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: 'hsl(var(--plug-mint))' }}
                    />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-foreground">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                  {feature.highlight && (
                    <p 
                      className="text-xs mt-3 font-medium"
                      style={{ color: 'hsl(var(--plug-mint))' }}
                    >
                      {t('featureQuickSearchExample')}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
