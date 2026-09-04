import Image from "next/image";
import Reveal from "./Reveal";
import MotionButton from "./MotionButton";

export default function About() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-16 md:px-[100px] lg:px-[200px]">
      <div className="flex w-full max-w-[1040px] flex-col gap-20 lg:gap-[120px]">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <Reveal>
            <Image
              src="/images/formici-logo.svg"
              alt="Formici"
              width={601}
              height={120}
              className="h-auto w-[300px] max-w-full lg:w-[601px]"
            />
          </Reveal>
          <Reveal delay={0.15} className="flex w-full flex-col items-start gap-5 lg:w-[371px]">
            <p className="text-brown font-sans text-lg font-medium">
              Formici Creative Lab is a multidisciplinary branding &ldquo;lab&rdquo; that
              crafts thoughtful, research-driven design solutions. We combine
              strategy, creativity, and exploration to build brands with
              purpose and clarity.
            </p>
            <MotionButton className="bg-orange text-brown rounded-full px-10 py-5 font-sans text-lg font-bold">
              More on the Lab
            </MotionButton>
          </Reveal>
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">
          <Reveal>
            <h2 className="text-orange font-sans text-4xl font-extrabold whitespace-nowrap lg:text-[56px]">
              Specialising in
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-brown flex flex-col items-start gap-3 font-sans text-2xl font-bold lg:text-[32px]">
            <p>Logo & Brand Design</p>
            <p>Illustration</p>
            <p>Social Media Design</p>
          </Reveal>
          <Reveal delay={0.2} className="text-brown flex flex-col items-start gap-3 font-sans text-2xl font-bold lg:text-[32px]">
            <p>Web Design</p>
            <p>Web Development</p>
            <p>Web App</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
