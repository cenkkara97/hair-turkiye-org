import type { Metadata } from "next";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hair Transplant FAQ",
  description: "Answers to common questions about hair transplant safety, costs, timelines, and clinic verification in Turkey.",
  path: "/faq",
  keywords: ["hair transplant faq", "turkey hair transplant questions", "hair transplant safety faq"],
});

const faqItems = [
  {
    question: "How much does a hair transplant cost in Turkey?",
    answer:
      "Most standard packages are lower than US and UK pricing, but the final cost depends on graft count, clinic standards, and post-op support.",
  },
  {
    question: "How do I verify a clinic?",
    answer:
      "Ask for surgeon credentials, ministry license number, realistic patient load, and documented before/after cases with consent.",
  },
  {
    question: "When will I see full results?",
    answer:
      "Early growth is usually visible in a few months, while fuller cosmetic results often appear across 9 to 12 months.",
  },
] as const;

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="site-container py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-navy">Hair Transplant FAQ</h1>
        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-xl border border-data-panel-border bg-white p-6">
              <h2 className="text-lg font-semibold text-brand-navy">{item.question}</h2>
              <p className="mt-2 text-brand-muted leading-7">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
