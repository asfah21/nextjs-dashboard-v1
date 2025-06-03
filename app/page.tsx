import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import { HeroBgAtas, HeroBgDelta } from "./components/hero/HeroBg";
import Card from "./components/Card";
import BuildWith from "./components/BuildWith";
import Footer from "./components/Footer";
import HeroAlpha from "./components/hero/HeroAlpha";
import HeroBeta from "./components/hero/HeroBeta";
import HeroGamma from "./components/hero/HeroGamma";
import WithLove from "./components/WithLove";
import CardBawah from "./components/CardBawah";
import HeroDelta from "./components/hero/HeroDelta";
import FooterBefore from "./components/FooterBefore";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-max">
          <Hero />
          <HeroBgAtas />
          <Card />
          <BuildWith />
          <HeroAlpha />
          <HeroBeta />
          <HeroGamma />
          <WithLove />
          <HeroDelta />
          <FooterBefore />
      </div>
      <Footer />
    </>
  );
}
