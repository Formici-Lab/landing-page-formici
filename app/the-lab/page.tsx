import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import HeroTheLab from "../components/HeroTheLab";
import AboutTheLab from "../components/AboutTheLab";
import BrandValue from "../components/BrandValue";
import TeamTheLab from "../components/TeamTheLab";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "The Lab — Formici Creative Lab",
  description:
    "Formici Creative Lab is a multidisciplinary creative agency focused on building meaningful brands through strategy, design, and digital craftsmanship.",
};

export default function TheLab() {
  return (
    <main>
      <NavBar />
      <HeroTheLab />
      <AboutTheLab />
      <BrandValue />
      <TeamTheLab />
      <Footer />
    </main>
  );
}
