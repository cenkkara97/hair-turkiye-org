import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, CalendarCheck2, FileSearch, LibraryBig, Scale, Stethoscope } from "lucide-react";
import {
  EditorialNote,
  GuideHero,
  GuideLayout,
  GuideSection,
  RelatedGuideCard,
} from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sources Library",
  description: "Medical, institutional and public data source standards used across HairTurkiye.org content.",
  path: "/sources",
  keywords: ["hair transplant sources", "medical references hair transplant"],
});

const sourceGroups = [
  {
    icon: Stethoscope,
    title: "Medical societies",
    description: "Professional guidance, practice patterns and patient-safety material.",
    sources: [
      { label: "International Society of Hair Restoration Surgery", domain: "ishrs.org", href: "https://ishrs.org" },
      { label: "American Society of Plastic Surgeons", domain: "plasticsurgery.org", href: "https://www.plasticsurgery.org" },
    ],
  },
  {
    icon: Building2,
    title: "Public institutions",
    description: "Official licensing, health-system and destination information.",
    sources: [
      { label: "Turkish Ministry of Health", domain: "saglik.gov.tr", href: "https://www.saglik.gov.tr" },
      { label: "HealthTürkiye", domain: "healthturkiye.com", href: "https://www.healthturkiye.com" },
    ],
  },
  {
    icon: LibraryBig,
    title: "Research databases",
    description: "Peer-reviewed literature and indexed medical publications.",
    sources: [
      { label: "PubMed / National Library of Medicine", domain: "pubmed.ncbi.nlm.nih.gov", href: "https://pubmed.ncbi.nlm.nih.gov" },
      { label: "Cochrane Library", domain: "cochranelibrary.com", href: "https://www.cochranelibrary.com" },
    ],
  },
] as const;

const navigation = [
  { href: "#library", label: "Source library" },
  { href: "#evidence", label: "Evidence labels" },
  { href: "#workflow", label: "Review workflow" },
  { href: "#corrections", label: "Corrections" },
];

export default function SourcesPage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Sources" }]}
        eyebrow="Evidence library"
        title="See where the information comes from"
        intro="A useful guide should make its evidence visible. This library separates medical research, official records, clinic-provided information and editorial assessment."
        quickAnswer="Final articles should link directly to the supporting source, display a review date and make it clear when a detail comes from a clinic rather than a public record."
        readingTime="Source standards"
        updatedLabel="Pre-launch framework"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <EditorialNote title="Current status">
              The source architecture is ready. The SEO and research team can add reviewed citations, publication dates and archived evidence before launch.
            </EditorialNote>
            <RelatedGuideCard href="/clinics#methodology" eyebrow="Methodology" title="How clinic scoring works" />
            <RelatedGuideCard href="/contact" eyebrow="Corrections" title="Submit a source update" />
          </>
        }
      >
        <GuideSection id="library" eyebrow="Reference starting points" title="Core sources organised by purpose">
          <p>These organisations are starting points for editorial research. A link in this library does not mean every page or claim from that organisation has been reviewed.</p>
          <div className="space-y-4">
            {sourceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="overflow-hidden rounded-2xl border border-data-panel-border bg-white">
                  <div className="flex items-start gap-4 bg-[#f2f9fc] p-5 sm:p-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm"><Icon className="size-5" aria-hidden="true" /></span>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-navy">{group.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-brand-muted">{group.description}</p>
                    </div>
                  </div>
                  <div className="divide-y divide-data-panel-border">
                    {group.sources.map((source) => (
                      <Link key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-cyan-50/50 sm:px-6">
                        <span>
                          <strong className="block text-sm text-brand-navy">{source.label}</strong>
                          <span className="mt-1 block font-mono text-xs text-brand-muted">{source.domain}</span>
                        </span>
                        <ArrowUpRight className="size-4 shrink-0 text-cyan-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection id="evidence" eyebrow="Read the label" title="Not every source supports the same conclusion">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Verified", "Confirmed against an official or primary source."],
              ["Corroborated", "Supported by more than one credible source."],
              ["Clinic-reported", "Supplied by the provider and identified as such."],
              ["Editorial assessment", "A reasoned comparison based on disclosed criteria."],
            ].map(([label, description], index) => (
              <div key={label} className="rounded-2xl border border-data-panel-border bg-white p-5">
                <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${index < 2 ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}>{label}</span>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{description}</p>
              </div>
            ))}
          </div>
        </GuideSection>

        <GuideSection id="workflow" eyebrow="Editorial workflow" title="From discovery to a publishable claim">
          <div className="grid gap-3">
            {[
              { icon: FileSearch, step: "01", title: "Find", text: "Locate the strongest available primary or official source." },
              { icon: Scale, step: "02", title: "Assess", text: "Check relevance, date, limitations and whether the claim is directly supported." },
              { icon: CalendarCheck2, step: "03", title: "Record", text: "Save the source URL, review date, status and the statement it supports." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-data-panel-border bg-white p-5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#082f49] text-cyan-200"><Icon className="size-5" aria-hidden="true" /></span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-700">Step {item.step}</p>
                    <h3 className="mt-1 text-base font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-brand-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection id="corrections" eyebrow="Keep it current" title="Corrections should be traceable">
          <p>When evidence changes, the affected page should record what was updated and when it was reviewed. Source suggestions can be submitted through the contact page.</p>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
