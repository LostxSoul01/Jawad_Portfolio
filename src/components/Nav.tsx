"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur-md border-b border-hairline" : ""
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-text-primary hover:text-signal transition-colors"
        >
          jawad<span className="text-signal">.</span>dev
        </a>

        <ul className="hidden sm:flex items-center gap-8 font-mono text-sm text-text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 font-mono text-xs text-text-faint">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
          </span>
          <span className="hidden sm:inline">open to work</span>
        </div>
      </nav>
    </header>
  );
}
