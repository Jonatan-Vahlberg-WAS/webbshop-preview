const LEVEL_MAX = 5;

export default function LevelDots({ label, value, max = LEVEL_MAX }) {
  const n = Math.min(Math.max(Number(value) || 0, 0), max);
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 shrink-0 w-24">
        {label}
      </span>
      <div
        className="flex gap-1.5"
        role="img"
        aria-label={`${label}: ${n} av ${max}`}
      >
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full shrink-0 transition-colors ${
              i < n
                ? "bg-teal-500 shadow-[0_0_0_1px] shadow-teal-500/40"
                : "bg-slate-200 dark:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
