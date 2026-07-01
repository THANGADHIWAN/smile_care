import { useRef, useState, useCallback, useEffect } from "react";
import { GripVertical } from "lucide-react";

type Props = {
  before: string;
  after: string;
  alt: string;
  className?: string;
};

export function BeforeAfterSlider({ before, after, alt, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      update(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none cursor-ew-resize bg-muted ${className}`}
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        update(e.touches[0].clientX);
      }}
    >
      <img src={after} alt={`${alt} — after`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          className="absolute inset-0 h-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
        />
      </div>

      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/85 text-cream text-[10px] font-bold uppercase tracking-wider z-10">
        Before
      </div>
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gradient-gold text-gold-foreground text-[10px] font-bold uppercase tracking-wider z-10">
        After
      </div>

      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-gold shadow-[0_0_12px_rgba(201,168,76,0.7)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-xl ring-4 ring-cream/70">
          <GripVertical className="w-5 h-5 text-gold-foreground" />
        </div>
      </div>
    </div>
  );
}
