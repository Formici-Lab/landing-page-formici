import Image from "next/image";
import Reveal from "./Reveal";

export default function HeroTheLab() {
  return (
    <section className="relative -mt-37 flex h-[600px] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-thelab.jpg"
        alt="Formici Creative Lab tote bag"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/[0.47]" />
      <Reveal className="relative z-10 w-[800px] max-w-[80vw]">
        <h1 className="text-center font-sans text-[clamp(32px,6vw,72px)] leading-[1.1] font-extrabold text-white">
          Design & Development crafted with care.
        </h1>
      </Reveal>
    </section>
  );
}
