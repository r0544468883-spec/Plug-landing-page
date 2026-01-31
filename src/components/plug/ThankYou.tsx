import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle } from 'lucide-react';

interface ThankYouProps {
  name: string;
  className?: string;
}

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/Kbh0vYaFUTWG1Km3t0ogBw';

const ThankYou: React.FC<ThankYouProps> = ({ name, className }) => {
  const { t, isRTL } = useLanguage();

  const firstName = name.split(' ')[0];

  return (
    <section className={`w-full max-w-md mx-auto px-6 ${className || ''}`}>
      <div className="glass-card p-8 text-center animate-scale-in">
        <div className="mb-6">
          <CheckCircle 
            className="w-16 h-16 mx-auto text-primary mb-4" 
            style={{
              filter: 'drop-shadow(0 0 20px hsl(var(--plug-mint) / 0.5))',
            }}
          />
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
            {isRTL ? `${firstName}, ${t('thankYouTitle')}` : `${firstName}, ${t('thankYouTitle')}`}
          </h3>
          <p className="text-lg text-muted-foreground mb-2">{t('thankYouMessage')}</p>
          <p className="text-sm text-muted-foreground">{t('thankYouSubtext')}</p>
        </div>

        <Button
          asChild
          className="btn-glow bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-6 px-8 text-base"
        >
          <a 
            href={WHATSAPP_GROUP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t('joinWhatsApp')}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ThankYou;
