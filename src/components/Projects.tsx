"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="03" label="projects" />

        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onOpen={setOpenProject} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={() => setShowMore((s) => !s)}
            aria-expanded={showMore}
            aria-controls="additional-projects"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-hairline-bright bg-surface/80 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-text-muted shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:text-signal hover:shadow-cyan/10"
          >
            <span className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan to-violet transition-transform duration-300 group-hover:scale-x-100" />
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${showMore ? "rotate-180" : "group-hover:translate-y-0.5"}`}
            />
            <span>{showMore ? "Hide Projects" : "Show more Projects"}</span>
            {!showMore && <span className="rounded-full bg-signal/10 px-2 py-1 text-[10px] text-signal">{otherProjects.length}</span>}
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                id="additional-projects"
                className="overflow-hidden"
              >
                <div className="grid gap-6 sm:grid-cols-2 mt-6">
                  {otherProjects.map((p, i) => (
                    <ProjectCard key={p.slug} project={p} index={i} onOpen={setOpenProject} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
