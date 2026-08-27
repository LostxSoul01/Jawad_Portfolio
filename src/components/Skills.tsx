"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, Database, Eye, Layers3, Sparkles, Terminal } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/skills";

const icons = [Code2, Sparkles, Terminal, Database, Eye, Layers3];
const domainLabels = ["interfaces", "intelligence", "services", "models", "vision", "delivery"];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const active = skillGroups[activeIndex];
  const ActiveIcon = icons[activeIndex];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % skillGroups.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + skillGroups.length) % skillGroups.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const move = (direction: number) => setActiveIndex((index) => (index + direction + skillGroups.length) % skillGroups.length);

  return (
    <section id="skills" className="skills-carousel-section relative overflow-hidden px-6 py-28">
      <div className="skills-carousel-section__glow skills-carousel-section__glow--one" /><div className="skills-carousel-section__glow skills-carousel-section__glow--two" />
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="02" label="skills" />
        <div className="skills-carousel-intro"><div><p className="skills-carousel-eyebrow">/ stack in motion</p><h2>A toolkit built to <span>ship.</span></h2></div><p>Explore the technical domains behind the products. Select a card to expand the thinking, tools, and delivery patterns behind each capability.</p></div>

        <div className="skills-carousel-window">
          <div className="skills-carousel-toolbar"><span><span className="skills-carousel-live-dot" /> interactive capability index</span><span>0{activeIndex + 1} / 0{skillGroups.length}</span></div>
          <div className="skills-carousel-track" role="tablist" aria-label="Skill domains">
            {skillGroups.map((group, index) => { const Icon = icons[index]; return <motion.button key={group.label} type="button" role="tab" aria-selected={activeIndex === index} onClick={() => { setActiveIndex(index); setExpanded(true); }} className={`skills-mini-card ${activeIndex === index ? "is-active" : ""}`} whileHover={{ y: -4 }} whileTap={{ scale: .98 }}><span className="skills-mini-card__number">0{index + 1}</span><span className="skills-mini-card__icon"><Icon size={16} /></span><strong>{group.label}</strong><small>{domainLabels[index]}</small><span className="skills-mini-card__arrow"><ArrowUpRight size={13} /></span></motion.button>; })}
          </div>
          <div className="skills-carousel-controls"><div className="skills-carousel-progress"><span style={{ width: `${((activeIndex + 1) / skillGroups.length) * 100}%` }} /></div><div className="skills-carousel-arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous skill domain"><ChevronLeft size={16} /></button><button type="button" onClick={() => move(1)} aria-label="Next skill domain"><ChevronRight size={16} /></button></div></div>
        </div>

        <AnimatePresence mode="wait">
          {expanded && <motion.article key={active.label} initial={{ opacity: 0, height: 0, y: 12 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -12 }} transition={{ duration: .35 }} className="skills-expanded-card"><div className="skills-expanded-card__visual"><div className="skills-expanded-card__halo" /><span className="skills-expanded-card__icon"><ActiveIcon size={27} /></span><span className="skills-expanded-card__code">CAPABILITY / 0{activeIndex + 1}</span><strong>build<br /><span>with intent.</span></strong></div><div className="skills-expanded-card__body"><div className="skills-expanded-card__heading"><div><p>active domain / {domainLabels[activeIndex]}</p><h3>{active.label}</h3></div><button type="button" onClick={() => setExpanded(false)} aria-label="Collapse skill details">collapse <ChevronLeft size={13} /></button></div><p className="skills-expanded-card__description">{active.description}</p><div className="skills-expanded-card__divider" /><div className="skills-expanded-card__meta"><span>core technologies</span><span>applied in production-minded builds</span></div><div className="skills-expanded-card__chips">{active.items.map((item) => <span key={item}><i />{item}</span>)}</div><a href="#projects" className="skills-expanded-card__link">see this capability in action <ArrowUpRight size={14} /></a></div></motion.article>}
        </AnimatePresence>
        {!expanded && <button type="button" className="skills-reopen-button" onClick={() => setExpanded(true)}>expand selected domain <ArrowUpRight size={14} /></button>}
      </div>
    </section>
  );
}
