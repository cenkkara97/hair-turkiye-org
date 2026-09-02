import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { dhiGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "DHI Hair Transplant Guide", description: "Learn what DHI means, how implanter pens are used, and how to compare DHI clinics and treatment plans in Turkey.", path: "/hair-transplant/dhi", keywords: ["DHI hair transplant Turkey", "DHI vs FUE", "DHI implanter pen"] });

export default function DhiPage() { return <DetailGuidePage content={dhiGuide} />; }
