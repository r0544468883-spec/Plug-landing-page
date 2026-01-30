import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import ThankYou from './ThankYou';

// Webhook URL placeholder - replace with actual n8n production URL
const WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/plug-waitlist';

interface SignupFormProps {
  className?: string;
  id?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ className, id }) => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  // Create schema with translated messages
  const formSchema = z.object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: t('nameRequired') })
      .max(100, { message: t('nameTooLong') }),
    email: z
      .string()
      .trim()
      .min(1, { message: t('emailRequired') })
      .email({ message: t('emailInvalid') })
      .max(255),
    phone: z
      .string()
      .trim()
      .min(1, { message: t('phoneRequired') })
      .regex(/^[\d\s\-\+\(\)]{7,20}$/, { message: t('phoneInvalid') }),
    linkedin: z
      .string()
      .trim()
      .min(1, { message: t('linkedinRequired') })
      .regex(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w\-]+\/?$|^linkedin\.com\/in\/[\w\-]+\/?$|^[\w\-]+$/, { 
        message: t('linkedinInvalid') 
      }),
    desiredRole: z
      .string()
      .trim()
      .min(1, { message: t('roleRequired') })
      .max(100, { message: t('roleTooLong') }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      desiredRole: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Normalize LinkedIn URL
      let linkedinUrl = data.linkedin.trim();
      if (!linkedinUrl.includes('linkedin.com')) {
        linkedinUrl = `https://www.linkedin.com/in/${linkedinUrl}`;
      } else if (!linkedinUrl.startsWith('http')) {
        linkedinUrl = `https://${linkedinUrl}`;
      }

      const payload = {
        ...data,
        linkedin: linkedinUrl,
        language,
        timestamp: new Date().toISOString(),
      };

      // Send to webhook
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // For cross-origin requests to n8n
        body: JSON.stringify(payload),
      });

      // Open WhatsApp group in new tab
      window.open('https://chat.whatsapp.com/Kbh0vYaFUTWG1Km3t0ogBw', '_blank');

      setSubmittedName(data.fullName);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success since no-cors doesn't return response
      setSubmittedName(data.fullName);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ThankYou name={submittedName} className={className} />;
  }

  return (
    <section id={id} className={`w-full max-w-md mx-auto px-6 magnetic-pull magnetic-pull-delay-4 ${className || ''}`}>
      <div className="glass-card p-6 sm:p-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{t('formTitle')}</h3>
          <p className="text-sm text-muted-foreground">{t('formSubtitle')}</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('fullName')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t('fullNamePlaceholder')}
                      className="bg-input/50 border-border input-glow transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      className="bg-input/50 border-border input-glow transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('phone')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder={t('phonePlaceholder')}
                      className="bg-input/50 border-border input-glow transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('linkedin')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t('linkedinPlaceholder')}
                      className="bg-input/50 border-border input-glow transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desiredRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('desiredRole')}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t('desiredRolePlaceholder')}
                      className="bg-input/50 border-border input-glow transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-base"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('submitting')}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('submitAndJoin')}
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-2">
              {t('submitButtonDesc')}
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignupForm;
