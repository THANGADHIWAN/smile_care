export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  body: string[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "root-canal-cost-panruti-2026",
    title: "Root Canal Cost in Panruti (2026) — Honest Pricing Guide",
    excerpt:
      "What a root canal really costs in Panruti, how pricing varies by tooth, and what's included at Muthu Dental Clinic.",
    date: "2026-06-12",
    readingTime: "5 min read",
    category: "Pricing",
    body: [
      "Root canal treatment (RCT) is one of the most common questions we get on WhatsApp. Patients want to know two things — does it hurt, and how much will it cost. The honest answer to the first is: with modern rotary endodontics and proper anaesthesia, the procedure itself is no more uncomfortable than a routine filling.",
      "Pricing in Panruti varies by tooth. A single-rooted front tooth typically costs ₹3,500–4,500. A premolar runs ₹4,500–5,500. A complex molar with three or four canals is usually ₹6,000–7,500. These are pre-crown figures.",
      "After RCT, the tooth needs a crown to protect it from fracture. Metal-ceramic crowns are ₹2,500–4,000. Full zirconia crowns are ₹6,000–10,000. We give every patient a written estimate before treatment begins — no surprises.",
      "Most single-visit cases finish in 60–90 minutes. Complex molars may need a second visit. If you're comparing prices, also ask about the rotary system used, the irrigation protocol, and whether the crown is included.",
    ],
  },
  {
    slug: "dental-implants-vs-bridges",
    title: "Dental Implants vs Bridges — Which is Right for You?",
    excerpt:
      "A clear comparison of cost, longevity, and recovery for missing teeth in Tamil Nadu patients.",
    date: "2026-05-28",
    readingTime: "6 min read",
    category: "Treatments",
    body: [
      "When you lose a tooth, there are two mainstream replacements: a dental implant or a fixed bridge. Both restore function and appearance, but the long-term picture is very different.",
      "An implant is a titanium screw placed in the jawbone, topped with a crown. It does not touch the neighbouring teeth. A bridge sits on the two adjacent teeth, which must be filed down to act as anchors.",
      "Bridges are faster (2–3 weeks) and cheaper upfront (₹15,000–25,000 for a 3-unit bridge). Implants take 3–6 months and cost ₹35,000–55,000 per tooth in Panruti. But implants last 20+ years with care, while bridges typically need replacement every 8–12 years.",
      "If the adjacent teeth are already heavily restored, a bridge may make sense. If they are healthy, an implant preserves them. We will walk you through both options on your first visit, with no pressure either way.",
    ],
  },
  {
    slug: "kids-first-dental-visit",
    title: "Your Child's First Dental Visit — A Parent's Guide",
    excerpt:
      "When to bring your child for their first checkup, what to expect, and how to make it a positive experience.",
    date: "2026-05-10",
    readingTime: "4 min read",
    category: "Pediatric",
    body: [
      "The Indian Dental Association recommends the first dental visit by your child's first birthday, or within six months of the first tooth appearing — whichever comes first.",
      "Early visits are short, gentle, and mostly about getting your child comfortable in the chair. We count teeth, demonstrate brushing, and check for early signs of decay or alignment concerns.",
      "Bring a favourite toy. Avoid words like 'pain' or 'injection' in the days before. Schedule the appointment for the morning, when your child is fresh.",
      "Most importantly — don't wait for a problem. Children who start visits early grow up without dental fear. That single habit is worth more than any treatment we can offer.",
    ],
  },
  {
    slug: "teeth-whitening-aftercare",
    title: "Teeth Whitening Aftercare — The 48-Hour White Diet",
    excerpt:
      "What to eat (and avoid) after professional whitening so your results last.",
    date: "2026-04-22",
    readingTime: "3 min read",
    category: "Cosmetic",
    body: [
      "For the first 48 hours after in-office whitening, your enamel is more porous than usual and absorbs pigments easily. What you eat in this window directly impacts how long the results last.",
      "Safe foods: milk, curd, paneer, rice, idli, dosa, white chicken, white fish, bananas, cauliflower, cucumber, potato.",
      "Avoid: coffee, tea, red wine, cola, fruit juices, berries, beetroot, tomato sauces, soy sauce, turmeric-heavy curries, and smoking.",
      "After 48 hours, you can return to normal eating. Use a straw for staining beverages and brush within 30 minutes when possible. Touch-up cleanings every 6 months keep your smile bright for years.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
