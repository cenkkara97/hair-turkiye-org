import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: false,
      follow: false,
      nocache: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
      },
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/images/hero.webp`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [`${siteConfig.url}/images/hero.webp`],
    },
  };
}
