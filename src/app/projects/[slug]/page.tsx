import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, ExternalLink, Layers3 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

const caseStudySlugs = ["smartsched", "juraai-pk"];

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — Case Study`, description: project.description } : {};
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && caseStudySlugs.includes(item.slug));
  if (!project) notFound();

  const isSmartSched = project.slug === "smartsched";
  const architecture = isSmartSched
    ? "Role-based Next.js portals connect to typed API routes, Zod validation, Supabase persistence, and a constraint-aware Genetic Algorithm that scores candidate timetables before returning the strongest feasible result."
    : "A focused Next.js product surface connects legal search and AI-assisted drafting workflows with citation visibility, clear response states, and a visual language designed for trust-heavy research. ";
  const decisions = isSmartSched
    ? ["Model hard constraints explicitly instead of hiding them in UI logic.", "Keep admin mutations authenticated and validated at the API boundary.", "Bound the search process so the user receives a useful result within a predictable runtime budget."]
    : ["Keep citations visible so AI-assisted research remains traceable.", "Design upload, progress, response, and quick-view states before polishing the happy path.", "Use a calm, deliberate interface for a domain where clarity matters more than visual noise."];

  return (
    <main className="min-h-screen px-6 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-signal"><ArrowLeft size={14} /> Back to projects</Link>

        <header className="mt-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">case study · {project.year}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-text-primary sm:text-7xl">{project.title}</h1>
          <p className="mt-5 font-mono text-lg text-signal">{project.tagline}</p>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest text-void transition-transform hover:-translate-y-0.5"><ExternalLink size={14} /> Live product</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-hairline-bright px-5 py-3 font-mono text-xs uppercase tracking-widest text-text-primary transition-colors hover:border-signal hover:text-signal"><GithubIcon size={14} /> Source code</a>}
          </div>
        </header>

        <section className="case-study-grid mt-20">
          <div className="case-study-panel case-study-panel--featured"><div className="case-study-icon"><Layers3 size={20} /></div><p className="case-study-kicker">The challenge</p><h2>Build something useful under real constraints.</h2><p>{isSmartSched ? "Academic scheduling is a constraint-satisfaction problem disguised as a calendar. The system needs to respect people, rooms, availability, labs, repeat courses, and infeasible inputs without collapsing into a collection of manual exceptions." : "Legal research demands speed without losing source visibility. The product needed to feel approachable for exploration while keeping the path from question to citation-aware draft easy to follow."}</p></div>
          <div className="case-study-panel"><div className="case-study-icon"><Code2 size={20} /></div><p className="case-study-kicker">The architecture</p><h2>From first interaction to dependable output.</h2><p>{architecture}</p></div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="font-mono text-xs uppercase tracking-[0.22em] text-text-faint">Key decisions</p><h2 className="mt-4 font-display text-3xl text-text-primary">The details that made the build stronger.</h2></div>
          <div className="space-y-4">{decisions.map((decision) => <div key={decision} className="flex gap-3 rounded-xl border border-hairline bg-surface/60 p-4 text-sm leading-relaxed text-text-muted"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-signal" />{decision}</div>)}</div>
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="case-study-panel"><p className="case-study-kicker">What shipped</p><ul className="mt-5 space-y-3">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-text-muted"><span className="text-signal">→</span>{highlight}</li>)}</ul></div>
          <div className="case-study-panel"><p className="case-study-kicker">Stack</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((technology) => <span key={technology} className="rounded-full border border-hairline-bright px-3 py-1.5 font-mono text-xs text-text-muted">{technology}</span>)}</div>{project.metric && <p className="mt-8 border-l-2 border-signal pl-4 font-mono text-sm leading-relaxed text-text-primary">{project.metric}</p>}</div>
        </section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6"><Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted hover:text-signal"><ArrowLeft size={14} /> More projects</Link><Link href="/#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal hover:text-text-primary">Start a conversation <ArrowUpRight size={14} /></Link></footer>
      </div>
    </main>
  );
}
