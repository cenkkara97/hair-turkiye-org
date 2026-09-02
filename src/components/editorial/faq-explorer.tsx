"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { faqItems } from "@/data/faq-content";

const categories = ["All", "Planning", "Methods", "Cost & travel", "Safety", "Recovery"] as const;

export function FaqExplorer() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = !normalisedQuery || `${item.question} ${item.answer}`.toLowerCase().includes(normalisedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="min-w-0">
      <div className="min-w-0 overflow-hidden rounded-3xl border border-data-panel-border bg-white p-4 shadow-[0_18px_55px_rgba(31,80,113,0.07)] sm:p-5">
        <label className="relative block">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-cyan-700" aria-hidden="true" />
          <span className="sr-only">Search frequently asked questions</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search costs, methods, safety or recovery..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-11 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
          />
          {query ? (
            <button type="button" onClick={() => setQuery("")} className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-brand-navy" aria-label="Clear search">
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </label>
        <div className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-1" aria-label="FAQ categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${category === item ? "bg-[#082f49] text-white" : "border border-slate-200 bg-white text-brand-muted hover:border-cyan-300 hover:text-cyan-700"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-4 mt-7 text-xs font-bold uppercase tracking-[0.14em] text-brand-muted">
        {filteredItems.length} {filteredItems.length === 1 ? "answer" : "answers"}
      </p>
      <div className="space-y-3">
        {filteredItems.map((item, index) => (
          <details key={item.question} open={index === 0 && !query} className="group rounded-2xl border border-data-panel-border bg-white shadow-[0_10px_30px_rgba(31,80,113,0.04)]">
            <summary className="flex min-w-0 cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left sm:px-6">
              <span className="min-w-0">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-700">{item.category}</span>
                <strong className="text-base leading-6 text-brand-navy sm:text-lg">{item.question}</strong>
              </span>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                <ChevronDown className="size-4 transition group-open:rotate-180" aria-hidden="true" />
              </span>
            </summary>
            <p className="border-t border-data-panel-border px-5 py-5 text-sm leading-7 text-brand-muted sm:px-6">{item.answer}</p>
          </details>
        ))}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-cyan-300 bg-cyan-50/60 px-6 py-10 text-center">
            <p className="font-semibold text-brand-navy">No matching question yet.</p>
            <p className="mt-2 text-sm text-brand-muted">Try another phrase or choose a different category.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
