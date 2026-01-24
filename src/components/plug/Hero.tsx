import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="text-center px-6 pt-24 pb-8 perspective-container">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2 magnetic-pull">
        {t('headline')}
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary magnetic-pull magnetic-pull-delay-1">
        {t('headlineBold')}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto magnetic-pull magnetic-pull-delay-2">
        {t('subheadline')}
      </p>
    </section>
  );
};

export default Hero;
