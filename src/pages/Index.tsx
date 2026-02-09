import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <CursorFollower />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
