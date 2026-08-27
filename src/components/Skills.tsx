"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Code2, Database, Gauge, Layers3 } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/skills";

const icons = [Code2, Bot, Database, BrainCircuit, Layers3, Gauge];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="skills" />
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-3xl leading-tight text-text-primary sm:text-4xl">The systems I use to turn complex ideas into useful products.</p>
          <p className="mt-4 leading-relaxed text-text-muted">A connected toolkit across product interfaces, intelligent systems, data, and dependable delivery.</p>
        </div>

        <div className="skills-network">
          <svg className="skills-network__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M50 50 L18 16" />
            <path d="M50 50 L82 16" />
            <path d="M50 50 L16 53" />
            <path d="M50 50 L31 86" />
            <path d="M50 50 L69 86" />
            <path d="M50 50 L84 53" />
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
                <motion.article key={group.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.07 }} className={`skills-node skills-node--${index + 1}`}>
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
