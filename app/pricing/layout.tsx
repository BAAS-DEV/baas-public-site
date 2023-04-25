import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import SEO from "../../lib/Utils/SEO";

export async function generateMetadata({}: {}) {
  const seo = new SEO();
  return seo.GenerateSEO({
    title: "Pricing for Custom Software Services",
    description:
      "Pricing structures of different scopes of professional services that we perform. These services increase value, production, and revenue.",
    images:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/681b3d3b-ad7b-4f54-1e7d-56e92f398500/public",
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
      <PageSectionHeader
        description="Transparent pricing and services related to projects we have completed under contract"
        title="Pricing"
      />
      <div className="container mx-auto min-h-screen">{children}</div>

      {/* {size.width > 980 ? (
        <SidebarLayout>
          {" "}
          <div className="container mx-auto">{children}</div>
        </SidebarLayout>
      ) : (
        <>
          <div className="container mx-auto min-h-screen">{children}</div>
        </>
      )} */}
    </div>
  );
}
