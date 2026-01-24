import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Rocket } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className={`fixed bottom-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-110 fab-pulse ${
        isRTL ? 'left-6' : 'right-6'
      }`}
      style={{
        background: 'hsl(var(--plug-mint))',
        color: 'hsl(var(--plug-navy))',
        boxShadow: '0 0 20px hsl(var(--plug-mint) / 0.5), 0 0 40px hsl(var(--plug-mint) / 0.3)',
      }}
      aria-label={t('fabButton')}
    >
      <Rocket className="w-4 h-4" />
      <span>{t('fabButton')}</span>
    </button>
  );
};

export default FloatingCTA;
