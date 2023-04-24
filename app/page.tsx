import type { Metadata } from "next";

import MainHeroLanding from "../lib/Sections/MainHeroLanding";
import ServicesAdvertisements from "../lib/Sections/ServicesAdvertisement";
import BenefitsV2 from "../lib/Sections/BenefitsV2";
import ContactUs from "../lib/Sections/ContactUs";
import ImageHero from "../lib/Components/ImageHero/ImageHero";
import SlantedDiv from "../lib/Sections/SlantedDiv";
import ArticlesHero from "../lib/Sections/ArticlesHero";
import SEO from "../lib/Utils/SEO";

let seo = new SEO();

export const metadata: Metadata = seo.GenerateSEO({
  title: "Home",
  description: "Build Your Custom Software Dream with BAAS",
  images:
    "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/d29dec25-872f-4fb6-a52d-83c6b355d500/public",
  tags: [
    "Custom Web Development",
    "Custom software",
    "Custom Website",
    "custom web app",
    "custom mobile app",
  ],
});

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
