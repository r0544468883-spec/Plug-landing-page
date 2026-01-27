
# עדכון סקשן הפתרון + תיקון לשון זכר לפלאג

## סיכום
שני שינויים עיקריים:
1. **הוספת סרטון רקע** - הוספת קובץ ה-MP4 כרקע מאחורי סקשן "הפתרון" (FeatureGrid)
2. **תיקון לשון זכר** - שינוי כל הטקסטים בעברית כך שפלאג ידבר על עצמו בגוף שלישי זכר

---

## 1. סרטון רקע בסקשן הפתרון

### מיקום הסרטון:
- **דסקטופ**: צד שמאל של המסך, מאחורי הכרטיסיות
- **מובייל**: מאחורי הטקסט, עם שכבת כיסוי כהה לקריאות

### יישום טכני:
```text
+------------------------------------------+
|  [VIDEO BG]  |    Feature Cards Grid     |  <- Desktop
+------------------------------------------+

+------------------+
|   Feature Cards  |  <- Mobile
|   [VIDEO BG]     |
+------------------+
```

### קובץ:
- העתקת `גיף_פיצ_רים_פלאג.mp4` לתיקיית `public/videos/plug-features.mp4`
- שימוש ב-`<video>` tag עם `autoPlay`, `loop`, `muted`, `playsInline`
- הוספת שכבת overlay כהה (50-70% opacity) לשמירה על קריאות הטקסט

### שינויים ב-FeatureGrid.tsx:
- עטיפת הסקשן ב-container עם `position: relative`
- הוספת video element עם `position: absolute`, `z-index: 0`
- הוספת gradient overlay מעל הסרטון
- Content ב-`z-index: 10` מעל הסרטון

---

## 2. תיקון לשון זכר - פלאג בגוף שלישי

### עקרון:
פלאג הוא **זכר** ומדבר על עצמו **בגוף שלישי**:
- לא: "אני עוזר לך" 
- כן: "פלאג עוזר לך"

### שינויים ב-translations.ts (עברית):

| מפתח | לפני | אחרי |
|------|------|------|
| `featuresSubtitle` | "פלאג גב לגב איתך..." | "פלאג איתך גב לגב עם כלים מבוססי AI שתוכננו למחפשי עבודה." |
| `painBlackHoleDesc` | "שואבת אוטומטית..." | "פלאג שואב אוטומטית פרטים מכל לינק (LinkedIn, אתר חברה) ומנהל לך CRM אישי." |
| `painResumeDesc` | "סורקת את דרישות..." | "פלאג סורק את דרישות התפקיד וממליץ על שינויים בזמן אמת כדי לנצח את ה-ATS." |
| `painFollowUpDesc` | "תזכורות למיילים..." | "פלאג מזכיר לך לשלוח מיילים, מתזמן ראיונות ומנהל קבצים (מטלות בית ותיק עבודות) במקום אחד." |
| `featureInterviewDesc` | "סימולטור הכנה..." | "פלאג מכין אותך לראיונות עבודה עם סימולטור AI מותאם לתפקיד הספציפי." |
| `featureCandidateIdDesc` | "כרטיס אישי חכם..." | "פלאג יוצר לך כרטיס אישי חכם שניתן לשתף עם מגייסים." |
| `featureDirectContactDesc` | "יצירת קשר ישיר..." | "פלאג מאפשר לך ליצור קשר ישיר עם המגייס בתוך המערכת." |
| `featureAnalyticsDesc` | "ניתוח מעקב..." | "פלאג מנתח את חיפוש העבודה שלך - תדע איפה אתה עומד בכל רגע." |
| `fabButton` | "שמרי לי מקום!" | "שמור לי מקום!" |

---

## 3. קבצים לעדכון

| קובץ | פעולה |
|------|-------|
| `public/videos/plug-features.mp4` | העתקת קובץ הסרטון |
| `src/components/plug/FeatureGrid.tsx` | הוספת video background עם overlay |
| `src/i18n/translations.ts` | תיקון כל הטקסטים ללשון זכר + גוף שלישי |

---

## 4. דוגמת קוד - FeatureGrid.tsx

```text
<section className="relative py-12 px-6 overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute left-0 top-0 h-full w-1/2 lg:w-1/3 
               object-cover opacity-30 z-0
               hidden sm:block"
    src="/videos/plug-features.mp4"
  />
  
  {/* Mobile: video behind all content */}
  <video className="absolute inset-0 sm:hidden ..." />
  
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r 
                  from-background/80 to-background z-[1]" />
  
  {/* Content - above video */}
  <div className="relative z-10">
    {/* Title, subtitle, grid... */}
  </div>
</section>
```
