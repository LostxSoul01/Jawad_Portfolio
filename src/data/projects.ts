export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  metric?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "code" | "private";
  year: string;
  featured: boolean;
  caseStudySlug?: string;
};

// Fill in liveUrl / githubUrl for each project below.
// status: "live" = deployed and linked, "code" = repo only, "private" = neither yet
export const projects: Project[] = [
  {
    slug: "smartsched",
    title: "SmartSched",
    tagline: "Complex constraints. Smarter schedules.",
    description:
      "A full-stack academic scheduling platform that turns conflicting rooms, teachers, batches, and availability into practical timetables with a real Genetic Algorithm engine.",
    highlights: [
      "Admin, faculty, student, and program portals backed by a shared data model",
      "Constraint-aware Genetic Algorithm with selection, crossover, mutation, and a bounded runtime budget",
      "Hard constraints for teacher, room, and batch clashes, availability, lab blocks, and repeat courses",
      "Zod validation, Supabase Row Level Security, authenticated admin mutations, and typed API routes",
      "Offline stress and edge-case tests for realistic and infeasible scheduling datasets",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Genetic Algorithms", "REST API", "Zod"],
    metric: "Conflict-aware timetable generation within a 9-second budget",
    status: "private",
    year: "2026",
    featured: true,
    caseStudySlug: "smartsched",
  },
  {
    slug: "juraai-pk",
    title: "JuraAI.pk",
    tagline: "Search the law. Draft with confidence.",
    description:
      "An AI-assisted legal research experience designed to make Pakistani case-law discovery, source tracing, and first-draft preparation feel faster and more focused.",
    highlights: [
      "Natural-language case-law search concept designed around how legal professionals actually frame questions",
      "AI drafting workspace with upload, progress, citation, and response states",
      "Citation-focused interface with quick-view interactions for keeping sources visible and traceable",
      "Responsive Next.js product surface with a deliberate navy, emerald, and AI-gold design system",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metric: "Legal search + AI drafting product experience",
    liveUrl: "https://juraai-pk.vercel.app",
    githubUrl: "https://github.com/LostxSoul01/JuraAI.pk",
    status: "live",
    year: "2026",
    featured: true,
    caseStudySlug: "juraai-pk",
  },
  {
    slug: "resumelens",
    title: "ResumeLens",
    tagline: "Turn a good resume into a stronger one.",
    description:
      "An AI resume coach that evaluates every section against a target role, then turns vague experience into sharper, evidence-led bullet points.",
    highlights: [
      "Section-by-section scoring (summary, experience, skills, education) instead of one blended score",
      "LLM-powered bullet point rewriting with before/after suggestions",
      "Client-side PDF parsing via pdf.js — no file ever leaves the browser until analysis",
      "Backend built on Netlify Functions with the API key kept server-side, never exposed to the client",
      "Animated progress bars and a fully modular component structure on the frontend",
    ],
    tech: ["JavaScript", "Node.js", "Netlify Functions", "Groq API", "Llama 3.1", "pdf.js"],
    metric: "Section-level scoring + LLM bullet rewrites",
    liveUrl: "https://jawad-resumelens.netlify.app",
    githubUrl: "https://github.com/LostxSoul01/ResumeLens",
    status: "live",
    year: "2026",
    featured: true,
    caseStudySlug: "resumelens",
  },
  {
    slug: "ai-ecommerce",
    title: "Intelligent AI E-Commerce Platform",
    tagline: "Smarter shopping, more trustworthy reviews.",
    description:
      "A full-stack commerce experience that pairs an LLM shopping assistant with a review-authenticity layer, helping buyers explore products with more context and confidence.",
    highlights: [
      "Final year project — full-stack e-commerce platform with an AI layer built in from the start, not bolted on",
      "Llama-3-8B served through vLLM for the in-app shopping assistant",
      "DeBERTa-v3 classifier flags fake or manipulated product reviews before they influence a buyer",
      "Firebase for auth and data, FastAPI backend serving the model endpoints, React frontend",
      "Model weight files were too large for a standard GitHub push — a lesson in planning ML repos around Git LFS / Hugging Face Hub from day one",
    ],
    tech: ["React.js", "FastAPI", "Firebase", "vLLM", "Llama 3 8B", "DeBERTa-v3"],
    metric: "90%+ fake review detection accuracy",
    liveUrl: "",
    githubUrl: "",
    status: "private",
    year: "2026",
    featured: true,
    caseStudySlug: "ai-ecommerce",
  },
  {
    slug: "fake-news-detector",
    title: "Fake News Detector",
    tagline: "Simple models. Serious signal.",
    description:
      "A focused text-classification pipeline that combines TF-IDF and logistic regression to identify misleading news, wrapped in an interactive Streamlit experience.",
    highlights: [
      "Trained and evaluated on the ISOT dataset — roughly 44,898 labeled news articles",
      "TF-IDF vectorization feeding a logistic regression classifier, tuned to 98.69% test accuracy",
      "Interactive Streamlit app so anyone can paste in an article and get a live prediction",
      "Deliberately classic ML over a heavier transformer model — proof that a well-tuned simple model can outperform complexity for the right problem",
    ],
    tech: ["Python", "scikit-learn", "TF-IDF", "Streamlit"],
    metric: "98.69% accuracy on ~44,898 articles",
    liveUrl: "https://jawad-fake-news-detector.streamlit.app",
    githubUrl: "https://github.com/LostxSoul01/fake-news-detector",
    status: "live",
    year: "2026",
    featured: true,
    caseStudySlug: "fake-news-detector",
  },
  {
    slug: "skyline",
    title: "Skyline",
    tagline: "The forecast, without the noise.",
    description:
      "A fast, framework-free weather experience that turns live Open-Meteo data into a clean forecast with focused interactions and no unnecessary bloat.",
    highlights: [
      "Zero frameworks — pure JavaScript, HTML, and CSS, built to prove the fundamentals hold up without a library doing the heavy lifting",
      "Live data from the Open-Meteo API with clean async fetch logic and error handling",
      "Fast load times by design — no bundler overhead, no unused dependencies",
      "Deployed on Netlify with continuous deployment from GitHub",
    ],
    tech: ["JavaScript", "Open-Meteo API", "Netlify"],
    liveUrl: "https://jawad-skyline-weather.netlify.app",
    githubUrl: "https://github.com/LostxSoul01/weather-app",
    status: "live",
    year: "2026",
    featured: true,
    caseStudySlug: "skyline",
  },
  {
    slug: "image-captioning",
    title: "Image Captioning System",
    tagline: "Giving images a voice",
    description:
      "An encoder–decoder vision project that transforms image features into natural-language captions, exploring the foundations of modern vision-language systems.",
    highlights: [
      "CNN encoder extracts image features, sequence decoder generates the caption word by word",
      "Trained on Flickr8k — roughly 8,000 images, each with multiple human-written reference captions",
      "Early hands-on exploration of the encoder-decoder pattern that underlies most modern vision-language models",
    ],
    tech: ["Python", "Deep Learning", "CNN", "Flickr8k"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2025",
    featured: false,
    caseStudySlug: "image-captioning",
  },
  {
    slug: "ar-gesture-filter",
    title: "AR Hand Gesture Filter",
    tagline: "Real-time vision, built for everyday hardware",
    description:
      "A real-time computer-vision experiment that turns hand landmarks into responsive AR effects while staying smooth on everyday integrated graphics.",
    highlights: [
      "Uses MediaPipe's HandLandmarker to track hand position and gesture in real time",
      "Renders Doctor Strange-style magic circle effects that follow hand movement via OpenCV",
      "Optimized specifically for integrated graphics — pre-cached sprites and downscaled detection frames to keep frame rate smooth without a dedicated GPU",
    ],
    tech: ["Python", "OpenCV", "MediaPipe"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2025",
    featured: false,
    caseStudySlug: "ar-gesture-filter",
  },
  {
    slug: "patient-management",
    title: "Patient Management System",
    tagline: "Reliable records, organized workflows",
    description:
      "A structured healthcare workflow for organizing patient records, appointments, and visit history through a clear relational data model.",
    highlights: [
      "Relational schema designed around patients, appointments, and visit history",
      "Full CRUD operations across all core entities",
    ],
    tech: ["Full-Stack", "SQL"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2024",
    featured: false,
    caseStudySlug: "patient-management",
  },
  {
    slug: "employee-management",
    title: "Employee Management System",
    tagline: "People data, made easier to manage",
    description:
      "A focused HR data system that keeps employee records, roles, and departments organized for faster lookups and cleaner reporting.",
    highlights: [
      "Normalized database design across employees, roles, and departments",
      "Structured for straightforward reporting and record lookups",
    ],
    tech: ["Full-Stack", "SQL"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2024",
    featured: false,
    caseStudySlug: "employee-management",
  },
  {
    slug: "food-ordering",
    title: "Food Ordering System Re-Engineering",
    tagline: "Making legacy software easier to evolve",
    description:
      "A legacy-system re-engineering project that improves maintainability by simplifying the flow between ordering, inventory, and checkout.",
    highlights: [
      "Took over an existing codebase and restructured it for maintainability rather than building from scratch",
      "Focus on cleaner data flow between ordering, inventory, and checkout logic",
    ],
    tech: ["Software Re-Engineering"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2024",
    featured: false,
    caseStudySlug: "food-ordering",
  },
  {
    slug: "automotive-redesign",
    title: "Automotive Website Redesign",
    tagline: "A clearer path from browsing to buying",
    description:
      "A customer-first automotive redesign that gives vehicle shoppers a clearer path through listings, information, and next steps.",
    highlights: [
      "Rebuilt navigation structure around how customers actually browse vehicle listings",
      "Focus on usability improvements over the original layout",
    ],
    tech: ["Web Design", "Frontend"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2024",
    featured: false,
    caseStudySlug: "automotive-redesign",
  },
  {
    slug: "weather-mobile",
    title: "Weather Mobile App",
    tagline: "Skyline's mobile predecessor",
    description:
      "An early mobile weather experience that explored live API integration, forecast hierarchy, and the foundations later refined in Skyline.",
    highlights: [
      "Early exploration of live weather API integration on mobile",
      "Precursor to Skyline's cleaner, faster web implementation",
    ],
    tech: ["Mobile", "Weather API"],
    liveUrl: "",
    githubUrl: "",
    status: "code",
    year: "2024",
    featured: false,
    caseStudySlug: "weather-mobile",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
