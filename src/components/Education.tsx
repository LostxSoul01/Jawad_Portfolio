"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const focusAreas = [
  "Software design & architecture",
  "Databases & data structures",
  "Artificial intelligence & machine learning",
  "Software re-engineering",
];

const extracurriculars = [
  "Local LLM deployment and inference (Ollama, Open WebUI) with models including Phi-4-mini and Qwen3.5",
  "Real-time computer vision with MediaPipe and OpenCV",
  "Marketing strategy fundamentals — BCG Matrix, Ansoff Matrix, market segmentation",
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="04" label="education" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-hairline bg-surface p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-display text-xl font-semibold text-text-primary">
                BS Software Engineering
              </p>
              <p className="text-text-muted text-sm mt-1">
                COMSATS University Islamabad, Attock Campus
              </p>
            </div>
            <div className="flex gap-8 font-mono text-sm">
              <div>
                <p className="text-text-faint text-xs mb-1">CGPA</p>
                <p className="text-signal">3.88 / 4.00</p>
              </div>
              <div>
                <p className="text-text-faint text-xs mb-1">Graduated</p>
                <p className="text-text-primary">July 2026</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 mt-8 pt-8 border-t border-hairline">
            <div>
              <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-3">
                Focus areas
              </p>
              <ul className="space-y-2">
                {focusAreas.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-text-muted">
                    <span className="text-signal font-mono">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-3">
                Beyond the classroom
              </p>
              <ul className="space-y-2">
                {extracurriculars.map((e) => (
                  <li key={e} className="flex gap-2.5 text-sm text-text-muted leading-relaxed">
                    <span className="text-signal font-mono shrink-0">›</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
