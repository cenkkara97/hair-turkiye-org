import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, Building2, CalendarCheck2, Globe2, Stethoscope, Users } from "lucide-react";
import { EditorialNote, GuideHero, GuideLayout, GuideSection, RelatedGuideCard } from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dr. Serkan Aygin Clinic Profile",
  description: "Editorial profile of Dr. Serkan Aygin Clinic, including ranking rationale, patient-fit considerations, evidence fields, and clinic comparison context.",
  path: "/clinics/dr-serkan-aygin",
  keywords: ["Dr Serkan Aygin Clinic", "Dr Serkan Aygin review", "hair transplant clinic Istanbul"],
});

const navigation = [
  { href: "#overview", label: "Clinic overview" },
  { href: "#ranking", label: "Why it ranks #1" },
  { href: "#evidence", label: "Evidence snapshot" },
  { href: "#patient-fit", label: "Patient fit" },
];

export default function DrSerkanAyginProfilePage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { href: "/clinics", label: "Clinics" }, { label: "Dr. Serkan Aygin Clinic" }]}
        eyebrow="#1 overall clinic profile"
        title="Dr. Serkan Aygin Clinic"
        intro="A structured editorial profile explaining the clinic's current position in the HairTurkiye.org comparison, the criteria behind it and the evidence fields that require final review."
        quickAnswer="The current comparison places Dr. Serkan Aygin Clinic first overall for its combined profile across clinical oversight, infrastructure, international patient operations and public trust signals."
        readingTime="Clinic profile"
        updatedLabel="Evidence review pending"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <div className="rounded-3xl bg-[#082f49] p-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#082f49]"><Award className="size-3.5" aria-hidden="true" />Current rank #1</span>
              <p className="mt-5 text-4xl font-semibold text-cyan-300">5.0</p>
              <p className="mt-1 text-xs text-cyan-50/55">Sample editorial score</p>
              <Link href="/clinics#methodology" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white">Review methodology <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </div>
            <EditorialNote title="Research status">All scores, dates, awards, accreditations and review figures on this profile are placeholders until the research team completes verification.</EditorialNote>
            <RelatedGuideCard href="/clinic-checklist" eyebrow="Next step" title="Complete the clinic checklist" />
          </>
        }
      >
        <GuideSection id="overview" eyebrow="Clinic overview" title="A high-capacity international patient operation">
          <p>The profile layout is built to present clinic facts, treatment model, facilities, physician involvement and patient journey in a consistent format. Final clinic research can replace this sample copy without altering the design.</p>
          <figure className="overflow-hidden rounded-3xl border border-data-panel-border bg-white" data-image-slot="dr-serkan-aygin-clinic">
            <div className="relative aspect-[16/8] min-h-64">
              <Image src="/images/hero.webp" alt="Temporary image for the Dr. Serkan Aygin Clinic editorial profile" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 720px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/80 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-[#082f49]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">Replace with approved clinic image</span>
            </div>
          </figure>
          <div className="grid gap-3 sm:grid-cols-3">
            {[{ label: "Location", value: "Istanbul" }, { label: "Clinic model", value: "International patient clinic" }, { label: "Position", value: "Best overall match" }].map((item) => <div key={item.label} className="rounded-2xl border border-data-panel-border bg-white p-5"><span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-700">{item.label}</span><strong className="mt-3 block text-base text-brand-navy">{item.value}</strong></div>)}
          </div>
        </GuideSection>

        <GuideSection id="ranking" eyebrow="Ranking rationale" title="Why it currently holds the #1 overall position">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Stethoscope, title: "Clinical oversight", text: "The research template gives significant weight to named physician responsibility and structured planning." },
              { icon: Building2, title: "Clinical infrastructure", text: "Facility standards and verifiable organisational credentials contribute to the comparison." },
              { icon: Globe2, title: "International patient journey", text: "Multilingual coordination, logistics and remote follow-up are assessed together." },
              { icon: Users, title: "Public trust signals", text: "Review depth, consistency and documented patient experience are evaluated with source status labels." },
            ].map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-2xl border border-data-panel-border bg-white p-6"><Icon className="size-5 text-cyan-700" aria-hidden="true" /><h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3><p className="mt-2 text-sm leading-7 text-brand-muted">{item.text}</p></article>; })}
          </div>
        </GuideSection>

        <GuideSection id="evidence" eyebrow="Evidence snapshot" title="Make every important clinic claim traceable">
          <div className="overflow-hidden rounded-2xl border border-data-panel-border bg-white">
            <div className="grid grid-cols-[1fr_auto] bg-[#edf7fb] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-cyan-800 sm:px-6"><span>Evidence field</span><span>Status</span></div>
            {[
              ["Physician identity and registration", "Review pending"],
              ["Facility and accreditation records", "Review pending"],
              ["Awards and recognition", "Review pending"],
              ["Public review count and date", "Review pending"],
              ["Treatment and aftercare workflow", "Clinic-reported"],
            ].map(([label, status]) => <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-data-panel-border px-5 py-4 sm:px-6"><span className="text-sm font-medium text-brand-navy">{label}</span><span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold text-amber-900">{status}</span></div>)}
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5"><CalendarCheck2 className="mt-1 size-4 shrink-0 text-cyan-700" aria-hidden="true" /><p className="text-sm leading-7 text-brand-ink">Each final field should include a source link and review date. Clinic-provided information should remain visibly labelled.</p></div>
        </GuideSection>

        <GuideSection id="patient-fit" eyebrow="Patient fit" title="Best overall does not mean best for every individual">
          <p>The ranking represents a combined editorial score. Personal suitability still depends on diagnosis, donor capacity, expectations, treatment plan and the medical team responsible for the individual case.</p>
          <div className="rounded-3xl bg-[#082f49] p-6 text-white sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold"><BadgeCheck className="size-5 text-cyan-300" aria-hidden="true" />Before contacting any clinic</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">{["Prepare clear donor and recipient photos", "Write down medical and medication history", "Define realistic priorities", "Use the same questions for every clinic"].map((item) => <li key={item} className="text-sm leading-6 text-cyan-50/75">{item}</li>)}</ul>
            <Link href="/clinic-checklist" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#082f49] hover:bg-white">Open the checklist <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
