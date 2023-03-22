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
        description="Packages of example components and products that we compile frequently"
        title="Mockups"
      />
      <div className="mx-auto">{children}</div>
    </>
  );
}
