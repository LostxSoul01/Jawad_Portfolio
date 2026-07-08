"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock, X } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "@/data/projects";

const statusMeta = {
  live: { label: "live", dotClass: "bg-signal" },
  code: { label: "code", dotClass: "bg-text-faint" },
  private: { label: "private", dotClass: "bg-text-faint" },
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl my-8 rounded-lg border border-hairline-bright bg-surface p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-5 right-5 text-text-faint hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${statusMeta[project.status].dotClass}`}
              />
              <span className="font-mono text-[11px] text-text-faint uppercase tracking-wider">
                {statusMeta[project.status].label} · {project.year}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary mt-3 pr-8">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-signal mt-1.5">{project.tagline}</p>

            <p className="text-text-muted leading-relaxed mt-5">{project.description}</p>

            {project.metric && (
              <p className="font-mono text-sm text-text-primary mt-5 border-l-2 border-signal pl-3">
                {project.metric}
              </p>
            )}

            {project.highlights.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-3">
                  details
                </p>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                      <span className="text-signal font-mono mt-0.5 shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mt-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-hairline px-2.5 py-1 text-xs font-mono text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-7 pt-6 border-t border-hairline">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:text-signal transition-colors"
                >
                  <ExternalLink size={14} />
                  live demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:text-signal transition-colors"
                >
                  <GithubIcon size={14} />
                  source
                </a>
              )}
              {!project.liveUrl && !project.githubUrl && (
                <span className="inline-flex items-center gap-2 font-mono text-sm text-text-faint">
                  <Lock size={14} />
                  not public yet
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
