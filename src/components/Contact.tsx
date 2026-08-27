"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name || !email || !email.includes("@") || message.length < 12) {
      setStatus("error");
      return;
    }
    setStatus("ready");
    window.location.href = `mailto:jawadaliics@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionLabel index="05" label="contact" />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-signal"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" /> Open to the right opportunity</div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">Have a hard problem? Let&apos;s build the useful version.</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-text-muted">I&apos;m open to Junior/Associate Software Engineer, AI Engineer, GenAI Engineer, Python Developer, and Full-Stack roles where thoughtful engineering meets real product outcomes.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:jawadaliics@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-void transition-colors hover:bg-signal/90"><Mail size={16} /> email me</a>
              <a href="/jawad-ali-raza-resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 font-mono text-sm text-text-primary transition-colors hover:border-hairline-bright hover:bg-surface">download résumé</a>
            </div>
            <div className="mt-8 flex gap-4 text-text-faint"><a href="https://github.com/LostxSoul01" target="_blank" rel="noopener noreferrer" aria-label="Jawad on GitHub" className="transition-colors hover:text-signal"><GithubIcon size={18} /></a><a href="https://linkedin.com/in/jawad-ali-raza1" target="_blank" rel="noopener noreferrer" aria-label="Jawad on LinkedIn" className="transition-colors hover:text-signal"><LinkedinIcon size={18} /></a></div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="contact-form__header"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Start a conversation</p><p className="mt-2 text-sm text-text-muted">Tell me what you&apos;re building, hiring for, or exploring.</p></div><Send size={18} className="text-signal" /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="contact-field">Name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
              <label className="contact-field">Email<input name="email" required type="email" placeholder="you@company.com" autoComplete="email" /></label>
            </div>
            <label className="contact-field mt-4">Message<textarea name="message" required minLength={12} rows={5} placeholder="A little context goes a long way..." /></label>
            {status === "error" && <p className="mt-3 text-xs text-rose-300">Please add your name, a valid email, and at least a sentence of context.</p>}
            {status === "ready" && <p className="mt-3 text-xs text-signal">Opening your email client…</p>}
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-signal px-4 py-3 font-mono text-xs font-medium uppercase tracking-widest text-void transition-transform hover:-translate-y-0.5">Send inquiry <ArrowUpRight size={14} /></button>
          </form>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-8 sm:flex-row"><p className="font-mono text-xs text-text-faint">built with next.js, tailwind & framer motion</p><p className="font-mono text-xs text-text-faint">© {new Date().getFullYear()} jawad ali raza</p></div>
      </div>
    </section>
  );
}
