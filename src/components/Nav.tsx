"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

function JDMark() {
  return <span className="jd-mark" aria-hidden="true"><svg viewBox="0 0 44 44" role="presentation"><defs><linearGradient id="jd-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#67e8f9" /><stop offset="1" stopColor="#a78bfa" /></linearGradient></defs><rect x="1" y="1" width="42" height="42" rx="13" fill="rgba(103,232,249,0.08)" stroke="url(#jd-gradient)" /><path d="M13 13h8v11.5c0 3.7-1.7 5.5-5 5.5-1.5 0-2.7-.4-3.8-1.2" fill="none" stroke="url(#jd-gradient)" strokeWidth="2.4" strokeLinecap="round" /><path d="M25 13h4.2c4.1 0 6.8 2.8 6.8 7.5S33.3 28 29.2 28H25V13Z" fill="none" stroke="#f8fafc" strokeWidth="2.1" strokeLinejoin="round" /><circle cx="8" cy="8" r="1.5" fill="#67e8f9" /></svg></span>;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  useEffect(() => { document.body.classList.toggle("recruiter-mode", recruiterMode); return () => document.body.classList.remove("recruiter-mode"); }, [recruiterMode]);

  const toggleRecruiterMode = () => { setRecruiterMode((mode) => !mode); setMenuOpen(false); if (!recruiterMode) window.setTimeout(() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }), 80); };

  return <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}><nav className="site-nav" aria-label="Primary navigation"><a href="#top" className="brand-mark" onClick={() => setMenuOpen(false)} aria-label="Jawad Ali Raza home"><JDMark /><span className="brand-copy"><strong>Jawad Ali Raza</strong><small>software engineer · applied AI</small></span></a><div className="desktop-nav">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}<button type="button" className={`recruiter-toggle ${recruiterMode ? "is-active" : ""}`} onClick={toggleRecruiterMode} aria-pressed={recruiterMode}>{recruiterMode ? "full view" : "recruiter view"}</button><a href="#contact" className="nav-contact">Let&apos;s connect <ArrowUpRight size={14} /></a></div><div className="nav-status"><span className="nav-status__dot" /><span>open to work</span></div><button type="button" className="mobile-menu-button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></nav>{menuOpen && <div className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}<button type="button" className={`recruiter-toggle ${recruiterMode ? "is-active" : ""}`} onClick={toggleRecruiterMode} aria-pressed={recruiterMode}>{recruiterMode ? "show full portfolio" : "recruiter view"}</button><a href="#contact" onClick={() => setMenuOpen(false)} className="nav-contact">Let&apos;s connect <ArrowUpRight size={14} /></a><span className="mobile-nav__status"><span className="nav-status__dot" /> open to work</span></div>}</header>;
}
