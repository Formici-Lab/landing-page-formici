import Image from "next/image";
import Reveal from "./Reveal";
import MotionButton from "./MotionButton";

type Project = {
  title: string;
  category: string;
  image: string;
};

const smallProjects: Project[] = [
  {
    title: "TechForce Advisors",
    category: "Logo & Brand Identity",
    image: "/images/work-techforce.png",
  },
  {
    title: "CALESTEK",
    category: "Logo Design",
    image: "/images/work-calestek.png",
  },
];

const bottomProjects: Project[] = [
  {
    title: "ADA PADEL",
    category: "Logo & Brand Identity",
    image: "/images/work-adapadel.png",
  },
  {
    title: "VELA",
    category: "Website",
    image: "/images/work-vela.png",
  },
];

function ProjectCard({ title, category, image }: Project) {
  return (
    <Reveal className="flex w-full flex-col gap-1">
      <div className="relative h-[240px] w-full overflow-hidden rounded-[30px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <p className="text-orange font-sans text-2xl font-bold">{title}</p>
      <p className="text-brown font-headline text-lg font-medium">
        {category}
      </p>
    </Reveal>
  );
}

export default function HighlightedWork() {
  return (
    <section className="bg-cream flex flex-col items-center gap-10 px-6 py-16 md:px-[100px] lg:px-[200px]">
      <div className="flex w-full max-w-[1040px] flex-col gap-10">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {smallProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <Reveal className="flex w-full flex-col gap-1">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[30px] md:h-[570px]">
            <Image
              src="/images/work-polaris.png"
              alt="POLARIS"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-orange font-sans text-2xl font-bold">POLARIS</p>
          <p className="text-brown font-headline text-lg font-medium">
            Logo & Brand Identity
          </p>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {bottomProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      <MotionButton className="bg-orange text-brown rounded-full px-10 py-5 font-sans text-lg font-bold">
        More Works
      </MotionButton>
    </section>
  );
}
