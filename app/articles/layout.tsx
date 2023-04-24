import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | BAAS",
  description:
    "Helpful articles for those interested in how software development can help you.",
  authors: { name: "BAAS Software Inc." },
  robots: { index: true },
  openGraph: {
    images: [
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/d230351b-5449-4257-6bc2-9c86cda7cc00/public",
    ],
  },
};

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
