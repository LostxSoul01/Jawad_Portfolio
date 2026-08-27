"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CalendarDays, Check, GraduationCap, Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel";

const focusAreas = [
  "Software design & architecture",
  "Databases & data structures",
  "Artificial intelligence & machine learning",
  "Software re-engineering",
];

const extracurriculars = [
  "Local LLM deployment and inference with Ollama and Open WebUI",
  "Real-time computer vision with MediaPipe and OpenCV",
  "Marketing strategy fundamentals, market segmentation, and growth frameworks",
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="04" label="education" />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="education-card overflow-hidden rounded-3xl"
        >
          <div className="education-card__glow" />
          <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="education-card__icon"><GraduationCap size={25} /></div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Academic foundation</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-text-primary sm:text-3xl">BS Software Engineering</p>
                  </div>
                </div>
                <Sparkles className="hidden text-signal sm:block" size={19} />
              </div>

              <p className="max-w-lg text-lg leading-relaxed text-text-muted">A degree built around the discipline of making software understandable, dependable, and ready for the real world.</p>

              <div className="mt-8 flex items-center gap-3 text-sm text-text-muted">
                <CalendarDays size={16} className="text-signal" />
                <span>COMSATS University Islamabad · Attock Campus</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-text-muted">
                <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                <span>Graduated July 2026</span>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="education-stat">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint">CGPA</span>
                  <strong>3.88<span>/4.00</span></strong>
                  <div className="education-stat__bar"><span /></div>
                </div>
                <div className="education-stat">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint">Focus</span>
                  <strong>Build<span> + learn</span></strong>
                  <p>From theory to deployed systems.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-hairline pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="mb-7 flex items-center gap-3">
                <BrainCircuit size={19} className="text-signal" />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-faint">What shaped the work</p>
              </div>
              <div className="space-y-7">
                <div>
                  <p className="mb-3 text-sm font-medium text-text-primary">Core disciplines</p>
                  <div className="flex flex-wrap gap-2">{focusAreas.map((f) => <span key={f} className="education-chip"><Check size={12} />{f}</span>)}</div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium text-text-primary">Beyond the classroom</p>
                  <div className="space-y-3">{extracurriculars.map((e) => <p key={e} className="flex gap-3 text-sm leading-relaxed text-text-muted"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />{e}</p>)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="education-card__footer"><span>curiosity → craft → shipped work</span><span className="text-signal">04 / 04</span></div>
        </motion.div>
      </div>
    </section>
  );
}
