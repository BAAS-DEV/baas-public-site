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
      images: [
        "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/5683665d-2cdd-499c-b282-b7d8549dd700/public",
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
