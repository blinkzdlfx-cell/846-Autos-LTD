import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedText({ words }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion, words.length]);

  if (reduceMotion) return <span>{words[0]}</span>;

  return (
    <span className="relative inline-flex h-[1.02em] min-w-[5ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span key={words[index]} initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="absolute left-0 top-0 whitespace-nowrap">{words[index]}</motion.span>
      </AnimatePresence>
    </span>
  );
}
