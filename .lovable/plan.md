

# הוספת כפתור הצטרפות לקבוצת וואטסאפ

## סיכום
הוספת כפתור וואטסאפ מתחת לכפתור "Join the Waitlist" בטופס ההרשמה, עם הסבר קצר על מה מקבלים בקבוצה.

---

## עיצוב הכפתור

```text
┌──────────────────────────────────────┐
│        Join the Waitlist             │  <- כפתור ראשי (קיים)
└──────────────────────────────────────┘
                  
           ─── או ───

┌──────────────────────────────────────┐
│  📱 הצטרפו לקבוצת הוואטסאפ שלנו      │  <- כפתור חדש
└──────────────────────────────────────┘
   קישור להשקה, עדכונים שוטפים,
   הדרכות ופיצ'רים, טיפים למחפשי עבודה
```

---

## שינויים

### 1. קובץ: src/i18n/translations.ts

הוספת תרגומים חדשים:

| מפתח | אנגלית | עברית |
|------|--------|-------|
| `whatsappGroupDesc` | "Get launch updates, feature guides, job seeking tips & recruiter insights" | "קישור להשקה, עדכונים שוטפים, הדרכות על פיצ'רים, טיפים למחפשי עבודה והדרכות של מגייסות" |
| `orDivider` | "or" | "או" |

### 2. קובץ: src/components/plug/SignupForm.tsx

הוספה אחרי כפתור ה-Submit (שורה 226):

- קו מפריד עם "או" באמצע
- כפתור וואטסאפ עם אייקון
- טקסט הסבר קטן מתחת

**עיצוב הכפתור:**
- צבע ירוק וואטסאפ (`#25D366`)
- אייקון וואטסאפ (SVG)
- פתיחה בטאב חדש (`target="_blank"`)
- קישור: `https://chat.whatsapp.com/Kbh0vYaFUTWG1Km3t0ogBw`

---

## קוד לדוגמה

```tsx
{/* Divider */}
<div className="flex items-center gap-3 my-4">
  <div className="flex-1 h-px bg-border" />
  <span className="text-muted-foreground text-sm">{t('orDivider')}</span>
  <div className="flex-1 h-px bg-border" />
</div>

{/* WhatsApp Button */}
<a
  href="https://chat.whatsapp.com/Kbh0vYaFUTWG1Km3t0ogBw"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 w-full py-3 rounded-md 
             bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold 
             transition-colors"
>
  <WhatsAppIcon />
  {t('joinWhatsApp')}
</a>

<p className="text-xs text-muted-foreground text-center mt-2">
  {t('whatsappGroupDesc')}
</p>
```

---

## קבצים לעדכון

| קובץ | פעולה |
|------|-------|
| `src/i18n/translations.ts` | הוספת `whatsappGroupDesc` ו-`orDivider` |
| `src/components/plug/SignupForm.tsx` | הוספת כפתור וואטסאפ אחרי Submit |

