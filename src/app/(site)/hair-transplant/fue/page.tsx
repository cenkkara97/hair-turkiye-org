import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { fueGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "FUE Hair Transplant Guide", description: "Understand the FUE hair transplant process, donor planning, benefits, limitations, and questions to ask clinics in Turkey.", path: "/hair-transplant/fue", keywords: ["FUE hair transplant Turkey", "FUE procedure", "FUE donor area"] });

export default function FuePage() { return <DetailGuidePage content={fueGuide} />; }
