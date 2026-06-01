"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type ScoreBar = {
  label: string;
  value: number;
  score: string;
};

type Clinic = {
  rankLabel: string;
  rank: number;
  name: string;
  subtitle: string;
  summary: string;
  score: string;
  reviews: string;
  model: string;
  best: string;
  pros: string;
  cons: string;
  tags: string[];
  bars: ScoreBar[];
};

const clinics: Clinic[] = [
  {
    rankLabel: "#1 Ranked Clinic",
    rank: 1,
    name: "Dr. Serkan Aygin Clinic",
    subtitle: "Istanbul - Dr. Serkan Aygin - Founded 1996",
    summary:
      "Best overall choice for patients looking for a strong balance of international recognition, hospital-grade accreditation, doctor-led planning, structured patient logistics, and verified review depth.",
    score: "5.0",
    reviews: "~1,494",
    model: "Doctor-set protocols",
    best: "Best overall",
    pros:
      "Strongest combination of awards, accreditation, review depth, international patient infrastructure, and surgeon-supervised planning.",
    cons:
      "Higher daily patient volume than ultra-boutique clinics such as ASMED or HLC.",
    tags: ["JCI Accredited", "International Awards", "High Review Depth"],
    bars: [
      { label: "Doctor Oversight", value: 96, score: "5.0" },
      { label: "Accreditations", value: 100, score: "5.0" },
      { label: "Reviews", value: 98, score: "4.9" },
    ],
  },
  {
    rankLabel: "#2 Ranked Clinic",
    rank: 2,
    name: "ASMED Surgical Center",
    subtitle: "Istanbul - Dr. Koray Erdogan - Founded 2001",
    summary:
      "A premium boutique clinic preferred by patients who value technical innovation, low-volume planning, strong forum reputation, and Dr. Koray Erdogan's personal consultation model.",
    score: "4.7",
    reviews: "~86",
    model: "Boutique premium",
    best: "Technical innovation",
    pros:
      "Excellent reputation in specialist communities, proprietary tools, strong donor ethics, and low-volume structure.",
    cons:
      "Much higher pricing and lower public review volume compared with larger international clinics.",
    tags: ["Boutique", "Technical Innovation", "Premium Pricing"],
    bars: [
      { label: "Doctor Oversight", value: 94, score: "4.7" },
      { label: "Accreditations", value: 88, score: "4.4" },
      { label: "Reviews", value: 62, score: "3.1" },
    ],
  },
  {
    rankLabel: "#3 Ranked Clinic",
    rank: 3,
    name: "HLC Hairline Clinic",
    subtitle: "Ankara - Dr. Ozgur Oztan - Founded 2002",
    summary:
      "A doctor-only manual FUE clinic with a strong reputation for revision cases, repair work, conservative planning, and natural hairline design.",
    score: "4.5",
    reviews: "Limited",
    model: "Doctor-only model",
    best: "Repair cases",
    pros:
      "Highest doctor-involvement model, physician-performed surgical steps, and strong ethical positioning.",
    cons:
      "Lower marketing visibility, limited verified review footprint, and less convenient location for many international patients.",
    tags: ["Doctor Only", "Manual FUE", "Repair Specialist"],
    bars: [
      { label: "Doctor Oversight", value: 100, score: "5.0" },
      { label: "Accreditations", value: 82, score: "4.1" },
      { label: "Reviews", value: 48, score: "2.4" },
    ],
  },
  {
    rankLabel: "#4 Ranked Clinic",
    rank: 4,
    name: "Dr. Terziler Exclusive Clinic",
    subtitle: "Istanbul - Dr. Servet Terziler - Besiktas",
    summary:
      "A premium Istanbul clinic with AACI accreditation, private clinic infrastructure, robotic DHI positioning, and a long-standing presence in Turkish hair restoration.",
    score: "4.2",
    reviews: "~219",
    model: "Premium clinic",
    best: "Premium experience",
    pros:
      "AACI accreditation, premium infrastructure, structured follow-up schedule, and long clinical track record.",
    cons:
      "Smaller verified review volume than leading mass-market clinics and more domestic or industry-focused recognition.",
    tags: ["AACI Accredited", "Premium Infrastructure", "Robotic DHI"],
    bars: [
      { label: "Doctor Oversight", value: 84, score: "4.2" },
      { label: "Accreditations", value: 88, score: "4.4" },
      { label: "Reviews", value: 66, score: "3.3" },
    ],
  },
  {
    rankLabel: "#5 Ranked Clinic",
    rank: 5,
    name: "Cosmedica Clinic",
    subtitle: "Istanbul - Dr. Levent Acar - Sisli",
    summary:
      "A high-visibility international clinic with a named lead surgeon, strong German and English-speaking market presence, large review footprint, and Sapphire FUE / Micro Sapphire DHI positioning.",
    score: "4.0",
    reviews: "~929",
    model: "High-volume international",
    best: "International visibility",
    pros:
      "Named lead surgeon, strong international marketing presence, large review base, and long operational history.",
    cons:
      "Higher daily patient volume than boutique clinics and less specialist forum prestige than ASMED or HLC.",
    tags: ["Named Surgeon", "Large Review Base", "German Market"],
    bars: [
      { label: "Doctor Oversight", value: 78, score: "3.9" },
      { label: "Accreditations", value: 76, score: "3.8" },
      { label: "Reviews", value: 86, score: "4.3" },
    ],
  },
  {
    rankLabel: "#6 Ranked Clinic",
    rank: 6,
    name: "Vera Clinic",
    subtitle: "Istanbul - Multi-surgeon team - Kartal",
    summary:
      "A polished high-volume medical tourism clinic with strong logistics, large Trustpilot review volume, and broad cosmetic treatment infrastructure, but without a single named lead surgeon.",
    score: "3.5",
    reviews: "~1,862",
    model: "High-volume package",
    best: "Logistics and reviews",
    pros:
      "Very large review footprint, polished international patient logistics, and broad medical tourism infrastructure.",
    cons:
      "No single named lead surgeon, stronger package-clinic positioning, and more forum concerns around technician-led procedures.",
    tags: ["High Review Volume", "Medical Tourism", "Multi-Surgeon Team"],
    bars: [
      { label: "Doctor Oversight", value: 58, score: "2.9" },
      { label: "Accreditations", value: 72, score: "3.6" },
      { label: "Reviews", value: 100, score: "5.0" },
    ],
  },
];

const methodCards = [
  {
    id: "1",
    title: "Doctor Involvement",
    text: "Whether the named surgeon personally consults, plans, supervises, and follows up.",
  },
  {
    id: "2",
    title: "Patient Volume",
    text: "How many patients are handled per team or surgeon per day.",
  },
  {
    id: "3",
    title: "Accreditations",
    text: "JCI, ISO, AACI, Ministry of Health licensing, and medical memberships.",
  },
  {
    id: "4",
    title: "Recognition",
    text: "International awards, media coverage, and independent medical reputation.",
  },
  {
    id: "5",
    title: "Verified Reviews",
    text: "Review volume, consistency, and credibility across major patient platforms.",
  },
  {
    id: "6",
    title: "Community Standing",
    text: "Reputation on specialist forums, Reddit discussions, and hair restoration communities.",
  },
] as const;

const versusCards = [
  {
    title: "ASMED vs Dr. Serkan Aygin",
    text: "ASMED is the boutique technical-innovation option. Dr. Serkan Aygin Clinic is stronger institutionally with broader recognition and review depth.",
  },
  {
    title: "Vera Clinic vs Cosmedica",
    text: "Cosmedica has a named lead surgeon and stronger surgeon-identification clarity. Vera offers larger review volume and polished logistics.",
  },
  {
    title: "HLC vs ASMED",
    text: "HLC is stronger for doctor-only manual FUE and repair cases. ASMED is stronger for Istanbul logistics and premium structured planning.",
  },
] as const;

const faqs = [
  {
    question: "What is the best hair transplant clinic in Turkey in 2026?",
    answer:
      "Based on this six-criteria evaluation, Dr. Serkan Aygin Clinic ranks first overall, followed by ASMED and HLC Hairline Clinic.",
  },
  {
    question: "How much does a hair transplant cost in Turkey in 2026?",
    answer:
      "The article estimates a wide range from approximately EUR 1,650 to EUR 13,500 depending on clinic positioning, graft count, and package structure.",
  },
  {
    question: "Should I choose a boutique clinic or a high-volume clinic?",
    answer:
      "Boutique clinics usually offer more direct doctor involvement. Larger accredited clinics may offer stronger logistics, infrastructure, and international patient support.",
  },
  {
    question: "What should I check before booking?",
    answer:
      "Check the named doctor, medical credentials, number of patients per day, accreditation status, written pricing, review consistency, and 12-month patient results.",
  },
] as const;

const actionPrimaryClassName =
  "rounded-full bg-cyan-700 px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_35px_rgba(14,116,144,0.2)] transition-transform hover:-translate-y-0.5";
const actionSecondaryClassName =
  "rounded-full border border-cyan-700/20 bg-white px-5 py-3 text-sm font-extrabold text-cyan-700 transition-transform hover:-translate-y-0.5";
const metricCardClassName = "rounded-2xl border border-cyan-100 bg-cyan-50 p-4";
const metricCardCompactClassName = "rounded-2xl border border-cyan-100 bg-cyan-50 p-3 text-center";
const metricValueClassName = "block text-base font-extrabold text-cyan-700 sm:text-lg";

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl sm:mb-10">
      <span className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-cyan-700 sm:text-sm">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#092f35] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function ClinicComparisonPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);
  const selectedClinic = useMemo(() => clinics[selectedIndex], [selectedIndex]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.20),transparent_32%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.14),transparent_35%),#f7fbfd]">
      <section className="site-container py-12 sm:py-16">
        <div className="mb-8 grid gap-6 rounded-3xl border border-cyan-900/10 bg-white/80 p-5 shadow-[0_30px_90px_rgba(9,47,53,0.12)] backdrop-blur-sm sm:p-8 lg:grid-cols-[1fr_360px]">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-cyan-700 sm:text-sm">
              2026 Editorial Snapshot
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#092f35] sm:text-5xl lg:text-6xl">
              Best Hair Transplant Clinics in Turkey
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore a practical ranking view built around doctor oversight, accreditation, review credibility, and patient-fit tradeoffs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#comparison"
                className={actionPrimaryClassName}
              >
                Start Comparison
              </Link>
              <Link
                href="#methodology"
                className={actionSecondaryClassName}
              >
                Ranking Logic
              </Link>
            </div>
          </div>

          <article className="rounded-3xl border border-cyan-700/15 bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="grid place-items-center rounded-2xl bg-cyan-700 text-lg font-black text-white size-12 sm:size-14 sm:text-xl">
                #1
              </div>
              <div className="text-right text-2xl font-black text-cyan-700 sm:text-3xl">
                5.0
                <span className="block text-xs font-bold text-slate-500">
                  editorial score
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#092f35] sm:text-3xl">
              Dr. Serkan Aygin Clinic
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Best overall for institutional quality, patient operations, and broad public trust signals.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              <div className={metricCardCompactClassName}>
                <strong className={metricValueClassName}>
                  1996
                </strong>
                <span className="text-[11px] font-bold text-slate-500">Founded</span>
              </div>
              <div className={metricCardCompactClassName}>
                <strong className={metricValueClassName}>
                  ~1,494
                </strong>
                <span className="text-[11px] font-bold text-slate-500">Reviews</span>
              </div>
              <div className={metricCardCompactClassName}>
                <strong className={metricValueClassName}>
                  JCI
                </strong>
                <span className="text-[11px] font-bold text-slate-500">Accredited</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="comparison" className="site-container py-10 sm:py-12">
        <SectionHeading
          eyebrow="Detailed Clinic Comparison"
          title="Compare each clinic by strengths, tradeoffs, and patient fit."
          text="Select a clinic to inspect profile details, positioning, strongest points, and limitations."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="grid gap-4 sm:gap-5">
            {clinics.map((clinic, index) => {
              const isActive = index === selectedIndex;

              return (
                <button
                  key={clinic.name}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full rounded-3xl border p-4 text-left transition sm:p-6 ${
                    isActive
                      ? "border-cyan-700/45 bg-white shadow-[0_24px_70px_rgba(9,47,53,0.10)]"
                      : "border-cyan-700/15 bg-white hover:-translate-y-0.5 hover:border-cyan-700/35 hover:shadow-[0_14px_40px_rgba(9,47,53,0.05)]"
                  }`}
                >
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3.5">
                      <div className="grid shrink-0 place-items-center rounded-2xl bg-cyan-100 text-lg font-black text-cyan-700 size-11">
                        {clinic.rank}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-[#092f35] sm:text-2xl">
                          {clinic.name}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                          {clinic.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex self-start rounded-full bg-cyan-700 px-3 py-1 text-xs font-black text-white sm:text-sm">
                      {clinic.score}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {clinic.tags.map((tag) => (
                      <span
                        key={`${clinic.name}-${tag}`}
                        className="rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-bold text-slate-600 sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-2.5">
                    {clinic.bars.map((bar) => (
                      <div
                        key={`${clinic.name}-${bar.label}`}
                        className="grid grid-cols-[120px_1fr_36px] items-center gap-2 text-xs text-slate-600 sm:grid-cols-[135px_1fr_38px] sm:text-[13px]"
                      >
                        <span>{bar.label}</span>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-700 to-teal-500"
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                        <b className="text-right text-cyan-700">{bar.score}</b>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="rounded-3xl border border-cyan-700/15 bg-white p-5 shadow-[0_28px_80px_rgba(9,47,53,0.10)] sm:p-8 lg:sticky lg:top-24">
            <span className="mb-4 inline-flex rounded-full bg-cyan-700 px-3 py-1 text-xs font-black text-white">
              {selectedClinic.rankLabel}
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-[#092f35]">
              {selectedClinic.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{selectedClinic.subtitle}</p>
            <p className="mt-5 text-sm leading-7 text-slate-600">{selectedClinic.summary}</p>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className={metricCardClassName}>
                <strong className="block text-lg font-extrabold text-cyan-700">{selectedClinic.score}</strong>
                <span className="text-xs font-bold text-slate-500">Overall Score</span>
              </div>
              <div className={metricCardClassName}>
                <strong className="block text-lg font-extrabold text-cyan-700">{selectedClinic.reviews}</strong>
                <span className="text-xs font-bold text-slate-500">Verified Reviews</span>
              </div>
              <div className={metricCardClassName}>
                <strong className="block text-base font-extrabold text-cyan-700">{selectedClinic.model}</strong>
                <span className="text-xs font-bold text-slate-500">Clinic Model</span>
              </div>
              <div className={metricCardClassName}>
                <strong className="block text-base font-extrabold text-cyan-700">{selectedClinic.best}</strong>
                <span className="text-xs font-bold text-slate-500">Best For</span>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-cyan-100 bg-slate-50 p-4">
                <h4 className="mb-2 text-sm font-bold text-[#092f35]">Strengths</h4>
                <p className="text-sm leading-6 text-slate-600">{selectedClinic.pros}</p>
              </div>
              <div className="rounded-2xl border border-cyan-100 bg-slate-50 p-4">
                <h4 className="mb-2 text-sm font-bold text-[#092f35]">Tradeoffs</h4>
                <p className="text-sm leading-6 text-slate-600">{selectedClinic.cons}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="methodology" className="site-container py-10 sm:py-12">
        <SectionHeading
          eyebrow="Ranking Methodology"
          title="How the clinics were evaluated"
          text="Each clinic was scored with the same comparison logic so the ranking stays transparent."
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {methodCards.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-cyan-700/15 bg-white p-5 shadow-[0_14px_40px_rgba(9,47,53,0.045)]"
            >
              <span className="mb-3 grid place-items-center rounded-xl bg-cyan-100 text-sm font-black text-cyan-700 size-10">
                {item.id}
              </span>
              <h3 className="text-lg font-bold text-[#092f35]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container py-10 sm:py-12">
        <SectionHeading eyebrow="Head-to-Head" title="Common clinic comparisons" />
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {versusCards.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-cyan-700/15 bg-white p-6 shadow-[0_14px_40px_rgba(9,47,53,0.045)]"
            >
              <h3 className="text-xl font-bold text-[#092f35]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container py-10 sm:py-12">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="grid gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openFaqs.includes(index);

            return (
              <article
                key={faq.question}
                className="rounded-2xl border border-cyan-700/15 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaqs((prev) =>
                      prev.includes(index)
                        ? prev.filter((item) => item !== index)
                        : [...prev, index]
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-extrabold text-[#092f35] sm:px-6 sm:py-5 sm:text-base"
                >
                  <span>{faq.question}</span>
                  <span className="text-cyan-700">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mb-16 mt-8 rounded-3xl bg-[#092f35] p-6 text-sm leading-7 text-cyan-50 sm:p-8">
          <strong>Methodology note:</strong> Review counts, awards, accreditations, and clinic claims should be updated regularly. This page is an editorial comparison layout and should be paired with verified source links before publishing.
        </div>
      </section>
    </main>
  );
}
