import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { candidateGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "Hair Transplant Candidate Guide", description: "Learn how donor capacity, hair-loss progression, health, age, and expectations affect hair transplant suitability.", path: "/hair-transplant/candidate", keywords: ["hair transplant candidate", "am I suitable for hair transplant", "hair transplant donor area"] });

export default function CandidatePage() { return <DetailGuidePage content={candidateGuide} />; }
