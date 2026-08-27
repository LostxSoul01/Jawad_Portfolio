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
    const mode = body?.mode === "technical" || body?.mode === "fit" ? body.mode : "overview";

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

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "system", content: `${getSystemPrompt()}\n\nConversation mode: ${mode}. ${mode === "technical" ? "Prioritize architecture, implementation choices, APIs, models, testing, and deployment details." : mode === "fit" ? "Explain Jawad’s suitability for roles, collaboration value, strengths, and relevant projects in recruiter-friendly language." : "Give concise, welcoming portfolio overviews and point visitors to relevant projects or contact details."}` }, ...trimmed],
        temperature: 0.4,
        max_tokens: 400,
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
