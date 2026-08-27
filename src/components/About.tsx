"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const facts = [
  { label: "Based in", value: "Punjab, Pakistan" },
  { label: "Degree", value: "BS Software Engineering" },
  { label: "University", value: "COMSATS Islamabad, Attock" },
  { label: "CGPA", value: "3.88 / 4.00" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="01" label="about" />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-2xl sm:text-3xl leading-snug text-text-primary text-balance">
              I build software at the intersection of applied AI, full-stack
              engineering, and thoughtful product design. My focus is turning
              complex technical ideas into dependable tools that people can
              understand and use.
            </p>
            <p className="mt-6 text-text-muted leading-relaxed">
              My recent work includes AI-assisted resume analysis, a legal
              intelligence product for Pakistani case law, a constraint-aware
              academic timetable generator, and machine-learning classifiers
              deployed as interactive products. Across these projects, I work
              across the full path from interface and API design to model
              integration, validation, deployment, and iteration.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              I care about the gap between a project that demos well and one
              that holds up under real use: clear architecture, honest metrics,
              secure integrations, accessible interfaces, and code that another
              engineer can maintain. I graduated with a 3.88 CGPA in Software
              Engineering from COMSATS University Islamabad, and I&apos;m looking
              for an engineering team where I can contribute, learn quickly,
              and ship meaningful work.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Outside engineering, I also run a multi-platform content
              project. That experience has strengthened the same skills I bring
              to product work: consistency, audience awareness, experimentation,
              and ownership from idea to delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-lg border border-hairline bg-surface p-6 h-fit"
          >
            <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-4">
              quick facts
            </p>
            <dl className="space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-0.5">
                  <dt className="font-mono text-xs text-text-faint">{f.label}</dt>
                  <dd className="text-text-primary text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
