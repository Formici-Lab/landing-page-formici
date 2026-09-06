"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import MotionLinkButton from "./MotionLinkButton";
import MotionAnchorButton from "./MotionAnchorButton";
import SpinningAsterisk from "./SpinningAsterisk";

const WHATSAPP_NUMBER = "628973721360";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Formici Creative Lab! I'm interested in working with you.",
)}`;

const cardVariants = {
  rest: { scaleX: 1, scaleY: 1 },
  hover: { scaleX: 1.03, scaleY: 1.015 },
};

const borderVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

export default function HomeContactCta() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 pb-16 md:px-[100px] lg:px-[200px]">
      <Reveal className="w-full max-w-[1040px]">
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={cardVariants}
          transition={{ type: "spring", stiffness: 320, damping: 11, mass: 0.7 }}
          className="relative overflow-hidden rounded-[32px]"
        >
          <div className="bg-brown flex flex-col items-start gap-8 rounded-[32px] px-8 py-12 md:px-14 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-cream font-sans text-3xl font-extrabold lg:text-[48px]">
                Interested? Let&apos;s{" "}
                <span className="whitespace-nowrap">
                  c
                  <span className="relative inline-block h-[0.95em] w-[0.95em] translate-y-[0.2em] align-baseline">
                    <span className="sr-only">o</span>
                    <SpinningAsterisk className="h-full w-full" />
                  </span>
                  nnect.
                </span>
              </h2>
              <p className="text-cream font-sans text-lg font-medium opacity-80">
                Tell us about your idea and we&apos;ll help shape it into a brand
                with purpose. Drop us a message, or say hi on WhatsApp.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <MotionLinkButton
                href="/contact"
                className="bg-orange text-brown block rounded-full px-7 py-3 text-center font-sans text-base font-bold whitespace-nowrap"
              >
                Contact Us
              </MotionLinkButton>
              <MotionAnchorButton
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream border-cream hover:bg-cream hover:text-brown block rounded-full border-2 px-7 py-3 text-center font-sans text-base font-bold whitespace-nowrap transition-colors"
              >
                WhatsApp
              </MotionAnchorButton>
            </div>
          </div>

          <motion.svg
            aria-hidden
            variants={borderVariants}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            fill="none"
          >
            <motion.rect
              width="100%"
              height="100%"
              rx="32"
              stroke="#FDA400"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.16 0.84"
              animate={{ strokeDashoffset: [1, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </motion.div>
      </Reveal>
    </section>
  );
}
