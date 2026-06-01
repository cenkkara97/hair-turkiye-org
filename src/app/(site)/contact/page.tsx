import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact HairTurkiye.org for feedback, corrections, or source suggestions about our hair transplant guides.",
  path: "/contact",
  keywords: ["contact hairturkiye", "hair transplant guide feedback"],
});

export default function ContactPage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-navy">Contact</h1>
        <p className="mt-4 text-brand-muted leading-7">
          You can send correction requests, source updates, or patient safety suggestions. We review messages and respond as soon as possible.
        </p>
        <div className="mt-8 rounded-xl border border-data-panel-border bg-white p-6">
          <p className="text-sm text-brand-muted">Email</p>
          <p className="mt-1 text-lg font-semibold text-brand-navy">hello@hairturkiye.org</p>
          <Link
            href="mailto:hello@hairturkiye.org"
            className="mt-5 inline-flex rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-2"
          >
            Send Email
          </Link>
        </div>
      </div>
    </section>
  );
}

