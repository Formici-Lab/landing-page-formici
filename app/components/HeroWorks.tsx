import Reveal from "./Reveal";
import SpinningAsterisk from "./SpinningAsterisk";

export default function HeroWorks() {
  return (
    <section className="bg-brown relative -mt-37 flex h-[480px] w-full items-center justify-center overflow-hidden px-6 pt-37">
      <Reveal className="flex max-w-[800px] flex-col items-center gap-4 text-center">
        <h1 className="flex items-center gap-2 font-sans text-[clamp(32px,6vw,64px)] leading-[1.1] font-extrabold text-white sm:gap-3">
          <div className="flex items-center">
            <SpinningAsterisk className="h-[0.85em] w-[0.85em]" />
            <p>ur</p>
          </div>
            <span>Works</span>
        </h1>
        <p className="text-orange font-headline text-[clamp(16px,2.5vw,22px)] font-normal">
          A showcase of brands, products, and platforms we&apos;ve helped bring to life.
        </p>
      </Reveal>
    </section>
  );
}
