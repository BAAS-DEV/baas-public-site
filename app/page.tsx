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
  description: "Custom Software Development Agency",
  authors: { name: "BAAS Software Inc." },
  robots: { index: true },
  openGraph: {
    title: "Home | BAAS",
    description: "Custom Software Development Agency",
    images: [
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/e1991de4-205c-4676-3d1b-629634ccdf00/public",
    ],
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
