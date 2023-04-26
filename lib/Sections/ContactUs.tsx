"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function ContactUs() {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const router = useRouter();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Supercharge your success with our team -{" "}
              <span className="text-accent">Contact us now</span>!
            </h1>
            <p className="mb-5">
              From strategy to implementation, we&#39;ve got you covered.
              Contact us now and let&#39;s make something great together.
            </p>
            <button className="btn btn-primary text-xl">
              <Link href={"/contact"}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ServicesSelection() {}
