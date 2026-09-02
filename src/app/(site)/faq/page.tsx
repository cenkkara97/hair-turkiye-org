import type { Metadata } from "next";
import { ArrowRight, BookOpenText, CircleHelp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FaqExplorer } from "@/components/editorial/faq-explorer";
import { GuideHero } from "@/components/editorial/guide-layout";
import { faqItems } from "@/data/faq-content";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hair Transplant FAQ",
  description: "Answers to common questions about hair transplant safety, costs, timelines, and clinic verification in Turkey.",
  path: "/faq",
  keywords: ["hair transplant faq", "turkey hair transplant questions", "hair transplant safety faq"],
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
        eyebrow="Patient questions"
        title="Clear answers for planning a hair transplant in Turkey"
        intro="Search practical answers about methods, clinic checks, cost, travel and recovery. Each topic is designed to become a deeper editorial guide as reviewed content is added."
        quickAnswer="Start with suitability and clinic verification. Method labels and package prices only become meaningful once the medical plan and responsible team are clear."
        readingTime={`${faqItems.length} practical answers`}
        updatedLabel="Searchable library"
      />

      <section className="site-container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="min-w-0">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Explore by topic</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-brand-navy sm:text-4xl">Find the question behind the sales pitch</h2>
              <p className="mt-4 text-base leading-8 text-brand-muted">Filter the library or search for a term. Open answers only when you need the detail.</p>
            </div>
            <FaqExplorer />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-[#082f49] p-6 text-white sm:p-7">
              <CircleHelp className="size-6 text-cyan-300" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold">Cannot find your question?</h2>
              <p className="mt-3 text-sm leading-7 text-cyan-50/70">Send a topic suggestion or correction request. Medical advice and individual treatment decisions should stay with qualified clinicians.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white">
                Contact the editorial team <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <Link href="/clinic-checklist" className="group block rounded-3xl border border-cyan-200 bg-cyan-50/65 p-6">
              <ShieldCheck className="size-5 text-cyan-700" aria-hidden="true" />
              <span className="mt-4 block text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">Interactive tool</span>
              <strong className="mt-2 block text-lg text-brand-navy">Complete the clinic checklist</strong>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-700">Open checklist <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
            <div className="rounded-3xl border border-data-panel-border bg-white p-6">
              <BookOpenText className="size-5 text-cyan-700" aria-hidden="true" />
              <p className="mt-4 text-sm leading-7 text-brand-muted">Answers shown here are structured sample content and should receive medical and source review before indexation.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
