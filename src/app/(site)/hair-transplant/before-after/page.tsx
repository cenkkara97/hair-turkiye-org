import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { beforeAfterGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "Hair Transplant Before and After Guide", description: "Learn how to evaluate hair transplant before-and-after photos, timelines, lighting, donor views, and comparable cases.", path: "/hair-transplant/before-after", keywords: ["hair transplant before and after Turkey", "hair transplant results", "evaluate hair transplant photos"] });

export default function BeforeAfterPage() { return <DetailGuidePage content={beforeAfterGuide} />; }
