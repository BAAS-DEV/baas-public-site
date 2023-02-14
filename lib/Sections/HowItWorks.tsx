"use client";

import { useState } from "react";
import AnimatedContainer from "../Containers/AnimatedContainer";

export default function HowItWorks() {
  const [count, setCount] = useState(0);

  const steps = [
    {
      title: "Planning",
      description: "",
    },
    {
      title: "Development",
      description: "",
    },
    {
      title: "Hand-Off",
      description: "",
    },
    {
      title: "Monitoring",
      description: "",
    },
  ];

  return (
    <div className=" min-h-screen w-screen bg-accent pb-96 pt-96 bg-white text-primary">
      <div className="container mx-auto  text-center  p-4 py-8 rounded-lg text-white">
        <h2 className="text-5xl ">The Process Of Building Your Solution</h2>
        <p className="text-lg pt-4">
          Listed below are summarizations of the steps we take in order to
          ensure quality of service.
        </p>
      </div>
      <AnimatedContainer>
        <div className="grid grid-cols-1 gap-2 container mx-auto my-16 ">
          <div className=" mx-auto w-full p-4 rounded-xl">
            <ul className="steps steps-horizontal w-full">
              {steps.map((item, i) => (
                <>
                  <li key={i} className="step step-accent">
                    <div>{item.title}</div>
                  </li>
                </>
              ))}
            </ul>
            <div className="">
              <progress
                className="progress progress-accent "
                value={(count + 1) * 25}
                max="100"
              ></progress>
            </div>
            <div className="w-full mx-auto text-center p-4">
              <button
                className="btn btn-circle btn-outline mx-2"
                onClick={() => setCount(count - 1)}
              >
                <p>{"<<"}</p>
              </button>
              <button
                className="btn btn-circle btn-outline mx-2"
                onClick={() => setCount(count + 1)}
              >
                <p>{">>"}</p>
              </button>
            </div>
          </div>
        </div>
      </AnimatedContainer>
      <AnimatedContainer>
        <div className="container w-full mx-auto">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid card  rounded-box p-8">
              <h3 className="text-4xl text-center ">Header</h3>
            </div>
            <div className="divider"></div>
            <div className="grid cardrounded-box p-8">
              <h3 className="text-2xl text-center">
                Bodopaj dspofasjdifjsadfiosajiodfjsijoa df
              </h3>
            </div>
          </div>
        </div>
      </AnimatedContainer>
    </div>
  );
}
