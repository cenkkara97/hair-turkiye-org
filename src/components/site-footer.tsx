import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-gold/20 bg-brand-cream text-brand-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3">
        <div>
          <p className="font-sans text-2xl sm:text-3xl">
            Hair<span className="text-brand-gold">Turkiye</span>.org
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-brand-muted">
            Patient-first information, practical travel guidance and structured clinic comparisons
            for people researching hair restoration in Turkey.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-2">
          {siteConfig.footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-brand-muted transition hover:text-brand-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-brand-gold/20 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-brand-muted sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} HairTurkiye.org</p>
          <p>General information only. Not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

