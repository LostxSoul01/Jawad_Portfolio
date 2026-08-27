export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Give me a quick overview",
    answer:
      "Jawad Ali Raza is a Software Engineering graduate from COMSATS University Islamabad with a 3.88/4.00 CGPA. He builds applied AI, full-stack, and computer-vision products, including SmartSched, JuraAI.pk, ResumeLens, a fake-news detector, and Skyline. Five portfolio projects currently have live demos, and he is open to entry-level engineering roles.",
  },
  {
    question: "What has he built?",
    answer:
      "His featured work includes SmartSched, a constraint-aware academic timetable generator; JuraAI.pk, a legal intelligence product experience; ResumeLens, an AI resume analyzer; a fake-news classifier with 98.69% accuracy on about 44,898 articles; and Skyline, a lightweight weather application. Ask me about any project for its architecture and technical details.",
  },
  {
    question: "Tell me about SmartSched",
    answer:
      "SmartSched is a full-stack academic scheduling platform with admin, faculty, student, and program portals. Its scheduling engine uses a real Genetic Algorithm with hard constraints for teacher, room, and batch clashes, teacher availability, lab blocks, and repeat courses, supported by typed APIs, Supabase, Zod validation, and offline stress and edge-case tests.",
  },
  {
    question: "What is his tech stack?",
    answer:
      "Jawad works primarily with Python, JavaScript, TypeScript, React, Next.js, Node.js, FastAPI, Supabase, Firebase, and REST APIs. His AI/ML toolkit includes LLM APIs, Groq, vLLM, scikit-learn, Transformers, OpenCV, and MediaPipe, with Vercel, Netlify, Streamlit, Docker, and GitHub supporting delivery.",
  },
  {
    question: "What is his engineering approach?",
    answer:
      "He starts with the user problem, chooses the simplest reliable architecture, validates inputs and outputs, keeps secrets server-side, tests edge cases, and deploys only after the production path works. He values readable code, honest metrics, accessible interfaces, and clear communication about limitations.",
  },
  {
    question: "What makes his projects different?",
    answer:
      "Jawad focuses on the gap between a project that demos well and one that holds up under real use. His portfolio emphasizes deployed applications, measurable results, protected integrations, validation, testing, and technical decisions that another engineer can understand and maintain.",
  },
  {
    question: "What is his education?",
    answer:
      "Jawad holds a BS in Software Engineering from COMSATS University Islamabad, Attock Campus. He graduated in July 2026 with a 3.88/4.00 CGPA, with focus areas including software architecture, databases, artificial intelligence, machine learning, and software re-engineering.",
  },
  {
    question: "Is he available for hire?",
    answer:
      "Yes. He is actively looking for Junior or Associate Software Engineer, AI Engineer, GenAI Engineer, Python Developer, and Full-Stack Developer opportunities. He is based in Punjab, Pakistan and is open to remote roles or relocation depending on the opportunity.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "The best way to reach Jawad is by email at jawadaliics@gmail.com. You can also connect with him on LinkedIn at linkedin.com/in/jawad-ali-raza1 or explore his work at github.com/LostxSoul01.",
  },
];
