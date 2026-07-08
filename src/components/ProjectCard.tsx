"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "@/data/projects";

const statusMeta = {
  live: { label: "live", dotClass: "bg-signal" },
  code: { label: "code", dotClass: "bg-text-faint" },
  private: { label: "private", dotClass: "bg-text-faint" },
};

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const meta = statusMeta[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      className="group flex flex-col rounded-lg border border-hairline bg-surface p-6 hover:border-hairline-bright hover:bg-surface-hover transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`} />
          <span className="font-mono text-[11px] text-text-faint uppercase tracking-wider">
            {meta.label} · {project.year}
          </span>
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold text-text-primary mt-3">
        {project.title}
      </h3>
      <p className="font-mono text-xs text-signal mt-1">{project.tagline}</p>

      <p className="text-text-muted text-sm leading-relaxed mt-3 flex-1">
        {project.description}
      </p>

      {project.metric && (
        <p className="font-mono text-xs text-text-primary mt-4 border-l-2 border-signal pl-3">
          {project.metric}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-hairline px-2 py-0.5 text-[11px] font-mono text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div
          className="flex items-center gap-4 mt-5 pt-5 border-t border-hairline"
          onClick={(e) => e.stopPropagation()}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary hover:text-signal transition-colors"
            >
              <ExternalLink size={13} />
              live demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-text-primary hover:text-signal transition-colors"
            >
              <GithubIcon size={13} />
              source
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && project.status === "private" && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-faint">
              <Lock size={13} />
              not public
            </span>
          )}
        </div>
      )}

      <span className="mt-4 font-mono text-[11px] text-text-faint group-hover:text-signal transition-colors">
        view details →
      </span>
    </motion.article>
  );
}
