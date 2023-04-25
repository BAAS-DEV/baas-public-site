import React from "react";
import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import SEO from "../../lib/Utils/SEO";

export async function generateMetadata({}: {}) {
  const seo = new SEO();
  return seo.GenerateSEO({
    title:
      "Custom Software Services - Web, Mobile, Automation, Infrastructure & More",
    description:
      "Professional services that we perform that increase value, production, and revenue.",
    images:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/da9482d7-ba95-4c70-75cb-bc519bfb3900/public",
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
        description="A collection of à la carte services that we have successfully implemented for individuals or businesses"
        title="Services"
      />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
