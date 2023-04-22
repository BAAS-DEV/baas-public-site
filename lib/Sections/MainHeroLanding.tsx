"use client";
import { useRouter } from "next/navigation";
import Code from "../Artboards/code";
import Button1 from "../Buttons/Button1";
import AnimatedContainer from "../Containers/AnimatedContainer";
import Container from "../Containers/Container";
import { ContainerConfig } from "../Containers/Container";
import TypingTexts from "../TypographyCollections/TypingTexts";

function HeroBody() {
  const router = useRouter();
  return (
    <>
      <div className="w-full px-2 text-left mx-auto  ">
        <div className="grid grid-cols-2 ">
          <div className="text-center py-16 col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mx-auto text-center w-full">
              {/* <a className="btn btn-ghost normal-case text-xl">BAAS Software</a> */}
              <figure>
                <img
                  src="/baas-logo-white.png"
                  className="mx-auto "
                  alt="Shoes"
                  width={350}
                />
              </figure>
              <h2 className="text-3xl font-thin text-white">
                Don&#39;t Settle for the Standard
              </h2>
              <div className=" text-center my-8 ">
                <button
                  onClick={() => router.push("/contact")}
                  className="btn btn-accent btn-lg rounded-lg text-center text-white"
                >
                  FREE Consultation Signup
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1">
            <AnimatedContainer>
              <Code />
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default function MainHeroLanding() {
  let config: ContainerConfig;

  return (
    <>
      <div className="hero mx-auto relative">
        <div className=" w-full">
          <div className="container mx-auto">
            <HeroBody />
          </div>
        </div>
      </div>
    </>
  );
}
