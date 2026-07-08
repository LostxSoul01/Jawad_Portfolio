"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { faqs } from "@/data/faqs";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hey! I can answer questions about Jawad's projects, skills, and background. Tap a question below or type your own.",
};

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
    setMessages((m) => [
      ...m,
      { role: "user", content: question },
      { role: "assistant", content: answer },
    ]);
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
      const reply: string = res.ok
        ? data.reply
        : data.error || "Something went wrong — try again in a moment.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Couldn't reach the server — check your connection and try again." },
      ]);
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
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-void shadow-lg shadow-black/40 hover:bg-signal/90 transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 flex h-[520px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-hairline-bright bg-surface shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
              </span>
              <p className="font-mono text-sm text-text-primary">ask about jawad</p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto bg-signal text-void"
                      : "mr-auto bg-void border border-hairline text-text-muted"
                  }`}
                >
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className="mr-auto flex items-center gap-2 rounded-lg border border-hairline bg-void px-3.5 py-2.5 text-text-faint">
                  <Loader2 size={14} className="animate-spin" />
                  <span className="font-mono text-xs">thinking...</span>
                </div>
              )}

              {!loading && remainingFaqs.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {remainingFaqs.map((f) => (
                    <button
                      key={f.question}
                      onClick={() => askFaq(f.question, f.answer)}
                      className="rounded-full border border-hairline px-3 py-1.5 text-xs text-text-muted hover:border-signal hover:text-signal transition-colors"
                    >
                      {f.question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center gap-2 border-t border-hairline p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a project, skill, anything..."
                className="flex-1 rounded-md border border-hairline bg-void px-3 py-2 text-sm text-text-primary placeholder:text-text-faint outline-none focus:border-signal transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-signal text-void disabled:opacity-40 disabled:cursor-not-allowed hover:bg-signal/90 transition-colors"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
