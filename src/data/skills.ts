export type SkillGroup = {
  label: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Web Development",
    description: "Responsive interfaces and product surfaces built for clarity, speed, and scale.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "AI Applications",
    description: "Useful AI experiences that connect models to real user workflows.",
    items: ["LLM APIs", "Groq", "Prompt Design", "RAG"],
  },
  {
    label: "Backend & APIs",
    description: "Typed services, integrations, and secure data flows that are built to last.",
    items: ["Node.js", "FastAPI", "REST APIs", "Supabase"],
  },
  {
    label: "Data & ML",
    description: "Models and evaluation workflows that turn messy data into useful signals.",
    items: ["Python", "scikit-learn", "Transformers", "SQL"],
  },
  {
    label: "Computer Vision",
    description: "Real-time visual intelligence for interactive and practical applications.",
    items: ["OpenCV", "MediaPipe", "Image Models", "Evaluation"],
  },
  {
    label: "Delivery & Tooling",
    description: "The practices that move a tested idea from local prototype to live product.",
    items: ["Git & GitHub", "Docker", "Vercel", "Testing"],
  },
];
