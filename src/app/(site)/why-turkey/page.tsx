import type { Metadata } from "next";
import {
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Languages,
  Plane,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import {
  EditorialNote,
  GuideHero,
  GuideLayout,
  GuideSection,
  RelatedGuideCard,
} from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why Turkey for Hair Transplant",
  description: "Balanced overview of Turkey hair transplant advantages and risks, with practical criteria for safer decisions.",
  path: "/why-turkey",
  keywords: ["why turkey hair transplant", "hair transplant turkey pros and cons"],
});

const navigation = [
  { href: "#why-turkey", label: "Why patients choose Turkey" },
  { href: "#cost", label: "Understanding the cost" },
  { href: "#patient-journey", label: "The patient journey" },
  { href: "#tradeoffs", label: "Advantages and trade-offs" },
];

const reasons = [
  {
    icon: Stethoscope,
    title: "Specialised clinical teams",
    text: "High procedure volume can create experienced teams, but patients should still verify who performs each clinical step.",
  },
  {
    icon: Plane,
    title: "International access",
    text: "Istanbul is well connected to many European and Middle Eastern cities, making short treatment trips practical.",
  },
  {
    icon: BadgeDollarSign,
    title: "Package-based pricing",
    text: "Many providers combine treatment, transfers and accommodation, which can make the total trip easier to compare.",
  },
  {
    icon: Languages,
    title: "Patient coordination",
    text: "Multilingual coordinators are common, though medical questions should still be answered by qualified clinical staff.",
  },
] as const;

const journey = [
  ["01", "Remote assessment", "Photos, history and expectations are reviewed before travel."],
  ["02", "Clinical planning", "The medical team confirms suitability, donor capacity and a realistic plan."],
  ["03", "Treatment in Turkey", "Consultation, procedure and initial aftercare take place during the visit."],
  ["04", "Long-term follow-up", "Progress is monitored after the patient returns home."],
] as const;

export default function WhyTurkeyPage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Why Turkey" }]}
        eyebrow="Destination guide"
        title="Why do patients travel to Turkey for a hair transplant?"
        intro="Turkey combines established medical-tourism infrastructure, experienced treatment teams and comparatively accessible package pricing. The right decision still depends on the clinic, the medical plan and the evidence behind its claims."
        quickAnswer="Turkey can offer a strong balance of experience, access and cost. Choose the clinical team first and treat destination benefits as secondary."
        readingTime="6 minute overview"
        updatedLabel="Editorial framework"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <EditorialNote title="Content workflow">
              This page uses structured sample copy. Research citations, reviewed figures and final claims can be inserted without changing the design.
            </EditorialNote>
            <RelatedGuideCard href="/clinics" eyebrow="Compare" title="Clinic comparison and research framework" />
            <RelatedGuideCard href="/clinic-checklist" eyebrow="Prepare" title="Questions to ask before booking" />
          </>
        }
      >
        <GuideSection id="why-turkey" eyebrow="The bigger picture" title="Four reasons Turkey stays on the shortlist">
          <p>
            The appeal is not one single factor. For international patients, the decision usually combines clinical experience, travel convenience, communication and total treatment cost.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="rounded-2xl border border-data-panel-border bg-white p-5 shadow-[0_12px_35px_rgba(31,80,113,0.05)] sm:p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-6 text-brand-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection id="cost" eyebrow="Cost perspective" title="Compare the whole journey, not one headline price">
          <p>
            A useful cost comparison separates the procedure from the services around it. A cheaper quote is not automatically better value, and an expensive package is not automatically higher quality.
          </p>
          <div className="overflow-hidden rounded-2xl border border-data-panel-border bg-white">
            <div className="grid grid-cols-[1fr_auto] gap-4 bg-[#edf7fb] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-cyan-800 sm:px-6">
              <span>Cost component</span>
              <span>What to verify</span>
            </div>
            {[
              ["Clinical procedure", "Medical roles and treatment scope"],
              ["Accommodation", "Hotel nights and room terms"],
              ["Local transfers", "Airport, hotel and clinic routes"],
              ["Medication and aftercare", "Included products and follow-up period"],
            ].map(([label, detail]) => (
              <div key={label} className="grid gap-2 border-t border-data-panel-border px-5 py-4 sm:grid-cols-[1fr_1.15fr] sm:px-6">
                <strong className="text-sm text-brand-navy">{label}</strong>
                <span className="text-sm leading-6 text-brand-muted sm:text-right">{detail}</span>
              </div>
            ))}
          </div>
        </GuideSection>

        <GuideSection id="patient-journey" eyebrow="Plan ahead" title="A well-managed journey begins before the flight">
          <div className="space-y-0">
            {journey.map(([number, title, text], index) => (
              <div key={number} className="relative grid grid-cols-[46px_1fr] gap-4 pb-7 last:pb-0">
                {index < journey.length - 1 ? <span className="absolute left-[22px] top-11 h-[calc(100%-24px)] w-px bg-cyan-200" aria-hidden="true" /> : null}
                <span className="relative z-10 flex size-11 items-center justify-center rounded-full bg-[#082f49] text-xs font-bold text-cyan-200">{number}</span>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-7 text-brand-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </GuideSection>

        <GuideSection id="tradeoffs" eyebrow="Balanced decision" title="Benefits matter only when clinical standards are clear">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-emerald-50/55 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-emerald-900">
                <CheckCircle2 className="size-5" aria-hidden="true" /> Potential advantages
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950/75">
                <li>Experienced, procedure-focused teams</li>
                <li>Competitive total treatment packages</li>
                <li>International patient infrastructure</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-amber-950">
                <ShieldCheck className="size-5" aria-hidden="true" /> Checks that still matter
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950/75">
                <li>Named physician and documented credentials</li>
                <li>Clear responsibility for each procedure step</li>
                <li>Realistic planning and long-term aftercare</li>
              </ul>
            </article>
          </div>
          <div className="rounded-2xl bg-[#082f49] p-6 text-white sm:p-7">
            <div className="flex items-start gap-4">
              <Building2 className="mt-0.5 size-5 shrink-0 text-cyan-300" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">The destination does not replace due diligence.</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-50/70">Assess the clinic, physician involvement, treatment plan and follow-up as carefully as you would at home.</p>
              </div>
            </div>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
