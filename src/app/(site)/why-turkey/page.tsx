import type { Metadata } from "next";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why Turkey for Hair Transplant",
  description: "Balanced overview of Turkey hair transplant advantages and risks, with practical criteria for safer decisions.",
  path: "/why-turkey",
  keywords: ["why turkey hair transplant", "hair transplant turkey pros and cons"],
});

export default function WhyTurkeyPage() {
  return (
    <section className="site-container py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Why Turkey</h1>
        <p className="mt-4 text-brand-muted leading-7">
          Turkey combines cost advantages and high case volume, but safety depends heavily on clinic standards and medical supervision.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-green-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-green-800">Potential Advantages</h2>
            <p className="mt-2 text-sm text-brand-muted">Lower costs, broad technique availability, and extensive patient experience.</p>
          </article>
          <article className="rounded-xl border border-red-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-red-800">Potential Risks</h2>
            <p className="mt-2 text-sm text-brand-muted">Unlicensed operations, weak follow-up, and misleading marketing claims.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
