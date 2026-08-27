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
            <p className="font-display text-3xl sm:text-4xl leading-tight text-text-primary text-balance">
              I turn complex ideas into products people can actually use.
              Applied AI, thoughtful interfaces, and engineering that holds up.
            </p>
            <p className="mt-6 text-text-muted leading-relaxed">
              From legal intelligence to intelligent timetables, I build across
              the full stack—from the first user flow to the final deployment.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              My standard is simple: clear architecture, honest metrics, secure
              integrations, and code another engineer can trust. BS Software
              Engineering, 3.88/4.00 CGPA, COMSATS University Islamabad.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              I bring curiosity, ownership, and a bias toward shipping. Always
              learning. Always improving the next build.
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
