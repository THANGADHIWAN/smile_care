export type Location = {
  slug: string;
  city: string;
  distance: string;
  travelTime: string;
  intro: string;
  landmarks: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "cuddalore",
    city: "Cuddalore",
    distance: "38 km",
    travelTime: "45 min",
    intro:
      "Patients from Cuddalore choose Muthu Dental Clinic in Panruti for advanced restorative dentistry, single-sitting root canals and digital smile design — a short drive down the Panruti–Cuddalore main road.",
    landmarks: ["Cuddalore Old Town", "Manjakuppam", "Thirupathiripuliyur", "OT Bus Stand"],
  },
  {
    slug: "neyveli",
    city: "Neyveli",
    distance: "22 km",
    travelTime: "30 min",
    intro:
      "Families from Neyveli Township and Block-1 to Block-26 trust Dr. Akash M. for implants, pediatric dentistry and orthodontics — a quick ride via the Neyveli–Panruti road.",
    landmarks: ["NLC Township", "Block-1", "Mandarakuppam", "Vadakuthu"],
  },
  {
    slug: "vridhachalam",
    city: "Vridhachalam",
    distance: "32 km",
    travelTime: "40 min",
    intro:
      "Patients from Vridhachalam visit our Panruti clinic for braces, full-mouth rehabilitation and cosmetic dentistry — easily reached via the Vridhachalam–Panruti route.",
    landmarks: ["Vridhachalam Railway Station", "Pennadam", "Kammapuram", "Sethiathope"],
  },
  {
    slug: "panruti",
    city: "Panruti",
    distance: "Local",
    travelTime: "5 min",
    intro:
      "The premier dental clinic in the heart of Panruti, located opposite Gandhi Park on Cuddalore Main Road — walking distance from the bus stand and town centre.",
    landmarks: ["Gandhi Park", "Panruti Bus Stand", "Panruti Railway Station", "Cuddalore Main Road"],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
