import type { Metadata } from "next";

import MainHeroLanding from "../lib/Sections/MainHeroLanding";
import ServicesAdvertisements from "../lib/Sections/ServicesAdvertisement";
import BenefitsV2 from "../lib/Sections/BenefitsV2";
import ContactUs from "../lib/Sections/ContactUs";
import ImageHero from "../lib/Components/ImageHero/ImageHero";
import SlantedDiv from "../lib/Sections/SlantedDiv";
import ArticlesHero from "../lib/Sections/ArticlesHero";

export const metadata: Metadata = {
  title: "Home | BAAS",
  description: "Client Focused, Quality - Custom Software Development Agency",
  authors: { name: "BAAS Software Inc." },
  robots: { index: true },
  openGraph: {
    title: "Home | BAAS",
    description: "Custom Software Development Agency",
    siteName: "BAAS.dev",
    images: [
      {
        url: "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/d29dec25-872f-4fb6-a52d-83c6b355d500/public",
        width: 1200,
        height: 630,
      },
    ],
    tags: ["Custom Software", "Website Development", "Mobile App Development"],
  },
};

export default function Home() {
  return (
    <>
      <div className="py-40 h-full w-full relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center opacity-80 bg-fixed"
          style={{
            backgroundImage: "url('/particles.svg')",
          }}
        ></div>
        <div className="relative">
          <div className="h-full">
            <MainHeroLanding />
            <ServicesAdvertisements />
            <ArticlesHero />

            <BenefitsV2 />
            <ImageHero />
            <SlantedDiv />
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}
