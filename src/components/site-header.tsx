"use client";

import Link from "next/link";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="sticky top-0 z-50 border-b border-brand-gold/20 bg-white/95 backdrop-blur">
        <div className="site-container flex items-center justify-between gap-3 py-3 sm:gap-5 sm:py-4">
          <Link href="/" className="flex items-center gap-2 text-xl tracking-tight text-brand-navy sm:text-2xl">
            <Leaf className="size-5 text-brand-gold" aria-hidden="true" />
            <span className="font-sans">
              Hair<span className="text-brand-gold">Turkiye</span>.org
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 text-base font-medium">
              {siteConfig.nav.map((item) => (
                <li key={`${item.label}-${item.href}`} className="group relative">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-brand-ink transition hover:bg-brand-gold/10 hover:text-brand-gold ${
                      item.children
                        ? "group-hover:bg-brand-gold/10 group-hover:text-brand-gold group-focus-within:bg-brand-gold/10 group-focus-within:text-brand-gold"
                        : ""
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.showCaret ? <ChevronDown className="size-3.5" aria-hidden="true" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute left-0 top-full z-30 min-w-64 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="rounded-xl border border-brand-gold/25 bg-white p-2 shadow-lg">
                        <ul className="space-y-1 py-1">
                          {item.children.map((child) => (
                            <li key={`${item.label}-${child.label}`}>
                              <Link
                                href={child.href}
                                className="block rounded-md px-4 py-2.5 text-sm text-brand-ink transition hover:bg-brand-cream hover:text-brand-navy"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/clinic-checklist"
            className="hidden items-center justify-center rounded-md border border-brand-gold bg-brand-gold px-5 py-2.5 text-base font-semibold leading-tight text-white transition hover:bg-brand-navy-2 md:inline-flex"
          >
            Free Guide
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-brand-gold/40 p-1.5 text-brand-navy transition hover:bg-brand-cream md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {isMobileMenuOpen ? (
          <div id="mobile-menu" className="border-t border-brand-gold/20 bg-white py-3 md:hidden">
            <nav aria-label="Mobile Primary" className="site-container">
              <ul className="space-y-1 text-sm font-medium">
                {siteConfig.nav.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-brand-ink transition hover:bg-brand-gold/10 hover:text-brand-gold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <ul className="ml-3 mt-1 space-y-1 border-l border-brand-gold/25 pl-3">
                        {item.children.map((child) => (
                          <li key={`${item.label}-mobile-${child.label}`}>
                            <Link
                              href={child.href}
                              className="block rounded-md px-3 py-1.5 text-xs text-brand-muted transition hover:bg-brand-cream hover:text-brand-navy"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/clinic-checklist"
                    className="block rounded-md border border-brand-gold bg-brand-gold px-3 py-2 text-center font-semibold text-white transition hover:bg-brand-navy-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Free Guide
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
