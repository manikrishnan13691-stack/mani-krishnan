import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CooperationProcess from "@/components/CooperationProcess";
import About from "@/components/About";
import Services from "@/components/Services";
import OurApproach from "@/components/OurApproach";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <div className={`min-h-screen bg-background cursor-none md:cursor-none ${isLoading ? "overflow-hidden h-screen" : ""}`}>
        <CursorFollower />
        <Navigation />
        <Hero />
        <CooperationProcess />
        <About />
        <Services />
        <OurApproach />
        <Marquee />
        <Portfolio />
        <HowWeWork />
        <WhyChooseMe />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
