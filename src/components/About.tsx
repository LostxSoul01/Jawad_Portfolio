"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Rocket, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel";

const principles = [
  { icon: BrainCircuit, title: "Think in systems", text: "I connect product intent, data, models, APIs, and interfaces into one clear flow." },
  { icon: ShieldCheck, title: "Build with trust", text: "Clear architecture, honest metrics, secure integrations, and decisions another engineer can follow." },
  { icon: Rocket, title: "Ship with purpose", text: "From first sketch to deployed product, I care about useful outcomes—not just impressive demos." },
];

const facts = [
  ["Based in", "Punjab, Pakistan"],
  ["Education", "BS Software Engineering"],
  ["Standing", "3.88 / 4.00 CGPA · Ranked 2nd"],
  ["Focus", "Applied AI · Full-stack · Product engineering"],
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="01" label="about" />
        <div className="about-intro-grid">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <p className="about-eyebrow">A builder’s point of view</p>
            <h2 className="about-headline">Complex ideas in.<br /><span>Useful products out.</span></h2>
            <p className="about-lede">I build at the intersection of applied AI, thoughtful interfaces, and dependable engineering.</p>
            <div className="about-signature"><span className="about-signature__line" /><span>curiosity → craft → shipped work</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.12 }} className="about-facts-card">
            <p className="case-study-kicker">the quick read</p>
            <dl>{facts.map(([label, value]) => <div key={label} className="about-fact"><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </motion.div>
        </div>

        <div className="about-principles-grid">
          {principles.map(({ icon: Icon, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.08 }} className="about-principle-card"><div className="about-principle-card__top"><span className="about-principle-card__icon"><Icon size={18} /></span><span className="about-principle-card__index">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></motion.article>)}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="about-closing-card"><p>“I bring curiosity, ownership, and a bias toward shipping.”</p><a href="#projects">See the work <ArrowUpRight size={15} /></a></motion.div>
      </div>
    </section>
  );
}
