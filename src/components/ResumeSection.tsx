import { ArrowDownToLine, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionLabel from "./SectionLabel";

const focusAreas = ["Applied AI", "Full-stack systems", "Python & TypeScript", "Production-minded delivery"];

export default function ResumeSection() {
  return <section id="resume" className="resume-section px-6 py-24"><div className="mx-auto max-w-5xl"><SectionLabel index="05" label="résumé" /><div className="resume-card"><div className="resume-card__main"><div className="resume-card__eyebrow"><span className="resume-card__status" /> recruiter snapshot</div><h2>Ready to build <span>useful systems.</span></h2><p>I’m a Software Engineering graduate focused on applied AI, full-stack products, and reliable software that turns complex requirements into clear user outcomes.</p><div className="resume-focus-list">{focusAreas.map((area) => <span key={area}><CheckCircle2 size={13} />{area}</span>)}</div></div><div className="resume-card__side"><div><small>education</small><strong>BS Software Engineering</strong><span>COMSATS University Islamabad</span></div><div><small>seeking</small><strong>Junior · Associate roles</strong><span>Software · AI · GenAI · Full-stack</span></div><a href="/jawad-ali-raza-resume.pdf" download className="resume-download"><ArrowDownToLine size={15} /> download résumé <ArrowUpRight size={13} /></a></div></div></div></section>;
}
