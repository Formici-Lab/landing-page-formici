"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import WorkModal, { type ProjectDetail } from "./WorkModal";

const projects: ProjectDetail[] = [
  {
    title: "TechForce Advisors",
    category: "Logo & Brand Identity",
    description:
      "A clean, professional identity system designed for TechForce Advisors — carried across signage, collateral, and their digital presence to reflect trust and precision.",
    images: ["/images/work-techforce.png"],
  },
  {
    title: "CALESTEK",
    category: "Logo Design",
    description:
      "A modern geometric mark for CALESTEK (PT. Cakrawala Lestari Teknologi), applied across their office branding and signage for a sharper, more confident presence.",
    images: ["/images/work-calestek.png"],
  },
  {
    title: "POLARIS",
    category: "Logo & Brand Identity",
    description:
      "A bold, multi-colour star identity for Polaris, extended across merchandise, apparel, and field gear to unify the brand wherever their teams show up.",
    images: ["/images/work-polaris.png"],
  },
  {
    title: "ADA PADEL",
    category: "Logo & Brand Identity",
    description:
      "A dynamic, sport-driven identity for Ada Padel — balancing energy and clarity for a growing padel community brand.",
    images: ["/images/work-adapadel.png"],
  },
  {
    title: "VELA",
    category: "Website",
    description:
      "A modern web platform designed and developed for Vela, focused on clear information architecture and a confident visual presence.",
    images: ["/images/work-vela.png"],
  },
];

export default function WorkCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selected, setSelected] = useState<ProjectDetail | null>(null);
  const dragState = useRef({ startX: 0, scrollLeft: 0, moved: false });

  useEffect(() => {
    const scroller = scrollerRef.current;
    const sentinel = sentinelRef.current;
    if (!scroller || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCanScrollMore(!entry.isIntersecting),
      { root: scroller, threshold: 1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    setIsDragging(true);
    dragState.current = { startX: e.clientX, scrollLeft: scroller.scrollLeft, moved: false };
    scroller.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 3) dragState.current.moved = true;
    scroller.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    scrollerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <section className="bg-cream flex flex-col gap-8 py-16">
      <Reveal className="px-6 md:px-[100px] lg:px-[200px]">
        <h2 className="text-orange font-sans text-4xl font-extrabold lg:text-[56px]">
          Selected Works
        </h2>
      </Reveal>
      <div className="relative">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onDragStart={(e) => e.preventDefault()}
          className={`no-scrollbar flex overflow-x-auto px-2 pb-4 md:px-[100px] lg:px-[200px] ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
          } gap-4`}
        >
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.05}
              className="flex w-[250px] shrink-0 snap-start flex-col gap-2 sm:w-[350px]"
            >
              <div className="relative h-[250px] w-full overflow-hidden rounded-[30px] sm:h-[250px]">
                <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
              </div>
              <button
                type="button"
                onClick={() => setSelected(project)}
                onPointerDown={(e) => e.stopPropagation()}
                className="group relative flex w-fit items-center text-left"
              >
                <span className="text-orange font-sans text-2xl font-bold transition-opacity duration-200 group-hover:opacity-0">
                  {project.title}
                </span>
                <span className="text-orange font-sans absolute inset-y-0 left-0 flex items-center gap-1.5 text-2xl font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Details
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <p className="text-brown font-headline text-lg font-medium">
                {project.category}
              </p>
            </Reveal>
          ))}
          <div ref={sentinelRef} aria-hidden className="w-px shrink-0" />
        </div>

        {canScrollMore && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex w-20 items-center justify-end pr-4 backdrop-blur-md mask-[linear-gradient(to_left,black,transparent)] sm:w-28">
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-brown"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        )}
      </div>

      <WorkModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
