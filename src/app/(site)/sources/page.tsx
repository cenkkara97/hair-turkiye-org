import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sources Library",
  description: "Primary medical and public data sources used across HairTurkiye.org content.",
  path: "/sources",
  keywords: ["hair transplant sources", "medical references hair transplant"],
});

const sourceLinks = [
  { label: "International Society of Hair Restoration Surgery", href: "https://ishrs.org" },
  { label: "Turkish Ministry of Health", href: "https://www.saglik.gov.tr" },
  { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov" },
  { label: "American Society of Plastic Surgeons", href: "https://www.plasticsurgery.org" },
] as const;

export default function SourcesPage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Sources Library</h1>
        <p className="mt-4 text-brand-muted leading-7">
          We rely on peer-reviewed research, professional societies, and official institutions.
        </p>
        <ul className="mt-8 space-y-3">
          {sourceLinks.map((source) => (
            <li key={source.href} className="rounded-xl border border-data-panel-border bg-white px-5 py-4">
              <Link href={source.href} className="font-semibold text-brand-navy hover:text-brand-gold">
                {source.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
