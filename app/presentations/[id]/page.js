"use client";

import { use } from "react";
import Link from "next/link";
import { Presentation } from "@slideskit/core";
import { codeBlockRegistry } from "@slideskit/code";
import { videoBlockRegistry } from "@slideskit/video";
import "@slideskit/core/styles.css";
import "@slideskit/code/styles.css";
import "@slideskit/video/styles.css";

import { presentations } from "@/presentations";

const blockRegistry = { ...codeBlockRegistry, ...videoBlockRegistry };

export default function PresentationPage({ params }) {
  const { id } = use(params);
  const presentation = presentations[id];

  if (!presentation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-slate-700 dark:text-slate-300">
        <p className="text-lg">Ingen presentation hittades för &quot;{id}&quot;.</p>
        <Link href="/" className="text-teal-600 dark:text-teal-400 underline font-medium">
          Tillbaka till startsidan
        </Link>
      </div>
    );
  }

  return (
    <Presentation
      presentation={presentation}
      blockRegistry={blockRegistry}
    />
  );
}
