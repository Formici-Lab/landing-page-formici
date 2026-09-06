import Reveal from "./Reveal";
import MotionLinkButton from "./MotionLinkButton";
import MotionAnchorButton from "./MotionAnchorButton";
import SpinningAsterisk from "./SpinningAsterisk";

const WHATSAPP_NUMBER = "628973721360";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Formici Creative Lab! I'm interested in working with you.",
)}`;

export default function HomeContactCta() {
  return (
    <section className="bg-cream flex flex-col items-center px-6 pb-16 md:px-[100px] lg:px-[200px]">
      <Reveal className="w-full max-w-[1040px]">
        <div className="bg-brown flex flex-col items-start gap-8 rounded-[32px] px-8 py-12 md:px-14 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-cream flex items-center gap-3 font-sans text-3xl font-extrabold lg:text-[48px]">
              <span>Interested? Let&apos;s connect.</span>
              <SpinningAsterisk className="h-[0.7em] w-[0.7em] shrink-0" />
            </h2>
            <p className="text-cream font-sans text-lg font-medium opacity-80">
              Tell us about your idea and we&apos;ll help shape it into a brand
              with purpose. Drop us a message, or say hi on WhatsApp.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <MotionLinkButton
              href="/contact"
              className="bg-orange text-brown block rounded-full px-7 py-3 text-center font-sans text-base font-bold whitespace-nowrap"
            >
              Contact Us
            </MotionLinkButton>
            <MotionAnchorButton
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream border-cream hover:bg-cream hover:text-brown block rounded-full border-2 px-7 py-3 text-center font-sans text-base font-bold whitespace-nowrap transition-colors"
            >
              WhatsApp
            </MotionAnchorButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
