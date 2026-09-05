import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import HeroContact from "../components/HeroContact";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — Formici Creative Lab",
  description:
    "Have a project in mind? Get in touch with Formici Creative Lab and let's build something with purpose and clarity.",
};

export default function Contact() {
  return (
    <main>
      <NavBar />
      <HeroContact />
      <ContactSection />
      <Footer />
    </main>
  );
}
