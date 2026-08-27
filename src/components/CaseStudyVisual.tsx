import { ArrowRight, BrainCircuit, Database, Globe2, ShieldCheck, Sparkles } from "lucide-react";

const maps: Record<string, { label: string; nodes: string[] }> = {
  smartsched: { label: "schedule engine", nodes: ["Role portals", "Validated API", "Constraint engine", "Feasible timetable"] },
  "juraai-pk": { label: "research workflow", nodes: ["Legal question", "Case-law search", "Citation layer", "Draft workspace"] },
  resumelens: { label: "analysis pipeline", nodes: ["Resume + job", "Serverless API", "LLM analysis", "Actionable feedback"] },
  "fake-news-detector": { label: "classification pipeline", nodes: ["Article text", "TF-IDF features", "Classifier", "Prediction"] },
  skyline: { label: "forecast flow", nodes: ["City search", "Geocoding", "Live forecast", "Weather UI"] },
};

export default function CaseStudyVisual({ slug }: { slug: string }) {
  const map = maps[slug] ?? { label: "product flow", nodes: ["User input", "Application logic", "Data layer", "Useful output"] };
  return (
    <div className="case-study-visual" aria-label={`${map.label} diagram`}>
      <div className="case-study-visual__header"><span className="case-study-kicker">system map</span><span className="case-study-visual__pulse"><Sparkles size={13} /> live flow</span></div>
      <div className="case-study-visual__nodes">
        {map.nodes.map((node, index) => <div key={node} className="case-study-visual__node"><div className="case-study-visual__node-icon">{index === 0 ? <Globe2 size={15} /> : index === 1 ? <Database size={15} /> : index === 2 ? <BrainCircuit size={15} /> : <ShieldCheck size={15} />}</div><span>{node}</span>{index < map.nodes.length - 1 && <ArrowRight className="case-study-visual__arrow" size={15} />}</div>)}
      </div>
    </div>
  );
}
