import { ArrowUpRight, BookOpen, Cpu, ShieldCheck } from "lucide-react";
import SectionLabel from "./SectionLabel";

const notes = [
  { icon: ShieldCheck, label: "evaluation", title: "A simple model can be the right model", text: "The Fake News Detector uses TF-IDF and Logistic Regression, with evaluation shaped around leakage control and a clear test boundary—not complexity for its own sake." },
  { icon: Cpu, label: "ai systems", title: "AI should create leverage, not hide the engineering", text: "Useful AI products connect models to clear workflows, structured outputs, fallbacks, and user-visible evidence so people can trust the result." },
  { icon: BookOpen, label: "performance", title: "Real-time vision starts with constraints", text: "The AR gesture work keeps interaction smooth through cached assets and lighter detection frames, proving that practical optimization often beats brute-force hardware." },
];

export default function TechnicalNotes() {
  return <section id="notes" className="technical-notes px-6 py-24"><div className="mx-auto max-w-5xl"><SectionLabel index="07" label="technical notes" /><div className="technical-notes__intro"><div><p className="technical-notes__eyebrow">/ engineering perspective</p><h2>How I think about <span>the build.</span></h2></div><p>Short notes from the decisions, constraints, and trade-offs behind the work.</p></div><div className="technical-notes__grid">{notes.map(({ icon: Icon, label, title, text }) => <article className="technical-note" key={title}><div className="technical-note__top"><span><Icon size={15} /> {label}</span><ArrowUpRight size={14} /></div><h3>{title}</h3><p>{text}</p><span className="technical-note__read">field note · 01 min read</span></article>)}</div></div></section>;
}
