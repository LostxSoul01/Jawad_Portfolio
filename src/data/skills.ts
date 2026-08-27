export type SkillGroup = {
  label: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    description: "The foundations I use to model problems and ship reliable software.",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "Frontend Engineering",
    description: "Responsive interfaces with clear interaction design and accessible UI patterns.",
    items: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    label: "Backend & APIs",
    description: "Typed services, integrations, and data flows designed to be maintained.",
    items: ["Node.js", "FastAPI", "Netlify Functions", "Firebase", "REST APIs"],
  },
  {
    label: "AI & Machine Learning",
    description: "Practical AI features grounded in evaluation, structured outputs, and real user workflows.",
    items: [
      "LLM API Integration",
      "Groq API",
      "vLLM",
      "scikit-learn",
      "Transformers",
      "OpenCV",
      "MediaPipe",
      "Prompt Engineering",
    ],
  },
  {
    label: "Delivery & Tooling",
    description: "The engineering practices I use to move from local prototype to deployed product.",
    items: ["Git & GitHub", "Streamlit", "Supabase", "Docker", "Vercel", "Netlify", "VS Code"],
  },
];
