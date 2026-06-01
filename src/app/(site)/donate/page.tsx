import type { Metadata } from "next";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Support HairTurkiye.org",
  description: "Support independent, evidence-based patient education about hair transplant safety and quality.",
  path: "/donate",
  keywords: ["support hairturkiye", "donate independent health information"],
});

export default function DonatePage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-data-panel-border bg-white p-8 text-center">
        <h1 className="text-3xl font-bold text-brand-navy">Support Our Work</h1>
        <p className="mt-4 text-brand-muted leading-7">
          HairTurkiye.org is funded by donations and grants. We do not sell clinic placements or paid rankings.
        </p>
      </div>
    </section>
  );
}
