import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Award,
  Smile,
  Brush,
  Scissors,
  Crown,
  Baby,
  Activity,
  Star,
  ArrowRight,
  Play,
  ChevronDown,
  X,
  Instagram,
} from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";
import doctorPortrait from "@/assets/dr-akash-portrait.png.asset.json";
import treatmentImg from "@/assets/treatment.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import cleaningImg from "@/assets/cleaning-polishing.jpg.asset.json";
import bracesImg from "@/assets/braces-aligners.jpg.asset.json";
import implantImg from "@/assets/implant.jpg.asset.json";
import crownImg from "@/assets/crown-bridge-new.png.asset.json";
import rctImg from "@/assets/root-canal-steps.png.asset.json";
import drManoj from "@/assets/dr-manoj.png.asset.json";
import drHariprasath from "@/assets/dr-hariprasath.png.asset.json";
import drGayathri from "@/assets/dr-gayathri.png.asset.json";
import drThulidhasan from "@/assets/dr-thulidhasan.png.asset.json";
import grandOpening from "@/assets/grand-opening.jpeg.asset.json";
import expertCare from "@/assets/expert-care.jpeg.asset.json";
import insideClinic from "@/assets/inside-clinic.png.asset.json";
import pediatricNew from "@/assets/pediatric-care-new.png.asset.json";
import smileBefore from "@/assets/before-after-smile.png.asset.json";
import restorationBefore from "@/assets/before-after-restoration.png.asset.json";
import dentureImg from "@/assets/complete-denture-treatment.png.asset.json";

import { Reveal, CountUp } from "@/components/site/Reveal";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { CLINIC } from "@/lib/clinic";
import { CLINIC_ID, CLINIC_ADDRESS, CLINIC_GEO, GMB_URL, OPENING_HOURS, DOCTORS, SITE_URL } from "@/lib/schema";
import { useState } from "react";
import { Microscope, Wind, Camera } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muthu Dental Clinic — Premier Dental Care in Panruti" },
      {
        name: "description",
        content:
          "Premium, painless dental care in Panruti by Dr. Akash M. Modern equipment, gentle hands, luxury-spa experience. Book on WhatsApp.",
      },
      { property: "og:title", content: "Muthu Dental Clinic — Panruti" },
      { property: "og:description", content: "A signature dental experience in Panruti — guided by Dr. Akash M." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/" },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://glow-dental-chat.lovable.app/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          "@id": CLINIC_ID,
          name: "Muthu Dental Clinic",
          alternateName: "Muthu Dental — Best Dental Clinic in Panruti",
          image: SITE_URL + heroImg,
          logo: SITE_URL + heroImg,
          url: `${SITE_URL}/`,
          telephone: ["+91-7338726004", "+91-6379286339"],
          email: "muthudental6004@gmail.com",
          priceRange: "₹₹",
          medicalSpecialty: "Dentistry",
          currenciesAccepted: "INR",
          paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
          address: CLINIC_ADDRESS,
          geo: { "@type": "GeoCoordinates", ...CLINIC_GEO },
          hasMap: GMB_URL,
          areaServed: ["Panruti", "Cuddalore", "Neyveli", "Vridhachalam", "Kadampuliyur"],
          sameAs: ["https://www.instagram.com/muthudental_", "https://facebook.com", GMB_URL],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              opens: "09:00",
              closes: "21:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "22",
          },
          employee: DOCTORS.map((d) => ({
            "@type": "Person",
            name: d.name,
            jobTitle: d.jobTitle,
            medicalSpecialty: d.medicalSpecialty,
            alumniOf: d.alumniOf,
            ...(d.reg ? { identifier: `TN Dental Council Reg. ${d.reg}` } : {}),
          })),
          makesOffer: [
            "General Checkup",
            "Root Canal Treatment",
            "Dental Implants",
            "Braces & Orthodontics",
            "Teeth Whitening",
            "Crowns & Bridges",
            "Pediatric Dentistry",
            "Gum Treatment",
          ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: s } })),
        }),
      },
    ],
  }),
  component: HomePage,
});


const UNSPLASH = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=80`;

const services = [
  {
    icon: Stethoscope,
    name: "General Checkup",
    desc: "Comprehensive exams with preventive guidance.",
    img: treatmentImg,
    long: "A thorough oral exam including soft-tissue screening, occlusion check and digital X-rays when indicated. Honest assessment and a step-by-step plan.",
  },
  {
    icon: Brush,
    name: "Cleaning & Polishing",
    desc: "Professional scaling for a fresher smile.",
    img: cleaningImg.url,
    long: "Ultrasonic scaling removes tartar and stains, followed by polishing for a smooth, glossy finish. Recommended every 6 months.",
  },
  {
    icon: Activity,
    name: "Root Canal (RCT)",
    desc: "Single-sitting RCT with minimal discomfort.",
    img: rctImg.url,
    long: "Single-sitting RCT using rotary endodontics. Saves your natural tooth and ends the pain quickly, with minimal discomfort.",
  },
  {
    icon: Sparkles,
    name: "Teeth Whitening",
    desc: "Safe in-office whitening for a brighter you.",
    img: treatmentImg,
    long: "In-office bleaching for visibly whiter teeth in a single appointment. Safe, gum-protective protocols with lasting results.",
  },
  {
    icon: Scissors,
    name: "Braces & Aligners",
    desc: "Orthodontics for every age and budget.",
    img: bracesImg.url,
    long: "Metal, ceramic and clear-aligner options for children and adults. Custom plans, predictable timelines and clear pricing.",
  },
  {
    icon: Smile,
    name: "Dental Implants",
    desc: "Permanent replacements that feel natural.",
    img: implantImg.url,
    long: "Titanium implants restore missing teeth with a strong, natural-looking crown. A long-lasting solution that preserves jawbone health.",
  },
  {
    icon: Crown,
    name: "Crowns & Bridges",
    desc: "Natural-looking ceramic restorations.",
    img: crownImg.url,
    long: "Ceramic crowns and bridges that look and feel natural. Digital impressions for a precise, comfortable fit.",
  },
  {
    icon: Baby,
    name: "Pediatric Care",
    desc: "Gentle dentistry your child will enjoy.",
    img: pediatricNew.url,
    long: "Gentle, child-friendly dentistry — preventive sealants, fluoride therapy, and habit counselling for growing smiles.",
  },
];

const stats = [
  { label: "Restorative Dentistry", value: "Mastership", suffix: "" },
  { label: "Smiles Delivered", value: 100, suffix: "+" },
  { label: "Procedures", value: 20, suffix: "+" },
  { label: "Satisfaction", value: 99, suffix: "%" },
];

const testimonials = [
  {
    name: "Priya R.",
    text: "Painless root canal, very gentle staff. Dr. Akash explained everything clearly.",
    rating: 5,
    source: "via Google",
  },
  {
    name: "Karthik S.",
    text: "Best dental clinic in Panruti. Modern equipment and very affordable.",
    rating: 5,
    source: "via Google",
  },
  {
    name: "Anitha M.",
    text: "Got my braces here. So patient and kind — my smile is finally what I dreamed of.",
    rating: 5,
    source: "via WhatsApp",
  },
  {
    name: "Ramesh K.",
    text: "Emergency tooth extraction on a Sunday — they accommodated me immediately.",
    rating: 5,
    source: "via Google",
  },
  {
    name: "Divya N.",
    text: "The clinic feels like a spa. Truly the most luxurious dental visit I've had.",
    rating: 5,
    source: "via Google",
  },
  {
    name: "Mohan V.",
    text: "My kids actually look forward to dentist day now. That says everything.",
    rating: 5,
    source: "via WhatsApp",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />

      <WhyUs />
      <TechnologyStrip />
      <DoctorBlock />
      <TeamSection />
      <TestimonialsMarquee />
      <BeforeAfter />
      <InstagramBanner />
      <SmileGallery />
    </>
  );
}

function TechnologyStrip() {
  const items = [
    { icon: ShieldCheck, title: "Autoclave Sterilisation", desc: "134°C between every patient" },
    { icon: Microscope, title: "Digital X-Ray (RVG)", desc: "90% less radiation, instant images" },
    { icon: Camera, title: "Intraoral Camera", desc: "You see what we see" },
    { icon: Wind, title: "HEPA Air Filtration", desc: "Hospital-grade clean air" },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Technology & Hygiene</p>
          <h2 className="font-display text-4xl md:text-5xl">
            World-class equipment. <span className="italic text-gold">Zero compromise.</span>
          </h2>
          <p className="mt-4 text-cream/70">
            From sterilisation to imaging — the same standards you'd expect in a metropolitan clinic, right here in
            Panruti.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-gold/20 hover:border-gold/60 transition h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground mb-4">
                  <it.icon className="w-6 h-6" />
                </div>
                <div className="font-display text-lg">{it.title}</div>
                <p className="text-sm text-cream/70 mt-1">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const [storyOpen, setStoryOpen] = useState(false);
  const headline = ["Your", "Smile", "is", "Our", "Masterpiece"];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Doctor portrait background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={doctorPortrait.url}
          alt="Dr. Akash M."
          width={800}
          height={1000}
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_top] md:object-[center_20%] ken-burns"
        />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full text-cream">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-teal text-xs uppercase tracking-[0.25em] text-cream"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Panruti · Tamil Nadu
        </motion.div>

        <h1 className="sr-only">Panruti's Trusted Dental Care — Your Smile is Our Masterpiece</h1>

        <h2
          aria-hidden="true"
          className="mt-7 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-semibold max-w-5xl"
        >
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 + i * 0.11, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-3"
            >
              {w === "Masterpiece" ? <span className="text-gradient-gold italic">{w}</span> : w}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-7 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed"
        >
          Modern, painless dental care in Panruti — guided by{" "}
          <span className="text-gold font-semibold">Dr. Akash M.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="/contact#book"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition min-h-[48px]"
          >
            Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <button
            onClick={() => setStoryOpen(true)}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full glass-teal text-cream font-medium hover:bg-teal/80 transition min-h-[48px]"
          >
            <span className="grid place-items-center w-8 h-8 rounded-full bg-gold text-gold-foreground">
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
            Watch Our Story
          </button>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-28 right-6 md:right-12 md:bottom-24 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl glass-teal float-y"
        >
          <span className="text-gold text-xl">⭐</span>
          <div className="leading-tight">
            <div className="font-display text-xl text-cream">100+</div>
            <div className="text-[10px] uppercase tracking-widest text-cream/70">Happy Smiles</div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <a
          href="#stats"
          aria-label="Scroll down"
          className="absolute left-1/2 -translate-x-1/2 bottom-8 text-cream/70 hover:text-gold transition flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-5 h-5 scroll-hint" />
        </a>
      </div>

      {/* Story Modal - Instagram Reel */}
      {storyOpen && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/90 grid place-items-center p-4"
          onClick={() => setStoryOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-black rounded-2xl overflow-hidden border-2 border-gold shadow-gold"
            onClick={(e) => e.stopPropagation()}
            style={{ aspectRatio: "9 / 16", maxHeight: "85vh" }}
          >
            <button
              onClick={() => setStoryOpen(false)}
              aria-label="Close"
              className="absolute -top-12 right-0 text-cream hover:text-gold"
            >
              <X className="w-7 h-7" />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.instagram.com/reel/${CLINIC.reelId}/embed/?autoplay=1`}
              title="Our Story"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              scrolling="no"
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- STATS BAR ---------- */
function StatsBar() {
  return (
    <section id="stats" className="bg-gradient-hero text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 30% 30%, #C9A84C 0%, transparent 50%)" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center flex flex-col items-center">
            <div className="min-h-[4.5rem] md:min-h-[5.5rem] flex items-center justify-center">
              <div
                className={`font-display font-bold text-gradient-gold leading-tight px-1 ${
                  typeof s.value === "string"
                    ? "text-2xl sm:text-3xl md:text-2xl lg:text-3xl break-words"
                    : "text-5xl md:text-6xl"
                }`}
              >
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
            </div>
            <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] md:tracking-[0.25em] text-cream/80 leading-relaxed">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="py-28 px-4 sm:px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Every Smile Deserves <span className="italic text-primary">Expert Care</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <div className="group h-full bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft border border-border hover:border-gold/60 transition-all duration-500 relative">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition" />
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = treatmentImg;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary text-primary grid place-items-center group-hover:bg-primary group-hover:text-cream transition">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold transition cursor-pointer"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="/contact#book"
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-gold text-gold-foreground text-xs font-semibold shadow-gold hover:-translate-y-0.5 transition"
                    >
                      Book This
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/80 grid place-items-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-lg bg-card rounded-2xl overflow-hidden shadow-2xl border border-gold/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-charcoal/70 text-cream grid place-items-center hover:bg-gold hover:text-gold-foreground transition"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={services[active].img}
                alt={services[active].name}
                width={800}
                height={450}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = treatmentImg;
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-gradient-hero text-cream grid place-items-center">
                  {(() => {
                    const Ic = services[active].icon;
                    return <Ic className="w-5 h-5" />;
                  })()}
                </div>
                <h3 className="font-display text-2xl">{services[active].name}</h3>
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed">{services[active].long}</p>
              <a
                href="/contact#book"
                onClick={() => setActive(null)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition"
              >
                Book this Treatment <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    {
      icon: Award,
      title: "Experienced Doctor",
      desc: "Committed to creating healthy, confident smiles through advanced dental care..",
    },
    { icon: ShieldCheck, title: "Modern Equipment", desc: "Digital X-rays, RVG imaging and sterile single-use kits." },
    { icon: HeartHandshake, title: "Painless Care", desc: "Latest anaesthetics & techniques designed for comfort." },
    { icon: Smile, title: "Affordable Pricing", desc: "Transparent costs with flexible payment options." },
  ];
  return (
    <section className="py-28 px-4 sm:px-6 bg-cream">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Choose Us</p>
        <h2 className="font-display text-4xl md:text-5xl">
          Confidence in <span className="italic text-primary">every visit</span>
        </h2>
      </Reveal>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-gold/60 hover:-translate-y-1 transition-all duration-500 shadow-card h-full">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-hero grid place-items-center shadow-soft">
                <it.icon className="w-7 h-7 text-cream" />
              </div>
              <h3 className="mt-6 font-display text-xl">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- DOCTOR ---------- */
function DoctorBlock() {
  return (
    <section className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-5 gap-14 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-gold opacity-50 blur-xl" />
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border-[5px] border-gold shadow-gold bg-charcoal">
              <img
                src={doctorPortrait.url}
                alt={CLINIC.doctor.name}
                width={800}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-charcoal text-cream rounded-2xl px-4 py-3 shadow-lg border border-gold/40 float-y">
              <div className="text-[10px] uppercase tracking-widest text-gold">Reg. No.</div>
              <div className="font-display text-lg font-bold">{CLINIC.doctor.reg}</div>
            </div>
          </div>
        </Reveal>
        <div className="lg:col-span-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Meet Your Dentist</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">{CLINIC.doctor.name}</h2>
            <p className="mt-3 text-lg text-primary font-semibold">{CLINIC.doctor.qualifications}</p>
            <p className="mt-1 text-muted-foreground italic">{CLINIC.doctor.title}</p>
            <p className="mt-7 text-foreground/80 leading-relaxed max-w-xl">
              Dr. Akash is a dental surgeon with a Mastership in Restorative Dentistry, blending evidence-based practice
              with a warm, conservative approach. His patients return for honest advice, gentle hands, and treatments
              that genuinely last.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact#book"
                className="px-7 py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition min-h-[48px] inline-flex items-center"
              >
                Book a Consultation
              </a>
              <Link
                to="/about"
                className="px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-cream transition min-h-[48px] inline-flex items-center"
              >
                More about the doctor
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- TEAM ---------- */
const TEAM = [
  {
    name: "Dr. Akash M.",
    qual: "BDS, MRD",
    role: "Chief Dental Surgeon",
    img: doctorPortrait.url,
  },
  {
    name: "Dr. Thulidhasan",
    qual: "MDS",
    role: "Orthodontist",
    img: drThulidhasan.url,
  },
  {
    name: "Dr. Manoj",
    qual: "BDS, AMOI",
    role: "Implantologist",
    img: drManoj.url,
  },
  {
    name: "Dr. Hariprasath",
    qual: "MDS",
    role: "Prosthodontist",
    img: drHariprasath.url,
  },
  {
    name: "Dr. Gayathri S.",
    qual: "BDS",
    role: "Dental Surgeon",
    img: drGayathri.url,
  },
];

function TeamSection() {
  return (
    <section className="py-28 px-4 sm:px-6 bg-gradient-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Specialists</p>
          <h2 className="font-display text-4xl md:text-5xl">Meet the Muthu Dental Team</h2>
          <p className="mt-4 text-muted-foreground">
            A multi-specialty team committed to gentle, world-class dental care under one roof in Panruti.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group relative rounded-3xl overflow-hidden bg-cream shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold/20 hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden bg-charcoal">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg leading-tight">{m.name}</h3>
                  <p className="mt-1 text-xs text-gold font-semibold tracking-wider uppercase">{m.qual}</p>
                  <p className="mt-2 text-sm text-muted-foreground italic">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS MARQUEE ---------- */
function TestimonialsMarquee() {
  const initials = (n: string) =>
    n
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("");
  const loop = [...testimonials, ...testimonials];
  return (
    <section className="py-24 bg-gradient-hero text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 40%)" }}
      />
      <div className="relative">
        <Reveal className="text-center max-w-2xl mx-auto px-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Patient Stories</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Smiles we've <span className="italic text-gradient-gold">earned</span>
          </h2>
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-cream/10 border border-gold/40 backdrop-blur-sm">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-cream">5.0 ★ on Google — Muthu Dental, Panruti</span>
          </div>
          <div className="mt-5">
            <a
              href={CLINIC.googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition"
            >
              <Star className="w-4 h-4 fill-current" />
              Rate us on Google
            </a>
          </div>
        </Reveal>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex gap-6 w-max marquee-x">
            {loop.map((t, i) => (
              <div
                key={i}
                className="w-[340px] shrink-0 bg-cream text-foreground rounded-2xl p-6 border-l-4 border-gold shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    {t.source}
                  </span>
                </div>
                <p className="mt-4 font-display italic text-lg leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero text-cream grid place-items-center font-semibold text-sm">
                    {initials(t.name)}
                  </div>
                  <div className="text-sm font-semibold">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BEFORE & AFTER ---------- */
function BeforeAfter() {
  const cases = [
    {
      title: "Smile Makeover",
      treatment: "Whitening & Polishing",
      image: smileBefore.url,
    },
    {
      title: "Full Restoration",
      treatment: "Crown & Bridge Work",
      image: restorationBefore.url,
    },
    {
      title: "Complete Denture Treatment",
      treatment: "Full Denture Set",
      image: dentureImg.url,
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Real Results</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Smile <span className="italic text-primary">Transformations</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Real smile transformations from our patients — shared with consent.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:border-gold/60 transition flex flex-col h-full">
                <div className="bg-black/5 overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img src={c.image} alt={c.title} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <div className="font-display text-base font-semibold leading-tight">{c.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.treatment}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSTAGRAM BANNER ---------- */
function InstagramBanner() {
  return (
    <section
      className="relative py-8 px-4 sm:px-6 text-white overflow-hidden"
      style={{
        background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        minHeight: 120,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
        <Instagram className="w-12 h-12 shrink-0 drop-shadow" strokeWidth={1.8} />
        <div className="flex-1">
          <div className="font-display text-2xl md:text-3xl font-semibold">
            Follow our journey {CLINIC.instagramHandle}
          </div>
          <div className="text-white/85 text-sm md:text-base mt-1">
            Before &amp; afters, patient smiles, clinic life
          </div>
        </div>
        <a
          href={CLINIC.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
          style={{
            backgroundImage: "linear-gradient(white, white), linear-gradient(45deg, #f09433, #dc2743, #bc1888)",
          }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)",
            }}
          >
            Follow on Instagram
          </span>
        </a>
      </div>
    </section>
  );
}

/* ---------- SMILE GALLERY ---------- */
type GalCategory = "All" | "Before & After" | "Clinic" | "Team";
const REELS: { thumb: string; title: string; link: string; cat: Exclude<GalCategory, "All"> }[] = [
  {
    thumb: grandOpening.url,
    title: "Grand Opening 🎉",
    link: "https://www.instagram.com/reel/DZP9rQLJyxQ/?igsh=ODI1NmZwZWxvaTk=",
    cat: "Team",
  },
  {
    thumb: expertCare.url,
    title: "Expert Care in Action",
    link: "https://www.instagram.com/reel/DaKuJOehKdF/?igsh=bjU4NnVlcGtsaWpm",
    cat: "Before & After",
  },
  {
    thumb: insideClinic.url,
    title: "Inside Our Clinic",
    link: CLINIC.instagram,
    cat: "Clinic",
  },
];

function SmileGallery() {
  const [filter, setFilter] = useState<GalCategory>("All");
  const filters: GalCategory[] = ["All", "Before & After", "Clinic", "Team"];
  const visible = filter === "All" ? REELS : REELS.filter((r) => r.cat === filter);
  return (
    <section className="py-28 px-4 sm:px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Fresh from our Instagram · {CLINIC.instagramHandle}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">
            Smile <span className="italic">Gallery</span>
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                filter === f
                  ? "bg-gradient-gold text-gold-foreground border-transparent shadow-gold"
                  : "bg-card text-foreground border-border hover:border-gold/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
            style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
          >
            <Instagram className="w-5 h-5" />
            Follow {CLINIC.instagramHandle}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {visible.length === 0 && <p className="text-muted-foreground italic py-12">No posts in this category yet.</p>}
          {visible.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-[320px] sm:w-[380px] h-[520px] rounded-2xl overflow-hidden bg-charcoal border-2 border-transparent hover:border-gold transition-all duration-300 shadow-card"
              >
                <img
                  src={r.thumb}
                  alt={r.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/5"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}
                />
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-semibold flex items-center gap-1"
                  style={{ background: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}
                >
                  <Play className="w-2.5 h-2.5 fill-current" /> Reel
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/80 text-cream text-[10px] font-semibold uppercase tracking-wider">
                  {r.cat}
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div
                    className="w-14 h-14 rounded-full grid place-items-center border-2 border-white transition-transform duration-300 group-hover:scale-115"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                  >
                    <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-white font-bold text-base">{r.title}</div>
                  <div className="text-gold text-xs mt-0.5">{CLINIC.instagramHandle}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
