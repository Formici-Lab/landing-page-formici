"use client";

import { motion } from "motion/react";
import Link from "next/link";
import FormiciNavLogo from "./FormiciNavLogo";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS", href: "/works" },
  { label: "THE LAB", href: "/the-lab" },
  { label: "CONTACT", href: "/#contact" },
];

export default function NavBar() {
  return (
    <div className="sticky inset-x-0 top-0 z-20 flex justify-center px-6 py-10 md:px-[100px]">
      <div className="flex w-full max-w-[1240px] items-center justify-between rounded-[60px] border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-md md:px-10">
        <Link href="/">
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
      </div>
    </div>
  );
}
