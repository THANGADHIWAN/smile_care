import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Star, ArrowRight, MessageCircle, Car } from "lucide-react";
import { getLocation, LOCATIONS } from "@/lib/locations";
import { CLINIC } from "@/lib/clinic";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/dentist-in/$location")({
  loader: ({ params }) => {
    const loc = getLocation(params.location);
    if (!loc) throw notFound();
    return loc;
  },
  head: ({ params, loaderData }) => {
    const url = `https://glow-dental-chat.lovable.app/dentist-in/${params.location}`;
    const city = loaderData?.city ?? "";
    const title = `Best Dentist for ${city} Patients — Muthu Dental Clinic, Panruti`;
    const desc = `Trusted dental clinic serving ${city} patients — implants, RCT, braces and cosmetic dentistry by Dr. Akash M. ${loaderData?.distance} from ${city}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                name: `Muthu Dental Clinic — Serving ${city}`,
                url,
                telephone: "+91-7338726004",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "25, Cuddalore Main Road, Opp. Gandhi Park",
                  addressLocality: "Panruti",
                  addressRegion: "Tamil Nadu",
                  postalCode: "607106",
                  addressCountry: "IN",
                },
                areaServed: { "@type": "City", name: city },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "120",
                },
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-20 text-center">
      <h1 className="font-display text-3xl">Location not found</h1>
      <Link to="/" className="mt-4 inline-block text-primary underline">Go home</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-20 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: LocationPage,
});

const SERVICES = [
  "Root Canal Treatment (single-sitting)",
  "Dental Implants (titanium)",
  "Braces & Clear Aligners",
  "Crowns, Bridges & Veneers",
  "Teeth Whitening",
  "Pediatric Dentistry",
  "Gum Treatment",
  "Full-Mouth Rehabilitation",
];

function LocationPage() {
  const loc = Route.useLoaderData();
  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm from ${loc.city} and would like to book an appointment.`,
  )}`;

  return (
    <div className="pt-28 pb-20 bg-background">
      {/* Hero */}
      <section className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Serving {loc.city} since 2014
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight">
              Best Dentist for <span className="italic text-primary">{loc.city}</span> Patients
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{loc.intro}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                <Car className="w-4 h-4" /> {loc.distance} away · {loc.travelTime}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-foreground border border-gold/30">
                <Star className="w-4 h-4 fill-gold text-gold" /> 4.9 ★ · 120+ Google reviews
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold"
              >
                <MessageCircle className="w-4 h-4" /> Book on WhatsApp
              </a>
              <a
                href={`tel:+91${CLINIC.phones[0]}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold"
              >
                <Phone className="w-4 h-4" /> Call now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="mt-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl">
              Treatments for <span className="text-primary italic">{loc.city}</span> Patients
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 0.04}>
                <div className="p-4 rounded-xl bg-card border border-border hover:border-gold/60 text-sm font-medium text-foreground">
                  {s}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="mt-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">How to reach us from {loc.city}</h2>
            <p className="mt-4 text-muted-foreground">
              Our clinic sits on Cuddalore Main Road, directly opposite Gandhi Park in Panruti. From {loc.city},
              the drive takes approximately {loc.travelTime} ({loc.distance}). Parking is available right in front.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /><span>{CLINIC.address}</span></div>
              <div className="flex items-start gap-2"><Clock className="w-4 h-4 text-primary mt-0.5" /><span>Mon–Sat: 9:00 AM – 8:30 PM · Sun: by appointment</span></div>
              <div className="flex items-start gap-2"><Phone className="w-4 h-4 text-primary mt-0.5" /><span>+91 {CLINIC.phones[0]}</span></div>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-xs uppercase tracking-wider text-gold font-semibold">Nearby Landmarks</div>
              <div className="mt-3 font-display text-xl">We serve patients from across {loc.city}</div>
              <ul className="mt-4 space-y-2">
                {loc.landmarks.map((l: string) => (
                  <li key={l} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other locations */}
      <section className="mt-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-8">
            <h2 className="font-display text-2xl">We also serve</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
              <Link
                key={l.slug}
                to="/dentist-in/$location"
                params={{ location: l.slug }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-gold/60 text-sm font-medium"
              >
                Dentist in {l.city} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
