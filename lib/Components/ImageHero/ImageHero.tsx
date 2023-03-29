"use client";
// import CheckIcon from "~icons/tabler/check.tsx";

import { useRouter } from "next/navigation";
import Image from "next/image";
const benefits: string[] = [
  "Cross-Platform Apps",
  "Process & Automation Software",
  "Custom Job Processes",
];

export default function ImageHero() {
  const router = useRouter();
  return (
    <section className=" mx-auto bg-white text-center items-center px-8 py-36 sm:flex-row-reverse sm:px-12">
      {/* <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
        <img
          alt="Hanging out with friends"
          className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
          src="/images/pexels-ketut-subiyanto-4353618.jpg"
        />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <Image
            loader={() => "/png/ad2.png"}
            src={"/png/ad2.png"}
            alt="Shoes"
            height={500}
            width={500}
            className="rounded-xl max-h-screen relative mx-auto"
          />
        </div>
        <div className="mr-4 w-full text-center mt-48  sm:text-left">
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            We&#39;ve got{" "}
            <span className="text-success">tons of experince!</span>
          </h1>
          <p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
            We have collected some examples of mockups produced for various
            projects.
          </p>
          <p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
            You can find example screenshots of:
          </p>
          <ul className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start">
            {benefits.map((benefit, index) => (
              <li className="flex items-end" key={index}>
                {/* <CheckIcon className="mr-2 text-orange-300" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-success"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>

                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
            <button
              onClick={() => router.push("/mockups")}
              className="rounded-lg text-xl border-0 bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2"
            >
              View Now
            </button>
            {/* <button className="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2">
              Explore services
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
