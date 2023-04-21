"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
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
