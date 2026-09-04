import Image from "next/image";
import Link from "next/link";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/#works" },
  { label: "The Lab", href: "/the-lab" },
  { label: "Study Cases", href: "/#study-cases" },
  { label: "Contact", href: "/#contact" },
];
const socialLinks = ["Instagram", "Behance", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-orange relative flex flex-col gap-10 overflow-hidden px-6 py-14 md:flex-row md:items-start md:justify-between md:px-[100px] lg:px-[200px] lg:py-[60px]">
      <div className="z-10 flex flex-col gap-10 sm:flex-row sm:gap-20">
        <div className="flex flex-col items-start text-white">
          {siteLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-lg font-bold px-2.5 py-[5px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start text-white">
          {socialLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-lg font-bold px-2.5 py-[5px]"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="z-10 flex flex-col items-start gap-6 text-white md:items-end">
        <a href="mailto:formicicreativelab@gmail.com" className="font-sans text-lg font-bold">
          formicicreativelab@gmail.com
        </a>
        <a href="tel:+628973721360" className="font-sans text-lg font-bold">
          +628973721360
        </a>
        <p className="font-sans text-xs font-bold">
          © 2026 Formici Creative Lab All rights reserved
        </p>
      </div>

      <Image
        src="/images/footer-star.svg"
        alt=""
        width={464}
        height={463}
        aria-hidden
        className="pointer-events-none absolute -right-28 -bottom-48 h-[463px] w-[464px]"
      />
    </footer>
  );
}
