"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Sparkles } from "lucide-react";
import { faqs } from "@/data/faqs";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I’m Jawad’s portfolio robot. Ask me about his projects, technical strengths, education, career goals, or how he approaches engineering work.",
};

function RobotMascot({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block h-14 w-16" aria-hidden="true">
      <span className="absolute bottom-0 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full bg-black/20 blur-sm" />
      <span className="absolute left-3 top-1 h-9 w-10 rounded-[13px] border-2 border-void/80 bg-gradient-to-br from-white to-cyan shadow-[0_0_18px_rgba(103,232,249,0.45)]">
        <span className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet ring-2 ring-void/50" />
        <span className="absolute left-2.5 top-3 h-2 w-2 rounded-full bg-void" />
        <span className="absolute right-2.5 top-3 h-2 w-2 rounded-full bg-void" />
        <span className="absolute bottom-2 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-violet/70" />
      </span>
      <span className="absolute bottom-0 left-5 h-3 w-6 rounded-b-md bg-violet" />
      <span className={`robot-wave absolute right-0 top-6 h-2 w-5 origin-left rounded-full bg-signal ${isOpen ? "[animation-play-state:paused]" : ""}`} />
      <span className="absolute bottom-0 left-2 h-2 w-2 rounded-full bg-cyan" />
      <span className="absolute bottom-0 right-3 h-2 w-2 rounded-full bg-cyan" />
    </span>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [askedFaqs, setAskedFaqs] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  function askFaq(question: string, answer: string) {
    setAskedFaqs((s) => new Set(s).add(question));
    setMessages((m) => [...m, { role: "user", content: question }, { role: "assistant", content: answer }]);
  }

  async function sendMessage(overrideText?: string) {
    const text = (overrideText ?? input).trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply: string = res.ok ? data.reply : data.error || "Something went wrong — try again in a moment.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "I couldn’t reach the assistant right now. Please try again or contact Jawad directly at jawadaliics@gmail.com." }]);
    } finally {
      setLoading(false);
    }
  }

  const remainingFaqs = faqs.filter((f) => !askedFaqs.has(f.question));

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close Jawad’s portfolio assistant" : "Ask Jawad’s portfolio robot"}
        aria-expanded={isOpen}
        className="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/20 bg-gradient-to-br from-signal to-cyan text-void shadow-xl shadow-cyan/10 transition-transform hover:-translate-y-1"
      >
        <RobotMascot isOpen={isOpen} />
        {!isOpen && <span className="pointer-events-none absolute -top-8 right-0 whitespace-nowrap rounded-full border border-hairline bg-surface px-2.5 py-1 font-mono text-[10px] text-text-muted opacity-0 transition-opacity group-hover:opacity-100">ask my robot</span>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="Jawad’s portfolio assistant"
            className="glass-panel fixed bottom-28 right-6 z-40 flex h-[540px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-signal to-cyan"><RobotMascot isOpen /></div>
              <div className="min-w-0 flex-1"><p className="font-mono text-sm text-text-primary">Jawad’s portfolio robot</p><p className="text-xs text-text-faint">projects · skills · background</p></div>
              <Sparkles size={15} className="text-signal" />
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "ml-auto rounded-br-md bg-signal text-void" : "mr-auto rounded-bl-md border border-hairline bg-void/70 text-text-muted"}`}>
                  {m.content}
                </div>
              ))}
              {loading && <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-md border border-hairline bg-void px-3.5 py-2.5 text-text-faint"><Loader2 size={14} className="animate-spin" /><span className="font-mono text-xs">researching Jawad’s work...</span></div>}
              {!loading && remainingFaqs.length > 0 && <div className="flex flex-wrap gap-1.5 pt-1">{remainingFaqs.map((f) => <button key={f.question} onClick={() => askFaq(f.question, f.answer)} className="rounded-full border border-hairline px-3 py-1.5 text-left text-xs text-text-muted transition-colors hover:border-signal hover:text-signal">{f.question}</button>)}</div>}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2 border-t border-hairline p-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} aria-label="Ask the portfolio robot a question" placeholder="Ask about Jawad’s work..." className="flex-1 rounded-xl border border-hairline bg-void/70 px-3 py-2.5 text-sm text-text-primary placeholder:text-text-faint outline-none transition-colors focus:border-signal" />
              <button type="submit" disabled={!input.trim() || loading} aria-label="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal text-void transition-all hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-40"><Send size={15} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
