import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SectionReveal } from './SectionReveal';

export function EventGallery({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    delta => setOpenIndex(index => (index + delta + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = event => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight') step(1);
      else if (event.key === 'ArrowLeft') step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close, step]);

  const open = (event, index) => {
    triggerRef.current = event.currentTarget;
    setOpenIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <SectionReveal key={item.src} delay={(index % 3) * 0.05}>
            <button
              type="button"
              onClick={event => open(event, index)}
              aria-label={`Open photo: ${item.caption}`}
              className="group relative block aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-[.22em] text-white/80">
                {item.caption}
              </span>
            </button>
          </SectionReveal>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="846 Lounge official opening photos"
          onClick={close}
        >
          <figure
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={event => event.stopPropagation()}
          >
            <img
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              className="max-h-[78svh] max-w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {items[openIndex].caption}
              <span className="ml-3 text-white/35">
                {openIndex + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 md:right-8 md:top-8"
          >
            <X size={19} />
          </button>
          <button
            type="button"
            onClick={event => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 md:left-8"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            type="button"
            onClick={event => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 md:right-8"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      )}
    </>
  );
}
