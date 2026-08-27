"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, otherProjects, type Project } from "@/data/projects";

const projectOrder = ["ai-ecommerce", "smartsched", "resumelens", "juraai-pk"];
const orderedFeaturedProjects = projectOrder.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is NonNullable<typeof project> => Boolean(project));
const filters = ["All", "AI / GenAI", "Full-Stack", "Machine Learning", "Computer Vision", "Frontend"] as const;
type ProjectFilter = (typeof filters)[number];

const projectCategories: Record<Exclude<ProjectFilter, "All">, string[]> = {
  "AI / GenAI": ["ai-ecommerce", "juraai-pk", "resumelens", "fake-news-detector", "image-captioning"],
  "Full-Stack": ["smartsched", "ai-ecommerce", "patient-management", "employee-management", "food-ordering"],
  "Machine Learning": ["ai-ecommerce", "fake-news-detector", "image-captioning"],
  "Computer Vision": ["image-captioning", "ar-gesture-filter"],
  Frontend: ["juraai-pk", "skyline", "automotive-redesign", "weather-mobile"],
};

function matchesFilter(project: Project, filter: ProjectFilter) {
  return filter === "All" || projectCategories[filter].includes(project.slug);
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const filteredProjects = useMemo(() => filter === "All" ? (showMore ? [...orderedFeaturedProjects, ...otherProjects] : orderedFeaturedProjects) : projects.filter((project) => matchesFilter(project, filter)), [filter, showMore]);
  const isFiltered = filter !== "All";

  return <section id="projects" className="projects-showcase px-6 py-28"><div className="mx-auto max-w-5xl"><SectionLabel index="03" label="projects" /><div className="projects-intro"><div><p className="projects-eyebrow">/ selected work</p><h2>Useful products, <span>carefully engineered.</span></h2></div><p>Explore the portfolio by the kind of problem being solved—not just the technology used to solve it.</p></div>
    <div className="project-filter-bar" role="tablist" aria-label="Filter projects by capability"><span className="project-filter-label"><SlidersHorizontal size={13} /> filter by</span>{filters.map((option) => <button key={option} type="button" role="tab" aria-selected={filter === option} onClick={() => { setFilter(option); if (option !== "All") setShowMore(false); }} className={filter === option ? "is-active" : ""}>{filter === option && <Check size={12} />}{option}</button>)}</div>
    <motion.div layout className="grid gap-6 sm:grid-cols-2">{filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} onOpen={setOpenProject} />)}</motion.div>
    {!isFiltered && <div className="mt-10 flex flex-col items-center"><button onClick={() => setShowMore((s) => !s)} aria-expanded={showMore} aria-controls="additional-projects" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-hairline-bright bg-surface/80 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-text-muted shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:text-signal"><span className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan to-violet transition-transform duration-300 group-hover:scale-x-100" /><ChevronDown size={16} className={`transition-transform duration-300 ${showMore ? "rotate-180" : "group-hover:translate-y-0.5"}`} /><span>{showMore ? "Hide Projects" : "Show more Projects"}</span>{!showMore && <span className="rounded-full bg-signal/10 px-2 py-1 text-[10px] text-signal">{otherProjects.length}</span>}</button></div>}
    {isFiltered && filteredProjects.length === 0 && <p className="project-filter-empty">No projects match this category yet.</p>}
  </div><ProjectModal project={openProject} onClose={() => setOpenProject(null)} /></section>;
}
