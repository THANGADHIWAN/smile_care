import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { MapPin, Phone, Mail, Sparkles, Facebook, Instagram, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-0 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid gap-10 items-start lg:grid-cols-[2.4fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold grid place-items-center text-gold-foreground shadow-gold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="font-display text-xl tracking-tight">{CLINIC.name}</div>
          </div>
          <p className="text-sm text-cream/70 max-w-xl leading-relaxed">
            Compassionate, modern dental care in Panruti. Your smile is our priority — from routine checkups to advanced
            restorative dentistry.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-charcoal transition hover:bg-gold/90"
            >
              Book via WhatsApp
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-sm text-cream transition hover:border-transparent hover:bg-white/10"
            >
              Find us on Maps
            </a>
          </div>
          <div className="flex items-center gap-3">
            {(
              [
                { s: "Facebook", href: CLINIC.facebook, Icon: Facebook, hover: "#1877F2" },
                {
                  s: "Instagram",
                  href: CLINIC.instagram,
                  Icon: Instagram,
                  hover: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                },
                { s: "WhatsApp", href: `https://wa.me/${CLINIC.whatsapp}`, Icon: MessageCircle, hover: "#25D366" },
              ] as const
            ).map(({ s, href, Icon, hover }) => (
              <a
                key={s}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s}
                className="group w-10 h-10 rounded-full border border-gold/40 text-gold grid place-items-center transition hover:text-white hover:border-transparent"
                style={{ ["--hover-bg" as string]: hover } as CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = hover;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-cream/50">Follow us on Instagram {CLINIC.instagramHandle}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-cream/75">
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {CLINIC.address}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <a href={`tel:+91${CLINIC.phones[0]}`} className="hover:text-gold">
                {CLINIC.phones[0]}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <a href={`mailto:${CLINIC.email}`} className="hover:text-gold">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-gradient-gold opacity-40" />
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-cream/55 flex flex-wrap justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </span>
          <span>Reg. No: {CLINIC.doctor.reg}</span>
        </div>
      </div>
    </footer>
  );
}
