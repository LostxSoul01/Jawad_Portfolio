"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { projects } from "@/data/projects";

const roles = ["Software Engineer", "AI Engineer", "Full-Stack Developer", "GenAI Engineer"];
const spotlightOrder = ["ai-ecommerce", "smartsched", "resumelens"];
const spotlightProjects = spotlightOrder.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is NonNullable<typeof project> => Boolean(project));

function useTypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < current.length) timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 48);
      else timeout = setTimeout(() => setPhase("pausing"), 1500);
    } else if (phase === "pausing") timeout = setTimeout(() => setPhase("deleting"), 420);
    else if (text.length > 0) timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 25);
    else timeout = setTimeout(() => { setPhase("typing"); setRoleIndex((i) => (i + 1) % roles.length); }, 0);
    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);
  return text;
}

export default function Hero() {
  const typed = useTypedRole();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = spotlightProjects[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => setActiveIndex((index) => (index + 1) % spotlightProjects.length), 6500);
    return () => clearInterval(timer);
  }, []);

  const moveCarousel = (direction: number) => setActiveIndex((index) => (index + direction + spotlightProjects.length) % spotlightProjects.length);

  return (
    <section id="top" className="hero-stage relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20">
      <div className="grid-texture absolute inset-0 -z-10" />
      <div className="hero-stage__beam hero-stage__beam--one" /><div className="hero-stage__beam hero-stage__beam--two" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="hero-kicker"><span className="hero-kicker__pulse" /> ~/jawad-ali-raza <span className="hero-kicker__line" /> <span>portfolio / 2026</span></motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="hero-title glow-text">Jawad Ali <span>Raza</span></motion.h1>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="hero-role"><span className="hero-role__prefix">I am a</span> {typed}<span className="hero-role__cursor" /></motion.div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="hero-description">I build production-minded AI, full-stack, and computer-vision applications that turn complex technical ideas into useful products.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="hero-tags">{["AI products", "Full-stack systems", "Production-minded"].map((item) => <span key={item}>{item}</span>)}</motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="hero-actions">
            <a href="#projects" className="hero-button hero-button--primary">view selected work <ArrowRight size={15} /></a>
            <a href="/jawad-ali-raza-resume.pdf" download className="hero-button hero-button--secondary">download résumé</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="hero-socials"><span>find me online</span><a href="https://github.com/LostxSoul01" target="_blank" rel="noopener noreferrer"><GithubIcon size={15} /> github</a><a href="https://linkedin.com/in/jawad-ali-raza1" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={15} /> linkedin</a></motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.2 }} className="spotlight-shell">
          <div className="spotlight-shell__top"><span><Sparkles size={13} /> selected project</span><span>0{activeIndex + 1} / 0{spotlightProjects.length}</span></div>
          <div className="spotlight-orbit spotlight-orbit--one" /><div className="spotlight-orbit spotlight-orbit--two" />
          <AnimatePresence mode="wait">
            <motion.div key={active.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="spotlight-content">
              <div className="spotlight-index">0{activeIndex + 1}</div><p className="spotlight-label">{active.year} / {active.status}</p><h2>{active.title}</h2><p className="spotlight-tagline">{active.tagline}</p><p className="spotlight-description">{active.description}</p><div className="spotlight-metric"><span>key signal</span><strong>{active.metric || "Built for useful outcomes"}</strong></div><div className="spotlight-tech">{active.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><a href={`/projects/${active.caseStudySlug || active.slug}`} className="spotlight-link">read case study <ExternalLink size={13} /></a>
            </motion.div>
          </AnimatePresence>
          <div className="spotlight-controls"><div className="spotlight-dots">{spotlightProjects.map((project, index) => <button key={project.slug} type="button" aria-label={`Show ${project.title}`} aria-current={index === activeIndex} onClick={() => setActiveIndex(index)}><span /></button>)}</div><div className="spotlight-arrows"><button type="button" onClick={() => moveCarousel(-1)} aria-label="Previous project"><ChevronLeft size={16} /></button><button type="button" onClick={() => moveCarousel(1)} aria-label="Next project"><ChevronRight size={16} /></button></div></div>
        </motion.div>
      </div>
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to about section"><span>scroll to explore</span><ArrowDown size={16} /></a>
    </section>
  );
}
