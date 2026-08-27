"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Code2, Database, Gauge, Layers3 } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/skills";

const icons = [Code2, Layers3, Database, BrainCircuit, Gauge];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="skills" />
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-3xl leading-tight text-text-primary sm:text-4xl">A practical stack for turning complex ideas into useful products.</p>
          <p className="mt-4 leading-relaxed text-text-muted">Jawad works across the interface, intelligence, and infrastructure layers—choosing tools based on the problem, not the trend.</p>
        </div>

        <div className="skills-network">
          <svg className="skills-network__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {skillGroups.map((_, index) => <line key={index} x1="50" y1="50" x2={index % 2 === 0 ? "18" : "82"} y2={`${18 + index * 16}`} />)}
          </svg>
          <motion.div className="skills-network__core" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 160 }}>
            <span className="skills-network__core-ring" />
            <Bot size={30} />
            <span>APPLIED<br />AI</span>
          </motion.div>

          <div className="skills-network__cards">
            {skillGroups.map((group, index) => {
              const Icon = icons[index] ?? BrainCircuit;
              return (
                <motion.article key={group.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.08 }} className={`skills-node skills-node--${index + 1}`}>
                  <div className="skills-node__icon"><Icon size={18} /></div>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                  <div className="skills-node__tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
