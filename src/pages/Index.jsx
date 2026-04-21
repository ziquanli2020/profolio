import Navbar from "@/components/portfolio/Navbar.jsx";
import Hero from "@/components/portfolio/Hero.jsx";
import About from "@/components/portfolio/About.jsx";
import Experience from "@/components/portfolio/Experience.jsx";
import Skills from "@/components/portfolio/Skills.jsx";
import Contact from "@/components/portfolio/Contact.jsx";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
