"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, Send, X } from "lucide-react";
import { faqs } from "@/data/faqs";

type ChatMessage = { role: "user" | "assistant"; content: string };
type AssistantMode = "overview" | "technical" | "fit";

const modeLabels: Record<AssistantMode, string> = { overview: "overview", technical: "technical", fit: "role fit" };
const modeHints: Record<AssistantMode, string> = { overview: "Get a quick read on Jawad’s background and strongest work.", technical: "Explore architecture, models, APIs, testing, and deployment.", fit: "Understand the roles, strengths, and projects that match best." };
const starterPrompts: Record<AssistantMode, string[]> = {
  overview: ["What has Jawad built?", "What are his strongest skills?"],
  technical: ["How does SmartSched work?", "Explain the AI E-Commerce architecture"],
  fit: ["Which roles is Jawad targeting?", "Why could he fit an AI team?"],
};

const WELCOME: ChatMessage = {
  role: "assistant",
  content: "I’m Jawad’s portfolio assistant. I can help you review his engineering work, technical strengths, education, and role fit — with answers grounded in the projects shown here.",
};

function RobotMascot({ isOpen, compact = false }: { isOpen: boolean; compact?: boolean }) {
  return <span className={`relative block ${compact ? "h-8 w-8" : "h-12 w-12"}`} aria-hidden="true"><Image src="/robot-mascot-final.png" alt="" fill sizes={compact ? "32px" : "56px"} className={`robot-float object-contain ${isOpen ? "[animation-play-state:paused]" : ""}`} /></span>;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [askedFaqs, setAskedFaqs] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<AssistantMode>("overview");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [messages, loading]);

  function askFaq(question: string, answer: string) {
    setAskedFaqs((s) => new Set(s).add(question));
    setMessages((m) => [...m, { role: "user", content: question }, { role: "assistant", content: answer }]);
  }

  async function sendMessage(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next, mode }) });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: res.ok ? data.reply : data.error || "Something went wrong — try again in a moment." }]);
    } catch { setMessages((m) => [...m, { role: "assistant", content: "I couldn’t reach the assistant right now. Please try again or contact Jawad directly at jawadaliics@gmail.com." }]); }
    finally { setLoading(false); }
  }

  const remainingFaqs = faqs.filter((f) => !askedFaqs.has(f.question));
  const isFresh = messages.length === 1;

  return <>
    <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: .8, type: "spring", stiffness: 260, damping: 20 }} onClick={() => setIsOpen((v) => !v)} aria-label={isOpen ? "Close Jawad’s portfolio assistant" : "Ask Jawad’s portfolio robot"} aria-expanded={isOpen} className="group fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-[22px] bg-transparent text-void transition-transform hover:-translate-y-1"><RobotMascot isOpen={isOpen} />{!isOpen && <span className="pointer-events-none absolute -top-8 right-0 whitespace-nowrap rounded-full border border-hairline bg-surface px-2.5 py-1 font-mono text-[10px] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">ask my robot</span>}</motion.button>

    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .97 }} transition={{ duration: .2, ease: "easeOut" }} role="dialog" aria-label="Jawad’s portfolio assistant" className="chat-panel glass-panel fixed bottom-20 right-4 z-40 flex h-[min(580px,calc(100vh-6rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
      <div className="chat-panel__header flex items-center gap-3 border-b border-hairline px-4 py-3"><div className="flex h-10 w-10 items-center justify-center"><RobotMascot isOpen compact /></div><div className="min-w-0 flex-1"><p className="font-mono text-sm text-text-primary">Jawad’s portfolio robot</p><p className="text-xs text-text-faint">grounded project guide · online</p></div><span className="chat-panel__online-dot" /><button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant" className="chat-panel__close"><X size={15} /></button></div>
      <div className="chat-mode-tabs flex gap-1.5 border-b border-hairline px-4 py-2" role="tablist" aria-label="Assistant response mode">{(Object.keys(modeLabels) as AssistantMode[]).map((option) => <button key={option} type="button" role="tab" aria-selected={mode === option} onClick={() => setMode(option)} className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${mode === option ? "bg-signal/15 text-signal" : "text-text-faint hover:text-text-muted"}`}>{modeLabels[option]}</button>)}</div>
      <div className="chat-mode-hint">{modeHints[mode]}</div>
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">{messages.map((m, i) => <div key={i} className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "ml-auto rounded-br-md bg-signal text-void" : "mr-auto rounded-bl-md border border-hairline bg-void/70 text-text-muted"}`}><span className="whitespace-pre-wrap">{m.content}</span></div>)}
        {loading && <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-md border border-hairline bg-void px-3.5 py-2.5 text-text-faint"><Loader2 size={14} className="animate-spin" /><span className="font-mono text-xs">reviewing the portfolio...</span></div>}
        {!loading && isFresh && <div className="chat-starters">{starterPrompts[mode].map((prompt) => <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>{prompt}<ArrowUpRight size={12} /></button>)}</div>}
        {!loading && remainingFaqs.length > 0 && <div className="flex flex-wrap gap-1.5 pt-1">{remainingFaqs.slice(0, 3).map((f) => <button key={f.question} onClick={() => askFaq(f.question, f.answer)} className="rounded-full border border-hairline px-3 py-1.5 text-left text-xs text-text-muted transition-colors hover:border-signal hover:text-signal">{f.question}</button>)}</div>}
        {!loading && isFresh && <div className="chat-evidence-links"><span>explore evidence</span><Link href="/projects/ai-ecommerce">AI E-Commerce <ArrowUpRight size={11} /></Link><Link href="/projects/smartsched">SmartSched <ArrowUpRight size={11} /></Link><Link href="/projects/resumelens">ResumeLens <ArrowUpRight size={11} /></Link></div>}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2 border-t border-hairline p-3"><input value={input} onChange={(e) => setInput(e.target.value)} aria-label="Ask the portfolio robot a question" placeholder="Ask about Jawad’s work..." className="flex-1 rounded-xl border border-hairline bg-void/70 px-3 py-2.5 text-sm text-text-primary placeholder:text-text-faint outline-none transition-colors focus:border-signal" /><button type="submit" disabled={!input.trim() || loading} aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal text-void transition-all hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-40"><Send size={15} /></button></form>
    </motion.div>}</AnimatePresence>
  </>;
}
