
# כפתור משולב: שליחת טופס + הצטרפות לוואטסאפ

## סיכום
שינוי הכפתור הראשי "Join the Waitlist" כך שיעשה שני דברים בו-זמנית:
1. שולח את הטופס לשרת
2. פותח את קבוצת הוואטסאפ בטאב חדש

הסרת הכפתור הנפרד של וואטסאפ והמפריד "או".

---

## לפני ואחרי

### לפני
```text
┌──────────────────────────────────────┐
│        Join the Waitlist             │
└──────────────────────────────────────┘
           ─── או ───
┌──────────────────────────────────────┐
│   הצטרפו לקבוצת הוואטסאפ שלנו        │
└──────────────────────────────────────┘
```

### אחרי
```text
┌──────────────────────────────────────┐
│  📱  Join the Waitlist               │  <- כפתור אחד עם אייקון וואטסאפ
└──────────────────────────────────────┘
   Get launch updates & join our community
```

---

## שינויים טכניים

### קובץ: src/components/plug/SignupForm.tsx

**1. שינוי פונקציית onSubmit**

הוספת פתיחת וואטסאפ בטאב חדש לאחר שליחת הטופס בהצלחה:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    // ... קוד שליחת הטופס הקיים ...
    
    // פתיחת קבוצת וואטסאפ בטאב חדש
    window.open('https://chat.whatsapp.com/Kbh0vYaFUTWG1Km3t0ogBw', '_blank');
    
    setSubmittedName(data.fullName);
    setIsSubmitted(true);
  } catch (error) {
    // ... טיפול בשגיאות ...
  }
};
```

**2. עדכון הכפתור הראשי**

הוספת אייקון וואטסאפ לכפתור ושינוי הטקסט:

```tsx
<Button type="submit" className="...">
  {form.formState.isSubmitting ? (
    <>
      <Loader2 className="w-4 h-4 animate-spin" />
      {t('submitting')}
    </>
  ) : (
    <>
      <WhatsAppIcon className="w-5 h-5" />
      {t('submitAndJoin')}
    </>
  )}
</Button>
```

**3. הסרת הכפתור הנפרד**

הסרת:
- ה-Divider עם "או"
- כפתור הוואטסאפ הנפרד
- טקסט ההסבר מתחתיו

**4. הוספת טקסט הסבר מתחת לכפתור**

```tsx
<p className="text-xs text-muted-foreground text-center mt-2">
  {t('submitButtonDesc')}
</p>
```

---

### קובץ: src/i18n/translations.ts

עדכון תרגומים:

| מפתח | אנגלית | עברית |
|------|--------|-------|
| `submitAndJoin` | "Join Waitlist & Community" | "הצטרפו לרשימה ולקהילה" |
| `submitButtonDesc` | "You'll be added to the waitlist and our WhatsApp group" | "תצורפו לרשימת ההמתנה ולקבוצת הוואטסאפ שלנו" |

ניתן להסיר (לא בשימוש יותר):
- `orDivider`

---

## סיכום קבצים

| קובץ | פעולה |
|------|-------|
| `src/components/plug/SignupForm.tsx` | עדכון onSubmit, עדכון כפתור, הסרת כפתור נפרד |
| `src/i18n/translations.ts` | הוספת `submitAndJoin`, `submitButtonDesc` |
