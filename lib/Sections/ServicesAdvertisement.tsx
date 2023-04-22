"use client";

import { useEffect, useState } from "react";
import AnimatedContainer from "../Containers/AnimatedContainer";
import axios from "axios";
import StepButtons from "../Components/ProcessOnPhoneARt/stepButtons";
import StepRendering from "../Components/ProcessOnPhoneARt/stepRendering";

export default function ServicesAdvertisements() {
  const [allCategories, setAllCategories] = useState([]);
  const [enabledCategories, setEnabledCategories] = useState([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  // const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    let res = await axios
      .get("/service-categories")
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleClick = (value: number) => {
    let step = currentStep;
    step = step + value;
    setCurrentStep(step);
  };

  const steps = ["1", "2", "3", "4"];

  const titles = ["Planning", "Development", "Transfer", "Monitor"];
  return (
    // <div
    //   className="hero bg-primary "
    //   style={{ backgroundImage: "url('/Cloudy.svg')" }}
    // >
    //   <div className=" w-full">

    //   </div>
    // </div>
    <div
      className="hero   bg-white py-32"
      style={{ backgroundImage: "url('/dots.svg')" }}
    >
      <div className=" px-2 grid grid-cols-2 w-full gap-8">
        <div className="col-span-2 sm:col-span-2 md:col-span-2 w-full text-center xs:mx-auto md:mx-0">
          <div className="mockup-phone phone-2 border-info text-center  px-4  ">
            <div className="camera"></div>
            <div className="display h-full w-full">
              <div className="artboard h-full w-full artboard-demo ">
                <div className="h-full mt-8 relative">
                  <p className="text-xl text-accent">Great News!</p>
                  <h2 className="text-3xl text-center px-2">
                    It&#39;s easier than ever!
                  </h2>

                  <p className="max-w-xs text-lg text-center block mx-auto">
                    Know every step of your Journey, ensuring success and
                    transparency.
                  </p>
                  <div className="divider"></div>
                  <h3 className="text-4xl pb-2 font-bold">
                    {titles[currentStep]}
                  </h3>

                  <ul className="steps w-full mx-auto">
                    {steps.map((item, i) => (
                      <>
                        <li
                          className={`step ${
                            currentStep >= i ? "step-accent" : ""
                          }`}
                        ></li>
                      </>
                    ))}
                  </ul>
                  <div className="w-full divider"></div>
                  <div className="px-2">
                    <StepRendering step={currentStep} />
                  </div>
                  <div className="text-center my-4">
                    <StepButtons
                      pos={currentStep}
                      handleStepChange={handleClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
