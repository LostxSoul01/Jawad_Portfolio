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
};

// Fill in liveUrl / githubUrl for each project below.
// status: "live" = deployed and linked, "code" = repo only, "private" = neither yet
export const projects: Project[] = [
  {
    slug: "resumelens",
    title: "ResumeLens",
    tagline: "AI resume analysis, section by section",
    description:
      "Resume analyzer that scores a CV section by section against a target role and rewrites weak bullet points using an LLM. Modular frontend and a Node.js backend running on Netlify Functions, with PDF parsing handled client-side.",
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
    githubUrl: "https://github.com/LostxSoul01",
    status: "live",
    year: "2026",
    featured: true,
  },
  {
    slug: "ai-ecommerce",
    title: "Intelligent AI E-Commerce Platform",
    tagline: "Final year project — shopping with a built-in review filter",
    description:
      "E-commerce platform with an LLM-powered assistant and a fake-review detector trained on product review data. Served an 8B-parameter Llama 3 model via vLLM alongside a DeBERTa-v3 classifier for review authenticity.",
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
  },
  {
    slug: "fake-news-detector",
    title: "Fake News Detector",
    tagline: "Classic ML, tuned to a high bar",
    description:
      "Text classification pipeline using TF-IDF vectorization and logistic regression to flag fake news articles, trained and evaluated on the ISOT dataset. Wrapped in a Streamlit app for interactive testing.",
    highlights: [
      "Trained and evaluated on the ISOT dataset — roughly 44,898 labeled news articles",
      "TF-IDF vectorization feeding a logistic regression classifier, tuned to 98.69% test accuracy",
      "Interactive Streamlit app so anyone can paste in an article and get a live prediction",
      "Deliberately classic ML over a heavier transformer model — proof that a well-tuned simple model can outperform complexity for the right problem",
    ],
    tech: ["Python", "scikit-learn", "TF-IDF", "Streamlit"],
    metric: "98.69% accuracy on ~44,898 articles",
    liveUrl: "https://jawad-fake-news-detector.streamlit.app",
    githubUrl: "https://github.com/LostxSoul01",
    status: "live",
    year: "2026",
    featured: true,
  },
  {
    slug: "skyline",
    title: "Skyline",
    tagline: "A weather app that just works",
    description:
      "Lightweight weather app built with vanilla JavaScript, pulling live forecasts from the Open-Meteo API. No frameworks, no bloat — just clean fetch logic and a fast UI.",
    highlights: [
      "Zero frameworks — pure JavaScript, HTML, and CSS, built to prove the fundamentals hold up without a library doing the heavy lifting",
      "Live data from the Open-Meteo API with clean async fetch logic and error handling",
      "Fast load times by design — no bundler overhead, no unused dependencies",
      "Deployed on Netlify with continuous deployment from GitHub",
    ],
    tech: ["JavaScript", "Open-Meteo API", "Netlify"],
    liveUrl: "https://jawad-skyline-weather.netlify.app",
    githubUrl: "https://github.com/LostxSoul01",
    status: "live",
    year: "2026",
    featured: true,
  },
  {
    slug: "image-captioning",
    title: "Image Captioning System",
    tagline: "Teaching a model to describe what it sees",
    description:
      "Deep learning model trained on the Flickr8k dataset to generate natural-language captions for images, combining a CNN encoder with a sequence-based decoder.",
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
  },
  {
    slug: "ar-gesture-filter",
    title: "AR Hand Gesture Filter",
    tagline: "Doctor Strange effects, real-time, on integrated graphics",
    description:
      "Real-time AR filter that tracks hand landmarks and renders magic-circle effects on top of a live camera feed, optimized to run smoothly on integrated graphics through frame downscaling and sprite caching.",
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
  },
  {
    slug: "patient-management",
    title: "Patient Management System",
    tagline: "Core CRUD, done properly",
    description:
      "Full-stack system for managing patient records, appointments, and history with a structured relational schema.",
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
  },
  {
    slug: "employee-management",
    title: "Employee Management System",
    tagline: "HR operations, structured",
    description:
      "Application for tracking employee records, roles, and departmental data with a normalized database design.",
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
  },
  {
    slug: "food-ordering",
    title: "Food Ordering System Re-Engineering",
    tagline: "Rebuilding a legacy system properly",
    description:
      "Re-engineered an existing food ordering system, restructuring the codebase and data flow for maintainability.",
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
  },
  {
    slug: "automotive-redesign",
    title: "Automotive Website Redesign",
    tagline: "A dealership site, rebuilt",
    description:
      "Redesigned an automotive business website with a focus on cleaner navigation and a more usable layout.",
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
  },
  {
    slug: "weather-mobile",
    title: "Weather Mobile App",
    tagline: "Skyline's mobile predecessor",
    description:
      "Mobile weather application built as an earlier exploration of live weather data and forecast UI patterns.",
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
