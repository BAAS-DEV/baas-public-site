import type { Metadata } from "next";

export interface DynamicPageSEOInput {
  title: string;
  description: string;
  images: string;
  tags: string[];
}

export default class SEO {
  GenerateDynamicPageSEO(SEOInputData: DynamicPageSEOInput): Metadata {
    return {
      title: SEOInputData.title + " | BAAS",
      description: SEOInputData.description,
      authors: { name: "BAAS Software Inc." },
      twitter: {
        site: "baas.dev",
        title: SEOInputData.title + " | BAAS",
        description: SEOInputData.description,
        images: SEOInputData.images,
        siteId: "baas.dev",
      },
      openGraph: {
        title: SEOInputData.title + " | BAAS",
        description: SEOInputData.description,
        siteName: "baas.dev",
        emails: "info@baas.dev",
        images: [
          {
            url: SEOInputData.images,
            width: 1200,
            height: 630,
          },
        ],
        tags: SEOInputData.tags,
      },
    };
  }
}
