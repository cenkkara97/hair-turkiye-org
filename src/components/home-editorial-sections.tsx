import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BookOpenText,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  HeartPulse,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
} from "lucide-react";

const guideCards = [
  {
    href: "/why-turkey",
    label: "Destination guide",
    title: "Why patients consider Turkey",
    description: "Understand the cost, travel and clinical factors behind Turkey's international reputation.",
    icon: Sparkles,
    number: "01",
  },
  {
    href: "/why-turkey/cost",
    label: "Cost guide",
    title: "What the package price includes",
    description: "Compare the headline price with the services, support and follow-up around treatment.",
    icon: BadgeDollarSign,
    number: "02",
  },
  {
    href: "/hair-transplant",
    label: "Methods explained",
    title: "FUE, DHI and Sapphire FUE",
    description: "See how common terminology differs and which questions matter more than the method name.",
    icon: Stethoscope,
    number: "03",
  },
  {
    href: "/clinic-checklist",
    label: "Patient safety",
    title: "How to check a clinic",
    description: "Use a structured checklist for credentials, medical roles, documentation and aftercare.",
    icon: ShieldCheck,
    number: "04",
  },
] as const;

const methodology = [
  { label: "Surgeon credentials", weight: "20%", icon: UserCheck },
  { label: "Physician involvement", weight: "20%", icon: Stethoscope },
  { label: "Clinical safety", weight: "15%", icon: ShieldCheck },
  { label: "Patient outcomes", weight: "15%", icon: HeartPulse },
  { label: "Public reputation", weight: "10%", icon: FileSearch },
  { label: "Patient experience", weight: "10%", icon: ClipboardCheck },
  { label: "Pricing clarity", weight: "5%", icon: BadgeDollarSign },
  { label: "Evidence quality", weight: "5%", icon: Scale },
] as const;

export function ExploreGuideSection() {
  return (
    <section className="border-y border-brand-gold/15 bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">Start with the essentials</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-brand-navy sm:text-4xl lg:text-5xl">
              Research the decision, not just the procedure.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-brand-muted lg:justify-self-end lg:text-lg">
            A structured route through the questions international patients ask before comparing clinics, prices and techniques.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {guideCards.map((card, index) => {
            const Icon = card.icon;
            const isFeatured = index === 0;

            return (
              <Link
                key={card.title}
                href={card.href}
                className={`group relative min-h-[290px] overflow-hidden rounded-3xl border p-4 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                  isFeatured
                    ? "border-[#0b6077] bg-[#0a3c56] text-white shadow-[0_24px_65px_rgba(8,47,73,0.2)]"
                    : "border-data-panel-border bg-[#f9fcfe] text-brand-navy shadow-[0_16px_45px_rgba(31,80,113,0.06)] hover:border-brand-gold/60"
                }`}
              >
                <span className={`absolute right-5 top-4 text-5xl font-semibold tracking-[-0.06em] ${isFeatured ? "text-white/8" : "text-brand-navy/[0.06]"}`}>
                  {card.number}
                </span>
                <span className={`inline-flex size-11 items-center justify-center rounded-2xl ${isFeatured ? "bg-cyan-300 text-[#082f49]" : "bg-cyan-100 text-cyan-700"}`}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className={`mt-8 text-[11px] font-bold uppercase tracking-[0.16em] ${isFeatured ? "text-cyan-200" : "text-cyan-700"}`}>
                  {card.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-7 tracking-[-0.015em]">{card.title}</h3>
                <p className={`my-5 text-sm leading-7 ${isFeatured ? "text-cyan-50/70" : "text-brand-muted"}`}>{card.description}</p>
                <span className={`absolute bottom-6 left-6 inline-flex items-center gap-2 text-xs font-bold sm:left-7 ${isFeatured ? "text-cyan-200" : "text-cyan-700"}`}>
                  Read the guide
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MethodologyPreviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#082f49] py-16 text-white sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: "radial-gradient(circle at 78% 12%, rgba(79,168,215,.25), transparent 32%)" }}
        aria-hidden="true"
      />
      <div className="site-container relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
            <BookOpenText className="size-4" aria-hidden="true" />
            Research framework
          </span>
          <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            A clinic ranking should show how it reached the result.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-cyan-50/68">
            The final research content will be supplied separately. This interface is designed to distinguish documented facts, clinic statements and editorial assessment at a glance.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Verified", "Corroborated", "Clinic-reported", "Unverified"].map((label) => (
              <span key={label} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-50/80">
                {label}
              </span>
            ))}
          </div>
          <Link href="/clinics#methodology" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white">
            View the ranking framework
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {methodology.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="group rounded-2xl border border-white/12 bg-white/[0.065] p-5 backdrop-blur transition hover:bg-white/[0.1] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cyan-300/12 text-cyan-200">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <strong className="text-xl font-semibold text-cyan-200">{item.weight}</strong>
                </div>
                <h3 className="mt-6 text-base font-semibold text-white">{item.label}</h3>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: item.weight }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="site-container relative mt-12 sm:mt-16">
        <div className="flex flex-col gap-5 rounded-3xl border border-cyan-200/18 bg-cyan-200/[0.08] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#082f49]">
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-white">Built for evidence, ready for editorial data</p>
              <p className="mt-1 text-sm leading-6 text-cyan-50/65">Scores, source dates and research status can be replaced without redesigning the page.</p>
            </div>
          </div>
          <Link href="/sources" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white">
            Explore source standards
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
