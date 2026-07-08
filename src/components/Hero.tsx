"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { projects } from "@/data/projects";

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Full-Stack Developer",
  "GenAI Engineer",
];

function useTypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setPhase("typing");
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  return text;
}

export default function Hero() {
  const typed = useTypedRole();
  const liveCount = projects.filter((p) => p.status === "live").length;

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-16"
    >
      <div className="grid-texture absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-signal mb-5"
        >
          ~/jawad-ali-raza
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-text-primary"
        >
          Jawad Ali Raza
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 h-10 sm:h-12"
        >
          <span className="font-mono text-xl sm:text-2xl text-text-muted">
            {typed}
            <span className="inline-block w-[2px] h-[1em] bg-signal ml-1 align-middle animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-text-muted text-base sm:text-lg leading-relaxed"
        >
          I build full-stack applications with real LLM integrations underneath —
          from resume analysis tools to AI-powered e-commerce. BS Software
          Engineering graduate, COMSATS University Islamabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-void hover:bg-signal/90 transition-colors"
          >
            view projects
          </a>
          <a
            href="https://github.com/LostxSoul01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 font-mono text-sm text-text-primary hover:border-hairline-bright hover:bg-surface transition-colors"
          >
            <GithubIcon size={16} />
            github
          </a>
          <a
            href="https://linkedin.com/in/jawad-ali-raza1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 font-mono text-sm text-text-primary hover:border-hairline-bright hover:bg-surface transition-colors"
          >
            <LinkedinIcon size={16} />
            linkedin
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 font-mono text-xs text-text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
          </span>
          {liveCount} projects deployed and running in production
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-faint hover:text-text-muted transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
