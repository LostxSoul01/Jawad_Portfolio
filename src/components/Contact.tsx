"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="05" label="contact" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text-primary text-balance max-w-xl">
            Open to entry-level engineering roles — let&apos;s talk.
          </h2>
          <p className="mt-4 text-text-muted max-w-lg">
            Junior/Associate Software Engineer, AI Engineer, GenAI Engineer,
            Python Developer, or Full-Stack roles. Reach out directly or find
            me on GitHub and LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:jawadaliics@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-void hover:bg-signal/90 transition-colors"
            >
              <Mail size={16} />
              email me
            </a>
            <a
              href="https://github.com/LostxSoul01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 font-mono text-sm text-text-primary hover:border-hairline-bright hover:bg-surface transition-colors"
            >
              <GithubIcon size={16} />
              github
            </a>
            <a
              href="https://linkedin.com/in/jawad-ali-raza1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 font-mono text-sm text-text-primary hover:border-hairline-bright hover:bg-surface transition-colors"
            >
              <LinkedinIcon size={16} />
              linkedin
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-text-faint">
            built with next.js, tailwind & framer motion
          </p>
          <p className="font-mono text-xs text-text-faint">
            © {new Date().getFullYear()} jawad ali raza
          </p>
        </div>
      </div>
    </section>
  );
}
