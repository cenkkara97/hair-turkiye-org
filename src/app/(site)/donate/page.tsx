import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, HeartHandshake, Languages, MessageSquareText } from "lucide-react";
import { GuideHero } from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contribute to HairTurkiye.org",
  description: "Contribute source suggestions, corrections, expert feedback, or accessibility improvements to HairTurkiye.org.",
  path: "/donate",
  keywords: ["contribute hairturkiye", "hair transplant research corrections"],
});

const contributionTypes = [
  { icon: FileSearch, title: "Source a claim", text: "Suggest a primary study, official record or updated public dataset." },
  { icon: MessageSquareText, title: "Review a guide", text: "Flag unclear language, missing context or a practical patient question." },
  { icon: Languages, title: "Improve accessibility", text: "Recommend language, usability or international-patient improvements." },
] as const;

export default function DonatePage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Contribute" }]}
        eyebrow="Community contribution"
        title="Help make the information clearer and more useful"
        intro="The most valuable contribution during development is better evidence: corrections, strong sources, expert review and the questions real patients struggle to answer."
        quickAnswer="This page does not currently collect payments. Contributions are limited to editorial feedback, source suggestions and accessibility improvements."
        readingTime="Open contribution route"
        updatedLabel="No payment collection"
      />

      <section className="site-container py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700"><HeartHandshake className="size-6" aria-hidden="true" /></span>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Ways to contribute</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-brand-navy sm:text-4xl">Useful input is specific, sourced and easy to review</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contributionTypes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-data-panel-border bg-white p-6 shadow-[0_14px_40px_rgba(31,80,113,0.05)]">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="size-5" aria-hidden="true" /></span>
                  <h3 className="mt-6 text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-[#082f49] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h2 className="text-2xl font-semibold">Have something the editors should review?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-cyan-50/70">Send the page URL, your suggested change and a supporting source when possible. Do not send personal medical information.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#082f49] transition hover:bg-white">
              Contact us <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
