import { ArrowUpRight, BriefcaseBusiness, CheckCircle2, GraduationCap, Layers3 } from "lucide-react";

const proofPoints = [
  { value: "10+", label: "projects shipped", icon: BriefcaseBusiness },
  { value: "6", label: "technical domains", icon: Layers3 },
  { value: "3.88/4.00", label: "CGPA · COMSATS", icon: GraduationCap },
  { value: "2026", label: "software engineering graduate", icon: CheckCircle2 },
];

export default function ProofOfWork() {
  return (
    <section className="proof-section px-6" aria-label="Proof of work and availability">
      <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1fr_auto]">
        <div className="proof-strip">{proofPoints.map(({ value, label, icon: Icon }) => <div className="proof-point" key={label}><Icon size={15} /><strong>{value}</strong><span>{label}</span></div>)}</div>
        <a href="#contact" className="availability-panel"><span className="availability-panel__dot" /><span><small>currently available for</small><strong>software · AI · full-stack roles</strong></span><ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
