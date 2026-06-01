import type { Metadata } from "next";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Clinic Verification Checklist",
  description: "A practical pre-booking checklist to verify surgeon credentials, licensing, safety standards, and aftercare plans.",
  path: "/clinic-checklist",
  keywords: ["clinic verification checklist", "hair transplant safety checklist"],
});

const checklistItems = [
  "Confirm surgeon identity and medical registration.",
  "Request clinic license details and cross-check public records.",
  "Ask who performs extraction, channel opening, and implantation.",
  "Review high-quality before/after cases with consent.",
  "Verify medication plan and emergency follow-up protocol.",
] as const;

export default function ClinicChecklistPage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Clinic Verification Checklist</h1>
        <ol className="mt-8 space-y-3">
          {checklistItems.map((item) => (
            <li key={item} className="rounded-xl border border-data-panel-border bg-white px-5 py-4 text-brand-muted leading-7">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
