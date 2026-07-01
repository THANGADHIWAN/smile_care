import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CLINIC } from "@/lib/clinic";
import doctorImg from "@/assets/dr-akash-hero.png";
import clinic1 from "@/assets/clinic-2.jpg";
import clinic2 from "@/assets/clinic-1.jpg";
import doctorDesk from "@/assets/clinic-1.jpg";
import clinicSignboard from "@/assets/clinic-2.jpg";
import { GraduationCap, ShieldCheck, Heart } from "lucide-react";

import { breadcrumbSchema, personSchema, DOCTORS } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Akash M. — Dentist in Panruti | Muthu Dental Clinic" },
      { name: "description", content: "Meet Dr. Akash M., BDS MRD — Chief Dentist at Muthu Dental Clinic, Panruti. Restorative dentistry, implants, RCT and family dental care." },
      { property: "og:title", content: "About — Muthu Dental Clinic, Panruti" },
      { property: "og:description", content: "Compassionate care led by Dr. Akash M., BDS MRD." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/about" },
      { property: "og:image", content: doctorImg },
    ],
    links: [{ rel: "canonical", href: "https://glow-dental-chat.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])),
      },
      ...DOCTORS.map((d) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify(personSchema(d)),
      })),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">About the clinic</p>
            <h1 className="text-5xl md:text-6xl font-semibold">About Muthu Dental Clinic — Trusted Dentist in Panruti</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {CLINIC.name} was founded on a simple promise: deliver world-class dentistry with the warmth
              of a family practice. Today we serve thousands of patients across Panruti and beyond with
              modern, conservative, and honest care.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={clinic1} alt="Clinic reception" width={800} height={600} loading="lazy" className="rounded-3xl shadow-soft w-full aspect-[4/3] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-2">
            <img src={doctorImg} alt={CLINIC.doctor.name} width={800} height={1000} loading="lazy" className="rounded-3xl shadow-soft w-full" />
          </Reveal>
          <div className="lg:col-span-3 space-y-6">
            <Reveal>
              <h2 className="text-4xl font-semibold">{CLINIC.doctor.name}</h2>
              <p className="mt-1 text-primary font-medium">{CLINIC.doctor.qualifications} — {CLINIC.doctor.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">Registration No: {CLINIC.doctor.reg}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-foreground/80 leading-relaxed">
                Dr. Akash M. completed his Bachelor of Dental Surgery (BDS) and went on to earn a
                Mastership in Restorative Dentistry (MRD). His clinical interests span full-mouth
                rehabilitation, aesthetic restorations, single-visit root canals, and pediatric care.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Patients return for his careful diagnoses, conservative treatment plans, and the
                calm, unhurried atmosphere he creates in every appointment.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: GraduationCap, t: "BDS, MRD", s: "Mastership in Restorative Dentistry" },
                  { icon: ShieldCheck, t: "Sterile Protocols", s: "Single-use kits & autoclave sterilization" },
                  { icon: Heart, t: "5,000+ Smiles", s: "Treated with care" },
                ].map((it) => (
                  <div key={it.t} className="p-5 rounded-2xl bg-card border shadow-card flex gap-4">
                    <it.icon className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold">{it.t}</div>
                      <div className="text-sm text-muted-foreground">{it.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-10 text-center">
            <h2 className="text-4xl font-semibold">Inside our clinic</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal><img src={doctorDesk} alt="Doctor's desk" width={800} height={600} loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card" /></Reveal>
            <Reveal delay={0.1}><img src={clinic2} alt="Treatment room" width={800} height={600} loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card" /></Reveal>
            <Reveal delay={0.2}><img src={clinicSignboard} alt="Muthu Dental Clinic signboard" width={800} height={600} loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-card" /></Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
