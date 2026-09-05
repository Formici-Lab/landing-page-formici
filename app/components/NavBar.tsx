"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import FormiciNavLogo from "./FormiciNavLogo";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS", href: "/works" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "ARTICLES", href: "/articles" },
  { label: "CONTACT", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky inset-x-0 top-0 z-20 flex justify-center px-6 py-10 md:px-[100px]">
      <div className="relative w-full max-w-[1240px]">
        <div className="flex items-center justify-between rounded-[60px] border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-md md:px-10">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <FormiciNavLogo className="h-7 w-auto" />
          </Link>

          <div className="hidden items-center gap-[60px] text-sm font-medium whitespace-nowrap text-white md:flex">
            {navLinks.map((link) => (
              <motion.span
                key={link.label}
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ stiffness: 400, damping: 17 }}
              >
                <Link href={link.href}>{link.label}</Link>
              </motion.span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-white md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {isOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full z-30 mt-3 overflow-hidden rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
