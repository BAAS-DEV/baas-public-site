"use client";
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

          strings: ["Website", "Mobile App"],
          loop: true,
          wrapperClassName: "text-4xl pb-8",
        }}
      />
    );
  }
}

export default TypingTexts;
