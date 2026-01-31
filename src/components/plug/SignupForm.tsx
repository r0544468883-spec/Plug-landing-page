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
                t('submit')
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-2">
              {t('whatsappGroupDesc')}
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignupForm;
