"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Check, RotateCcw, ShieldCheck } from "lucide-react";

const checklistGroups = [
  {
    title: "Medical team",
    description: "Confirm who is responsible for assessment, planning and the procedure.",
    items: [
      "The lead physician is named before booking.",
      "Professional registration can be checked.",
      "Roles for extraction, channel opening and implantation are explained.",
    ],
  },
  {
    title: "Facility and safety",
    description: "Check where treatment takes place and how complications are handled.",
    items: [
      "The treatment facility and licence details are supplied.",
      "A health questionnaire and medication review are completed.",
      "An emergency contact and escalation plan are documented.",
    ],
  },
  {
    title: "Treatment plan",
    description: "Look for individual planning instead of a sales-led graft promise.",
    items: [
      "Donor capacity and future hair loss are considered.",
      "The proposed graft range is explained rather than guaranteed.",
      "Hairline design and expected density are discussed with the medical team.",
    ],
  },
  {
    title: "Price and follow-up",
    description: "Make sure the written offer covers the complete patient journey.",
    items: [
      "Included treatment, hotel, transfers and medication are itemised.",
      "Cancellation and revision terms are available in writing.",
      "The follow-up schedule and responsible contact are clear.",
    ],
  },
] as const;

export function ClinicChecklistTool() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const allItems = useMemo(() => checklistGroups.flatMap((group) => group.items), []);
  const progress = Math.round((checkedItems.length / allItems.length) * 100);

  function toggleItem(item: string) {
    setCheckedItems((current) =>
      current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item],
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-data-panel-border bg-white shadow-[0_22px_65px_rgba(31,80,113,0.08)]">
      <div className="border-b border-data-panel-border bg-[#082f49] p-6 text-white sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Your progress</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{checkedItems.length} of {allItems.length} checks</p>
          </div>
          <span className="text-4xl font-semibold text-cyan-300">{progress}%</span>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-cyan-300 transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="divide-y divide-data-panel-border">
        {checklistGroups.map((group, groupIndex) => (
          <section key={group.title} className="p-5 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-700">
                0{groupIndex + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{group.title}</h3>
                <p className="mt-1 text-sm leading-6 text-brand-muted">{group.description}</p>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 sm:ml-14">
              {group.items.map((item) => {
                const isChecked = checkedItems.includes(item);
                return (
                  <label
                    key={item}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 transition ${
                      isChecked ? "border-cyan-300 bg-cyan-50/70" : "border-slate-200 bg-white hover:border-cyan-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(item)}
                      className="sr-only"
                    />
                    <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border ${isChecked ? "border-cyan-600 bg-cyan-600 text-white" : "border-slate-300 bg-white"}`}>
                      {isChecked ? <Check className="size-3.5" aria-hidden="true" /> : null}
                    </span>
                    <span className={`text-sm leading-6 ${isChecked ? "font-medium text-brand-navy" : "text-brand-muted"}`}>{item}</span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {progress === 100 ? (
        <div className="border-t border-cyan-200 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_34%),#082f49] p-6 text-white sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_250px] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-white/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy">
                <Award className="size-3.5" aria-hidden="true" />
                Current #1 overall
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl text-brand-navy">Looking for a clinic that meets these standards?</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-ink">
                Our current comparison places <strong className="text-brand-navy">Dr. Serkan Aygin Clinic first overall</strong>, based on the combined strength of clinical oversight, infrastructure, international patient experience and documented trust signals.
              </p>
              <p className="mt-3 text-xs leading-6 text-brand-ink">This is an editorial ranking result, not individual medical advice. Final evidence and source review are required before launch.</p>
            </div>
            <div className="flex flex-col gap-3">
            <Link
              href="/clinics#comparison"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-400"
            >
              Why it ranks #1
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <Link
              href="/clinics/dr-serkan-aygin"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300 bg-white px-5 py-3 text-sm font-bold !text-[#082f49] transition hover:bg-cyan-50"
            >
              View clinic profile
            </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-t border-data-panel-border bg-cyan-50/55 px-5 py-4 text-center text-xs leading-5 text-brand-muted sm:px-7">
          Complete all 12 checks to unlock the current top-ranked clinic benchmark.
        </div>
      )}

      <div className="flex flex-col gap-3 border-t border-data-panel-border bg-slate-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="flex items-center gap-2 text-xs leading-5 text-brand-muted">
          <ShieldCheck className="size-4 shrink-0 text-cyan-700" aria-hidden="true" />
          This checklist supports research; it does not replace medical advice.
        </p>
        <button
          type="button"
          onClick={() => setCheckedItems([])}
          disabled={checkedItems.length === 0}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-700/20 bg-white px-4 py-2 text-xs font-bold text-cyan-700 transition hover:border-cyan-700/40 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          Reset checklist
        </button>
      </div>
    </div>
  );
}
