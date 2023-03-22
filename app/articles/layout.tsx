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
      <div className="mx-auto min-h-screen">{children}</div>
    </>
  );
}
