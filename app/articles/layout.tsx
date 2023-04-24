import { Metadata } from "next";
import SEO from "../../lib/Utils/SEO";
// Dynamic metadata

const seo = new SEO();

export const metadata: Metadata = seo.GenerateSEO({
  title: "Articles",
  description:
    "Free articles that intend to help you build your dream solutions",
  images:
    "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/d29dec25-872f-4fb6-a52d-83c6b355d500/public",
  tags: [],
});

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
