import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/data/assistantContext";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

function groundedFallback(messages: IncomingMessage[], mode: string) {
  const question = String(messages.at(-1)?.content ?? "").toLowerCase();
  if (question.includes("smartsched") || question.includes("schedule")) return "SmartSched is Jawad’s strongest full-stack systems example. It combines role-based portals with typed API routes, Supabase data access, Zod validation, Row Level Security, and a Genetic Algorithm that accounts for teacher, room, batch, availability, lab, and repeat-course constraints. The important engineering choice was making feasibility explicit and testing edge cases instead of treating the generated timetable as a black box. Open the SmartSched case study for the architecture breakdown.";
  if (question.includes("e-commerce") || question.includes("ecommerce") || question.includes("commerce")) return "The Intelligent AI E-Commerce Platform demonstrates applied AI inside a product workflow rather than as an isolated model demo. Its value is in connecting the user-facing commerce experience with AI-assisted discovery, review intelligence, structured responses, and clear interaction states. The relevant case study is the best place to inspect the architecture and product decisions.";
  if (question.includes("resumelens") || question.includes("resume")) return "ResumeLens focuses on turning résumé analysis into actionable feedback. The architecture keeps PDF parsing client-side where possible, protects server-side secrets, and moves from uploaded document to structured analysis rather than returning an unexplained score. Its deployment work also covers Docker, GitHub Actions, GHCR, and Railway.";
  if (question.includes("skill") || question.includes("stack") || question.includes("technology")) return "Jawad’s strongest stack spans TypeScript and React/Next.js for product interfaces; Python, FastAPI, and Node.js for services; Supabase and Firebase for data; scikit-learn, Transformers, Groq, vLLM, OpenCV, and MediaPipe for AI/ML; and Docker, GitHub Actions, Vercel, Netlify, Streamlit, and Railway for delivery.";
  if (question.includes("hire") || question.includes("role") || question.includes("fit") || mode === "fit" || mode === "recruiter") return "Jawad is targeting Junior or Associate Software Engineer, AI Engineer, GenAI Engineer, Python Developer, and Full-Stack Developer roles. The strongest evidence is a portfolio spanning applied AI, typed full-stack systems, ML evaluation, computer vision, validation, and deployment. Start with SmartSched for backend depth or the AI E-Commerce Platform for applied-AI product work.";
  if (question.includes("contact") || question.includes("email") || question.includes("reach")) return "The best way to reach Jawad is jawadaliics@gmail.com. He is open to role opportunities, freelance projects, collaborations, and technical conversations, and usually responds within 1–2 business days. The contact section can format the inquiry by intent.";
  return "The portfolio documents Jawad’s work across applied AI, full-stack systems, machine-learning evaluation, and computer vision. I can give a more useful answer if you name a project, stack, role, or engineering decision—for example, SmartSched constraints, ResumeLens privacy, or AI E-Commerce architecture.";
}

export async function POST(req: NextRequest) {
  let messages: IncomingMessage[] = [];
  let mode = "overview";
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
    mode = body?.mode === "technical" || body?.mode === "fit" || body?.mode === "recruiter" ? body.mode : "overview";

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
        model: "openai/gpt-oss-20b",
        messages: [{ role: "system", content: `${getSystemPrompt()}\n\n${responseRules}` }, ...trimmed],
        temperature: 0.35,
        max_tokens: 420,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", errText);
      return NextResponse.json({ reply: groundedFallback(messages, mode), fallback: true });
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't put together a response for that.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ reply: groundedFallback(messages, mode), fallback: true });
  }
}
