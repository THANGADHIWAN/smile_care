import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "ta";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.gallery": "Gallery",
  "nav.tips": "Tips",
  "nav.contact": "Contact",
  "cta.book": "Book Appointment",
  "cta.bookThis": "Book This",
  "cta.watchStory": "Watch Our Story",
  "cta.learnMore": "Learn More",
  "cta.viewAll": "View all posts",
  "hero.location": "Panruti · Tamil Nadu",
  "hero.h1.your": "Your",
  "hero.h1.smile": "Smile",
  "hero.h1.is": "is",
  "hero.h1.our": "Our",
  "hero.h1.masterpiece": "Masterpiece",
  "hero.sub": "Modern, painless dental care in Panruti — guided by",
  "hero.subSpa": ", with the warmth of a luxury spa.",
  "hero.badge.smiles": "Happy Smiles",
  "stats.years": "Years Experience",
  "stats.patients": "Smiles Delivered",
  "stats.procedures": "Procedures",
  "stats.satisfaction": "Satisfaction",
  "services.kicker": "Our Services",
  "services.h2a": "Every Smile Deserves",
  "services.h2b": "Expert Care",
  "svc.general": "General Checkup",
  "svc.cleaning": "Cleaning & Polishing",
  "svc.rct": "Root Canal (RCT)",
  "svc.whitening": "Teeth Whitening",
  "svc.braces": "Braces & Aligners",
  "svc.crowns": "Crowns & Bridges",
  "svc.pediatric": "Pediatric Care",
  "svc.emergency": "Emergency Care",
  "why.kicker": "Why Choose Us",
  "why.h2a": "Confidence in",
  "why.h2b": "every visit",
  "doctor.kicker": "Meet Your Dentist",
  "doctor.bookConsult": "Book a Consultation",
  "doctor.more": "More about the doctor",
  "doctor.downloadPdf": "Download Credentials PDF",
  "testi.kicker": "Patient Stories",
  "testi.h2a": "Smiles we've",
  "testi.h2b": "earned",
  "testi.googleBadge": "4.9 ★ on Google — 120+ reviews",
  "ba.kicker": "Real Results",
  "ba.h2a": "Before &",
  "ba.h2b": "After",
  "ba.sub": "Real smile transformations from our patients.",
  "ba.before": "Before",
  "ba.after": "After",
  "ba.placeholder": "Placeholder image",
  "gallery.kicker": "Fresh from our Instagram",
  "gallery.h2a": "Smile",
  "gallery.h2b": "Gallery",
  "gallery.filter.all": "All",
  "gallery.filter.ba": "Before & After",
  "gallery.filter.clinic": "Clinic",
  "gallery.filter.team": "Team",
  "ticker.text": "🏆 Panruti's Most Trusted Dental Clinic · Painless RCT · Open Sundays · Call 7338726004",
};

const ta: Dict = {
  "nav.home": "முகப்பு",
  "nav.about": "எங்களை பற்றி",
  "nav.services": "சேவைகள்",
  "nav.gallery": "படத்தொகுப்பு",
  "nav.tips": "ஆலோசனைகள்",
  "nav.contact": "தொடர்பு",
  "cta.book": "சந்திப்பு பதிவு",
  "cta.bookThis": "இதை பதிவு செய்க",
  "cta.watchStory": "எங்கள் கதையை பாருங்கள்",
  "cta.learnMore": "மேலும் அறிய",
  "cta.viewAll": "அனைத்து பதிவுகள்",
  "hero.location": "பண்ருட்டி · தமிழ்நாடு",
  "hero.h1.your": "உங்கள்",
  "hero.h1.smile": "சிரிப்பு",
  "hero.h1.is": "எங்கள்",
  "hero.h1.our": "சிறந்த",
  "hero.h1.masterpiece": "படைப்பு",
  "hero.sub": "பண்ருட்டியில் நவீன, வலியில்லா பல் சிகிச்சை —",
  "hero.subSpa": " வழங்குபவர், ஒரு சொகுசு ஸ்பாவின் அரவணைப்போடு.",
  "hero.badge.smiles": "மகிழ்ச்சியான சிரிப்புகள்",
  "stats.years": "ஆண்டுகள் அனுபவம்",
  "stats.patients": "சிரிப்புகள் வழங்கப்பட்டன",
  "stats.procedures": "சிகிச்சைகள்",
  "stats.satisfaction": "திருப்தி",
  "services.kicker": "எங்கள் சேவைகள்",
  "services.h2a": "ஒவ்வொரு சிரிப்புக்கும்",
  "services.h2b": "சிறந்த கவனிப்பு",
  "svc.general": "பொது பரிசோதனை",
  "svc.cleaning": "சுத்தம் & பாலிஷிங்",
  "svc.rct": "ரூட் கால் சிகிச்சை",
  "svc.whitening": "பல் வெண்மையாக்கல்",
  "svc.braces": "பிரேஸ் & அலைனர்",
  "svc.crowns": "கிரவுன் & பிரிட்ஜ்",
  "svc.pediatric": "குழந்தைகள் பல் சிகிச்சை",
  "svc.emergency": "அவசர சிகிச்சை",
  "why.kicker": "ஏன் எங்களை தேர்வு செய்ய",
  "why.h2a": "ஒவ்வொரு வருகையிலும்",
  "why.h2b": "நம்பிக்கை",
  "doctor.kicker": "உங்கள் மருத்துவரை சந்திக்கவும்",
  "doctor.bookConsult": "ஆலோசனை பதிவு செய்க",
  "doctor.more": "மருத்துவரைப் பற்றி மேலும்",
  "doctor.downloadPdf": "சான்றிதழ் PDF பதிவிறக்கம்",
  "testi.kicker": "நோயாளி கதைகள்",
  "testi.h2a": "நாங்கள் சம்பாதித்த",
  "testi.h2b": "சிரிப்புகள்",
  "testi.googleBadge": "Google-இல் 4.9 ★ — 120+ விமர்சனங்கள்",
  "ba.kicker": "உண்மையான முடிவுகள்",
  "ba.h2a": "முன் &",
  "ba.h2b": "பின்",
  "ba.sub": "எங்கள் நோயாளிகளின் உண்மையான சிரிப்பு மாற்றங்கள்.",
  "ba.before": "முன்",
  "ba.after": "பின்",
  "ba.placeholder": "மாதிரி படம்",
  "gallery.kicker": "எங்கள் இன்ஸ்டாகிராமில் இருந்து",
  "gallery.h2a": "சிரிப்பு",
  "gallery.h2b": "தொகுப்பு",
  "gallery.filter.all": "அனைத்தும்",
  "gallery.filter.ba": "முன் & பின்",
  "gallery.filter.clinic": "மருத்துவமனை",
  "gallery.filter.team": "குழு",
  "ticker.text": "🏆 பண்ருட்டியின் மிகவும் நம்பகமான பல் மருத்துவமனை · வலியில்லா RCT · ஞாயிறு திறந்திருக்கும் · அழைக்க 7338726004",
};

const dicts: Record<Locale, Dict> = { en, ta };

const I18nCtx = createContext<{ locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string }>({
  locale: "en",
  setLocale: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale | null) : null;
    if (saved === "en" || saved === "ta") setLocaleState(saved);
  }, []);
  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  };
  const t = (k: string) => dicts[locale][k] ?? dicts.en[k] ?? k;
  return <I18nCtx.Provider value={{ locale, setLocale, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
