import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import WorksHero from "../components/WorksHero";
import OurWorks from "../components/OurWorks";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Works — Formici Creative Lab",
  description:
    "A selection of branding, logo, and web projects crafted by Formici Creative Lab — design & development crafted with care.",
};

export default function Works() {
  return (
    <main>
      <NavBar />
      <WorksHero />
      <OurWorks />
      <Footer />
    </main>
  );
}
