import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { useI18n } from "@/lib/i18n";
// Lovable CDN URLs
const LOVABLE_CDN = (assetId: string, filename: string) => 
  `https://cdn.lovable.app/assets-v1/4b6443ba-715a-46b8-8337-2dd02f722961/${assetId}/${filename}`;

const logoAsset = LOVABLE_CDN("ed629090-584d-4fd8-99c4-63028fb76a3b", "muthu-logo.png");

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/blog", label: "Blog" },
    { to: "/tips", label: t("nav.tips") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLocale(locale === "en" ? "ta" : "en");

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 glass-teal ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all ${scrolled ? "py-2" : "py-3"}`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/60 shadow-gold bg-charcoal">
            <img src={logoAsset} alt={`${CLINIC.name} logo — Modern dentistry in Panruti`} className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-tight text-cream">{CLINIC.short}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Dental Clinic</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-cream/90 hover:text-gold transition-colors relative"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-gold/40 text-xs font-semibold uppercase tracking-wider text-cream hover:bg-gold hover:text-gold-foreground transition"
          >
            <Languages className="w-3.5 h-3.5" />
            {locale === "en" ? "தமிழ்" : "EN"}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-gold-foreground text-sm font-semibold hover:-translate-y-0.5 shadow-gold transition"
          >
            {t("cta.book")}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="px-2.5 py-1.5 rounded-full border border-gold/40 text-[11px] font-semibold text-cream"
          >
            {locale === "en" ? "தமிழ்" : "EN"}
          </button>
          <button onClick={() => setOpen(true)} className="p-2 rounded-lg hover:bg-white/10 text-cream" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>


      {/* Ticker */}
      <div className="bg-charcoal/90 text-cream border-y border-gold/20 overflow-hidden">
        <div className="flex gap-12 w-max marquee-x py-1.5 text-xs sm:text-sm whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="px-2 text-cream/85">
              <span className="text-gold mr-2">●</span>
              {t("ticker.text")}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 md:hidden z-[55]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-72 bg-background shadow-2xl p-6 md:hidden z-[60]"
            >
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="mt-4 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg hover:bg-muted text-base font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 px-4 py-3 rounded-full bg-primary text-primary-foreground text-center font-medium"
                >
                  {t("cta.book")}
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
