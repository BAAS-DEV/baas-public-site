import MainHeroLanding from "../lib/Sections/MainHeroLanding";
import ServicesAdvertisements from "../lib/Sections/ServicesAdvertisement";
import BenefitsV2 from "../lib/Sections/BenefitsV2";
import ContactUs from "../lib/Sections/ContactUs";

export default function Home() {
  return (
    <>
      {/* <MainNav /> */}
      {/* <CountDownHero /> */}
      <section className="py-40 h-full w-full relative">
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

            <BenefitsV2 />

            {/* <Services /> */}
            <ContactUs />
          </div>
        </div>
      </section>
      {/* <Benefits /> */}
      {/* <Services /> */}
      {/* <HowItWorks /> */}
    </>
  );
}
