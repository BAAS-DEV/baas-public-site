"use client";
import { m } from "framer-motion";
import { Component, ReactNode } from "react";
import Typewriter from "typewriter-effect";

class TypingTexts extends Component {
  render(): ReactNode {
    return (
      <Typewriter
        // onInit={(typewriter) => {
        //   typewriter.typeString("Hello World!").start();
        // }}
        options={{
          autoStart: true,

          strings: RandomStrings(),
          loop: true,
          wrapperClassName: "text-4xl pb-8",
        }}
      />
    );
  }
}

function RandomStrings(): string[] {
  let strings = [
    "Website",
    "Mobile App",
    "CRM Software",
    "Desktop App",
    "Inventory Management",
    "Property Management",
    "ERP",
    "Human Resource",
    "Video Game",
    "AR/VR",
    "IoT",
    "Security",
    "Identity Access Management",
    "Web3",
    "BlockChain",
    "Chatbot",
    "Social Media",
    "Events & Ticketing",
    "Financial Management",
  ];
  const shuffled = [...strings];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // generate a random index to swap with
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements at indices i and j
  }
  return shuffled;
}
export default TypingTexts;
