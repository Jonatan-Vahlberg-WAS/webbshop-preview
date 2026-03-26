import { NAV_ITEMS } from "@/app/_data/pageData";

export default function NavPills() {
  return (
    <nav className="max-w-3xl mx-auto py-10 px-6 border-b border-slate-200 dark:border-slate-700">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
        Innehåll
      </h2>
      <ol className="flex flex-wrap gap-2">
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-block px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
