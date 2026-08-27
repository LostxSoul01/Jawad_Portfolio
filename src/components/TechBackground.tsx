const connections = [
  ["8%", "22%", "38%", "34%"],
  ["38%", "34%", "50%", "18%"],
  ["50%", "18%", "72%", "28%"],
  ["72%", "28%", "94%", "20%"],
  ["12%", "68%", "35%", "58%"],
  ["35%", "58%", "50%", "78%"],
  ["50%", "78%", "76%", "64%"],
  ["76%", "64%", "92%", "76%"],
  ["18%", "42%", "50%", "50%"],
  ["50%", "50%", "82%", "42%"],
];

export default function TechBackground() {
  return (
    <div className="tech-background" aria-hidden="true">
      <div className="tech-background__grid" />
      <svg className="tech-background__signals" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([x1, y1, x2, y2], index) => (
          <line key={index} x1={x1.replace("%", "")} y1={y1.replace("%", "")} x2={x2.replace("%", "")} y2={y2.replace("%", "")} pathLength="1" />
        ))}
      </svg>
      <div className="tech-background__orb tech-background__orb--one" />
      <div className="tech-background__orb tech-background__orb--two" />
      <div className="tech-background__nodes">
        {["14%", "29%", "43%", "57%", "71%", "86%"].map((left, index) => (
          <span key={left} className="tech-background__node" style={{ left, animationDelay: `${index * 0.8}s` }} />
        ))}
      </div>
    </div>
  );
}
