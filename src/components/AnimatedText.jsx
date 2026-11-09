import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedText({ words, interval = 2600, variant = 'slide' }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const longestWord = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const timer = window.setInterval(
      () => setIndex(value => (value + 1) % words.length),
      interval
    );
    return () => window.clearInterval(timer);
  }, [interval, reduceMotion, words.length]);

  if (reduceMotion) return <span>{words[0]}</span>;

  const isCounter = variant === 'counter';

  return (
    <span
      className={`relative inline-grid max-w-full min-w-[8ch] align-bottom leading-[1.08] ${isCounter ? '[perspective:700px]' : ''}`}
    >
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longestWord}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={
            isCounter
              ? { y: '115%', opacity: 0, rotateX: -65, scale: 0.86, filter: 'blur(5px)' }
              : { y: '105%', opacity: 0, filter: 'blur(8px)' }
          }
          animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
          exit={
            isCounter
              ? { y: '-115%', opacity: 0, rotateX: 65, scale: 0.86, filter: 'blur(5px)' }
              : { y: '-105%', opacity: 0, filter: 'blur(8px)' }
          }
          transition={{
            duration: isCounter ? 0.9 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="col-start-1 row-start-1 whitespace-nowrap"
          style={{ transformOrigin: 'center center' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
