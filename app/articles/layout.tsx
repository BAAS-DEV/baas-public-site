import { Metadata } from "next";
import SEO from "../../lib/Utils/SEO";
// Dynamic metadata

const seo = new SEO();

export async function generateMetadata() {
  return seo.GenerateSEO({
    title: "Articles",
    description:
      "Free articles that intend to help you build your dream solutions",
    images:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/0e763bce-5ceb-4a9b-fcb9-dc6043dc0f00/public",
    tags: [],
  });
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto min-h-screen">{children}</div>
    </>
  );
}
