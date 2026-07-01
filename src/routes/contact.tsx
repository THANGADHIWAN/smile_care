import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { BookingForm } from "@/components/site/BookingForm";
import { CLINIC } from "@/lib/clinic";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";


const FAQS = [
  { q: "Is the RCT painful?", a: "No — modern root canal treatment is virtually painless. We use strong local anaesthesia and rotary endodontics, and most patients describe it as comparable to a routine filling." },
  { q: "How much does a root canal cost in Panruti?", a: "RCT pricing at Muthu Dental starts from ₹3,500 for anterior teeth and varies with the tooth, number of canals, and crown. We share a transparent quote before starting any work." },
  { q: "Do you do weekend appointments?", a: "Yes. The clinic is open Monday through Saturday with split timings, and Sundays by prior appointment for emergencies and out-of-town patients." },
  { q: "Do you accept insurance?", a: "We accept reimbursement claims for most major Indian health insurers and provide itemised invoices. Please bring your policy details to your visit." },
  { q: "How long does teeth whitening last?", a: "In-office whitening typically lasts 1–3 years, depending on diet and oral hygiene. A simple top-up session keeps your smile bright." },
  { q: "What age should kids start visiting?", a: "By their first birthday or within six months of the first tooth appearing. Early visits are short, friendly and build lifelong comfort with the dentist." },
  { q: "Is parking available?", a: "Yes — free two-wheeler and car parking is available right outside the clinic, opposite Gandhi Park on Cuddalore Main Road." },
  { q: "Do you offer dental implants?", a: "Yes, we place premium implants with guided surgery for predictable, long-lasting results. Most cases are completed in 2 visits over 3–6 months including the crown." },
  { q: "How long does a dental implant last?", a: "A well-placed implant can last 20+ years with good oral hygiene. We use trusted international implant systems with a manufacturer warranty." },
  { q: "Are braces or aligners better?", a: "Both work — fixed braces are cost-effective and handle complex cases; clear aligners are invisible and removable. Dr. Thulidhasan (MDS, Ortho) will advise based on your bite." },
  { q: "What is the cost of braces in Panruti?", a: "Conventional metal braces start from ₹25,000, ceramic from ₹35,000, and aligners from ₹80,000. EMI options are available." },
  { q: "Do you treat wisdom tooth pain?", a: "Yes. We do same-day evaluation and, where indicated, surgical extraction under local anaesthesia. Most patients return to work the next day." },
  { q: "Can a broken or knocked-out tooth be saved?", a: "Often yes — if you reach us within 30–60 minutes. Keep the tooth in milk or saliva and call 7338726004 immediately." },
  { q: "Do you offer emergency dental care?", a: "Yes. Same-day slots are reserved for severe pain, swelling, trauma and bleeding. Call ahead so we can prepare the operatory." },
  { q: "How often should I get a dental cleaning?", a: "Every 6 months for most patients. Smokers, diabetics, and patients with gum disease should consider every 3–4 months." },
  { q: "Is scaling bad for teeth?", a: "No — ultrasonic scaling removes tartar without damaging enamel. Sensitivity after scaling is normal and settles in 2–3 days." },
  { q: "Do you provide crowns and bridges?", a: "Yes — zirconia, PFM and e.max options, often delivered in 5–7 working days with CAD/CAM-precision fit." },
  { q: "How long does smile designing take?", a: "From 2 visits for composite edge bonding to 2–3 weeks for full ceramic veneers. We start with a digital smile mock-up so you approve the look before any prep." },
  { q: "Are dentures comfortable?", a: "Modern flexible and BPS dentures fit snugly and look natural. Implant-supported overdentures are the most stable option." },
  { q: "Do you treat bleeding gums?", a: "Yes — bleeding gums usually indicate gingivitis. Most cases resolve in 2 weeks with deep cleaning and home-care guidance." },
  { q: "Is sterilization done properly at your clinic?", a: "Absolutely. We follow autoclave-based sterilization, single-use disposables where applicable, and surface disinfection between every patient." },
  { q: "Do you use digital X-rays?", a: "Yes — digital RVG and OPG with up to 90% less radiation than film X-rays, with instant on-screen viewing." },
  { q: "Can I pay using UPI or card?", a: "Yes — UPI, all major debit/credit cards, and cash are accepted. EMI is available on select treatments." },
  { q: "Do you offer treatment EMI?", a: "Yes, for treatments above ₹15,000 we offer no-cost EMI through partner card providers." },
  { q: "Is dental treatment safe during pregnancy?", a: "Cleanings and urgent care are safe in the 2nd trimester. Elective procedures are deferred. Always inform us if you are pregnant." },
  { q: "How do I prepare for my first visit?", a: "Just bring any previous prescriptions, X-rays, or insurance details. Plan for around 30–45 minutes for your consultation." },
  { q: "Do you treat patients from nearby towns like Cuddalore or Neyveli?", a: "Yes — we regularly see patients from Cuddalore, Neyveli, Vridhachalam, Kadampuliyur and surrounding areas. WhatsApp us for directions." },
  { q: "Can I book on WhatsApp?", a: "Yes — that is the fastest way. Send your preferred date and treatment to 7338726004 and we will confirm a slot." },
  { q: "Do you provide post-treatment care instructions?", a: "Yes — written and WhatsApp instructions after every procedure, plus a direct line to Dr. Akash for any concern in the first 48 hours." },
  { q: "How long does a teeth cleaning appointment take?", a: "Typically 30–40 minutes including polishing and fluoride application." },
  { q: "Are there any side effects of teeth whitening?", a: "Mild, temporary sensitivity for 24–48 hours is the only common side effect. We use desensitising gel to minimise it." },
];



import { breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Muthu Dental Clinic Panruti — Book on WhatsApp" },
      { name: "description", content: "Visit Muthu Dental Clinic, 25 Cuddalore Main Road, Panruti 607106. Call 7338726004 or book instantly on WhatsApp." },
      { property: "og:title", content: "Contact — Muthu Dental Clinic, Panruti" },
      { property: "og:description", content: "Find us, call us, or book in under a minute." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://glow-dental-chat.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 px-4 sm:px-6">
      <section className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Contact</p>
          <h1 className="text-5xl md:text-6xl font-semibold">Contact Muthu Dental Clinic — Dentist in Panruti</h1>
          <p className="mt-6 text-lg text-muted-foreground">Reach out by phone, email or book directly via WhatsApp below.</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto py-16 grid lg:grid-cols-3 gap-6">
        {[
          { icon: MapPin, title: "Address", body: CLINIC.address },
          { icon: Phone, title: "Phone", body: CLINIC.phones.join(" / ") },
          { icon: Mail, title: "Email", body: CLINIC.email },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="h-full p-7 rounded-2xl bg-card border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-hero text-primary-foreground grid place-items-center">
                <c.icon className="w-6 h-6" />
              </div>
              <h2 className="mt-5 font-semibold text-lg">{c.title}</h2>
              <p className="mt-2 text-muted-foreground">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="max-w-7xl mx-auto pb-16 grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl overflow-hidden border shadow-card aspect-[4/3] lg:aspect-auto lg:h-full">
            <iframe
              title="Clinic location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&output=embed`}
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              width="800"
              height="600"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full p-7 rounded-2xl bg-gradient-hero text-primary-foreground shadow-soft">
            <h2 className="font-display text-2xl font-semibold">Clinic Hours</h2>
            <p className="mt-2 text-primary-foreground/80 text-sm">We're open every day for your convenience.</p>
            <div className="mt-6 space-y-3">
              {[
                ["Monday – Saturday", "9:00 AM – 1:00 PM"],
                ["", "4:00 PM – 8:30 PM"],
                ["Sunday", "By Appointment"],
              ].map(([d, t], i) => (
                <div key={i} className="flex justify-between border-b border-white/15 pb-2 text-sm">
                  <span className="font-medium">{d || "\u00A0"}</span>
                  <span className="opacity-90">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <Clock className="w-5 h-5" />
              <span>Emergency care available — please call ahead.</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="book" className="max-w-6xl mx-auto pb-24">
        <Reveal className="text-center mb-10">
          <h2 className="text-4xl font-semibold">Book your appointment</h2>
          <p className="mt-3 text-muted-foreground">Pick a date, time, and treatment — confirmed instantly via WhatsApp.</p>
        </Reveal>
        <Reveal><BookingForm /></Reveal>
      </section>

      <section className="max-w-3xl mx-auto pb-24 px-2">
        <Reveal className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">FAQ</p>
          <h2 className="text-4xl font-semibold">Common questions</h2>
        </Reveal>
        <Reveal>
          <div className="bg-card border rounded-2xl shadow-card divide-y">
            {FAQS.map((f, i) => (
              <details key={i} className="group px-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 font-semibold text-left">
                  <span>{f.q}</span>
                  <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="pb-5 pr-8 text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </Reveal>

      </section>
    </div>
  );
}
