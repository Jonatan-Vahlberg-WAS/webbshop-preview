export default function SectionCard({ id, title, children }) {
  return (
    <section
      id={id}
      className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
    >
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8 flex items-center gap-3">
        <span className="flex h-10 w-1 rounded-full bg-teal-500" />
        {title}
      </h2>
      {children}
    </section>
  );
}
