import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// Lovable CDN URLs
const LOVABLE_CDN = (assetId: string, filename: string) => 
  `https://cdn.lovable.app/assets-v1/4b6443ba-715a-46b8-8337-2dd02f722961/${assetId}/${filename}`;

const treatmentRoom = LOVABLE_CDN("1246b591-776e-46fc-ac7c-fd522c2a50a4", "clinic-treatment-room.png");
const reception = LOVABLE_CDN("2b3256f3-dea9-47a5-b49e-a625f1f87b11", "clinic-reception.jpeg");
const doctorDesk = LOVABLE_CDN("b6751299-3bd3-47f7-97ec-0c1783f523e9", "doctor-desk.jpg");
const doctorPortrait = LOVABLE_CDN("c0fb8f11-3b49-4beb-8651-e501190ffee0", "dr-akash-portrait.png");
const beforeAfter = LOVABLE_CDN("aaeced04-fc89-4392-a5e2-657bf9ee3ea2", "before-after-treatment.jpg");

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Muthu Dental Clinic, Panruti" },
      { name: "description", content: "Take a look inside Muthu Dental Clinic — our reception, modern treatment room, and Dr. Akash M.'s workspace in Panruti." },
      { property: "og:title", content: "Gallery — Muthu Dental Clinic" },
      { property: "og:description", content: "Smiles, spaces and stories from our clinic." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/gallery" },
      { property: "og:image", content: reception },
    ],
    links: [{ rel: "canonical", href: "https://glow-dental-chat.lovable.app/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: reception, alt: "Muthu Dental Clinic reception", tag: "Reception" },
  { src: treatmentRoom, alt: "Modern treatment room with Waldent dental chair", tag: "Treatment Room" },
  { src: beforeAfter, alt: "Smile transformation — before and after dental treatment at Muthu Dental Clinic", tag: "Before & After" },
  { src: doctorDesk, alt: "Dr. Akash M.'s consultation desk with Muthu Dental Clinic prescription pad", tag: "Doctor's Desk" },
  { src: doctorPortrait, alt: "Dr. Akash M., BDS, MRD", tag: "Dr. Akash M." },
];

function GalleryPage() {
  return (
    <div className="pt-32 px-4 sm:px-6">
      <section className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Gallery</p>
          <h1 className="text-5xl md:text-6xl font-semibold">Inside Muthu Dental Clinic.</h1>
          <p className="mt-6 text-lg text-muted-foreground">A peek at our reception, treatment room, and the team behind every smile in Panruti.</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group relative overflow-hidden rounded-2xl block w-full aspect-[4/3]">
                    <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                      <span className="text-primary-foreground text-sm font-medium">{it.tag}</span>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0 shadow-none">
                  <img src={it.src} alt={it.alt} className="w-full h-auto rounded-2xl" />
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
