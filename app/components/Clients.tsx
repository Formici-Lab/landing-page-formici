import Reveal from "./Reveal";

type Client = {
  name: string;
  service: string;
};

const clientColumns: Client[][] = [
  [
    { name: "Polaris", service: "Logo & Brand Identity Design" },
    {
      name: "CALESTEK | PT. Cakrawala Lestari Teknologi",
      service: "Logo Design",
    },
    { name: "TechForce Advisors", service: "Logo & Brand Identity Design" },
    { name: "CEK Tax Consultant", service: "Logo & Brand Identity Design" },
    { name: "Cimeuhmal Coffee", service: "Logo & Brand Identity Design" },
    {
      name: "MALOMO | PT. Malomo Teknologi Indonesia",
      service: "Logo & Brand Identity Design",
    },
    { name: "MMT | PT. Muda Mandiri Teknik", service: "Logo Design" },
    { name: "Fakultas Pertanian UNPAD", service: "Visual Design" },
    {
      name: "Pusat Riset Dinamika Pembangunan UNPAD",
      service: "Visual Design",
    },
  ],
  [
    { name: "RMIT University", service: "Circular Diagnostic Web Application" },
    {
      name: "PPID Kementerian Perdagangan RI",
      service: "PPID Mobile Application",
    },
    { name: "Plexa Pro", service: "SaaS Web Application" },
    { name: "UNNES", service: "IOT Web Application" },
  ],
];

export default function Clients() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-16 md:px-[60px]">
      <div className="flex w-full max-w-[1320px] flex-col gap-6">
        <Reveal>
          <h2 className="text-orange font-sans text-4xl font-extrabold whitespace-nowrap lg:text-[56px]">
            CLIENTS
          </h2>
        </Reveal>
        <div className="grid w-full grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {clientColumns.map((column, i) => (
            <Reveal
              key={column[0].name}
              delay={i * 0.1}
              className="grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-[1fr_auto]"
            >
              {column.map((client) => (
                <div
                  key={client.name}
                  className="text-brown grid grid-cols-subgrid gap-x-16 sm:col-span-2"
                >
                  <p className="font-sans text-lg font-bold">{client.name}</p>
                  <p className="font-headline text-sm whitespace-nowrap">
                    {client.service}
                  </p>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
