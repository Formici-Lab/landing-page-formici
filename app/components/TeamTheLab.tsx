import Image from "next/image";
import Reveal from "./Reveal";

type Member = {
  name: string;
  role: string;
  photo: string;
};

const team: Member[] = [
  {
    name: "Ikhwanda Rizqi Pradipta",
    role: "Illustrator & Brand Designer",
    photo: "/images/team-ikhwanda.jpg",
  },
  {
    name: "Hairawan Wibisana",
    role: "Promotional Designer",
    photo: "/images/team-hairawan.jpg",
  },
  {
    name: "David William Dacosta",
    role: "Web Developer",
    photo: "/images/team-david.jpg",
  },
  {
    name: "Muhammad Farraos Abdillah",
    role: "Web Developer",
    photo: "/images/team-farraos.jpg",
  },
];

export default function TeamTheLab() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-16 md:px-[100px] lg:px-[200px]">
      <div className="grid w-full max-w-[920px] grid-cols-1 gap-10 sm:grid-cols-2">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={(i % 2) * 0.1} className="flex flex-col gap-2">
            <div className="relative aspect-[432/540] w-full overflow-hidden rounded-[30px]">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-orange font-sans text-2xl font-bold">
              {member.name}
            </p>
            <p className="text-brown font-headline text-lg font-medium">
              {member.role}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
