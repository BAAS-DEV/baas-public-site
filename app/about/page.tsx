import axios from "axios";
import PageSectionHeader from "../../lib/Components/PageSectionHeader";

export default function AboutPage({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageSectionHeader
        description="Articles that have been curated to document practices surrounding our operations and history."
        title="We Pride Ourselves On Our Work"
      />
    </>
  );
}
