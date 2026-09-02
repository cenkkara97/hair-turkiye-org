import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, FileCheck2 } from "lucide-react";
import type { ReactNode } from "react";

type Breadcrumb = {
  href?: string;
  label: string;
};

type GuideHeroProps = {
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  title: string;
  intro: string;
  quickAnswer: string;
  readingTime?: string;
  updatedLabel?: string;
};

export function GuideHero({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  quickAnswer,
  readingTime = "Editorial guide",
  updatedLabel = "Content review pending",
}: GuideHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-brand-gold/15 bg-[#082f49] text-white">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 84% 18%, rgba(79,168,215,.34), transparent 28%), radial-gradient(circle at 8% 92%, rgba(143,213,243,.16), transparent 30%)",
        }}
        aria-hidden="true"
      />
      <div className="site-container relative py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-cyan-100/75">
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-white/90">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">{eyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-cyan-50/78 sm:text-lg">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-cyan-100/75 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="size-4 text-cyan-300" aria-hidden="true" />
                {readingTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <FileCheck2 className="size-4 text-cyan-300" aria-hidden="true" />
                {updatedLabel}
              </span>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-slate-950/15 backdrop-blur sm:p-7">
            <span className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-cyan-300 text-[#082f49]">
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Quick answer</p>
            <p className="mt-3 text-sm leading-7 text-white/88 sm:text-base">{quickAnswer}</p>
          </aside>
        </div>
      </div>
    </header>
  );
}

type GuideLayoutProps = {
  navigation: { href: string; label: string }[];
  children: ReactNode;
  aside?: ReactNode;
};

export function GuideLayout({ navigation, children, aside }: GuideLayoutProps) {
  return (
    <div className="site-container py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)_280px] lg:gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">On this page</p>
            <nav aria-label="On this page">
              <ul className="space-y-1.5 border-l border-brand-gold/25">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block border-l-2 border-transparent py-2 pl-4 text-sm leading-5 text-brand-muted transition hover:border-brand-gold hover:text-brand-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <article className="min-w-0 space-y-12 sm:space-y-16">{children}</article>

        {aside ? (
          <aside className="lg:order-none">
            <div className="space-y-5 lg:sticky lg:top-28">{aside}</div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

export function GuideSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-brand-navy sm:text-4xl">{title}</h2>
      <div className="mt-5 space-y-5 text-[15px] leading-8 text-brand-muted sm:text-base">{children}</div>
    </section>
  );
}

export function EditorialNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-cyan-200 bg-cyan-50/70 p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{title}</p>
      <div className="mt-3 text-sm leading-7 text-brand-ink">{children}</div>
    </div>
  );
}

export function RelatedGuideCard({ href, eyebrow, title }: { href: string; eyebrow: string; title: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-data-panel-border bg-white p-5 shadow-[0_14px_40px_rgba(31,80,113,0.05)] transition hover:-translate-y-0.5 hover:border-brand-gold/55"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-cyan-700">{eyebrow}</span>
      <strong className="mt-2 block text-base leading-6 text-brand-navy">{title}</strong>
      <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-700">
        Open guide
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
