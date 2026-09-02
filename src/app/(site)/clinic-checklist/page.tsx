import type { Metadata } from "next";
import { AlertTriangle, FileCheck2, MessageSquareText, ShieldCheck } from "lucide-react";
import { ClinicChecklistTool } from "@/components/editorial/clinic-checklist-tool";
import {
  EditorialNote,
  GuideHero,
  GuideLayout,
  GuideSection,
  RelatedGuideCard,
} from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Clinic Verification Checklist",
  description: "A practical pre-booking checklist to verify surgeon credentials, licensing, safety standards, and aftercare plans.",
  path: "/clinic-checklist",
  keywords: ["clinic verification checklist", "hair transplant safety checklist"],
});

const navigation = [
  { href: "#interactive-checklist", label: "Interactive checklist" },
  { href: "#questions", label: "Questions to ask" },
  { href: "#warning-signs", label: "Warning signs" },
  { href: "#documents", label: "Documents to keep" },
];

export default function ClinicChecklistPage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Clinic Checklist" }]}
        eyebrow="Patient safety toolkit"
        title="A practical clinic checklist before you book"
        intro="Move from marketing claims to verifiable details. Use this framework to organise the medical, safety, price and follow-up questions that should be answered before a deposit is paid."
        quickAnswer="A trustworthy booking process names the medical team, explains who performs each step, documents the treatment plan and provides clear aftercare responsibilities."
        readingTime="12 verification checks"
        updatedLabel="Interactive worksheet"
      />

      <GuideLayout
        navigation={navigation}
        aside={
          <>
            <EditorialNote title="How to use it">
              Complete the checklist for every clinic on your shortlist. Save written answers and compare unresolved items side by side.
            </EditorialNote>
            <RelatedGuideCard href="/clinics" eyebrow="Compare" title="Review the clinic ranking" />
            <RelatedGuideCard href="/faq" eyebrow="Learn" title="Browse common patient questions" />
          </>
        }
      >
        <GuideSection id="interactive-checklist" eyebrow="Work through the evidence" title="Check what is confirmed — and what is still missing">
          <p>The tool is designed as a decision aid. Progress stays on this page only and no personal information is collected.</p>
          <ClinicChecklistTool />
        </GuideSection>

        <GuideSection id="questions" eyebrow="Direct questions" title="Ask for names, responsibilities and written answers">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: MessageSquareText, title: "Who will assess me?", text: "Ask whether the assessment is performed by the named physician or a patient coordinator." },
              { icon: ShieldCheck, title: "Who performs each step?", text: "Clarify extraction, recipient-site creation, implantation and clinical supervision." },
              { icon: FileCheck2, title: "What happens after I fly home?", text: "Request a follow-up schedule, contact route and escalation plan in writing." },
              { icon: AlertTriangle, title: "What changes the final price?", text: "Ask which services can create extra charges after arrival or assessment." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-data-panel-border bg-white p-5 sm:p-6">
                  <Icon className="size-5 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </GuideSection>

        <GuideSection id="warning-signs" eyebrow="Pause and verify" title="Warning signs in the sales and booking process">
          <div className="rounded-3xl bg-[#082f49] p-6 text-white sm:p-8">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {[
                "Guaranteed results or an exact graft number before assessment",
                "Pressure to transfer a deposit immediately",
                "No named physician or unclear professional roles",
                "Medical questions answered only by sales staff",
                "Licence or facility details are withheld",
                "No written plan for complications or follow-up",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-cyan-50/80">
                  <AlertTriangle className="mt-1 size-4 shrink-0 text-amber-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </GuideSection>

        <GuideSection id="documents" eyebrow="Keep a clear record" title="Save the information you may need later">
          <p>Keep copies of the quote, medical plan, consent documents, clinic and physician details, medication instructions, payment records and aftercare contacts.</p>
          <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6">
            <p className="text-sm leading-7 text-brand-ink"><strong className="text-brand-navy">Editorial note:</strong> Local licensing rules and professional registers should be linked here after the research team completes source verification.</p>
          </div>
        </GuideSection>
      </GuideLayout>
    </>
  );
}
