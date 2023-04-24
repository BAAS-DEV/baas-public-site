import { Metadata } from "next";
// Dynamic metadata

export const metadata: Metadata = {
  title: "Articles | BAAS",
  description:
    "Helpful articles aimed to inform readers about ways to maximize their software value",
  authors: { name: "BAAS Software Inc." },
  robots: { index: true },
  openGraph: {
    title: "Home | BAAS",
    description:
      "Helpful articles aimed to inform readers about ways to maximize their software value",
    siteName: "BAAS.dev",
    images: [
      {
        url: "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/d29dec25-872f-4fb6-a52d-83c6b355d500/public",
        width: 1200,
        height: 630,
      },
    ],
    tags: ["Custom Software Articles"],
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
