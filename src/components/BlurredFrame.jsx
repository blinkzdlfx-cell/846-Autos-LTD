import { motion } from 'motion/react';

/**
 * Fills wide image frames with the source photo.
 *
 * Portrait photos are intentionally cropped with object-fit: cover so they
 * fill landscape hero and service-card layouts instead of appearing small
 * over a blurred backdrop. The centred crop keeps the frame visually full;
 * replace the source with a landscape photo later for more composition detail.
 */
export function BlurredFrame({
  src,
  alt,
  reducedMotion,
  className = '',
  style,
  overlay = 'rgba(7, 7, 7, 0.42)',
  ...motionProps
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <motion.img
        src={src}
        alt={alt || ''}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.06] object-cover object-center"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        {...motionProps}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: overlay }}
        aria-hidden="true"
      />
    </div>
  );
}
