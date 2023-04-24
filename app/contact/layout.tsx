import { Metadata } from "next";
import SEO from "../../lib/Utils/SEO";

const seo = new SEO();
export const metadata: Metadata = seo.GenerateSEO({
  title: "Let's Plan New Software - Contact Us",
  description:
    "FREE consultations about your new website, mobile app, or awesome software. Receive a personalized review document of our recommended potential actions for the greatest chance of success with your custom website, mobile app, or software.",
  images:
    "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/95e738ca-ecb4-4aa1-2880-c6687a472d00/public",
  tags: [
    "Custom Web Development",
    "Custom software",
    "Custom Website",
    "custom web app",
    "custom mobile app",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
