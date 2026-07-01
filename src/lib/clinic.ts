export const CLINIC = {
  name: "MUTHU DENTAL CLINIC",
  short: "Muthu Dental",
  doctor: {
    name: "Dr. Akash M.",
    qualifications: "BDS, MRD",
    title: "Dental Surgeon | Mastership in Restorative Dentistry",
    reg: "41538",
  },
  address: "25, Cuddalore Main Road, Opp. to Gandhi Park, Panruti - 607106, Tamil Nadu",
  phones: ["7338726004", "6379286339"],
  email: "muthudental6004@gmail.com",
  whatsapp: "917338726004",
  instagram: "https://www.instagram.com/muthudental_",
  instagramHandle: "@muthudental_",
  facebook: "https://facebook.com",
  reelId: "DZP9rQLJyxQ",
  mapsQuery: "Muthu Dental Clinic Panruti Cuddalore Main Road",
  googleReviewUrl: "https://www.google.com/search?q=Muthu+Dental+%7C+Best+Dental+Clinic+in+Panruti+Reviews",
  googleSearchUrl: "https://www.google.com/search?q=Muthu+Dental+%7C+Best+Dental+Clinic+in+Panruti+Reviews",
};

export const CONSULTATION_TYPES = [
  "General Checkup",
  "Teeth Cleaning & Polishing",
  "Tooth Extraction",
  "Root Canal Treatment",
  "Dental Fillings",
  "Teeth Whitening",
  "Braces & Orthodontics",
  "Dental Implants",
  "Crowns & Bridges",
  "Pediatric Dentistry",
  "Gum Treatment",
  "Emergency Dental Care",
];

export const TIME_SLOTS = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
  "11:00 AM","11:30 AM","12:00 PM","04:00 PM",
  "04:30 PM","05:00 PM","05:30 PM","06:00 PM",
  "06:30 PM","07:00 PM","07:30 PM","08:00 PM",
];

export function buildWhatsAppBookingURL(date: string, time: string, consultation: string) {
  const message = `Hello MUTHU DENTAL CLINIC,\n\nI would like to book an appointment.\n\n📅 Date: ${date}\n⏰ Time: ${time}\n🦷 Consultation: ${consultation}\n\nPlease confirm my slot.\n\nThank you!`;
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}
