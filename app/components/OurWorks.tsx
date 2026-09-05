import Image from "next/image";
import Reveal from "./Reveal";

type Project = {
  title: string;
  category: string;
  /**
   * Manual image input: drop the file in /public/images/ and reference it here.
   * Leave `image` empty ("") to render a neutral placeholder block.
   */
  image: string;
};

const projects: Project[] = [
  { title: "CALESTEK", category: "Logo Design", image: "/images/work-calestek.png" },
  { title: "ADA PADEL", category: "Logo & Brand Identity Design", image: "/images/work-adapadel.png" },
  { title: "POLARIS", category: "Logo Design", image: "/images/work-polaris.png" },
  { title: "TechForce Advisors", category: "Logo & Brand Identity Design", image: "/images/work-techforce.png" },
  { title: "CEK Tax Consultant", category: "Logo & Brand Identity Design", image: "" },
  { title: "Cineunfonel Coffee", category: "Logo & Brand Identity Design", image: "" },
  { title: "Niskarasa", category: "Logo & Brand Identity Design", image: "" },
  { title: "Other Work", category: "Web Design & Development", image: "" },
  { title: "Other Work", category: "Web Design & Development", image: "" },
  { title: "Other Work", category: "Web Design & Development", image: "" },
  { title: "Other Work", category: "Web Design & Development", image: "" },
  { title: "Other Work", category: "Web Design & Development", image: "" },
];

function ProjectCard({ title, category, image }: Project) {
  return (
    <Reveal className="flex w-full flex-col gap-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[30px]">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          // Manual image input placeholder — matches the empty blocks in the design.
          <div className="h-full w-full bg-brown/30" aria-hidden />
        )}
      </div>
      <p className="text-orange font-sans text-2xl font-bold">{title}</p>
      <p className="text-brown font-headline text-lg font-medium">{category}</p>
    </Reveal>
  );
}

export default function OurWorks() {
  return (
    <section className="bg-cream flex flex-col items-center gap-10 px-6 py-16 md:px-[100px] lg:px-[200px]">
      <Reveal>
        <h2 className="text-orange font-sans text-4xl font-bold">Our Works</h2>
      </Reveal>
      <div className="grid w-full max-w-[1040px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
}
