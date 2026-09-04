import Reveal from "./Reveal";

type Member = {
  name: string;
  role: string;
};

const team: Member[] = [
  { name: "Ikhwanda Rizqi Pradipta", role: "Illustrator & Brand Designer" },
  { name: "Hairawan Wibisana", role: "Promotional Designer" },
  { name: "David William Dacosta", role: "Web Developer" },
  { name: "Muhammad Farraos Abdillah", role: "Web Developer" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamTheLab() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-16 md:px-[100px] lg:px-[200px]">
      <div className="grid w-full max-w-[920px] grid-cols-1 gap-10 sm:grid-cols-2">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={(i % 2) * 0.1} className="flex flex-col gap-2">
            {/* Placeholder — real portrait not yet available (Figma MCP rate limit) */}
            <div className="bg-brown/10 flex aspect-[432/540] w-full items-center justify-center rounded-[30px]">
              <span className="text-brown/40 font-sans text-6xl font-extrabold">
                {initials(member.name)}
              </span>
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
