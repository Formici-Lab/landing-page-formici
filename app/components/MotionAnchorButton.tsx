"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

type MotionAnchorButtonProps = ComponentProps<"a">;

export default function MotionAnchorButton({ className, children, ...props }: MotionAnchorButtonProps) {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a className={className} {...props}>
        {children}
      </a>
    </motion.div>
  );
}
