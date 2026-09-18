import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import GeneratorSets from "./components/GeneratorSets";
import Applications from "./components/Applications";
import Services from "./components/Services";
import FeaturedProject from "./components/FeaturedProject";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import QuotationCTA from "./components/QuotationCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileContactBar from "./components/MobileContactBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-12 font-sans md:pb-0">
      <a
        href="#generator-sets"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-power-500 focus:px-4 focus:py-2 focus:font-bold focus:text-ink-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <GeneratorSets />
        <Applications />
        <Services />
        <FeaturedProject />
        <WhyChoose />
        <About />
        <QuotationCTA />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
