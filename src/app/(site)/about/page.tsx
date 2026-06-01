import type { Metadata } from "next";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: "Learn how HairTurkiye.org researches clinics, verifies sources, and stays independent from sponsorships.",
  path: "/about",
  keywords: ["about hairturkiye", "independent clinic guide", "hair transplant research policy"],
});

export default function AboutPage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-navy">About HairTurkiye.org</h1>
        <p className="mt-4 text-brand-muted leading-7">
          HairTurkiye.org is an independent patient information project. We focus on safety, transparent data, and practical checklists that help patients compare options before surgery.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-brand-navy">Editorial Principles</h2>
        <ul className="mt-3 space-y-2 text-brand-muted leading-7">
          <li>We do not accept paid clinic rankings.</li>
          <li>We cite medical societies, peer-reviewed research, and public institutions.</li>
          <li>We update key pages as source data changes.</li>
        </ul>
        <h2 id="funding" className="mt-8 text-xl font-semibold text-brand-navy">Funding</h2>
        <p className="mt-3 text-brand-muted leading-7">
          We are funded by reader support and grants. We do not accept paid placements, referral fees, or sponsored clinic mentions.
        </p>
      </div>
    </section>
  );
}

