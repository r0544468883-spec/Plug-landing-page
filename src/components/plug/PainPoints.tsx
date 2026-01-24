import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Magnet, FileSearch, Bell } from 'lucide-react';

const PainPoints: React.FC = () => {
  const { t } = useLanguage();

  const painPoints = [
    {
      icon: Magnet,
      titleKey: 'painBlackHoleTitle' as const,
      descKey: 'painBlackHoleDesc' as const,
    },
    {
      icon: FileSearch,
      titleKey: 'painResumeTitle' as const,
      descKey: 'painResumeDesc' as const,
    },
    {
      icon: Bell,
      titleKey: 'painFollowUpTitle' as const,
      descKey: 'painFollowUpDesc' as const,
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
        {t('painPointsTitle')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'hsl(var(--plug-purple))',
                boxShadow: '0 0 20px hsl(var(--plug-purple) / 0.2)',
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'hsl(var(--plug-purple) / 0.2)',
                  }}
                >
                  <Icon 
                    className="w-7 h-7" 
                    style={{ color: 'hsl(var(--plug-purple))' }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {t(point.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(point.descKey)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PainPoints;
