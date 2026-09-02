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
  description: "Hair transplant information and clinic comparison guide for Turkey",
  url: "https://hairturkiye.org",
  topBannerText: "Research-led guides for international patients.",
  nav: [
    {
      href: "/hair-transplant",
      label: "Hair Transplant",
      showCaret: true,
      children: [
        { href: "/hair-transplant", label: "What is Hair Transplant?" },
        { href: "/hair-transplant/fue", label: "FUE Technique" },
        { href: "/hair-transplant/dhi", label: "DHI Technique" },
        { href: "/hair-transplant/sapphire-fue", label: "Sapphire FUE" },
        { href: "/hair-transplant/candidate", label: "Who is a Candidate?" },
        { href: "/hair-transplant/before-after", label: "Before and After" },
      ],
    },
    {
      href: "/why-turkey",
      label: "Why Turkey",
      showCaret: true,
      children: [
        { href: "/why-turkey", label: "Why Choose Turkey?" },
        { href: "/why-turkey/cost", label: "Cost Guide" },
        { href: "/why-turkey/medical-standards", label: "Medical Standards" },
        { href: "/why-turkey/travel-process", label: "Travel Process" },
      ],
    },
    { href: "/clinics", label: "Clinic Comparison" },
    { href: "/clinic-checklist", label: "Patient Guide" },
    { href: "/faq", label: "FAQ" },
    { href: "/sources", label: "Sources" },
  ] as NavItem[],
  footerLinkGroups: [
    {
      title: "Hair Transplant",
      links: [
        { href: "/hair-transplant/fue", label: "FUE Technique" },
        { href: "/hair-transplant/dhi", label: "DHI Technique" },
        { href: "/hair-transplant/sapphire-fue", label: "Sapphire FUE" },
      ],
    },
    {
      title: "Why Turkey",
      links: [
        { href: "/why-turkey/cost", label: "Cost Comparison" },
        { href: "/why-turkey/medical-standards", label: "Medical Standards" },
        { href: "/why-turkey/travel-process", label: "Travel Process" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/clinics", label: "Clinic Directory" },
        { href: "/faq", label: "FAQ Library" },
        { href: "/about", label: "About This Site" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ] as FooterLinkGroup[],
} as const;
