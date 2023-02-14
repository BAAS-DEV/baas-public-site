import PageSectionHeader from "../../../lib/Components/PageSectionHeader";
import SidebarLayout from "../../../lib/Containers/SidebarLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 overflow-auto">
        {/* <PageSectionHeader
          description="Articles that have been curated to document practices surrounding our operations and history."
          title="About Our Company"
          image="https://placeimg.com/1000/800/arch"
        /> */}
        <SidebarLayout>{children}</SidebarLayout>
      </div>
    </div>
  );
}
