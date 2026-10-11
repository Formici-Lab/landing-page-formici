"use client";

import { useEffect, useRef, useState } from "react";
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

// The first slide hands over sooner so the hero shows it is a slideshow
// before the visitor has scrolled past it.
const FIRST_SLIDE_DURATION = 3500;
const SLIDE_DURATION = 3500;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const isFirstSlide = useRef(true);

  useEffect(() => {
    const delay = isFirstSlide.current ? FIRST_SLIDE_DURATION : SLIDE_DURATION;
    isFirstSlide.current = false;

    const timer = setTimeout(
      () => setActive((current) => (current + 1) % slides.length),
      delay
    );
    return () => clearTimeout(timer);
  }, [active]);

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
