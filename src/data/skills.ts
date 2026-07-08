export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React.js", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "Netlify Functions", "Firebase", "REST APIs"],
  },
  {
    label: "AI / ML",
    items: [
      "LLM API Integration",
      "Groq API",
      "vLLM",
      "scikit-learn",
      "Transformers (DeBERTa)",
      "OpenCV",
      "MediaPipe",
      "Prompt Engineering",
    ],
  },
  {
    label: "Tools & Platforms",
    items: ["Git & GitHub", "Streamlit", "PlantUML", "Ollama", "Netlify", "VS Code"],
  },
];
