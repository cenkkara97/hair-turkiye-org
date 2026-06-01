import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hair Transplant Guide",
  description: "Understand FUE, DHI, and Sapphire methods with practical preparation and recovery guidance for patients.",
  path: "/hair-transplant",
  keywords: ["hair transplant methods", "fue dhi sapphire comparison", "hair transplant recovery"],
});

export default function HairTransplantPage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Hair Transplant Methods</h1>
        <p className="mt-4 text-brand-muted leading-7">
          This overview explains the main procedures used in Turkey and what patients should verify before booking.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-data-panel-border bg-white p-5">
            <h2 className="text-lg font-semibold text-brand-navy">FUE</h2>
            <p className="mt-2 text-sm text-brand-muted">Follicular extraction with minimal linear scarring and broad clinic availability.</p>
          </article>
          <article className="rounded-xl border border-data-panel-border bg-white p-5">
            <h2 className="text-lg font-semibold text-brand-navy">DHI</h2>
            <p className="mt-2 text-sm text-brand-muted">Direct implantation approach often used for dense frontal hairline work.</p>
          </article>
          <article className="rounded-xl border border-data-panel-border bg-white p-5">
            <h2 className="text-lg font-semibold text-brand-navy">Sapphire FUE</h2>
            <p className="mt-2 text-sm text-brand-muted">FUE variant that uses sapphire blades for channel opening in selected cases.</p>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/clinic-checklist" className="rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-2">
            Review Clinic Checklist
          </Link>
          <Link href="/faq" className="rounded-md border border-brand-gold/30 px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-cream">
            Read Patient FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
