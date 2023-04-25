import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import SEO from "../../lib/Utils/SEO";
export async function generateMetadata({
  params,
}: {
  params: { articleSlug: string };
}) {
  const seo = new SEO();
  return seo.GenerateSEO({
    title: "Custom Software Projects By BAAS",
    description:
      "Web, Mobile, Automation, and more. Based projects that we have preformed for our clients.",
    images:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/db305228-eeee-44a3-6d03-948a4843de00/public",
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
      <div className=" min-h-screen mx-auto bg-base-200 ">
        <PageSectionHeader
          description="Products, services, and concepts developed by our team."
          title="Projects By BAAS"
        />
        <div className="mx-auto">{children}</div>
      </div>
    </>
  );
}
