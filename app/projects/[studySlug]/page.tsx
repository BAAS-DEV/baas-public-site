"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import baasAxios from "../../../lib/Utils/axios";
import Image from "next/image";
import useWindowSize from "../../../lib/Hooks/windowHook";
import SLideInFromRightWhenViewed from "../../../lib/Containers/SlideInFromRightWhenViewed ";
import SlideInFromLeftWhenViewed from "../../../lib/Containers/SlideInFromLeftWhenViewed";
import { Project } from "../../../lib/Interfaces";

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
  searchParams,
}: {
  params: { studySlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  useEffect(() => {
    getProject();
    loadSystems();
    window.scrollTo(0, 0);
  }, []);

  const [pageLocalState, setPageLocalState] = useState<ServiceLocalState[]>([]);
  const [project, setProject] = useState<Project>();
  const [selectedMockup, setSelectedMockup] = useState<{
    mockupType: string;
    image: string;
    Title: string;
    Description: string;
  }>({
    mockupType: "",
    Description: "",
    image: "",
    Title: "",
  });
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
        "/system-components?populate=*&filters[system][Slug][$eq]=" +
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

  const getProject = async () => {
    let res = await baasAxios
      .get("/systems?filters[Slug][$eq]=" + params.studySlug)
      .then((res) => {
        console.log("data4", res.data.data[0]);
        // setAllCategories(res.data.data);
        // setCategoriesToAllSelected(res.data.data);
        return res.data.data[0];
      })
      .catch((err) => console.log(err));

    let result = res;
    setProject(result);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="py-16 px-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div>
              <Image
                loader={() =>
                  project?.attributes.Image ? project.attributes.Image : ""
                }
                height={50}
                width={50}
                className="rounded-xl w-full h-full"
                src={project?.attributes.Image ? project.attributes.Image : ""}
                alt="Shoes"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 px-4 my-auto">
              <h1 className="text-2xl font-semibold">
                {project?.attributes.Title}
              </h1>

              <SLideInFromRightWhenViewed animation="easeInOut">
                <p className="py-6 text-lg font-thin ">
                  {project?.attributes.Description}
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </SLideInFromRightWhenViewed>
            </div>
          </div>
        </div>
      </div>
      <div className="divider pt-16"></div>

      {pageLocalState.map((item, i) => (
        <>
          <div className=" container  mx-auto">
            <div className=" min-h-screen mx-auto  w-full">
              {item.attributes.DisplayMockup.map((subitem, j) => (
                <GalleryModal
                  key={j}
                  data={selectedMockup}
                  index={j.toString()}
                />
              ))}
              {/* <div className="hero-overlay bg-opacity-60"></div> */}
              <div className=" w-full text-center text-primary">
                <div className="grid grid-cols-2 w-full  ">
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
                                } border mockup relative mx-auto my-20 md:float-right`}
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
                          <div className="max-w-md px-4 md:text-left sm:pt-20 md:pt-48">
                            <h1 className="mb-5 text-5xl font-bold">
                              {item.attributes.Title}
                            </h1>
                            <p className="mb-5">
                              {item.attributes.Description}
                            </p>
                            {item.attributes.DisplayMockup.map((sub, j) => (
                              <>
                                <label
                                  htmlFor={`my-modal-${j}`}
                                  className="btn btn-accent mt-4"
                                  onClick={() => setSelectedMockup(sub)}
                                >
                                  {sub.Title}
                                </label>
                                <br />
                              </>
                            ))}
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
                          <div className="max-w-md px-4 md:text-right md:float-right pt-20 sm:pt-20 md:pt-48">
                            <h1 className="mb-5 text-5xl  font-bold">
                              {item.attributes.Title}
                            </h1>
                            <p className="mb-5">
                              {item.attributes.Description}
                            </p>
                            {item.attributes.DisplayMockup.map((sub, i) => (
                              <>
                                <div className="">
                                  <label
                                    htmlFor={`my-modal-${i}`}
                                    className="btn btn-accent mt-4"
                                    onClick={() => setSelectedMockup(sub)}
                                  >
                                    {sub.Title}
                                  </label>
                                  <br />
                                </div>
                              </>
                            ))}
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
                              } border mockup relative mx-auto my-20 md:float-left`}
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
      <div className="divider"></div>

      <div className="container mx-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Are you ready to build{" "}
                <span className="text-accent">custom?</span>
              </h1>
              <p className="py-6">
                Take a look at some of the things we can do for you, and we are
                certain we can benefit you in some way
              </p>

              <Link href={`/services`}>
                <button className="btn btn-primary mx-1 text-white ">
                  View Services
                </button>
              </Link>
              <Link href={`/pricing`}>
                <button className="btn btn-accent mx-1 text-white">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const GalleryModal = (props: {
  data: {
    mockupType: string;
    image: string;
    Title: string;
    Description: string;
  };
  index: string;
}) => {
  console.log(props.index);
  const size = useWindowSize();

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
          <label className="modal-box relative max-w-3xl mx-auto " htmlFor="">
            <div
              className="h-full w-full py-8 "
              style={{ height: size.height * 0.75 }}
            >
              <h2 className="text-4xl">{props.data.Title}</h2>
              <p className="text-4xl">{props.data.Description}</p>
              <Image
                loader={() => props.data.image}
                src={props.data.image}
                alt={"image of" + props.data.Description}
                height={size.height}
                width={size.width}
                className="rounded-xl"
              />
            </div>
          </label>
        </label>
      </div>
    </>
  );
};
