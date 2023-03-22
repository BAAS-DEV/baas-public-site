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
        description="A collection of à la carte services that we have successfully implemented for individuals or businesses"
        title="Services"
      />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
