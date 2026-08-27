import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ProofOfWork from "@/components/ProofOfWork";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofOfWork />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ResumeSection />
        <Contact />
      </main>
    </>
  );
}
