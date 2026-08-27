"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="02" label="skills" />
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-3xl leading-tight text-text-primary sm:text-4xl">
            The systems I use to turn complex ideas into useful products.
          </p>
          <p className="mt-4 leading-relaxed text-text-muted">
            A practical toolkit across product interfaces, intelligent systems, data, and dependable delivery.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-hairline-bright"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-signal">{group.label}</p>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-hairline bg-void/60 px-2.5 py-1 font-mono text-xs text-text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
