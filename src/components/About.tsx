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
              I like building things where an LLM actually has to work for its
              keep — not a chatbot bolted onto a landing page, but a feature
              that does something a rule-based system couldn&apos;t.
            </p>
            <p className="mt-6 text-text-muted leading-relaxed">
              That&apos;s meant shipping a resume analyzer that scores real CVs
              section by section and rewrites weak bullet points on the spot,
              a fake-review classifier running alongside a full e-commerce
              assistant, and a text classifier tuned past 98% accuracy on
              nearly 45,000 real news articles. Three of those are live right
              now — not screenshots, not localhost demos, actual URLs
              someone can open and use today.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              What I care about is the gap between a project that demos well
              in a five-minute walkthrough and one that actually holds up
              under use — verified metrics instead of rounded-up numbers,
              real deployments instead of "should work," code someone else
              can open and understand. I finished my degree with a 3.88 CGPA
              carrying that habit the whole way through, and I&apos;m
              looking for a team where it keeps paying off.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Outside of engineering, I run a content project reaching people
              across eight platforms with halal, value-driven media — same
              instinct for building something real end-to-end, just a
              different medium.
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
