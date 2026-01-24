import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import plugLogo from '@/assets/plug-logo.png';

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
          <img 
            src={plugLogo} 
            alt="PLUG" 
            className="h-8 sm:h-10 w-auto"
          />
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
