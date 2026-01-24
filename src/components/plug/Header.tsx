import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - positioned based on reading direction */}
        <div className={`flex items-center ${isRTL ? 'order-2' : 'order-1'}`}>
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-primary">PLUG</span>
          </div>
        </div>

        {/* Language Toggle */}
        <div className={`flex items-center ${isRTL ? 'order-1' : 'order-2'}`}>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{t('languageToggle')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
