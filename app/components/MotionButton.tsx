"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export default function MotionButton(props: HTMLMotionProps<"button">) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    />
  );
}
