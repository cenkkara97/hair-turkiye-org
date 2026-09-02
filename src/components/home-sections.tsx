import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Building2,
  CheckCircle,
  CircleHelp,
  CircleUserRound,
  ExternalLink,
  Globe2,
  HeartPulse,
  Landmark,
  MessageCircle,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Waypoints,
  XCircle,
} from "lucide-react";

const costData = [
  {
    code: "TURKEY",
    price: "$3,000",
    height: 42,
    toneClassName: "border-data-bar-turkey bg-gradient-to-b from-data-bar-turkey-from to-data-bar-turkey-to",
    flag: "\uD83C\uDDF9\uD83C\uDDF7",
  },
  {
    code: "UK",
    price: "$7,200",
    height: 78,
    toneClassName: "border-data-bar-default bg-gradient-to-b from-data-bar-default-from to-data-bar-default-to",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
  },
  {
    code: "CANADA",
    price: "$9,000",
    height: 96,
    toneClassName: "border-data-bar-default bg-gradient-to-b from-data-bar-default-from to-data-bar-default-to",
    flag: "\uD83C\uDDE8\uD83C\uDDE6",
  },
  {
    code: "GERMANY",
    price: "$7,800",
    height: 84,
    toneClassName: "border-data-bar-default bg-gradient-to-b from-data-bar-default-from to-data-bar-default-to",
    flag: "\uD83C\uDDE9\uD83C\uDDEA",
  },
  {
    code: "USA",
    price: "$12,000+",
    height: 128,
    toneClassName: "border-data-bar-default bg-gradient-to-b from-data-bar-default-from to-data-bar-default-to",
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
  },
] as const;

const patientStats = [
  {
    icon: CircleUserRound,
    value: "95%",
    text: "of first-time patients are between 20-35 years old",
  },
  {
    icon: CircleHelp,
    value: "+16.5%",
    text: "increase in female surgical patients (2021-2024)",
  },
  {
    icon: CircleUserRound,
    value: "+40%",
    text: "increase in transgender hair transplants in 2024",
  },
  {
    icon: Stethoscope,
    value: "+30%",
    text: "increase in non-surgical patients since 2021",
  },
] as const;

const safetyItems = [
  {
    icon: ShieldAlert,
    title: "10%",
    text: "of repair cases are due to previous black market procedures (up from 6% in 2021)",
  },
  {
    icon: ShieldCheck,
    title: "",
    text: "Unlicensed practitioners, bait-and-switch practices and unsupervised technicians are real risks.",
  },
  {
    icon: AlertTriangle,
    title: "",
    text: "We provide trusted, up-to-date information to help you choose safely and avoid risks.",
  },
] as const;

const bottomItems = [
  {
    icon: ShieldCheck,
    title: "Research Framework",
    text: "Consistent clinic criteria",
  },
  {
    icon: Stethoscope,
    title: "Evidence-Based",
    text: "Reliable & up-to-date info",
  },
  {
    icon: Globe2,
    title: "80+ Countries",
    text: "People we've helped",
  },
  {
    icon: Waypoints,
    title: "Personalized Support",
    text: "Before, during & after your trip",
  },
  {
    icon: HeartPulse,
    title: "Your Confidence",
    text: "Is our mission",
  },
] as const;

const turkeyEdgeChecks = [
  "Top Clinics",
  "High Case Volume",
  "Large Medical Teams",
  "All-inclusive Logistics",
  "Low Cost",
  "Strong Results",
] as const;

const alternativeMarkets = [
  {
    country: "US",
    price: "~$14,000",
    misses: ["Low Cost", "All-inclusive Packages", "High Number of Cases"],
  },
  {
    country: "UK",
    price: "~$9,000",
    misses: ["Low Cost", "All-inclusive Packages", "High Number of Cases"],
  },
] as const;

const services = [
  {
    icon: ShieldCheck,
    title: "Clinic Verification Checklist",
    description: "A list of questions to ask any clinic before booking, based on ISHRS patient safety guidelines",
    link: "/clinic-checklist",
  },
  {
    icon: AlertTriangle,
    title: "Red Flag Guide",
    description: "How to spot black market clinics, fake reviews, and misleading pricing",
    link: "/clinics",
  },
  {
    icon: Globe2,
    title: "Country Comparison",
    description: "Honest cost and quality comparison between Turkey, the UK, Germany, and the U.S.",
    link: "/why-turkey",
  },
  {
    icon: MessageCircle,
    title: "Ask a Question",
    description: "Submit a question to our team, answered within 48 hours with verified sources",
    link: "/contact",
  },
] as const;

const clinicFinderPoints = [
  "Doctor involvement and supervision are reviewed, not just marketing claims.",
  "Accreditations, awards, review depth, and clinic structure are compared together.",
  "Each clinic is positioned by its strengths, tradeoffs, and patient profile.",
] as const;

const orbitCards = [
  {
    name: "ASMED",
    description: "Boutique model, technical innovation, premium positioning.",
    score: "4.7 score",
    className: "top-4 left-3 sm:top-5 sm:left-7",
  },
  {
    name: "HLC Hairline Clinic",
    description: "Doctor-only manual FUE model, strong repair-case reputation.",
    score: "4.5 score",
    className: "top-14 right-0 sm:top-18 sm:right-2",
  },
  {
    name: "Dr. Terziler",
    description: "Premium infrastructure, AACI accreditation, long track record.",
    score: "4.2 score",
    className: "bottom-22 left-0 sm:bottom-28",
  },
  {
    name: "Cosmedica",
    description: "Large international visibility with a named lead surgeon.",
    score: "4.0 score",
    className: "bottom-12 right-2 sm:bottom-16 sm:right-7",
  },
  {
    name: "Vera Clinic",
    description: "Strong logistics and review volume, high-volume package model.",
    score: "3.5 score",
    className: "bottom-0 left-40 sm:left-56",
  },
] as const;

const verificationSteps = [
  {
    number: "01",
    title: "Medical Credentials",
    text: "Confirm the lead surgeon holds a medical degree and is registered with Turkey's Ministry of Health",
  },
  {
    number: "02", 
    title: "Clinic License",
    text: "Verify the clinic holds a Ministry of Health license — ask for the license number and check it",
  },
  {
    number: "03",
    title: "Daily Patient Load",
    text: "Ask directly: how many patients does your surgeon or medical team treat in one day? More than 2 patients per team daily is a warning sign",
  },
  {
    number: "04",
    title: "Before/After Photos",
    text: "Avoid any clinic that cannot provide real, unedited before/after photos with documented patient consent",
  },
  {
    number: "05",
    title: "Full Documentation",
    text: "Request complete medical records, treatment plans, and post-operative care instructions",
  },
] as const;

const sources = [
  {
    name: "International Society of Hair Restoration Surgery",
    url: "ishrs.org",
    description: "Global medical society for hair restoration",
  },
  {
    name: "Turkish Ministry of Health",
    url: "saglik.gov.tr", 
    description: "Official government health authority",
  },
  {
    name: "PubMed / National Library of Medicine",
    url: "pubmed.ncbi.nlm.nih.gov",
    description: "Peer-reviewed medical research database",
  },
  {
    name: "American Society of Plastic Surgeons",
    url: "plasticsurgery.org",
    description: "Leading plastic surgery organization",
  },
  {
    name: "NPR Health Journalism",
    url: "npr.org",
    description: "Health journalism and patient safety",
  },
] as const;

const turkeyNumberCards = [
  {
    icon: CircleUserRound,
    value: "~1 MILLION",
    text: "People visited Turkey for hair transplant in 2022",
  },
  {
    icon: Waypoints,
    value: "$2-3 BILLION",
    text: "Revenue from health tourism (2023-2024)",
  },
  {
    icon: Building2,
    value: "~5,000",
    text: "Clinics in Istanbul alone",
  },
] as const;

const panelTitleClassName = "text-sm font-extrabold uppercase tracking-wide text-data-title";
const panelBodyClassName = "text-xs font-semibold leading-snug text-data-body";
const panelMetaClassName = "mt-5 text-center text-xs font-semibold text-data-muted";
const sectionHeadingClassName = "text-2xl font-bold text-brand-navy sm:text-3xl md:text-4xl";
const sectionLeadClassName = "mx-auto max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg";
const simpleCardClassName = "rounded-xl border border-data-panel-border bg-white p-4 sm:p-6";

type CircleProgressProps = {
  value: number;
  label: string;
  size?: number;
  trackColor?: string;
  progressColor?: string;
  labelClassName?: string;
};

function CircleProgress({
  value,
  label,
  size = 88,
  trackColor = "var(--color-data-ring-track)",
  progressColor = "var(--color-data-ring-fill)",
  labelClassName = "text-xl font-extrabold leading-none text-brand-navy",
}: CircleProgressProps) {
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={progressColor}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${circumference}`}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <span className={labelClassName}>{label}</span>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
        <Image
          src="/images/hero.webp"
          alt="Hair transplant in Turkey hero image"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />


        <div className="site-container">
          <div className="relative grid gap-5 py-8 sm:py-10 lg:min-h-[480px] lg:grid-cols-2 lg:items-center lg:py-12">
            <div className="max-w-2xl animate-fade-in-left">
              <p className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-brand-navy animate-pulse-slow">
                <span className="h-px w-8 bg-brand-gold" />
                Patient Research Guide
              </p>
              <h1 className="font-sans text-3xl font-bold leading-tight text-brand-navy sm:text-4xl md:text-5xl">
                Clear Hair Transplant Data for Turkey
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-brand-ink sm:mt-4 sm:text-base sm:leading-7">
                Fast, neutral, evidence-led insights for smarter decisions.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                <Link
                  href="/clinics"
                  className="rounded-md border border-brand-gold bg-brand-gold px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-2 sm:px-6 sm:py-3"
                >
                  Browse Clinics
                </Link>
                <Link
                  href="/faq"
                  className="rounded-md border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-brand-gold hover:bg-white/20 hover:text-brand-gold-2 sm:px-6 sm:py-3"
                >
                  Patient FAQ
                </Link>
              </div>
            </div>

            <div className="mt-2 flex items-end animate-fade-in-right lg:mt-0 lg:self-end lg:justify-end lg:pb-2">
              <div className="w-full max-w-xl rounded-xl border border-white/20 bg-brand-navy/90 p-2.5 text-white sm:p-3">
                <p className="text-center text-xs font-semibold uppercase tracking-wider text-white/90 sm:text-sm">Turkey by the Numbers</p>
                <div className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3 md:grid-cols-3 md:gap-0">
                  {turkeyNumberCards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                      <article
                        key={card.value}
                        className={`group px-2 text-center transition-transform duration-300 sm:px-3 md:px-5 ${index > 0 ? "md:border-l md:border-white/30" : ""}`}
                      >
                        <Icon className="mx-auto size-6 text-brand-gold-2 transition-colors group-hover:text-brand-gold sm:size-7" aria-hidden="true" />
                        <p className="mt-1.5 font-sans text-xl leading-none text-brand-gold-2 transition-colors group-hover:text-brand-gold sm:mt-2 sm:text-2xl">{card.value}</p>
                        <p className="mt-1.5 text-xs leading-4 text-white/90 sm:mt-2 sm:text-sm sm:leading-5">{card.text}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HonestRealitySection() {
  return (
    <section className="bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_35%),#f8fcff] py-12 sm:py-16">
      <div className="site-container">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-sm font-semibold tracking-wide text-brand-muted">From €1900 • Up to 5000 grafts</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl md:text-4xl">Turkey Dominates Cost-to-Quality</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white p-5 shadow-[0_24px_70px_rgba(14,116,144,0.16)] sm:p-7">
            <div className="absolute right-4 top-4 inline-flex rounded-full bg-cyan-700 px-3 py-1 text-xs font-bold text-white">
              #1 Value Market
            </div>
            <h3 className="text-xl font-semibold text-brand-muted">Turkey</h3>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-emerald-600 sm:text-5xl">~$3,000</p>
            <p className="mt-1 text-sm text-brand-muted">Strong clinics + high volume + lower spend</p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {turkeyEdgeChecks.map((item) => (
                <div key={item} className="flex items-center gap-2.5 rounded-xl border border-cyan-100 bg-cyan-50 px-3 py-2">
                  <CheckCircle className="size-4 text-cyan-700" />
                  <span className="text-sm font-medium text-brand-ink">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {alternativeMarkets.map((market) => (
              <article key={market.country} className="rounded-2xl border border-data-panel-border bg-white p-4 sm:p-5">
                <h3 className="text-xl font-semibold text-brand-navy">{market.country}</h3>
                <p className="mt-1 text-3xl font-extrabold tracking-tight text-brand-navy">{market.price}</p>
                <div className="mt-4 space-y-2">
                  {market.misses.map((item) => (
                    <div key={`${market.country}-${item}`} className="flex items-center gap-2.5">
                      <XCircle className="size-4 text-rose-600" />
                      <span className="text-sm text-brand-ink">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HairTransplantStatsSection() {
  return (
    <section className="w-full py-2 sm:py-0">
      <div className="site-container">
        <div className="overflow-hidden rounded-2xl border border-data-panel-border">
          <div className="grid grid-cols-1 divide-y divide-data-panel-divider lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            <div className="p-4 sm:p-5">
              <h3 className={panelTitleClassName}>Average Cost Comparison</h3>
              <p className="mt-1 text-xs font-semibold text-data-muted">Hair Transplant</p>

              <div className="mt-4 flex h-36 items-end justify-between gap-2 sm:mt-5 sm:h-42 sm:gap-3">
                {costData.map((item) => (
                  <div key={item.code} className="flex flex-1 flex-col items-center">
                    <span className="mb-2 text-xs font-extrabold text-data-price">{item.price}</span>
                    <div
                      className={`w-full max-w-11 rounded-t-md border shadow-data-inset ${item.toneClassName}`}
                      style={{ height: `${item.height}px` }}
                    />
                    <span className="mt-2 text-xs font-bold uppercase tracking-wide text-data-caption">{item.code}</span>
                    <span className="text-base leading-none">{item.flag}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-data-callout-border bg-data-callout-bg px-3 py-2.5 text-center sm:mt-5 sm:px-4 sm:py-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="inline-flex size-6 items-center justify-center rounded bg-data-accent text-white">
                    <Landmark className="size-3.5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-extrabold text-data-accent">Save up to 70%</p>
                </div>
                <p className="mt-1 text-xs font-medium text-data-caption">compared to the USA</p>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className={panelTitleClassName}>Who Gets Hair Transplant?</h3>
              <div className="mt-4 flex items-center gap-4 sm:mt-5 sm:gap-5">
                <div className="shrink-0">
                  <CircleProgress
                    value={95}
                    label="95%"
                    size={96}
                    trackColor="var(--color-data-ring-track-strong)"
                    progressColor="var(--color-data-ring-fill-strong)"
                    labelClassName="text-2xl font-extrabold leading-none text-data-emphasis sm:text-3xl"
                  />
                  <p className="mt-1 text-center text-xs font-bold leading-tight text-data-body">
                    20-35
                    <br />
                    years old
                  </p>
                </div>
                <div className="space-y-3">
                  {patientStats.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex gap-2">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-data-chip-border bg-data-chip-bg text-data-ring-fill-strong">
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <p className={panelBodyClassName}>
                          <span className="font-extrabold text-data-ring-fill-strong">{item.value} </span>
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className={panelMetaClassName}>Source: ISHRS 2025 Practice Census</p>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className={panelTitleClassName}>Techniques & Results</h3>
              <div className="mt-4 flex h-auto flex-col justify-center sm:mt-5 sm:h-52">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <CircleProgress
                      value={85.4}
                      label="85.4%"
                      size={78}
                      trackColor="var(--color-data-ring-track-strong)"
                      progressColor="var(--color-data-ring-fill-strong)"
                      labelClassName="text-lg font-extrabold leading-none text-data-heading-alt"
                    />
                    <p className={panelBodyClassName}>of male procedures use FUE</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleProgress
                      value={68.2}
                      label="68.2%"
                      size={78}
                      trackColor="var(--color-data-ring-track-strong)"
                      progressColor="var(--color-data-ring-fill-strong)"
                      labelClassName="text-lg font-extrabold leading-none text-data-heading-alt"
                    />
                    <p className={panelBodyClassName}>of female procedures use FUE</p>
                  </div>
                </div>
              </div>
              <p className={panelMetaClassName}>Source: ISHRS 2025 Practice Census</p>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className={panelTitleClassName}>Safety First</h3>
              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {safetyItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex gap-3 border-b border-data-panel-divider pb-3 last:border-b-0 last:pb-0 sm:gap-4 sm:pb-4">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-data-icon-bg text-data-ring-fill-strong sm:size-10">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        {item.title ? <p className="text-2xl font-extrabold leading-none text-data-ring-fill-strong">{item.title}</p> : null}
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-data-body">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-xs font-semibold text-data-muted">Sources: ISHRS 2025, Mayo Clinic (PubMed), NPR</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-data-bottom-start via-data-bottom-mid to-data-bottom-end">
        <div className="grid grid-cols-1 divide-y divide-white/20 px-2 sm:px-3 md:grid-cols-6 md:divide-x md:divide-y-0 md:px-4 lg:px-6">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 px-3 py-3 sm:px-4 sm:py-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-data-bottom-icon/60 bg-white/5 text-data-bottom-text sm:size-9">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">{item.title}</p>
                  <p className="mt-1 text-xs font-medium text-data-bottom-text">{item.text}</p>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-center px-3 py-3 sm:px-4 sm:py-4">
            <div className="rounded-lg border border-data-bottom-callout-border bg-data-bottom-callout-bg/70 px-4 py-2.5 text-center sm:px-5 sm:py-3">
              <p className="text-sm font-extrabold text-data-bottom-callout-text">Better Information.</p>
              <p className="text-sm font-extrabold text-data-bottom-callout-text">Safer Decisions. Better Results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 bg-brand-navy">
      <div className="site-container">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            What We Offer — All Free, All Independent
          </h2>
          <p className="mx-auto max-w-3xl text-base text-brand-gold-2 sm:text-lg">
            Evidence-based resources to help you make safer, more informed decisions.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="group rounded-xl border border-white/20 bg-white/10 p-4 transition-colors duration-300 hover:border-brand-gold/50 hover:bg-white/15 sm:p-6"
              >
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold-2 transition-colors group-hover:bg-brand-gold/30 sm:mb-4 sm:size-14">
                  <Icon className="size-6 sm:size-7" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-brand-gold-2 sm:mb-3 sm:text-lg">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-white/80 sm:mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-brand-gold-2 text-sm font-medium group-hover:text-brand-gold transition-colors">
                  Learn more
                  <ExternalLink className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ClinicFinderSection() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_35%),#f8fcff] py-12 sm:py-16 lg:py-20">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-700/10 px-4 py-2 text-xs font-bold text-cyan-700 sm:text-sm">
              2026 Turkey Hair Transplant Guide
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#092f35] sm:text-4xl lg:text-5xl">
              Find the right clinic without getting lost in the noise.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5d7479] sm:text-base lg:text-lg">
              We compare Turkey&apos;s leading hair transplant clinics through medical credibility, doctor involvement, verified reviews, patient experience, and international recognition.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4">
              {clinicFinderPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-[#34585d] sm:text-[15px]">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-black text-cyan-700">
                    ✓
                  </span>
                  <p className="leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/clinics"
                className="rounded-full bg-cyan-700 px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_35px_rgba(14,116,144,0.2)] transition-transform hover:-translate-y-0.5"
              >
                Compare Top Clinics
              </Link>
              <Link
                href="/sources"
                className="rounded-full border border-cyan-700/20 bg-white px-5 py-3 text-sm font-extrabold text-cyan-700 transition-transform hover:-translate-y-0.5"
              >
                View Ranking Methodology
              </Link>
            </div>
          </div>

          <div className="relative grid gap-4 lg:min-h-[620px] lg:block">
            <div className="absolute inset-[70px] hidden rounded-full border border-dashed border-cyan-700/20 lg:block">
              <div className="absolute inset-20 rounded-full border border-dashed border-teal-500/20" />
            </div>

            <article className="z-10 w-full rounded-[28px] border border-cyan-700/15 bg-white/90 p-5 shadow-[0_30px_90px_rgba(9,47,53,0.13)] backdrop-blur-xl sm:p-7 lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[390px] lg:-translate-x-1/2 lg:-translate-y-1/2">
              <div className="mb-5 flex items-start justify-between gap-4 sm:mb-6">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-700 text-xl font-black text-white sm:size-14 sm:text-2xl">
                  #1
                </div>
                <div className="text-right text-2xl font-black text-cyan-700 sm:text-3xl">
                  5.0
                  <span className="mt-0.5 block text-[11px] font-bold text-slate-500 sm:text-xs">overall score</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#092f35] sm:text-[29px]">Dr. Serkan Aygin Clinic</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f767a]">
                Ranked first overall for its combination of international awards, JCI-accredited hospital environment, surgeon-set protocols, and verified review depth.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-6">
                <div className="rounded-2xl bg-cyan-50 px-2 py-3 text-center">
                  <strong className="block text-base text-cyan-700 sm:text-lg">1996</strong>
                  <span className="text-[11px] font-bold text-slate-500">Founded</span>
                </div>
                <div className="rounded-2xl bg-cyan-50 px-2 py-3 text-center">
                  <strong className="block text-base text-cyan-700 sm:text-lg">~1,494</strong>
                  <span className="text-[11px] font-bold text-slate-500">Reviews</span>
                </div>
                <div className="rounded-2xl bg-cyan-50 px-2 py-3 text-center">
                  <strong className="block text-base text-cyan-700 sm:text-lg">JCI</strong>
                  <span className="text-[11px] font-bold text-slate-500">Accredited</span>
                </div>
              </div>
            </article>

            {orbitCards.map((card) => (
              <article
                key={card.name}
                className={`w-full rounded-2xl border border-cyan-700/15 bg-white p-4 shadow-[0_20px_55px_rgba(9,47,53,0.08)] transition-transform hover:-translate-y-1 sm:p-5 lg:absolute lg:w-[230px] ${card.className}`}
              >
                <strong className="mb-1.5 block text-[15px] font-bold text-[#123033] sm:text-base">{card.name}</strong>
                <span className="block text-xs leading-5 text-slate-500 sm:text-[13px]">{card.description}</span>
                <em className="mt-3 inline-flex rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-black not-italic text-cyan-700">
                  {card.score}
                </em>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VerificationGuideSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-brand-cream/30 to-white">
      <div className="site-container">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className={`${sectionHeadingClassName} mb-4`}>
            The 5 Things Every Patient Must Verify Before Booking
          </h2>
          <p className={sectionLeadClassName}>
            A short preview of our comprehensive clinic verification checklist.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {verificationSteps.map((step, index) => (
              <div
                key={index}
                className={`${simpleCardClassName} group transition-colors duration-300 hover:border-brand-gold/30`}
              >
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-base font-bold text-white transition-transform group-hover:scale-110 sm:size-12 sm:text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-brand-navy transition-colors group-hover:text-brand-gold sm:mb-3 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <Link
              href="/clinic-checklist"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-navy-2 sm:px-8 sm:py-4 sm:text-base"
            >
              Read the Full Checklist
              <ExternalLink className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TransparencySection() {
  return (
    <section className="py-10 sm:py-12 bg-gradient-to-r from-brand-navy via-brand-navy-2 to-brand-navy">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center sm:mb-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold-2 sm:size-16">
              <Shield className="size-6 sm:size-8" />
            </div>
          </div>
          <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl sm:mb-6">
            How We Fund Ourselves
          </h2>
          <div className="rounded-xl border border-white/20 bg-white/10 p-5 sm:p-8">
            <p className="mb-5 text-sm leading-relaxed text-white/90 sm:mb-6 sm:text-base">
              We are funded entirely by donations and grants. We accept no advertising, no clinic sponsorships, 
              and no referral fees. If you find our work useful, you can support us here. Our financial reports 
              are published annually on our About page.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/donate"
                className="rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold-2 sm:px-6 sm:py-3 sm:text-base"
              >
                Support Our Work
              </Link>
              <Link
                href="/about#funding"
                className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 sm:px-6 sm:py-3 sm:text-base"
              >
                View Financial Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SourcesSection() {
  return (
    <section className="border-t border-data-panel-border bg-white py-10 sm:py-12">
      <div className="site-container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 text-center sm:mb-8">
            <h3 className="mb-3 text-lg font-bold text-brand-navy sm:mb-4 sm:text-xl">
              Primary Sources Used Across This Website
            </h3>
            <p className="text-sm text-brand-muted sm:text-base">
              We cite only peer-reviewed research, official government data, and established medical societies.
            </p>
          </div>

          <div className="mb-7 grid gap-4 sm:mb-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sources.map((source, index) => (
              <div
                key={index}
                className="rounded-lg border border-data-panel-border bg-brand-cream/50 p-4 transition-colors hover:border-brand-gold/30"
              >
                <h4 className="mb-2 font-semibold text-brand-navy">{source.name}</h4>
                <p className="mb-2 text-xs font-mono text-brand-gold sm:text-sm">{source.url}</p>
                <p className="text-xs text-brand-muted">{source.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sources"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-navy font-semibold transition-colors"
            >
              View Our Full Sources Library
              <ExternalLink className="size-4" />
            </Link>
          </div>

          <div className="mt-7 border-t border-data-panel-border pt-7 text-center sm:mt-8 sm:pt-8">
            <p className="mb-4 text-xs text-brand-muted sm:text-sm">
              <strong>Research status:</strong> Clinic details, source records and methodology notes will be reviewed
              before the website is opened to search engines. Dates and evidence labels will be shown with the final content.
            </p>
            <p className="text-xs text-brand-muted">
              Medical information will prioritise peer-reviewed research, official institutions and established medical
              societies. Clinic-provided details will be clearly separated from independently verifiable facts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
