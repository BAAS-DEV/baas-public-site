"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import baasAxios from "../../../lib/Utils/axios";
import Image from "next/image";
import useWindowSize from "../../../lib/Hooks/windowHook";
import SLideInFromRightWhenViewed from "../../../lib/Containers/SlideInFromRightWhenViewed ";
import SlideInFromLeftWhenViewed from "../../../lib/Containers/SlideInFromLeftWhenViewed";

interface ServiceLocalState {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    Title: string;
    DisplayMockup: [
      {
        mockupType: string;
        image: string;
        Title: string;
        Description: string;
      }
    ];
    Description: string;
    slug?: string;
  };
}
export default function Industries({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    loadSystems();
    window.scrollTo(0, 0);
  }, []);

  const [pageLocalState, setPageLocalState] = useState<ServiceLocalState[]>([]);

  const imageSizes = {
    phone: {
      height: 400,
      width: 250,
    },
    web: {
      height: 300,
      width: 500,
    },
  };

  const size = useWindowSize();
  const loadSystems = async () => {
    let res = await baasAxios
      .get(
        "/system-components?populate=*&filters[system][Title][$eq]=" +
          params.studySlug
      )
      .then((res) => {
        console.log(res.data);
        setPageLocalState(res.data.data);
        // setAllCategories(res.data.data);
        // setCategoriesToAllSelected(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {pageLocalState.map((item, i) => (
        <>
          <div className="relative container bg-none mx-auto">
            <GalleryModal data={item} index={i} />
            <div className="hero min-h-screen mx-auto  w-full">
              {/* <div className="hero-overlay bg-opacity-60"></div> */}
              <div className="hero-content text-center text-neutral-content">
                <div className="grid grid-cols-2 gap-8 ">
                  {i % 2 === 0 ? (
                    <>
                      <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <>
                          <>
                            <SlideInFromLeftWhenViewed animation={"easeIn"}>
                              <div
                                className={`${
                                  item.attributes.DisplayMockup[0]
                                    .mockupType === "web"
                                    ? "mockup-window"
                                    : "mockup-phone"
                                } border mockup relative mx-auto`}
                                // style={{ height: size.width <= 960 ? 300 : 600 }}
                              >
                                <div
                                  style={{
                                    height:
                                      item.attributes.DisplayMockup[0]
                                        .mockupType === "web"
                                        ? imageSizes.web.height
                                        : imageSizes.phone.height,
                                    width:
                                      item.attributes.DisplayMockup[0]
                                        .mockupType === "web"
                                        ? imageSizes.web.width
                                        : imageSizes.phone.width,
                                  }}
                                >
                                  <div className="md:mt-32 sm:mt-16 pt-48 ">
                                    <Image
                                      loader={() =>
                                        item.attributes.DisplayMockup[0].image
                                      }
                                      src={
                                        item.attributes.DisplayMockup[0].image
                                      }
                                      alt="Shoes"
                                      layout="fill" // required
                                      // objectFit="cover"
                                      style={{
                                        objectFit: "contain",
                                        paddingTop: 36,
                                        paddingBottom: 36,
                                      }} // change to suit your needs
                                      // className="rounded-xl w-full max-w-md"
                                    />
                                  </div>
                                </div>
                              </div>
                            </SlideInFromLeftWhenViewed>
                          </>
                        </>
                      </div>
                      <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <div>
                          <div className="max-w-md text-left pt-20 sm:pt-20 md:pt-48">
                            <h1 className="mb-5 text-5xl text-white font-bold">
                              {item.attributes.Title}
                            </h1>
                            <p className="mb-5">
                              {item.attributes.Description}
                            </p>
                            <label
                              htmlFor={`my-modal-${i}`}
                              className="btn btn-accent"
                            >
                              View Gallery
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        {" "}
                        <div>
                          <div className="max-w-md text-right float-right pt-20 sm:pt-20 md:pt-48">
                            <h1 className="mb-5 text-5xl text-white font-bold">
                              {item.attributes.Title}
                            </h1>
                            <p className="mb-5">
                              {item.attributes.Description}
                            </p>
                            <label
                              htmlFor={`my-modal-${i}`}
                              className="btn btn-accent"
                            >
                              View Gallery
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <>
                          <SLideInFromRightWhenViewed animation={"easeIn"}>
                            <div
                              className={`${
                                item.attributes.DisplayMockup[0].mockupType ===
                                "web"
                                  ? "mockup-window"
                                  : "mockup-phone"
                              } border mockup relative mx-auto`}
                              // style={{ height: size.width <= 960 ? 300 : 600 }}
                            >
                              <div
                                style={{
                                  height:
                                    item.attributes.DisplayMockup[0]
                                      .mockupType === "web"
                                      ? imageSizes.web.height
                                      : imageSizes.phone.height,
                                  width:
                                    item.attributes.DisplayMockup[0]
                                      .mockupType === "web"
                                      ? imageSizes.web.width
                                      : imageSizes.phone.width,
                                }}
                              >
                                <div className="mt-48 ">
                                  <Image
                                    loader={() =>
                                      item.attributes.DisplayMockup[0].image
                                    }
                                    src={item.attributes.DisplayMockup[0].image}
                                    alt="Shoes"
                                    layout="fill" // required
                                    // objectFit="cover"
                                    style={{
                                      objectFit: "contain",
                                      paddingRight: 16,
                                      paddingLeft: 16,
                                    }} // change to suit your needs
                                    // className="rounded-xl w-full max-w-md"
                                  />
                                </div>
                              </div>
                            </div>
                          </SLideInFromRightWhenViewed>
                        </>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

const GalleryModal = (props: { data: ServiceLocalState; index: number }) => {
  console.log(props);
  return (
    <>
      {/* Put this part before </body> tag */}
      <div className="w-screen">
        <input
          type="checkbox"
          id={`my-modal-${props.index}`}
          className="modal-toggle w-screen "
        />
        <label
          htmlFor={`my-modal-${props.index}`}
          className="modal cursor-pointer  "
        >
          <label className="modal-box relative max-w-5xl mx-auto" htmlFor="">
            <div className="carousel">
              {props.data.attributes.DisplayMockup.map((item, i) => (
                <>
                  <div
                    id={`item${i + 1}`}
                    className="carousel-item w-full mx-auto text-center grid grid-cols-1"
                  >
                    <div className="text-4xl font-semibold max-w-md text-center mx-auto">
                      {item.Title}
                    </div>
                    <div className="text-xl max-w-md mb-4 text-center mx-auto">
                      {item.Description}
                    </div>

                    <div className="w-full ">
                      <img
                        src={item.image}
                        className="mx-auto image-full"
                        style={{ maxHeight: innerWidth < 400 ? 300 : 550 }}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {Array.from(
                Array(props.data.attributes.DisplayMockup.length),
                (e, i) => (
                  <a key={i} href={`#item${i + 1}`} className="btn btn-xs">
                    {i + 1}
                  </a>
                )
              )}
            </div>
          </label>
        </label>
      </div>
    </>
  );
};
