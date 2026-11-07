import { motion } from 'motion/react';

/**
 * Renders a portrait (9:16) photograph inside a wider container by keeping
 * the photo sharp in the centre and extending its edges into a blurred
 * backdrop. This avoids cropping the sides of the frame while still filling
 * the available space.
 *
 * Used for the homepage hero carousel and the home service cards, where the
 * source frames are taller than the layout allows.
 */
export function BlurredFrame({
  src,
  alt,
  blur = 14,
  overlay = 'rgba(7,7,0.42)',
  reducedMotion,
  className = '',
  style,
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
      role="img"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url("${src}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: `blur(${blur}px) brightness(0.55)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: overlay }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${src}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}