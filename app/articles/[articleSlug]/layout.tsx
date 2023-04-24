import { Metadata } from "next";
import baasAxios from "../../../lib/Utils/axios";

import { Article } from "../../../lib/Interfaces";
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

  console.log(result.data[0].attributes.Title);
  let data: Article = result.data[0].attributes;

  return {
    title: data.Title,
    description: data.Description,
    authors: { name: "BAAS Software Inc." },
    robots: { index: true },
    openGraph: {
      title: data.Title,
      description: data.Description,
      images: data.imageURL,
      tags: ["Software Development Articles"],
    },
  };
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
