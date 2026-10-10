"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

const slides = [
  {
    src: "/images/hero.png",
    alt: "Polaris — branded bottles and tumbler",
  },
  {
    src: "/images/work-vela.png",
    alt: "Vela — website design",
  },
  {
    src: "/images/work-adapadel.png",
    alt: "Ada Padel — logo and brand identity",
  },
  {
    src: "/images/work-niskarasa.png",
    alt: "Niskarasa — digital wedding invitation platform",
  },
];

const SLIDE_DURATION = 5000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_DURATION
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={slides[active].src}
            alt={slides[active].alt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/[0.47]" />
    </div>
  );
}
