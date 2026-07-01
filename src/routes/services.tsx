import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CONSULTATION_TYPES } from "@/lib/clinic";
import { BookingForm } from "@/components/site/BookingForm";
import {
  Stethoscope, Brush, Scissors, Sparkles, Activity, Crown, Baby, AlertCircle,
  Smile, Bandage, Layers, Wrench, ChevronDown,
} from "lucide-react";

import { breadcrumbSchema } from "@/lib/schema";

const FAQ_ITEMS = [
  {
    q: "Do I need an appointment for a checkup?",
    a: "Yes — booking ahead keeps your wait short. Use the WhatsApp booking on this page or call us at 7338726004 to reserve a slot at our Panruti clinic.",
  },
  {
    q: "Is root canal treatment painful?",
    a: "Modern root canal treatment is largely painless. We use effective local anaesthesia and rotary endodontic instruments so most patients are surprised how comfortable the procedure is. Single-sitting RCT is available at Muthu Dental Clinic, Panruti.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely. We focus on building trust with little ones through gentle, age-appropriate pediatric dentistry — preventive sealants, fluoride therapy and habit counselling for growing smiles.",
  },
  {
    q: "What are your payment options?",
    a: "We accept cash, UPI, and major debit and credit cards. For larger treatments such as implants or full-mouth rehabilitation, we offer transparent staged payment plans and no-cost EMI on select cards.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services in Panruti — RCT, Implants, Braces | Muthu Dental" },
      { name: "description", content: "Full-service dental care in Panruti: root canal, implants, braces, whitening, crowns, pediatric and emergency dentistry. Transparent pricing." },
      { property: "og:title", content: "Dental Services — Muthu Dental Clinic, Panruti" },
      { property: "og:description", content: "Comprehensive dental treatments under one roof in Panruti." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://glow-dental-chat.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});


const ICONS: Record<string, typeof Stethoscope> = {
  "General Checkup": Stethoscope,
  "Teeth Cleaning & Polishing": Brush,
  "Tooth Extraction": Wrench,
  "Root Canal Treatment": Activity,
  "Dental Fillings": Layers,
  "Teeth Whitening": Sparkles,
  "Braces & Orthodontics": Scissors,
  "Dental Implants": Smile,
  "Crowns & Bridges": Crown,
  "Pediatric Dentistry": Baby,
  "Gum Treatment": Bandage,
  "Emergency Dental Care": AlertCircle,
};

const DETAILS: Record<string, string> = {
  "General Checkup": "Comprehensive oral exam including soft-tissue screening, occlusion check, and digital X-rays when indicated. We give you an honest assessment and a step-by-step plan.",
  "Teeth Cleaning & Polishing": "Ultrasonic scaling removes tartar and stains, followed by polishing for a smooth, glossy finish. Recommended every 6 months for healthy gums.",
  "Tooth Extraction": "Atraumatic extractions with modern instruments and gentle anaesthesia. Surgical and wisdom-tooth removals also performed in-house.",
  "Root Canal Treatment": "Single-sitting RCT using rotary endodontics. Saves your natural tooth and ends the pain quickly, with minimal discomfort.",
  "Dental Fillings": "Tooth-coloured composite restorations that bond invisibly to your tooth structure — strong, aesthetic, mercury-free.",
  "Teeth Whitening": "In-office bleaching for visibly whiter teeth in a single appointment. Safe, gum-protective protocols.",
  "Braces & Orthodontics": "Metal, ceramic and aligner options for children and adults. Custom plans with predictable timelines and clear pricing.",
  "Dental Implants": "Titanium implant placement and restoration — the gold standard for replacing missing teeth without altering neighbours.",
  "Crowns & Bridges": "Ceramic crowns and bridges that look and feel natural. Digital impressions for a precise, comfortable fit.",
  "Pediatric Dentistry": "Gentle, child-friendly dentistry — preventive sealants, fluoride therapy, and habit counselling for growing smiles.",
  "Gum Treatment": "Scaling, root planing and gum therapy to manage gingivitis and periodontitis. Healthier gums, longer-lasting teeth.",
  "Emergency Dental Care": "Same-day relief for severe pain, trauma, broken teeth and dental abscesses. Call us — we'll fit you in.",
};

export default function ServicesPage() { return <ServicesPageInner />; }

function ServicesPageInner() {
  return (
    <div className="pt-32">
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Our services</p>
            <h1 className="text-5xl md:text-6xl font-semibold">Dental Services in Panruti — Everything Your Smile Needs</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From routine cleanings to advanced restorative procedures — delivered with precision and warmth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONSULTATION_TYPES.map((name, i) => {
            const Icon = ICONS[name] ?? Stethoscope;
            return (
              <Reveal key={name} delay={i * 0.04}>
                <div className="h-full bg-card rounded-2xl p-6 border shadow-card hover:shadow-soft hover:-translate-y-1 transition group">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-primary grid place-items-center group-hover:bg-gradient-hero group-hover:text-primary-foreground transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{DETAILS[name]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 bg-secondary/40">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">FAQs</p>
            <h2 className="text-4xl font-semibold">Common questions</h2>
          </Reveal>
          <Reveal>
            <div className="bg-card rounded-2xl border shadow-card divide-y">
              {FAQ_ITEMS.map((f, i) => (
                <details key={i} className="group px-6 py-2 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-medium text-left">
                    <span>{f.q}</span>
                    <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="pb-4 pr-8 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      <section id="book" className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-4xl font-semibold">Ready when you are</h2>
            <p className="mt-3 text-muted-foreground">Book any treatment in under a minute.</p>
          </Reveal>
          <Reveal><BookingForm /></Reveal>
        </div>
      </section>
    </div>
  );
}
