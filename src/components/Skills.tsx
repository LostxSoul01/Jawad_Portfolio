"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="02" label="skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-lg border border-hairline bg-surface p-5 hover:border-hairline-bright transition-colors"
            >
              <p className="font-mono text-xs text-signal uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-hairline bg-void px-2.5 py-1 text-xs text-text-muted font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
