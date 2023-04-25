import PageSectionHeader from "../../../lib/Components/PageSectionHeader";
import { Service } from "../../../lib/Interfaces";
import SEO from "../../../lib/Utils/SEO";

export async function generateMetadata({
  params,
}: {
  params: { serviceCategorySlug: string };
}) {
  let result = await fetch(
    "https://api.baas.dev/api" +
      "/services?filters[service_categories][slug][$eq]=" +
      params.serviceCategorySlug,

    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  console.log(result);
  let data: Service = result.data[0];
  const seo = new SEO();

  return seo.GenerateSEO({
    title: data.attributes.name ? data.attributes.name : "Serivce By BAAS",
    description: data.attributes.Description
      ? data.attributes.Description
      : "Projects that we have preformed for our clients.",
    images: data.attributes.image ? data.attributes.image : "Project Images",
    tags: [],
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen mx-auto bg-base-200 ">
      {/* <PageSectionHeader
        description="Articles that have been curated to document practices surrounding our operations and history."
        title="Pricing"
      /> */}
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
