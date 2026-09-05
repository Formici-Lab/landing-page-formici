import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import SpinningAsterisk from "./SpinningAsterisk";

const socialLinks = ["Instagram", "Behance", "LinkedIn"];

export default function ContactSection() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 py-16 md:px-[100px] lg:px-[200px]">
      <div className="grid w-full max-w-[1040px] grid-cols-1 gap-16 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-orange font-sans text-sm font-bold tracking-wide uppercase">
              Get in touch
            </p>
            <h2 className=" flex items-center gap-2 text-brown font-sans text-3xl font-extrabold lg:text-[40px]">
              <p>Have a project in mind?</p>
              <SpinningAsterisk className="h-[0.7em] w-[0.7em]" />
            </h2>
            <p className="text-brown font-sans text-lg font-medium opacity-80">
              Tell us a bit about what you&apos;re working on and we&apos;ll get back
              to you within a couple of days.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:formicicreativelab@gmail.com"
              className="text-brown hover:text-orange font-sans text-lg font-bold transition-colors"
            >
              formicicreativelab@gmail.com
            </a>
            <a
              href="tel:+628973721360"
              className="text-brown hover:text-orange font-sans text-lg font-bold transition-colors"
            >
              +62 897-3721-360
            </a>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="text-brown hover:text-orange font-sans text-base font-bold transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
