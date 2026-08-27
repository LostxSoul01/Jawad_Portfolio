import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/data/assistantContext";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: IncomingMessage[] = Array.isArray(body?.messages) ? body.messages : [];
    const mode = body?.mode === "technical" || body?.mode === "fit" || body?.mode === "recruiter" ? body.mode : "overview";

    if (messages.length === 0) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "The chat assistant isn't configured yet — GROQ_API_KEY is missing from the server environment.",
        },
        { status: 500 }
      );
    }

    // Keep the payload small and bounded regardless of what the client sends.
    const trimmed = messages.slice(-12).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content ?? "").slice(0, 1500),
    }));

    const modeInstruction = mode === "technical"
      ? "Prioritize architecture, implementation choices, APIs, models, testing, security, and deployment. Explain the why before the how."
      : mode === "fit"
        ? "Explain Jawad’s suitability for roles using concrete portfolio evidence. Be balanced: do not invent employment history or overstate experience."
        : mode === "recruiter"
          ? "Answer in a concise hiring-oriented format: best match, evidence from a named project, relevant skills, and a recommended next action. When asked for an overview, summarize role target, education, strongest capabilities, and relevant projects."
          : "Give concise, welcoming portfolio overviews and point visitors to relevant case studies or contact details.";
    const responseRules = `Answer like a polished senior engineering portfolio concierge speaking to recruiters, hiring managers, and technical collaborators. Use only the supplied portfolio context. Never invent employers, production users, metrics, responsibilities, or technologies. Avoid generic praise, filler, clichés, and vague claims such as "passionate developer" or "cutting-edge solutions." Every answer should contain concrete evidence: a named project, technology, engineering decision, constraint, result, or next action. Keep normal answers under 180 words unless the visitor asks for depth. Prefer a direct opening sentence followed by 2–4 compact labeled points. Explain technical work in plain language first, then implementation detail. Mention the project name when making a claim and recommend a relevant case study when useful. If information is not present, say so clearly and offer the closest verified detail instead of guessing. Current mode: ${mode}. ${modeInstruction}`;

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: `${getSystemPrompt()}\n\n${responseRules}` }, ...trimmed],
        temperature: 0.35,
        max_tokens: 420,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", errText);
      return NextResponse.json(
        { error: "The assistant is temporarily unavailable. Try again in a moment." },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't put together a response for that.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "Something went wrong on the server." }, { status: 500 });
  }
}
