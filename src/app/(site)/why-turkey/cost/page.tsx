import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { costGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "Hair Transplant Cost in Turkey", description: "Compare hair transplant package costs in Turkey, included services, travel expenses, payment terms, and possible extras.", path: "/why-turkey/cost", keywords: ["hair transplant Turkey cost", "Turkey hair transplant package price", "hair transplant cost comparison"] });

export default function CostPage() { return <DetailGuidePage content={costGuide} />; }
