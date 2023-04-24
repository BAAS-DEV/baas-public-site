"use client";

import axios from "axios";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";
import PageSectionHeader from "../../lib/Components/PageSectionHeader";
import SlideInFromBottomWhenViewed from "../../lib/Containers/SlideInFromBottomWhenViewed";
import useWindowSize from "../../lib/Hooks/windowHook";
import baasAxios from "../../lib/Utils/axios";

interface ServiceLocalState {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    Description: string;
    slug?: string;
  };
}

export default function Page() {
  useEffect(() => {
    loadCategories();
    window.scrollTo(0, 0);
  }, []);
  const size = useWindowSize();

  const [pageLocalState, setPageLocalState] = useState<ServiceLocalState[]>([]);
  // const { height, width } = useWindowDimensions();

  const loadCategories = async () => {
    let res = await baasAxios
      .get("/service-categories?sort=Order")
      .then((res) => {
        console.log(res.data);
        setPageLocalState(res.data.data);
        // setAllCategories(res.data.data);
        // setCategoriesToAllSelected(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const Services = [
    "Web",
    "Mobile",
    "iOT",
    "Automation",
    "AR/VR",
    "IAM & Security",
  ];

  return (
    <>
      <section>
        <div className="grid grid-cols-1 mx-auto">
          {size.width < 1366 ? (
            pageLocalState.map((item, i) => (
              <>
                <div className="max-w-2xl my-8 text-center mx-auto px-4">
                  <ImageAndText
                    title={item.attributes.name}
                    description={item.attributes.Description}
                    img={item.attributes.image}
                    slug={item.attributes.slug}
                  />
                </div>
              </>
            ))
          ) : (
            <>
              <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-2 px-4">
                  {pageLocalState.map((item, i) => (
                    <>
                      {i % 2 === 0 ? (
                        <ImageAndText
                          title={item.attributes.name}
                          description={item.attributes.Description}
                          img={item.attributes.image}
                          slug={item.attributes.slug}
                        />
                      ) : (
                        <ImageAndTextSwitched
                          title={item.attributes.name}
                          description={item.attributes.Description}
                          img={item.attributes.image}
                          slug={item.attributes.slug}
                        />
                      )}
                    </>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section className=" w-full  bg-base-200 ">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-centeropacity-80 bg-fixed"
          style={
            {
              // backgroundImage: "url('/svgs/background-services.svg')",
            }
          }
        ></div>
      </section>
    </>
  );
}

const ImageAndText = (props: {
  img: string;
  title: string;
  slug?: string;
  description: string;
}) => {
  return (
    <>
      <div className="my-8 mx-auto w-full">
        <img
          src={props.img}
          className=" rounded-lg shadow-2xl max-h-96 w-full"
        />
      </div>
      <SlideInFromBottomWhenViewed animation="easeInOut">
        <div>
          <h1 className="text-2xl mb-2 font-bold">{props.title}</h1>
          <p className="mb-4 text-lg line-clamp-3 font-thin">
            {props.description}
          </p>
          <Link href={`/services/${props.slug ? props.slug : props.title}`}>
            <button className="btn btn-info btn-block btn-xl text-center text-xl font-semibold text-white">
              View Services
            </button>
          </Link>
        </div>
      </SlideInFromBottomWhenViewed>
    </>
  );
};
const ImageAndTextSwitched = (props: {
  img: string;
  title: string;
  slug?: string;
  description: string;
}) => {
  return (
    <>
      <SlideInFromBottomWhenViewed animation="easeInOut">
        <div>
          <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
          <p className="mb-4 text-lg line-clamp-3 font-thin">
            {props.description}
          </p>
          <Link
            className="py-4"
            href={`/services/${props.slug ? props.slug : props.title}`}
          >
            <button className="btn btn-info btn-xl  btn-block text-center text-xl font-semibold text-white">
              View Services
            </button>
          </Link>
        </div>
      </SlideInFromBottomWhenViewed>
      <div className="my-8 mx-auto">
        <img src={props.img} className=" rounded-lg shadow-2xl max-h-96" />
      </div>
    </>
  );
};
