import type { Metadata } from "next";
import { DetailGuidePage } from "@/components/editorial/detail-guide-page";
import { sapphireGuide } from "@/data/detail-guides";
import { createPageMetadata } from "@/config/seo";

export const metadata: Metadata = createPageMetadata({ title: "Sapphire FUE Guide", description: "Understand Sapphire FUE, the role of sapphire blades, common marketing claims, and questions to ask before treatment.", path: "/hair-transplant/sapphire-fue", keywords: ["Sapphire FUE Turkey", "sapphire hair transplant", "Sapphire FUE vs FUE"] });

export default function SapphireFuePage() { return <DetailGuidePage content={sapphireGuide} />; }
