import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EventDetails />
      <Schedule />
      <About />
      <ResearchAreas />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
