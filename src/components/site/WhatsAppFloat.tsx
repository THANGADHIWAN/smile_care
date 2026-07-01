import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [igVisible, setIgVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(true);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = window.setTimeout(() => setIgVisible(true), 2000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  const waHref = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
    "Hello MUTHU DENTAL CLINIC, I would like to know more.",
  )}`;

  return (
    <>
      {/* Sticky mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 text-sm font-semibold shadow-2xl">
        <a href="/contact#book" className="bg-charcoal text-cream py-3.5 text-center">
          Book Appointment
        </a>
        <a href={`tel:+91${CLINIC.phones[0]}`} className="bg-gold text-gold-foreground py-3.5 text-center">
          Call Now
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 mb-14 md:mb-0">


      <AnimatePresence>
        {igVisible && (
          <motion.a
            key="ig"
            href={CLINIC.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            title="Follow us on Instagram"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            className="group relative w-14 h-14 rounded-full grid place-items-center text-white shadow-lg hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            <Instagram className="w-7 h-7" />
            <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-charcoal text-cream text-xs px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition">
              Follow us on Instagram
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.a
            key="wa"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            className="w-14 h-14 rounded-full grid place-items-center text-white pulse-ring"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

