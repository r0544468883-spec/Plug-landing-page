export type Language = 'en' | 'he';

export const translations = {
  en: {
    // Header
    languageToggle: 'עב',
    
    // Hero
    headline: 'Job seeking is a full-time job.',
    headlineBold: 'PLUG is here to do it for you.',
    subheadline: 'The first AI-native interface for job seekers.',
    
    // Countdown
    countdownTitle: 'Launching In',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    
    // Form
    formTitle: 'Be the First to Know',
    formSubtitle: 'Join the waitlist and get exclusive early access.',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    phone: 'Phone',
    phonePlaceholder: '+972 50 123 4567',
    linkedin: 'LinkedIn Profile',
    linkedinPlaceholder: 'linkedin.com/in/yourprofile',
    desiredRole: 'Desired Role',
    desiredRolePlaceholder: 'e.g. Product Manager, Developer',
    submit: 'Join the Waitlist',
    submitting: 'Submitting...',
    
    // Validation errors
    nameRequired: 'Full name is required',
    nameTooLong: 'Name must be less than 100 characters',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    phoneRequired: 'Phone number is required',
    phoneInvalid: 'Please enter a valid phone number',
    linkedinRequired: 'LinkedIn profile is required',
    linkedinInvalid: 'Please enter a valid LinkedIn profile URL',
    roleRequired: 'Desired role is required',
    roleTooLong: 'Role must be less than 100 characters',
    
    // Thank you
    thankYouTitle: 'You\'re In!',
    thankYouMessage: 'Thanks for joining the waitlist.',
    thankYouSubtext: 'We\'ll notify you when we launch.',
    joinWhatsApp: 'Join our WhatsApp Group',
    
    // Footer
    copyright: '© 2026 PLUG. All rights reserved.',
  },
  he: {
    // Header
    languageToggle: 'EN',
    
    // Hero
    headline: 'חיפוש עבודה הוא משרה מלאה.',
    headlineBold: 'פלאג כאן כדי לעשות אותה בשבילך.',
    subheadline: 'הממשק הראשון מבוסס AI למחפשי עבודה.',
    
    // Countdown
    countdownTitle: 'ההשקה בעוד',
    days: 'ימים',
    hours: 'שעות',
    minutes: 'דקות',
    seconds: 'שניות',
    
    // Form
    formTitle: 'היו הראשונים לדעת',
    formSubtitle: 'הצטרפו לרשימת ההמתנה וקבלו גישה מוקדמת.',
    fullName: 'שם מלא',
    fullNamePlaceholder: 'הכניסו את שמכם המלא',
    email: 'אימייל',
    emailPlaceholder: 'your@email.com',
    phone: 'טלפון',
    phonePlaceholder: '050-123-4567',
    linkedin: 'פרופיל לינקדאין',
    linkedinPlaceholder: 'linkedin.com/in/yourprofile',
    desiredRole: 'תפקיד מבוקש',
    desiredRolePlaceholder: 'לדוגמה: מנהל מוצר, מפתח',
    submit: 'הצטרפו לרשימת ההמתנה',
    submitting: 'שולח...',
    
    // Validation errors
    nameRequired: 'שם מלא הוא שדה חובה',
    nameTooLong: 'השם חייב להיות פחות מ-100 תווים',
    emailRequired: 'אימייל הוא שדה חובה',
    emailInvalid: 'אנא הכניסו כתובת אימייל תקינה',
    phoneRequired: 'מספר טלפון הוא שדה חובה',
    phoneInvalid: 'אנא הכניסו מספר טלפון תקין',
    linkedinRequired: 'פרופיל לינקדאין הוא שדה חובה',
    linkedinInvalid: 'אנא הכניסו כתובת לינקדאין תקינה',
    roleRequired: 'תפקיד מבוקש הוא שדה חובה',
    roleTooLong: 'התפקיד חייב להיות פחות מ-100 תווים',
    
    // Thank you
    thankYouTitle: '!אתם בפנים',
    thankYouMessage: 'תודה שהצטרפתם לרשימת ההמתנה.',
    thankYouSubtext: 'נעדכן אתכם כשנשיק.',
    joinWhatsApp: 'הצטרפו לקבוצת הוואטסאפ שלנו',
    
    // Footer
    copyright: '© 2026 PLUG. כל הזכויות שמורות.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
