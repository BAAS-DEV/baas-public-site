import { Metadata } from "next";
import baasAxios from "../../../lib/Utils/axios";

import { Article } from "../../../lib/Interfaces";
import SEO from "../../../lib/Utils/SEO";
// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { articleSlug: string };
}) {
  let result = await fetch(
    "https://api.baas.dev/api" +
      "/content-entries/?filters[slug][$eq]=" +
      params?.articleSlug
  ).then((res) => res.json());

  let data: Article = result.data[0].attributes;
  const seo = new SEO();

  return seo.GenerateSEO({
    title: data.Title ? data.Title : "Article",
    description: data.imageURL
      ? data.imageURL
      : "Helpful software development articles",
    images: data.imageURL ? data.imageURL : "Article By BAAS",
    tags: [],
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto min-h-screen">{children}</div>
    </>
  );
}
