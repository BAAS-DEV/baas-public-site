import { Project } from "../../../lib/Interfaces";
import SEO from "../../../lib/Utils/SEO";

export async function generateMetadata({
  params,
}: {
  params: { articleSlug: string };
}) {
  let result = await fetch(
    "https://api.baas.dev/api" +
      "/system-components?populate=*&filters[system][Slug][$eq]=" +
      params?.articleSlug,
    { next: { revalidate: 10 } }
  ).then((res) => res.json());

  let data: Project = result.data[0].attributes;
  const seo = new SEO();

  return seo.GenerateSEO({
    title: data.attributes.Title ? data.attributes.Title : "Project By BAAS",
    description: data.attributes.Description
      ? data.attributes.Description
      : "Projects that we have preformed for our clients.",
    images: data.attributes.Image ? data.attributes.Image : "Project Images",
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
      <div className="">{children}</div>
    </>
  );
}
