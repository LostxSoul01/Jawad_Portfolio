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

        <div className="mt-10">
          <button
            onClick={() => setShowMore((s) => !s)}
            className="inline-flex items-center gap-2 font-mono text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${showMore ? "rotate-180" : ""}`}
            />
            {showMore ? "hide" : "show"} {otherProjects.length} more projects
          </button>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
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
