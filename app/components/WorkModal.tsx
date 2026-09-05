"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import FormiciLogo from "./FormiciLogo";

export type ProjectDetail = {
  title: string;
  category: string;
  description: string;
  images: string[];
};

type WorkModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
};

export default function WorkModal({ project, onClose }: WorkModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startY: 0, startScroll: 0, moved: false });

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Don't hijack buttons, links or actual scrollbar clicks
    if ((e.target as HTMLElement).closest("button, a")) return;
    if (e.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { active: true, startY: e.clientY, startScroll: el.scrollTop, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!drag.current.active || !el) return;
    const delta = e.clientY - drag.current.startY;
    if (Math.abs(delta) > 3) {
      drag.current.moved = true;
      el.setPointerCapture?.(e.pointerId);
    }
    el.scrollTop = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  const onBackdropClick = () => {
    // Ignore the click that ends a drag gesture
    if (drag.current.moved) return;
    onClose();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={scrollRef}
          className="fixed inset-0 z-50 flex touch-pan-y items-start justify-center overflow-y-auto overscroll-contain p-4 select-none sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={onBackdropClick}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 my-auto w-full max-w-2xl cursor-grab rounded-[30px] border border-white/25 bg-white/10 p-6 shadow-xl backdrop-blur-2xl active:cursor-grabbing sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-brown absolute top-6 right-6 z-30 flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md transition-transform hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <FormiciLogo className="mb-6 h-auto w-[160px]" />

            <div
              className={`grid gap-3 ${
                project.images.length > 1 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {project.images.slice(0, 5).map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl ${
                    project.images.length === 1 ? "aspect-16/10" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    fill
                    draggable={false}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-orange font-sans mt-6 text-3xl font-bold sm:text-4xl">
              {project.title}
            </h3>
            <p className="text-brown font-headline mt-1 text-sm font-medium opacity-70">
              {project.category}
            </p>
            <p className="text-brown font-sans mt-4 text-base leading-relaxed font-medium">
              {project.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
