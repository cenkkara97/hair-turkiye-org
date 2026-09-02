import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileWarning, Lightbulb, Mail, MessageSquareText, ShieldAlert } from "lucide-react";
import { GuideHero } from "@/components/editorial/guide-layout";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact HairTurkiye.org for feedback, corrections, source suggestions, or editorial questions.",
  path: "/contact",
  keywords: ["contact hairturkiye", "hair transplant guide feedback"],
});

const contactTopics = [
  {
    icon: FileWarning,
    label: "Correction",
    title: "Report an inaccurate detail",
    text: "Include the page URL, the statement to review and the strongest supporting source.",
    subject: "Correction request",
  },
  {
    icon: Lightbulb,
    label: "Editorial idea",
    title: "Suggest a guide or question",
    text: "Tell us what information was difficult to find during your research journey.",
    subject: "Editorial topic suggestion",
  },
  {
    icon: ShieldAlert,
    label: "Safety signal",
    title: "Flag a patient-safety concern",
    text: "Share public evidence and avoid including private medical or identifying information.",
    subject: "Patient safety source",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <GuideHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        eyebrow="Editorial contact"
        title="Help improve the research"
        intro="Send a correction, source update or topic suggestion. Clear evidence and a direct page link help the editorial team review messages efficiently."
        quickAnswer="Use email for editorial feedback only. Do not send personal medical records, passports, payment details or urgent health questions."
        readingTime="Editorial enquiries"
        updatedLabel="Email channel"
      />

      <section className="site-container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Choose a topic</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-brand-navy sm:text-4xl">Send the information to the right review queue</h2>
            <div className="mt-8 grid gap-4">
              {contactTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <Link
                    key={topic.title}
                    href={`mailto:hello@hairturkiye.org?subject=${encodeURIComponent(topic.subject)}`}
                    className="group grid gap-5 rounded-3xl border border-data-panel-border bg-white p-6 shadow-[0_14px_40px_rgba(31,80,113,0.05)] transition hover:-translate-y-0.5 hover:border-cyan-300 sm:grid-cols-[52px_1fr_auto] sm:items-center"
                  >
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700"><Icon className="size-5" aria-hidden="true" /></span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-700">{topic.label}</span>
                      <strong className="mt-2 block text-lg text-brand-navy">{topic.title}</strong>
                      <span className="mt-2 block text-sm leading-6 text-brand-muted">{topic.text}</span>
                    </span>
                    <ArrowRight className="hidden size-5 text-cyan-700 transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-[#082f49] p-7 text-white sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-300 text-[#082f49]"><Mail className="size-5" aria-hidden="true" /></span>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Editorial email</p>
              <a href="mailto:hello@hairturkiye.org" className="mt-2 block break-all text-xl font-semibold hover:text-cyan-200">hello@hairturkiye.org</a>
              <p className="mt-5 text-sm leading-7 text-cyan-50/70">The final response policy and mailbox ownership should be confirmed before the website goes live.</p>
              <a href="mailto:hello@hairturkiye.org" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#082f49] transition hover:bg-white">
                Open email <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50/70 p-6">
              <MessageSquareText className="size-5 text-amber-800" aria-hidden="true" />
              <h2 className="mt-4 font-semibold text-amber-950">Not a medical consultation</h2>
              <p className="mt-2 text-sm leading-7 text-amber-950/70">For symptoms, complications or treatment decisions, contact a qualified medical professional or the treating clinic.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
