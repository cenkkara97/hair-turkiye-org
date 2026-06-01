import type { Metadata } from "next";
import { ClinicComparisonPage } from "@/components/clinic-comparison-page";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Best Hair Transplant Clinics in Turkey 2026",
  description: "Interactive comparison of top hair transplant clinics in Turkey with ranking methodology, strengths, tradeoffs, and patient-fit guidance.",
  path: "/clinics",
  keywords: [
    "best hair transplant clinics turkey 2026",
    "turkey clinic comparison",
    "hair transplant ranking methodology",
    "istanbul hair transplant clinics",
  ],
});

export default function ClinicsPage() {
  return <ClinicComparisonPage />;
}
