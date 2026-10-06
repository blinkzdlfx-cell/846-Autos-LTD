import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const pointerStart = useRef(null);

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  const next = () => setActive((value) => (value + 1) % slides.length);
  const previous = () => setActive((value) => (value - 1 + slides.length) % slides.length);

  const handlePointerDown = (event) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event) => {
    if (!pointerStart.current) return;
    const { x, y } = pointerStart.current;
    pointerStart.current = null;

    const deltaX = event.clientX - x;
    const deltaY = event.clientY - y;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX < 0) next();
    else previous();
  };

  return (
    <div
      className="absolute inset-0 touch-pan-y select-none"
      aria-label="846 Autos visual showcase"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStart.current = null; }}
    >
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

      <button
        type="button"
        onClick={previous}
        className="absolute left-5 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10 md:left-8"
        aria-label="Previous hero image"
      >
        <ChevronLeft size={19} />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-5 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10 md:right-8"
        aria-label="Next hero image"
      >
        <ChevronRight size={19} />
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${index === active ? "w-8 bg-white" : "w-2 bg-white/35"}`}
          />
        ))}
      </div>
    </div>
  );
}
