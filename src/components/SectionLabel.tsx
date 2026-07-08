export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-sm text-signal">// {index}</span>
      <span className="font-mono text-sm text-text-faint uppercase tracking-widest">
        {label}
      </span>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}
