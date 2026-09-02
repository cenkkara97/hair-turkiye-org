import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, ImageIcon } from "lucide-react";
import { EditorialNote, GuideHero, GuideLayout, GuideSection, RelatedGuideCard } from "@/components/editorial/guide-layout";
import type { DetailGuideContent } from "@/types/detail-guide";

export function DetailGuidePage({ content }: { content: DetailGuideContent }) {
  const navigation = [
    { href: "#overview", label: "Overview" },
    ...content.sections.map((section) => ({ href: `#${section.id}`, label: section.title })),
    { href: "#decision", label: "Decision points" },
    { href: "#questions", label: "Common questions" },
  ];

  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, content.parent ?? { href: "/hair-transplant", label: "Hair Transplant" }, { label: content.breadcrumb }]}
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        quickAnswer={content.quickAnswer}
        readingTime={content.readingTime}
        updatedLabel="Editorial framework"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <EditorialNote title="Content status">{content.note}</EditorialNote>
            {content.related.map((item) => <RelatedGuideCard key={item.href} {...item} />)}
          </>
        }
      >
        <GuideSection id="overview" eyebrow={content.overview.eyebrow} title={content.overview.title}>
          {content.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="grid gap-3 sm:grid-cols-3">
            {content.overview.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-data-panel-border bg-white p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-700">{fact.label}</span>
                <strong className="mt-3 block text-base leading-6 text-brand-navy">{fact.value}</strong>
              </div>
            ))}
          </div>
          <figure className="overflow-hidden rounded-3xl border border-data-panel-border bg-white" data-image-slot={content.breadcrumb.toLowerCase().replaceAll(" ", "-")}>
            <div className="relative aspect-[16/8] min-h-60">
              <Image src="/images/hero.webp" alt={content.overview.imageAlt} fill className={`object-cover ${content.overview.imagePosition ?? "object-center"}`} sizes="(max-width: 1024px) 100vw, 720px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/75 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#082f49]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                <ImageIcon className="size-3.5" aria-hidden="true" /> {content.overview.imageLabel}
              </span>
            </div>
            <figcaption className="px-5 py-4 text-xs leading-5 text-brand-muted">Temporary visual placeholder — replace with the final medically appropriate editorial image.</figcaption>
          </figure>
        </GuideSection>

        {content.sections.map((section) => (
          <GuideSection key={section.id} id={section.id} eyebrow={section.eyebrow} title={section.title}>
            {section.intro ? <p>{section.intro}</p> : null}
            <div className="grid gap-4 sm:grid-cols-2">
              {section.cards.map((card, index) => (
                <article key={card.title} className="relative overflow-hidden rounded-2xl border border-data-panel-border bg-white p-5 shadow-[0_12px_35px_rgba(31,80,113,0.045)] sm:p-6">
                  <span className="absolute right-4 top-3 text-4xl font-semibold text-brand-navy/[0.055]">0{index + 1}</span>
                  <h3 className="relative pr-10 text-lg font-semibold text-brand-navy">{card.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-brand-muted">{card.text}</p>
                </article>
              ))}
            </div>
          </GuideSection>
        ))}

        <GuideSection id="decision" eyebrow={content.decision.eyebrow} title={content.decision.title}>
          <p>{content.decision.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50/55 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-emerald-950"><CheckCircle2 className="size-5" aria-hidden="true" />{content.decision.positiveTitle}</h3>
              <ul className="mt-4 space-y-3">{content.decision.positives.map((item) => <li key={item} className="text-sm leading-6 text-emerald-950/75">{item}</li>)}</ul>
            </article>
            <article className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-amber-950"><AlertCircle className="size-5" aria-hidden="true" />{content.decision.questionTitle}</h3>
              <ul className="mt-4 space-y-3">{content.decision.questions.map((item) => <li key={item} className="text-sm leading-6 text-amber-950/75">{item}</li>)}</ul>
            </article>
          </div>
        </GuideSection>

        <GuideSection id="questions" eyebrow="Quick reference" title="Common questions">
          <div className="space-y-3">
            {content.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="group rounded-2xl border border-data-panel-border bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-base font-semibold text-brand-navy sm:px-6">
                  {faq.question}<span className="text-xl font-normal text-cyan-700 group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-data-panel-border px-5 py-5 text-sm leading-7 text-brand-muted sm:px-6">{faq.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 hover:text-brand-navy">Browse all questions <ArrowRight className="size-4" aria-hidden="true" /></Link>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
