import Reveal from "./Reveal";

type Block = {
  heading: string;
  paragraphs: string[];
};

const blocks: Block[] = [
  {
    heading: "Who Are We",
    paragraphs: [
      "Formici Creative Lab is a multidisciplinary creative agency focused on building meaningful brands through strategy, design, and digital craftsmanship.",
      "Inspired by Formicidae — the ant family — Formici represents structure, collaboration, and persistence. Each project is treated as an exploration: a process of understanding, testing, and refining ideas to uncover what works best for every brand.",
      "We believe effective design goes beyond aesthetics. It's about solving problems, creating clarity, and delivering long-term value. That's why every project at Formici begins with research and insight — to ensure that each visual decision supports the brand's goals and story.",
    ],
  },
  {
    heading: "Our Approach",
    paragraphs: [
      "We see design as a form of problem-solving. Like a lab, we experiment, analyze, and iterate to create solutions that are both functional and expressive.",
      "Our process prioritizes understanding — the client's purpose, audience, and challenge — before shaping creative outcomes that feel authentic and enduring.",
    ],
  },
  {
    heading: "Who We Work With",
    paragraphs: [
      "We collaborate with founders, startups, and businesses who value depth over speed — those who treat their brand as a living entity worth nurturing. Whether you're building a new identity or redefining your visual presence, Formici partners with you to bring clarity, structure, and meaning to your brand.",
    ],
  },
];

export default function AboutTheLab() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-16 md:px-[100px] lg:px-[200px]">
      <div className="flex w-full max-w-[1040px] flex-col gap-10">
        {blocks.map((block) => (
          <Reveal key={block.heading} className="flex flex-col gap-4">
            <h2 className="text-orange font-sans text-[32px] font-bold lg:text-[42px]">
              {block.heading}
            </h2>
            {block.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-brown font-sans text-lg font-medium">
                {paragraph}
              </p>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
