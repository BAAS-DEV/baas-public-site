import { Metadata } from "next";
// Dynamic metadata
export async function generateMetadata({}) {
  return {
    title: "Articles | BAAS",
    description:
      "Helpful articles for those interested in custom software development services",
    authors: { name: "BAAS Software Inc." },
    robots: { index: true },
    openGraph: {
      title: "Home | BAAS",
      description:
        "Helpful articles for those interested in custom software development services",
      images: [
        "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/0e763bce-5ceb-4a9b-fcb9-dc6043dc0f00/public",
      ],
    },
  };
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
