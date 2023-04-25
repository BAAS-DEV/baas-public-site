import { ProductCategory, Products } from "../../../lib/Interfaces";
import SEO from "../../../lib/Utils/SEO";

export async function generateMetadata({
  params,
}: {
  params: { pricingItemId: string };
}) {
  let result = await fetch(
    "https://api.baas.dev/api" +
      "/product-categories?populate=*&filter[Slug][$eq]=" +
      params?.pricingItemId,
    { next: { revalidate: 30 } }
  ).then((res) => res.json());

  let data: ProductCategory = result.data[0];
  const seo = new SEO();

  return seo.GenerateSEO({
    title: data.attributes.Name
      ? data.attributes.Name
      : "Pricing for Custom Software Services",
    description: data.attributes.Description
      ? data.attributes.Description
      : "Pricing structures of different scopes of professional services that we perform. These services increase value, production, and revenue.",
    images: data.attributes.imageURL
      ? data.attributes.imageURL
      : "Project Images",
    tags: [],
  });
}
