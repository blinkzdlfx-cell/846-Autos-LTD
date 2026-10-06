import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  const next = () => setActive((value) => (value + 1) % slides.length);
  const previous = () => setActive((value) => (value - 1 + slides.length) % slides.length);

  return (
    <div className="absolute inset-0" aria-label="846 Autos visual showcase">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[active].src}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${slides[active].src}")` }}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.15, ease: "easeInOut" }}
          role="img"
          aria-label={slides[active].alt}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,255,255,.2),transparent_28%),linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.15)_35%,#070707_100%)]" />
      <div className="absolute bottom-8 right-5 z-10 flex items-center gap-2 md:right-8">
        <button type="button" onClick={previous} className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-md transition hover:bg-white/10" aria-label="Previous hero image"><ChevronLeft size={17} /></button>
        <div className="flex items-center gap-1.5 px-1">
          {slides.map((slide, index) => <button key={slide.src} type="button" onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} className={`h-1 rounded-full transition-all duration-500 ${index === active ? "w-8 bg-white" : "w-2 bg-white/35"}`} />)}
        </div>
        <button type="button" onClick={next} className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-md transition hover:bg-white/10" aria-label="Next hero image"><ChevronRight size={17} /></button>
      </div>
    </div>
  );
}
