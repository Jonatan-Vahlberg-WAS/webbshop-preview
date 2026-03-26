import Link from "next/link";

import LevelDots from "./LevelDots";

export default function PresentationCard({ id, title, description, levels }) {
  return (
    <Link
      href={`/presentations/${id}`}
      className="group flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-linear-to-r from-teal-50/80 to-slate-50/50 dark:from-teal-950/40 dark:to-slate-900/40 px-5 py-4 shadow-sm transition-all hover:border-teal-400 dark:hover:border-teal-600 hover:shadow-md hover:from-teal-100/90 dark:hover:from-teal-900/50 sm:flex-row sm:items-center sm:justify-between"
    >
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
          {title}
        </span>
        {description ? (
          <span className="mt-0.5 block text-sm text-slate-600 dark:text-slate-400">
            {description}
          </span>
        ) : null}
        {levels ? (
          <div className="mt-3 flex flex-col gap-1.5">
            <LevelDots label="Backend" value={levels.backend} />
            <LevelDots label="Frontend" value={levels.frontend} />
          </div>
        ) : null}
      </span>
      <span
        className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:bg-teal-400/15 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white dark:group-hover:bg-teal-500 transition-colors self-end sm:self-center"
        aria-hidden
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </Link>
  );
}
