import React from "react";
import PageSectionHeader from "../../lib/Components/PageSectionHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen mx-auto bg-base-200 ">
      <PageSectionHeader
        description="Articles that have been curated to document practices surrounding our operations and history."
        title="Services"
      />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
