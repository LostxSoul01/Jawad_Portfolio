export type CaseStudy = {
  challenge: string;
  architecture: string;
  decisions: string[];
  outcome: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  resumelens: {
    challenge: "ResumeLens started from a practical problem: tailoring a resume to a job description is repetitive, subjective, and difficult to measure. The product needed to turn that process into clear, actionable feedback without storing a user’s resume.",
    architecture: "A browser-first frontend sends resume and job-description text to serverless Node.js handlers, which call Groq with structured prompts and return validated analysis, section scores, keywords, and rewritten bullets. The same handlers are wrapped by Express for the containerized deployment path.",
    decisions: ["Keep resume parsing and the primary document flow in the browser so raw resume data is not persisted by default.", "Use one shared analysis core behind both Netlify Functions and the Express container to avoid divergent behavior.", "Treat the AI response as structured application data rather than untrusted free-form text."],
    outcome: "A production-style AI workflow with serverless delivery, a containerized path, GitHub Actions CI/CD, and a clear roadmap for PDF uploads and report export.",
  },
  "ai-ecommerce": {
    challenge: "The project explored how an online store could help buyers make better decisions instead of simply adding an assistant as a novelty feature. The experience needed both conversational product help and a way to flag suspicious reviews.",
    architecture: "A React storefront connects to a FastAPI backend, Firebase services, and two model paths: an Llama 3 model served through vLLM for shopping assistance and a DeBERTa-v3 classifier for review authenticity.",
    decisions: ["Build the AI layer into the commerce experience instead of treating it as a separate demo.", "Use a dedicated classifier for review quality rather than asking the conversational model to perform every task.", "Document model-weight and deployment constraints as part of the engineering work."],
    outcome: "A final-year full-stack product concept that combines commerce, LLM inference, and trust signals in one cohesive experience.",
  },
  "fake-news-detector": {
    challenge: "The goal was to build a transparent baseline for news classification and understand whether a focused classical model could produce strong results without unnecessary complexity.",
    architecture: "A preprocessing pipeline combines article titles and body text, removes leakage-prone fields, converts content into TF-IDF features, and feeds a logistic-regression classifier. A Streamlit interface makes the trained pipeline interactive.",
    decisions: ["Remove subject and date fields after identifying a data-leakage risk.", "Prefer a tuned, explainable classical baseline before moving to transformer-based alternatives.", "Report dataset-specific performance alongside its generalization limitations."],
    outcome: "98.69% accuracy, 98.20% precision, 99.07% recall, and 98.63% F1 on the ISOT test split, with an explicit plan for external-source evaluation.",
  },
  skyline: {
    challenge: "Weather information is easy to overload with features. Skyline focuses on the essential forecast journey: search a city, understand current conditions, and see what is coming next.",
    architecture: "A dependency-free HTML, CSS, and JavaScript interface uses Open-Meteo geocoding and forecast APIs, maps weather codes to presentation states, and adapts the day/night theme to the searched location’s local time.",
    decisions: ["Use no framework or build step to keep the experience fast and the implementation easy to inspect.", "Separate geocoding, forecast retrieval, and presentation logic into clear browser-side flows.", "Treat loading, empty, and error states as part of the core product experience."],
    outcome: "A lightweight live weather product with current conditions, feels-like temperature, wind, humidity, and a five-day forecast.",
  },
  "image-captioning": {
    challenge: "Image captioning combines visual representation with language generation: the model must identify what matters in an image and express it as a coherent sequence.",
    architecture: "A CNN encoder extracts visual features from Flickr8k images, while a sequence decoder generates captions word by word using the learned representation.",
    decisions: ["Separate image understanding from language generation through an encoder–decoder design.", "Use multiple human-written captions as references for the same image.", "Treat the project as a foundation for understanding modern vision-language systems."],
    outcome: "A hands-on deep-learning implementation that demonstrates the core mechanics behind image-to-text generation.",
  },
  "ar-gesture-filter": {
    challenge: "The project needed to make real-time augmented effects respond naturally to hand movement while remaining usable on integrated graphics rather than requiring a dedicated GPU.",
    architecture: "MediaPipe HandLandmarker detects hand landmarks, OpenCV composes the magic-circle effect over a live camera feed, and the pipeline uses downscaled detection frames and cached sprites to protect frame rate.",
    decisions: ["Separate landmark detection from rendering so each stage can be optimized independently.", "Pre-cache visual assets and reduce detection resolution to fit everyday hardware.", "Prioritize stable interaction and frame rate over maximum visual complexity."],
    outcome: "A responsive computer-vision experiment that turns hand gestures into a practical real-time AR interaction.",
  },
  "patient-management": {
    challenge: "Patient data needs to be structured enough for reliable record lookup while keeping appointments and visit history connected to the correct person.",
    architecture: "A full-stack CRUD workflow is organized around a relational schema for patients, appointments, and visit history.",
    decisions: ["Model healthcare entities relationally before designing the interface.", "Keep CRUD operations predictable and aligned with the underlying data relationships.", "Make record history a first-class part of the workflow rather than a separate note field."],
    outcome: "A focused management system that demonstrates dependable data modeling, CRUD implementation, and workflow thinking.",
  },
  "employee-management": {
    challenge: "Employee information becomes difficult to maintain when people, roles, and departments are treated as one unstructured dataset.",
    architecture: "The system uses normalized records for employees, roles, and departments, supporting structured lookups and straightforward reporting flows.",
    decisions: ["Normalize the core entities to reduce duplicated organizational data.", "Design record lookups around common HR questions rather than raw database structure.", "Keep the first version focused on reliable operations and maintainable data flow."],
    outcome: "A practical HR operations foundation that demonstrates database design and clear information architecture.",
  },
  "food-ordering": {
    challenge: "The work focused on improving an existing food-ordering codebase rather than starting from a blank project, making maintainability and data flow the central concerns.",
    architecture: "The re-engineered system clarifies the relationships between ordering, inventory, and checkout logic so the core flow can be extended without compounding legacy complexity.",
    decisions: ["Improve the structure of an existing codebase instead of replacing it without understanding its constraints.", "Make ordering, inventory, and checkout responsibilities easier to trace.", "Treat maintainability as a product requirement, not only a code-quality preference."],
    outcome: "A re-engineering case study about making legacy software easier to understand, modify, and evolve.",
  },
  "automotive-redesign": {
    challenge: "The automotive site needed to help customers move from browsing vehicle listings to understanding their next step without navigating a confusing information structure.",
    architecture: "The redesign reorganizes the navigation and page hierarchy around customer browsing behavior, vehicle information, and clearer calls to action.",
    decisions: ["Start with the customer’s browsing path rather than preserving the original navigation.", "Use hierarchy and whitespace to make vehicle information easier to scan.", "Measure design success through usability and clarity rather than visual decoration alone."],
    outcome: "A customer-first redesign that makes the dealership experience easier to browse and act on.",
  },
  "weather-mobile": {
    challenge: "The mobile weather app explored how forecast information can remain clear and useful when the available screen area is limited.",
    architecture: "A mobile interface consumes live weather data and organizes current conditions and forecast information into a compact, touch-oriented experience.",
    decisions: ["Design the information hierarchy for small screens first.", "Use live API integration as the backbone of the experience rather than static mock data.", "Carry the strongest lessons from the mobile exploration into the later Skyline web implementation."],
    outcome: "An early mobile product exploration that established the interaction and data foundations for a cleaner weather experience.",
  },
};
