"use client";

import { ArrowRight } from "@phosphor-icons/react";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="space-y-4 mb-16">
      <div className="flex items-center gap-4">
        <ArrowRight size={32} weight="bold" className="text-accent-orange" />
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          {title}
        </h2>
        <div className="h-0.5 bg-blueprint-line/10 flex-grow" />
      </div>
      {subtitle && (
        <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 pl-12">
          {subtitle}
        </p>
      )}
    </div>
  );
}
