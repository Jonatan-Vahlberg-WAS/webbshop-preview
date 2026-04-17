"use client";

import Link from "next/link";
import { SCHEDULE } from "@/app/_data/pageData";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ScheduleList() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <ol className="relative border-l-2 border-teal-200 dark:border-teal-800 space-y-0">
      {SCHEDULE.map(({ title, date, description, classroom, linkHref, linkLabel }) => {
        const eventDate = new Date(date);
        const isPast = eventDate < today;

        return (
          <li key={date} className="relative pl-8 pb-8 last:pb-0">
            {/* Timeline dot */}
            <span
              className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 transition-colors ${
                isPast
                  ? "bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                  : "bg-teal-500 border-teal-300 dark:border-teal-700 shadow-[0_0_0_3px] shadow-teal-500/20"
              }`}
            />

            <div className={isPast ? "opacity-45" : ""}>
              {/* Date badge */}
              <p className={`text-xs font-medium mb-1 capitalize ${
                isPast
                  ? "text-slate-400 dark:text-slate-500"
                  : "text-teal-600 dark:text-teal-400"
              }`}>
                {formatDate(date)}
              </p>

              <div className={`rounded-xl border p-4 ${
                isPast
                  ? "border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30"
                  : "border-teal-200 dark:border-teal-800 bg-white dark:bg-slate-900/60"
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`font-semibold text-base ${
                    isPast
                      ? "text-slate-500 dark:text-slate-400"
                      : "text-slate-900 dark:text-slate-50"
                  }`}>
                    {title}
                  </h3>
                  <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                    isPast
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                      : "bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400"
                  }`}>
                    {classroom}
                  </span>
                </div>
                {description ? (
                  <p className={`mt-1.5 text-sm ${
                    isPast
                      ? "text-slate-400 dark:text-slate-500"
                      : "text-slate-600 dark:text-slate-400"
                  }`}>
                    {description}
                  </p>
                ) : null}
                {linkHref && linkLabel ? (
                  <p className="mt-2">
                    <Link
                      href={linkHref}
                      className={`text-sm font-medium underline underline-offset-2 ${
                        isPast
                          ? "text-slate-500 dark:text-slate-500"
                          : "text-teal-600 dark:text-teal-400"
                      }`}
                    >
                      {linkLabel} →
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
