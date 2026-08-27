"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Check, Code2, Database, Eye, GitBranch, Layers3 } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "@/data/skills";

const groupIcons = [Code2, BrainCircuit, Database, Layers3, Eye, GitBranch];
const groupSignals = ["01", "02", "03", "04", "05", "06"];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillGroups[activeIndex];
  const ActiveIcon = groupIcons[activeIndex];

  return (
    <section id="skills" className="skills-showcase relative overflow-hidden px-6 py-28">
      <div className="skills-showcase__glow skills-showcase__glow--one" /><div className="skills-showcase__glow skills-showcase__glow--two" />
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="skills" />
        <div className="skills-intro-grid">
          <div><p className="skills-eyebrow">/ engineering toolkit</p><h2>From <span>idea</span> to a dependable product.</h2></div>
          <p className="skills-intro-copy">A focused stack across interfaces, intelligent systems, data, and delivery. I choose tools for the problem—not the trend—and keep the path from prototype to production visible.</p>
        </div>

        <div className="skills-dashboard">
          <div className="skills-dashboard__visual">
            <div className="skills-radar skills-radar--outer" /><div className="skills-radar skills-radar--inner" />
            <div className="skills-dashboard__line skills-dashboard__line--one" /><div className="skills-dashboard__line skills-dashboard__line--two" />
            <motion.div key={active.label} initial={{ scale: .86, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="skills-core"><ActiveIcon size={28} /><strong>build<br /><span>systems</span></strong><small>active domain / {groupSignals[activeIndex]}</small></motion.div>
            {skillGroups.map((group, index) => { const Icon = groupIcons[index]; return <button type="button" key={group.label} onClick={() => setActiveIndex(index)} aria-label={`Show ${group.label} skills`} aria-pressed={activeIndex === index} className={`skills-node skills-node--${index + 1} ${activeIndex === index ? "is-active" : ""}`}><Icon size={15} /><span>{group.label}</span></button>; })}
          </div>

          <div className="skills-detail">
            <div className="skills-detail__head"><div><p className="skills-detail__index">CAPABILITY / {groupSignals[activeIndex]}</p><AnimatePresence mode="wait"><motion.h3 key={active.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{active.label}</motion.h3></AnimatePresence></div><span className="skills-detail__status"><Check size={13} /> applied</span></div>
            <AnimatePresence mode="wait"><motion.p key={`${active.label}-description`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="skills-detail__description">{active.description}</motion.p></AnimatePresence>
            <div className="skills-detail__signal"><span>working knowledge</span><div><i /><i /><i /><i /><i /></div><b>production-minded</b></div>
            <div className="skills-detail__items">{active.items.map((item, index) => <motion.span key={item} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }}><span className="skills-item__dot" />{item}</motion.span>)}</div>
            <a href="#projects" className="skills-detail__link">see these skills in action <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="skills-marquee" aria-label="Technical skill summary"><div className="skills-marquee__track">{[...skillGroups.flatMap((group) => group.items), ...skillGroups.flatMap((group) => group.items)].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}</div></div>
      </div>
    </section>
  );
}
