"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function ContactUs() {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [value, setValue] = useState<string>("");

  const router = useRouter();
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen sm:py-48">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div
            className="w-full p-20 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl bg-cover bg-no-repeat shadow-2xl"
            style={{ backgroundImage: "url('/svgs/rings.svg')" }}
          >
            <div className="flex">
              <div className="w-full">
                <div className="flex justify-center px-4 py-16 ">
                  <div className="w-full mx-auto text-center my-4">
                    <h3 className=" text-white  text-6xl mb-8">
                      We Want To Hear From You
                    </h3>
                    <button
                      onClick={() => router.push("/contact")}
                      className="btn  text-white btn-4xl btn-success w-full text-2xl text-center
                  transition
                   hover:bg-orange-300
                    hover:text-slate-900
                     hover:shadow-orange-300
                      dark:bg-orange-300
                       dark:text-black dark:shadow-sm
                        dark:shadow-orange-300
                         dark:hover:bg-orange-400
                          sm:py-2
                  "
                    >
                      Get Your Questions Answered
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div>
                <label className="text-white text-xl">
                  What can we call you?
                </label>
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter Your Name*"
                />
              </div> */}

            {/* <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              /> */}

            {/* <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              /> */}
            {/* </div> */}
            {/* 
            <div className="my-4">
              <label className="text-white text-xl">
                What is your preferred contact method?
              </label>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(parseInt(e.target.value))}
                className="select select-primary bg-gray-100 text-gray-900 w-full"
              >
                <option disabled selected className="text-gray-900">
                  Please Select
                </option>
                <option value={0}>Email</option>

                <option value={1}>Phone</option>
              </select>
              {selectedOption === 0 ? (
                <div>
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                  />
                </div>
              ) : (
                <></>
              )}
              {selectedOption === 1 ? (
                <div>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    className="w-full text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                    defaultCountry={"US"}
                    onChange={(e) => setValue}
                  /> */}
            {/* <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    placeholder="Phone Number*"
                    name="cuit"
                    type="number"
                    pattern="[0-9\/]*"
                    onChange={handleChange} // calling handleChange on input change directly
                    maxLength="13"
                  /> */}
            {/* </div>
              ) : (
                <></>
              )}
            </div> */}
            {/* <div>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
            </div> */}
            {/* <div className="my-4">
              <label className="text-white text-xl">
                What can we help with?
              </label>
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div> */}
            {/* <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div> */}
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-black rounded-2xl  mb-16">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                24/7 Support
              </h1>
              <p className="text-gray-300">
                Reach out to team members, and quickly get answers to your
                questions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          {/* <a
            title="Buy me a pizza"
            href="https://www.buymeacoffee.com/Dekartmc"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            rel="noreferrer"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}

function ServicesSelection() {}
