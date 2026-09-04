import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative top-0 -mt-37 h-dvh w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Formici Creative Lab — branded product mockups for Polaris"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute top-[168px] flex w-[728px] max-w-[85vw] flex-col gap-6 px-6 text-white md:left-[100px] md:px-0">
        <Reveal>
          <h1 className="font-sans text-[clamp(32px,6vw,72px)] leading-[1.1] font-extrabold">
            Build Brands With Purpose and Clarity
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-headline text-[clamp(16px,2.5vw,24px)] font-normal">
            Thoughtful & Research-Driven Design Solutions
          </p>
        </Reveal>
      </div>
    </section>
  );
}
