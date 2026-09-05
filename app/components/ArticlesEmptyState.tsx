"use client";

import Link from "next/link";
import { motion } from "motion/react";
import MotionButton from "./MotionButton";

// The Formici "spark" star (from footer-star.svg), reused here in solid orange.
const STAR_PATH =
  "M343.699 32.7969L259.347 154.504L237.606 0L125.565 26.9464L183.255 141.437C171.999 143.657 161.985 148.696 154.067 156.597C146.878 163.771 142.084 172.696 139.559 182.689L26.4055 125.892L0 233.806L154.966 258.617L31.4126 342.745L120.515 431.655L204.824 308.368L229.689 463L337.836 436.651L280.916 323.741C290.931 321.264 299.875 316.439 307.065 309.265C314.982 301.364 320.032 291.371 322.258 280.14L436.995 337.706L464 225.906L309.162 204.212L431.132 120.042L343.656 32.7542L343.699 32.7969ZM269.105 240.297C270.774 249.991 268.762 258.959 262.728 264.98C257.721 269.977 250.788 272.197 243.084 271.898C231.786 271.514 218.904 265.663 208.376 255.158C197.848 244.653 191.985 231.756 191.557 220.482C191.301 212.796 193.483 205.835 198.49 200.881C204.567 194.817 213.555 192.853 223.227 194.518C233.198 196.184 243.855 201.778 252.885 210.746C261.872 219.714 267.436 230.39 269.147 240.297H269.105Z";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ArticlesEmptyState() {
  return (
    <div className="mx-auto flex min-h-[45vh] max-w-[640px] flex-col items-center justify-center gap-8 py-12 text-center">
      {/* Brand spark — eases in, drifts gently, and slowly spins */}
      <motion.div
        className="text-orange"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
        transition={{
          scale: { duration: 0.8, ease: EASE },
          opacity: { duration: 0.8, ease: EASE },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <motion.svg
          viewBox="0 0 464 463"
          className="h-24 w-24 drop-shadow-[0_10px_25px_rgba(253,164,0,0.35)]"
          fill="currentColor"
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <path d={STAR_PATH} />
        </motion.svg>
      </motion.div>

      <div className="flex flex-col gap-3">
        <motion.h2
          className="text-brown font-sans text-3xl font-extrabold md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          No articles — <span className="text-orange">yet</span>
        </motion.h2>
        <motion.p
          className="text-brown/70 font-headline text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          Stay tuned — a fresh article is on its way. Coming soon!
        </motion.p>
      </div>

      {/* "In progress" pulse */}
      <div className="flex items-center gap-2" aria-hidden>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="bg-orange h-2.5 w-2.5 rounded-full"
            animate={{ y: [0, -9, 0], opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.16,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
      >
        <Link href="/works">
          <MotionButton className="bg-orange text-brown rounded-full px-8 py-4 font-sans text-base font-bold">
            Explore our Works
          </MotionButton>
        </Link>
      </motion.div>
    </div>
  );
}
