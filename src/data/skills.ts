export type SkillGroup = {
  label: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Web Development",
    description: "Responsive product surfaces built with a focus on clear information architecture, interaction states, accessibility, and maintainable component systems.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Framer Motion", "Responsive UI", "Mobile-first", "Accessibility"],
  },
  {
    label: "AI Applications",
    description: "Useful AI workflows that connect language and retrieval models to real user journeys instead of treating intelligence as a standalone demo.",
    items: ["LLM APIs", "Groq", "Prompt Design", "RAG", "vLLM", "Llama 3", "Structured Outputs", "AI Workflows", "Citation-aware Search", "Model Evaluation"],
  },
  {
    label: "Backend & APIs",
    description: "Typed services, serverless handlers, authenticated mutations, and secure data flows that keep application logic dependable and observable.",
    items: ["Node.js", "Express", "FastAPI", "REST APIs", "Supabase", "Firebase", "Netlify Functions", "Zod", "Row Level Security", "Server-side Secrets"],
  },
  {
    label: "Data & ML",
    description: "Practical machine-learning pipelines spanning classic baselines, transformer classifiers, structured data, optimization, and honest evaluation.",
    items: ["Python", "scikit-learn", "TF-IDF", "Logistic Regression", "Transformers", "DeBERTa-v3", "SQL", "Genetic Algorithms", "Data Leakage Control", "Precision/Recall/F1"],
  },
  {
    label: "Computer Vision",
    description: "Visual intelligence systems that connect image understanding, landmark detection, language generation, and real-time rendering under hardware constraints.",
    items: ["OpenCV", "MediaPipe", "CNN", "Encoder–Decoder", "Image Captioning", "Hand Landmarks", "Real-time AR", "Cached Sprites", "Frame-rate Optimization", "Vision Evaluation"],
  },
  {
    label: "Delivery & Tooling",
    description: "The engineering practices that move a tested idea from local prototype to live product with reproducible deployment and clear operational constraints.",
    items: ["Git & GitHub", "GitHub Actions", "Docker", "Vercel", "Netlify", "Streamlit", "CI/CD", "Testing", "Git LFS", "Hugging Face Hub", "Performance Budgets", "Error States"],
  },
];
