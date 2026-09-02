import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { travelGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "Hair Transplant Turkey Travel Process", description: "Plan a hair transplant trip to Turkey, including assessment, flights, hotel, transfers, treatment timing, and follow-up.", path: "/why-turkey/travel-process", keywords: ["hair transplant Turkey travel", "Istanbul hair transplant trip", "hair transplant package travel process"] });

export default function TravelProcessPage() { return <DetailGuidePage content={travelGuide} />; }
