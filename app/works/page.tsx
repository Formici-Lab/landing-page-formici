import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import HeroWorks from "../components/HeroWorks";
import WorkCarousel from "../components/WorkCarousel";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Our Works — Formici Creative Lab",
  description:
    "A showcase of brands, products, and platforms Formici Creative Lab has helped bring to life.",
};

export default function Works() {
  return (
    <main>
      <NavBar />
      <HeroWorks />
      <WorkCarousel />
      <Footer />
    </main>
  );
}
