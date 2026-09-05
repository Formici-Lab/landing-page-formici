"use client";

import { motion } from "motion/react";

const categories = [
  "Logo & Brand Design",
  "Illustration",
  "Social Media Design",
  "Web Design",
  "Web Development",
  "Web App",
  "3D/VFX?",
];

export default function CategoryMarquee() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...categories, ...categories].map((category, i) => (
          <span
            key={i}
            className="text-brown font-sans flex items-center gap-8 pr-8 text-2xl font-bold whitespace-nowrap lg:text-[32px] bg-transparent "
          >
            {category}
            <span className="text-orange" aria-hidden>
              •
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
