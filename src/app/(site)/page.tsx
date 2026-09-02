import type { Metadata } from "next";
import {
  HairTransplantStatsSection,
  HeroSection,
  HonestRealitySection,
  ClinicFinderSection,
  VerificationGuideSection,
  SourcesSection,
} from "@/components/home-sections";
import { ExploreGuideSection, MethodologyPreviewSection } from "@/components/home-editorial-sections";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Hair Transplant Turkey Guide",
  description: "Evidence-led hair transplant guide for Turkey: costs, safety checks, clinic research, and patient FAQ.",
  path: "/",
  keywords: [
    "hair transplant turkey",
    "fue turkey",
    "dhi turkey",
    "hair transplant cost turkey",
    "turkey clinic checklist",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HairTransplantStatsSection />
      <ExploreGuideSection />
      <ClinicFinderSection />
      <HonestRealitySection />
      <MethodologyPreviewSection />
      <VerificationGuideSection />
      <SourcesSection />
    </>
  );
}
