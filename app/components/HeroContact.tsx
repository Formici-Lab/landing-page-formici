import Reveal from "./Reveal";
import SpinningAsterisk from "./SpinningAsterisk";

export default function HeroContact() {
  return (
    <section className="bg-brown relative -mt-37 flex w-full items-center justify-center overflow-hidden pt-44 pb-16 md:px-[100px] lg:px-[200px]">
      <Reveal className="flex max-w-[800px] flex-col items-center gap-4 text-center">
        <h1 className="flex items-center gap-2 font-sans text-[clamp(32px,6vw,64px)] leading-[1.1] font-extrabold text-white sm:gap-3">
          <span>Let&apos;s Talk</span>
          <SpinningAsterisk className="h-[0.7em] w-[0.7em]" />
        </h1>
        <p className="text-orange font-headline text-[clamp(16px,2.5vw,22px)] font-normal">
          Have a project in mind? We&apos;d love to hear about it.
        </p>
      </Reveal>
    </section>
  );
}
