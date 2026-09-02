import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, CircleDot, Clock3, Sparkles } from "lucide-react";
import {
  EditorialNote,
  GuideHero,
  GuideLayout,
  GuideSection,
  RelatedGuideCard,
} from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hair Transplant Guide",
  description: "Understand FUE, DHI, and Sapphire methods with practical preparation and recovery guidance for patients.",
  path: "/hair-transplant",
  keywords: ["hair transplant methods", "fue dhi sapphire comparison", "hair transplant recovery"],
});

const navigation = [
  { href: "#overview", label: "How transplantation works" },
  { href: "#methods", label: "Methods compared" },
  { href: "#journey", label: "Treatment journey" },
  { href: "#candidate", label: "Candidate questions" },
];

const methods = [
  {
    name: "FUE",
    href: "/hair-transplant/fue",
    fullName: "Follicular Unit Extraction",
    summary: "Individual grafts are extracted from the donor area before recipient sites are prepared and implanted.",
    focus: "Extraction approach",
  },
  {
    name: "DHI",
    href: "/hair-transplant/dhi",
    fullName: "Direct Hair Implantation",
    summary: "A pen-style implanter is used during placement. Extraction is still generally based on FUE principles.",
    focus: "Implantation tool",
  },
  {
    name: "Sapphire FUE",
    href: "/hair-transplant/sapphire-fue",
    fullName: "FUE with sapphire blades",
    summary: "A variation of FUE where sapphire blades may be used when opening recipient channels.",
    focus: "Channel-opening tool",
  },
] as const;

const journeySteps = [
  { icon: Activity, title: "Assessment", text: "Hair loss, donor capacity, health history and expectations are reviewed." },
  { icon: CircleDot, title: "Planning", text: "The treatment area, graft strategy and hairline are agreed with the medical team." },
  { icon: Sparkles, title: "Procedure", text: "Grafts are extracted, prepared and placed according to the treatment plan." },
  { icon: Clock3, title: "Recovery", text: "The clinic supplies aftercare steps and monitors progress over the following months." },
] as const;

export default function HairTransplantPage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Hair Transplant" }]}
        eyebrow="Procedure guide"
        title="Hair transplant methods, planning and patient journey"
        intro="Method names are useful, but they do not tell the whole story. A strong treatment plan begins with donor management, realistic design and clear medical responsibility."
        quickAnswer="FUE describes how grafts are extracted. DHI and Sapphire FUE mainly describe tools or steps used during implantation. Suitability matters more than a fashionable label."
        readingTime="7 minute overview"
        updatedLabel="Editorial framework"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <EditorialNote title="Before comparing">
              Ask who evaluates your donor area, who designs the plan and which parts of the procedure are performed by the physician.
            </EditorialNote>
            <RelatedGuideCard href="/why-turkey" eyebrow="Destination" title="Why patients consider Turkey" />
            <RelatedGuideCard href="/clinic-checklist" eyebrow="Checklist" title="How to assess a clinic" />
          </>
        }
      >
        <GuideSection id="overview" eyebrow="The fundamentals" title="A hair transplant redistributes existing hair">
          <p>
            Hair follicles are usually moved from a donor area to areas affected by thinning or hair loss. The procedure does not create new follicles, so long-term planning and careful use of the donor area are central to a natural-looking result.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Donor planning", "Protect a limited resource"],
              ["02", "Recipient design", "Plan direction and density"],
              ["03", "Aftercare", "Support healing and follow-up"],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-data-panel-border bg-[#f8fcfe] p-5">
                <span className="text-xs font-bold text-cyan-700">{number}</span>
                <h3 className="mt-5 text-base font-semibold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </GuideSection>

        <GuideSection id="methods" eyebrow="Method comparison" title="Understand what each label actually describes">
          <p>
            Clinics may market method names as complete treatment systems. In practice, the differences often relate to a particular tool or stage of the procedure.
          </p>
          <div className="space-y-4">
            {methods.map((method) => (
              <Link key={method.name} href={method.href} className="group block rounded-2xl border border-data-panel-border bg-white p-5 shadow-[0_12px_35px_rgba(31,80,113,0.045)] transition hover:-translate-y-0.5 hover:border-cyan-300 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">{method.name}</p>
                    <h3 className="mt-2 text-xl font-semibold text-brand-navy">{method.fullName}</h3>
                  </div>
                  <span className="w-fit rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800">{method.focus}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{method.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyan-700">Read the full guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <div className="rounded-2xl border border-brand-gold/25 bg-brand-cream/65 p-6">
            <p className="text-sm leading-7 text-brand-ink">
              <strong className="text-brand-navy">Editorial principle:</strong> explain the clinical process first, then compare the marketed method name with the actual treatment plan.
            </p>
          </div>
        </GuideSection>

        <GuideSection id="journey" eyebrow="From planning to progress" title="The procedure is one step in a longer process">
          <div className="grid gap-4 sm:grid-cols-2">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="relative overflow-hidden rounded-2xl bg-[#082f49] p-6 text-white">
                  <span className="absolute right-4 top-2 text-5xl font-semibold text-white/[0.06]">0{index + 1}</span>
                  <Icon className="size-5 text-cyan-300" aria-hidden="true" />
                  <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-cyan-50/70">{step.text}</p>
                </article>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection id="candidate" eyebrow="Personal suitability" title="Questions a good assessment should answer">
          <div className="rounded-3xl bg-[#082f49] p-6 text-white sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Is the hair loss pattern stable?",
                "Is the donor area strong enough?",
                "Are expectations realistic?",
                "Is future hair loss included in the plan?",
                "Are health conditions and medication reviewed?",
                "Is non-surgical treatment worth discussing?",
              ].map((question) => (
                <li key={question} className="flex items-start gap-3 text-sm leading-6 text-cyan-50/80">
                  <CircleDot className="mt-1 size-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  {question}
                </li>
              ))}
            </ul>
            <Link href="/clinic-checklist" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white">
              Continue to the clinic checklist
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
