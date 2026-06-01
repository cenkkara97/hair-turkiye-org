export type NavItem = {
  href: string;
  label: string;
  showCaret?: boolean;
  children?: { href: string; label: string }[];
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export const siteConfig = {
  name: "HairTurkiye.org",
  description: "Independent hair transplant information and clinic guide",
  url: "https://hairturkiye.org",
  topBannerText: "Independent resource. No paid clinic rankings.",
  nav: [
    {
      href: "/hair-transplant",
      label: "Hair Transplant",
      showCaret: true,
      children: [
        { href: "/hair-transplant", label: "What is Hair Transplant?" },
        { href: "/hair-transplant", label: "FUE Technique" },
        { href: "/hair-transplant", label: "DHI Technique" },
        { href: "/hair-transplant", label: "Sapphire FUE" },
        { href: "/hair-transplant", label: "Who is a Candidate?" },
        { href: "/hair-transplant", label: "Before and After" },
      ],
    },
    { href: "/why-turkey", label: "Why Turkey" },
    { href: "/clinics", label: "Clinic Comparison" },
    { href: "/clinic-checklist", label: "Patient Guide" },
    { href: "/faq", label: "FAQ" },
    { href: "/sources", label: "Sources" },
  ] as NavItem[],
  footerLinkGroups: [
    {
      title: "Hair Transplant",
      links: [
        { href: "/hair-transplant", label: "FUE Technique" },
        { href: "/hair-transplant", label: "DHI Technique" },
        { href: "/hair-transplant", label: "Sapphire FUE" },
      ],
    },
    {
      title: "Why Turkey",
      links: [
        { href: "/why-turkey", label: "Cost Comparison" },
        { href: "/why-turkey", label: "Medical Standards" },
        { href: "/clinic-checklist", label: "Travel Process" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/clinics", label: "Clinic Directory" },
        { href: "/faq", label: "FAQ Library" },
        { href: "/about", label: "About This Site" },
      ],
    },
  ] as FooterLinkGroup[],
} as const;
