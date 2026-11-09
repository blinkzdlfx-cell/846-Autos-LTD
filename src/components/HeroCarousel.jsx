import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const reduceMotion = useReducedMotion();
  const pointerStart = useRef(null);

  useEffect(() => {
    if (reduceMotion || !isPlaying || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setActive(value => (value + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isPlaying, reduceMotion, slides.length]);

  const next = () => {
    setDirection(1);
    setActive(value => (value + 1) % slides.length);
  };

  const previous = () => {
    setDirection(-1);
    setActive(value => (value - 1 + slides.length) % slides.length);
  };

  const handlePointerDown = event => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = event => {
    if (!pointerStart.current) return;
    const { x, y } = pointerStart.current;
    pointerStart.current = null;

    const deltaX = event.clientX - x;
    const deltaY = event.clientY - y;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX < 0) next();
    else previous();
  };

  const currentSlide = slides[active];

  return (
    <div
      className="absolute inset-0 touch-pan-y select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="846 Autos visual showcase"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.img
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.alt || ''}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
          className="pointer-events-none absolute inset-0 block h-full w-full object-cover object-center will-change-transform"
          custom={direction}
          initial={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 0, x: direction > 0 ? '5%' : '-5%', scale: 1.035 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction > 0 ? '-5%' : '5%', scale: 1.015 }
          }
          transition={{
            duration: reduceMotion ? 0 : 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,255,255,.16),transparent_28%),linear-gradient(180deg,rgba(0,0,0,.28),rgba(0,0,0,.32)_35%,rgba(7,7,7,.88)_100%)]" />

      <button
        type="button"
        onClick={previous}
        className="absolute left-5 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10 md:left-8"
        aria-label="Previous hero image"
      >
        <ChevronLeft size={19} />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-5 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10 md:right-8"
        aria-label="Next hero image"
      >
        <ChevronRight size={19} />
      </button>

      <div className="pointer-events-auto absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-white backdrop-blur-md">
        <span className="min-w-[5.5rem] font-mono text-[11px] tracking-[0.18em] text-white/80" aria-live="polite">
          {String(active + 1).padStart(2, '0')} <span className="text-white/35">/</span> {String(slides.length).padStart(2, '0')}
        </span>
        <span className="h-px w-12 overflow-hidden bg-white/25 sm:w-20">
          <motion.span
            className="block h-full origin-left bg-white"
            animate={{ scaleX: (active + 1) / slides.length }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </span>
        <button
          type="button"
          onClick={() => setIsPlaying(playing => !playing)}
          aria-label={
            isPlaying ? 'Pause automatic image rotation' : 'Resume automatic image rotation'
          }
          aria-pressed={!isPlaying}
          className="grid size-6 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
        </button>
      </div>
    </div>
  );
}
