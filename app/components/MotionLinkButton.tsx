"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ComponentProps } from "react";

type MotionLinkButtonProps = ComponentProps<typeof Link>;

export default function MotionLinkButton({ className, children, ...props }: MotionLinkButtonProps) {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}
