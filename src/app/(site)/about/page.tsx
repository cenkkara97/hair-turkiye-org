import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, BookOpenText, FileSearch, Scale, ShieldCheck, Users } from "lucide-react";
import {
  EditorialNote,
  GuideHero,
  GuideLayout,
  GuideSection,
  RelatedGuideCard,
} from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About HairTurkiye.org",
  description: "Learn how HairTurkiye.org structures patient guides, clinic comparisons, source reviews, and editorial updates.",
  path: "/about",
  keywords: ["about hairturkiye", "hair transplant clinic guide", "hair transplant research policy"],
});

const navigation = [
  { href: "#mission", label: "Our purpose" },
  { href: "#research", label: "Research structure" },
  { href: "#publishing", label: "Publishing workflow" },
  { href: "#standards", label: "Editorial standards" },
];

export default function AboutPage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        eyebrow="About the project"
        title="A clearer way to research hair transplantation in Turkey"
        intro="HairTurkiye.org is being designed as an English-language research and comparison platform for international patients navigating a complex, highly marketed decision."
        quickAnswer="The platform organises destination guidance, treatment concepts, clinic evidence and patient-safety questions in a consistent format that can be reviewed and updated over time."
        readingTime="Platform overview"
        updatedLabel="Pre-launch edition"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <EditorialNote title="Launch status">
              The design system and research framework are active. Clinic facts, medical claims and disclosures remain subject to final editorial review before indexation.
            </EditorialNote>
            <RelatedGuideCard href="/sources" eyebrow="Evidence" title="Review the source standards" />
            <RelatedGuideCard href="/contact" eyebrow="Feedback" title="Suggest a correction or topic" />
          </>
        }
      >
        <GuideSection id="mission" eyebrow="Our purpose" title="Turn a crowded search journey into a structured decision">
          <p>People researching treatment abroad often move between clinic websites, social media, review platforms and fragmented medical explanations. HairTurkiye.org brings the key questions into one consistent research experience.</p>
          <figure className="overflow-hidden rounded-3xl border border-data-panel-border bg-white shadow-[0_18px_55px_rgba(31,80,113,0.07)]" data-image-slot="about-project">
            <div className="relative aspect-[16/8] min-h-64">
              <Image src="/images/hero.webp" alt="View across Istanbul used as a temporary editorial image" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 700px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/75 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#082f49]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur">Replaceable editorial image</span>
            </div>
            <figcaption className="px-5 py-4 text-xs leading-5 text-brand-muted">Temporary image slot. Replace with the final travel, clinic-research or patient-planning visual.</figcaption>
          </figure>
        </GuideSection>

        <GuideSection id="research" eyebrow="Research structure" title="Every page should answer a specific decision question">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: BookOpenText, title: "Explain", text: "Define treatments, terminology, travel steps and costs in plain language." },
              { icon: FileSearch, title: "Verify", text: "Connect important claims to a visible source, status and review date." },
              { icon: Scale, title: "Compare", text: "Use consistent criteria when placing clinics side by side." },
              { icon: ShieldCheck, title: "Prepare", text: "Give patients concrete questions and documents to request before booking." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-data-panel-border bg-white p-6">
                  <Icon className="size-5 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection id="publishing" eyebrow="Publishing workflow" title="Design and content can evolve independently">
          <p>The visual system is intentionally modular. Researchers can replace sample copy, ranking data, source dates and clinic evidence without rebuilding the page architecture.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Research", "Collect facts and primary sources."],
              ["02", "Review", "Check wording, evidence and disclosures."],
              ["03", "Publish", "Release with dates and status labels."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl bg-[#082f49] p-5 text-white">
                <span className="text-xs font-bold text-cyan-300">{number}</span>
                <h3 className="mt-6 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-50/65">{text}</p>
              </div>
            ))}
          </div>
        </GuideSection>

        <GuideSection id="standards" eyebrow="Editorial standards" title="The interface should make uncertainty visible">
          <div className="rounded-3xl border border-cyan-200 bg-cyan-50/65 p-6 sm:p-8">
            <ul className="space-y-4">
              {[
                { icon: BadgeCheck, text: "Separate verified facts from clinic-reported information." },
                { icon: Users, text: "Explain who reviewed medical and comparison content." },
                { icon: Scale, text: "Use the same published criteria for every clinic in a ranking." },
                { icon: FileSearch, text: "Show source links, review dates and meaningful corrections." },
              ].map((item) => {
                const Icon = item.icon;
                return <li key={item.text} className="flex items-start gap-3 text-sm leading-7 text-brand-ink"><Icon className="mt-1 size-4 shrink-0 text-cyan-700" aria-hidden="true" />{item.text}</li>;
              })}
            </ul>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
