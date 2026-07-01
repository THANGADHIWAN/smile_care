import { createFileRoute, Link } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";
import { Reveal } from "@/components/site/Reveal";
import { motion, type TargetAndTransition } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Baby, Droplet, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "Dental Tips & Articles — Muthu Dental Clinic, Panruti" },
      {
        name: "description",
        content:
          "Expert dental health tips from Dr. Akash M. — root canal cost in Panruti, post-whitening diet, your child's first dental visit, and bleeding gums.",
      },
      { property: "og:title", content: "Dental Tips — Muthu Dental Clinic" },
      { property: "og:description", content: "Practical, doctor-written dental advice for everyday smiles." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/tips" },
    ],
    links: [{ rel: "canonical", href: "https://glow-dental-chat.lovable.app/tips" }],
  }),
  component: TipsPage,
});

type Article = {
  title: string;
  preview: string;
  icon: LucideIcon;
  anim: "pulse" | "float" | "drip" | "wiggle";
  accent: string;
};

const ARTICLES: Article[] = [
  {
    title: "Root canal treatment cost in Panruti — what to expect",
    preview:
      "RCT cost in Panruti typically ranges from ₹3,500 for a single-rooted front tooth to ₹7,500 for a complex molar, before the crown. Pricing depends on the tooth, number of canals, and crown choice — metal-ceramic (₹2,500–4,000) vs full zirconia (₹6,000–10,000). At Muthu Dental you get a written estimate before we begin, and most cases finish in one or two visits using rotary endodontics.",
    icon: Activity,
    anim: "pulse",
    accent: "from-primary to-teal-dark",
  },
  {
    title: "Best foods after teeth whitening",
    preview:
      "For 48 hours after whitening, your enamel is more porous and stains more easily. Stick to a 'white diet' — milk, curd, rice, idli, chicken, white fish, bananas. Avoid coffee, tea, red wine, berries, beetroot and tomato-based sauces during this window.",
    icon: Sparkles,
    anim: "wiggle",
    accent: "from-gold to-yellow-400",
  },
  {
    title: "When should your child first see a dentist?",
    preview:
      "Indian Dental Association guidance is clear: the first dental visit should happen by the child's first birthday, or within six months of the first tooth appearing. Early visits are short and gentle — they catch problems early and build a lifetime of confidence in dental care.",
    icon: Baby,
    anim: "float",
    accent: "from-pink-400 to-rose-500",
  },
  {
    title: "Why do gums bleed when brushing?",
    preview:
      "Bleeding gums almost always signal early gum disease (gingivitis) caused by plaque at the gum line. The fix is counter-intuitive — brush more gently but more thoroughly, floss daily, and book a professional cleaning. Ignored, it leads to bone loss and loose teeth.",
    icon: Droplet,
    anim: "drip",
    accent: "from-red-400 to-rose-600",
  },
];

const ANIMS: Record<string, TargetAndTransition> = {
  pulse: { scale: [1, 1.15, 1], transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } },
  float: { y: [0, -10, 0], transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } },
  drip: { y: [0, 6, 0], opacity: [1, 0.7, 1], transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } },
  wiggle: { rotate: [-8, 8, -8], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
};

function TipsPage() {
  return (
    <div className="pt-36 pb-24">
      <section className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Dental Tips</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">
              Dental Tips from <span className="italic text-primary">Panruti's</span> Trusted Dentist
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Short, practical advice from Dr. Akash M. — written for real patients, not textbooks.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {ARTICLES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.08}>
                <article className="h-full p-7 rounded-2xl bg-card border border-border shadow-card hover:border-gold/60 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className={`relative h-40 -mx-7 -mt-7 mb-5 rounded-t-2xl overflow-hidden bg-gradient-to-br ${a.accent} grid place-items-center`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 0%, transparent 50%)" }} />
                    <motion.div animate={ANIMS[a.anim]} className="relative">
                      <Icon className="w-20 h-20 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </motion.div>
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] font-semibold text-white/90 bg-black/20 backdrop-blur px-2 py-1 rounded-full">
                      Tip #{i + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-muted-foreground">By Dr. Akash M.</span>
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{a.title}</h2>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{a.preview}</p>
                  <a
                    href={`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(`Hello Dr. Akash, I have a question about: ${a.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition self-start"
                  >
                    Ask Dr. Akash <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-20">
        <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-gradient-hero text-cream shadow-soft">
          <h3 className="font-display text-3xl">Have a question of your own?</h3>
          <p className="mt-3 text-cream/85">Book a consultation and get a personal answer from Dr. Akash.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition"
          >
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
