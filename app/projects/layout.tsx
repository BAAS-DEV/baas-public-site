"use client";

import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import SidebarLayout from "../../lib/Containers/SidebarLayout";
import useWindowSize from "../../lib/Hooks/windowHook";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const size = useWindowSize();
  return (
    <>
      <PageSectionHeader
        description="Products, services, and concepts developed by our team."
        title="Projects By BAAS"
      />
      <div className="mx-auto">{children}</div>
    </>
  );
}
