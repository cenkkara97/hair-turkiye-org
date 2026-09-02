import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { standardsGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "Hair Transplant Medical Standards in Turkey", description: "Understand clinic licensing, physician responsibility, accreditation, documentation, and patient-safety standards in Turkey.", path: "/why-turkey/medical-standards", keywords: ["Turkey hair transplant medical standards", "hair transplant clinic licence Turkey", "hair transplant accreditation"] });

export default function MedicalStandardsPage() { return <DetailGuidePage content={standardsGuide} />; }
