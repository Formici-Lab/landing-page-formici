import Reveal from "./Reveal";

const values = ["Creative", "Strategic", "Integrity"];

export default function BrandValue() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-10 md:px-[100px] lg:px-[200px]">
      <div className="flex w-full max-w-[1040px] flex-col items-start gap-6 sm:flex-row sm:justify-between">
        {values.map((value, i) => (
          <Reveal key={value} delay={i * 0.1}>
            <h2 className="text-orange font-sans text-4xl font-extrabold whitespace-nowrap lg:text-[56px]">
              {value}
            </h2>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
