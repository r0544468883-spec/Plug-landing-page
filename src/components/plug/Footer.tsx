import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 text-center">
      <p className="text-sm text-muted-foreground">
        {t('copyright')}
      </p>
    </footer>
  );
};

export default Footer;
