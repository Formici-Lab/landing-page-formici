import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import HighlightedWork from "./components/HighlightedWork";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <HighlightedWork />
      <Clients />
      <Footer />
    </main>
  );
}
