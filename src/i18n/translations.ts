export type Language = 'en' | 'he';

export const translations = {
  en: {
    // Header
    languageToggle: 'עב',
    
    // Hero
    headline: 'Job seeking is a full-time job.',
    headlineBold: 'PLUG is here to do it for you.',
    subheadline: 'The first AI-native interface for job seekers.',
    brandingSlogan: 'Just plug in, and Plug will do the rest.',
    
    // Countdown
    countdownTitle: 'Launching In',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    
    // Pain Points Section
    painPointsTitle: 'Sound Familiar?',
    painBlackHoleTitle: 'The Black Hole',
    painBlackHoleDesc: 'Automatically extracts details from any link (LinkedIn, company sites) and manages your personal CRM.',
    painResumeTitle: 'Resume Matching',
    painResumeDesc: 'Scans job requirements and recommends real-time changes to beat the ATS.',
    painFollowUpTitle: 'Follow-up Chaos',
    painFollowUpDesc: 'Email reminders, interview scheduling, and file management (homework & portfolio) in one place.',
    
    // Features Section
    featuresTitle: 'The Solution',
    featuresSubtitle: 'PLUG has your back with AI-powered tools designed for job seekers.',
    featureQuickSearchTitle: 'Quick Search',
    featureQuickSearchDesc: 'A list of companies with roles that match your resume exactly.',
    featureQuickSearchExample: 'Found 14 companies matching you right now',
    featureInterviewTitle: 'Interview Prep',
    featureInterviewDesc: 'AI-powered interview simulator tailored to the specific role.',
    featureCandidateIdTitle: 'Candidate ID',
    featureCandidateIdDesc: 'Your personal landing page to share with recruiters.',
    featureDirectContactTitle: 'Direct Contact',
    featureDirectContactDesc: 'Connect directly with recruiters within the platform.',
    featureAnalyticsTitle: 'Search Analytics',
    featureAnalyticsDesc: 'Track your job search progress - know where you stand at any moment.',
    
    // FAB
    fabButton: 'Save My Spot!',
    
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
    submitAndJoin: 'Join Waitlist & Community',
    submitButtonDesc: "You'll be added to the waitlist and our WhatsApp group",
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
    orDivider: 'or',
    whatsappGroupDesc: 'Get launch updates, feature guides, job seeking tips & recruiter insights',
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
    brandingSlogan: 'פשוט תתחבר, ופלאג יעשה את השאר.',
    
    // Countdown
    countdownTitle: 'ההשקה בעוד',
    days: 'ימים',
    hours: 'שעות',
    minutes: 'דקות',
    seconds: 'שניות',
    
    // Pain Points Section
    painPointsTitle: 'נשמע מוכר?',
    painBlackHoleTitle: 'החור השחור',
    painBlackHoleDesc: 'פלאג שואב אוטומטית פרטים מכל לינק (LinkedIn, אתר חברה) ומנהל לך CRM אישי.',
    painResumeTitle: 'התאמת קורות חיים',
    painResumeDesc: 'פלאג סורק את דרישות התפקיד וממליץ על שינויים בזמן אמת כדי לנצח את ה-ATS.',
    painFollowUpTitle: 'כאוס המעקב',
    painFollowUpDesc: 'פלאג מזכיר לך לשלוח מיילים, מתזמן ראיונות ומנהל קבצים (מטלות בית ותיק עבודות) במקום אחד.',
    
    // Features Section
    featuresTitle: 'הפתרון',
    featuresSubtitle: 'פלאג איתך גב לגב עם כלים מבוססי AI שתוכננו למחפשי עבודה.',
    featureQuickSearchTitle: 'חיפוש מהיר',
    featureQuickSearchDesc: 'רשימת חברות עם תפקידים שמתאימים בדיוק לקורות החיים שלך.',
    featureQuickSearchExample: 'מצאנו 14 חברות שמתאימות לך כרגע',
    featureInterviewTitle: 'הכנה לראיון',
    featureInterviewDesc: 'פלאג מכין אותך לראיונות עבודה עם סימולטור AI מותאם לתפקיד הספציפי.',
    featureCandidateIdTitle: 'כרטיס מועמד',
    featureCandidateIdDesc: 'פלאג יוצר לך כרטיס אישי חכם שניתן לשתף עם מגייסים.',
    featureDirectContactTitle: 'קשר ישיר',
    featureDirectContactDesc: 'פלאג מאפשר לך ליצור קשר ישיר עם המגייס בתוך המערכת.',
    featureAnalyticsTitle: 'ניתוח חיפוש',
    featureAnalyticsDesc: 'פלאג מנתח את חיפוש העבודה שלך - תדע איפה אתה עומד בכל רגע.',
    
    // FAB
    fabButton: 'שמור לי מקום!',
    
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
    submitAndJoin: 'הצטרפו לרשימה ולקהילה',
    submitButtonDesc: 'תצורפו לרשימת ההמתנה ולקבוצת הוואטסאפ שלנו',
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
    orDivider: 'או',
    whatsappGroupDesc: 'קישור להשקה, עדכונים שוטפים, הדרכות על פיצ׳רים, טיפים למחפשי עבודה והדרכות של מגייסות',
    
    // Footer
    copyright: '© 2026 PLUG. כל הזכויות שמורות.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
