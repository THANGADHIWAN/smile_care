// Central place for shared JSON-LD helpers so every route references identical NAP/geo data.
export const SITE_URL = "https://glow-dental-chat.lovable.app";
export const CLINIC_ID = `${SITE_URL}/#clinic`;
export const GMB_URL =
  "https://www.google.com/maps/place/Muthu+Dental+%7C+Best+Dental+Clinic+in+Panruti/@11.7728494,79.550969,19z/data=!4m9!1m2!29m1!1b1!3m5!1s0x3a54af2f25cdb44d:0x7517006e2f17c321!8m2!3d11.7728492!4d79.5519643!16s%2Fg%2F11njrxljgn";

export const CLINIC_GEO = { latitude: 11.7728492, longitude: 79.5519643 };

export const CLINIC_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "25, Cuddalore Main Road, Opp. Gandhi Park",
  addressLocality: "Panruti",
  addressRegion: "Tamil Nadu",
  postalCode: "607106",
  addressCountry: "IN",
};

export const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "13:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "16:00",
    closes: "20:30",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday"],
    opens: "10:00",
    closes: "13:00",
    description: "By appointment",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Akash M.",
    jobTitle: "Dental Surgeon | Chief Dentist",
    medicalSpecialty: "Restorative Dentistry",
    alumniOf: "Bachelor of Dental Surgery (BDS), Mastership in Restorative Dentistry (MRD)",
    reg: "41538",
    bio: "Dr. Akash is a dental surgeon with a Mastership in Restorative Dentistry, blending evidence-based practice with a warm, conservative approach. His patients return for honest advice, gentle hands, and treatments that genuinely last.",
  },
  {
    name: "Dr. Thulidhasan",
    jobTitle: "Orthodontist",
    medicalSpecialty: "Orthodontics",
    alumniOf: "MDS Orthodontics",
    bio: "Dr. Thulidhasan specializes in correcting misaligned teeth and jaws. He creates personalized treatment plans for children and adults using metal braces, ceramic braces, and clear aligners to achieve beautiful, functional smiles.",
  },
  {
    name: "Dr. Manoj",
    jobTitle: "Implantologist",
    medicalSpecialty: "Oral Implantology",
    alumniOf: "MDS, Implantology",
    bio: "Dr. Manoj is an expert in dental implantology, specializing in the placement and restoration of implants. He uses advanced guided surgery techniques for predictable, long-lasting results that restore both function and aesthetics.",
  },
  {
    name: "Dr. Hariprasath",
    jobTitle: "Prosthodontist",
    medicalSpecialty: "Prosthodontics",
    alumniOf: "MDS Prosthodontics",
    bio: "Dr. Hariprasath focuses on restoring and replacing teeth with crowns, bridges, dentures, and implant-supported restorations. He combines technical precision with artistic skill to create natural-looking, comfortable prosthetics.",
  },
  {
    name: "Dr. Gayathri S.",
    jobTitle: "Dental Surgeon",
    medicalSpecialty: "General & Cosmetic Dentistry",
    alumniOf: "BDS",
    bio: "Dr. Gayathri provides comprehensive general dental care with a special interest in cosmetic procedures. She is dedicated to patient education and preventive care, helping families maintain healthy, beautiful smiles for life.",
  },
];

export function personSchema(d: (typeof DOCTORS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: d.name,
    jobTitle: d.jobTitle,
    medicalSpecialty: d.medicalSpecialty,
    alumniOf: d.alumniOf,
    worksFor: { "@id": CLINIC_ID },
    ...(d.reg ? { identifier: `TN Dental Council Reg. ${d.reg}` } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
