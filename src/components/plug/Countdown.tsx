import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const { t } = useLanguage();
  
  // Target: February 7th, 2026, 21:00 Israel Time
  const targetDate = new Date('2026-02-07T21:00:00+02:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [prevSeconds, setPrevSeconds] = useState<number>(timeLeft.seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevSeconds(timeLeft.seconds);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft.seconds]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const TimeUnit: React.FC<{ value: number; label: string; isAnimating?: boolean }> = ({ 
    value, 
    label, 
    isAnimating 
  }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div 
          className={`
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold
            text-accent tracking-wider
            ${isAnimating ? 'digit-flip' : ''}
          `}
          style={{
            textShadow: '0 0 30px hsl(var(--plug-purple) / 0.5), 0 0 60px hsl(var(--plug-purple) / 0.3)',
          }}
        >
          {formatNumber(value)}
        </div>
      </div>
      <span className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  const Separator: React.FC = () => (
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-accent opacity-50 mx-1 sm:mx-2">
      :
    </div>
  );

  return (
    <section className="py-8 sm:py-12 px-6 magnetic-pull magnetic-pull-delay-3">
      <h3 className="text-center text-lg sm:text-xl text-muted-foreground mb-6 uppercase tracking-widest">
        {t('countdownTitle')}
      </h3>
      
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <TimeUnit value={timeLeft.days} label={t('days')} />
        <Separator />
        <TimeUnit value={timeLeft.hours} label={t('hours')} />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label={t('minutes')} />
        <Separator />
        <TimeUnit 
          value={timeLeft.seconds} 
          label={t('seconds')} 
          isAnimating={prevSeconds !== timeLeft.seconds}
        />
      </div>
    </section>
  );
};

export default Countdown;
