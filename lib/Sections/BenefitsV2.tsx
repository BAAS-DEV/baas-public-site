"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import SLideInFromRightWhenViewed from "../Containers/SlideInFromRightWhenViewed ";
import baasAxios from "../Utils/axios";
import Image from "next/image";
import Link from "next/link";
interface ServiceLocalState {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    name: string;
    slug?: string;
    image: string;
  };
}

function LeftSide() {
  return (
    <div className="w-full  col-span-2  sm:col-span-2 md:col-span-1 h-full text-right sm:text-left md:text-center">
      <div className="align-middle pt-36 w-full">
        <h1 className="text-6xl font-extrabold sm:text-5xl  ">
          We Go Above
          <strong className="block text-3xl font-extrabold text-accent ">
            In Every Category
          </strong>
        </h1>
        <p className="font-thin">
          Click on a service category to find out more
        </p>
      </div>

      {/* 
      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p> */}
    </div>
  );
}

function RightSide(props: { data: ServiceLocalState[] }) {
  return (
    <div className="col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1 gap-x-4">
      <SLideInFromRightWhenViewed animation={"easeInOut"}>
        <div className="grid grid-cols-2 gap-2 w-full">
          <div className="">
            {props.data.map((item, i) =>
              i % 2 == 0 ? (
                <>
                  <Link href={"/services/" + item.attributes.slug}>
                    <div className="card  w-full my-4 bg-base-100 shadow-xl h-48 image-full bg-cover">
                      <figure className=" rounded-xl">
                        <Image
                          loader={() => item.attributes.image}
                          fill
                          className="rounded-xl"
                          src={`${item.attributes.image}`}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body py-4 px-4">
                        <h2
                          className="card-title  text-xl text-white"
                          style={{ wordWrap: "break-word" }}
                        >
                          {item.attributes.name}
                        </h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                          {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ) : (
                ""
              )
            )}
          </div>
          <div className=" mt-8">
            {props.data.map((item, i) =>
              i % 2 != 0 ? (
                <>
                  <Link href={"/services/" + item.attributes.slug}>
                    <div className="card w-full my-4 bg-base-100 shadow-xl h-48 image-full bg-cover">
                      <figure className=" rounded-xl">
                        <Image
                          loader={() => item.attributes.image}
                          fill
                          className="rounded-xl"
                          src={`${item.attributes.image}`}
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body py-4 px-4">
                        <h2 className="card-title text-xl text-white">
                          {item.attributes.name}
                        </h2>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                        <div className="card-actions justify-end">
                          {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </SLideInFromRightWhenViewed>
    </div>
  );
}

export default function BenefitsV2() {
  const [serviceData, setServiceData] = useState<ServiceLocalState[]>([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    let res = await baasAxios
      .get("/service-categories")
      .then((res) => setServiceData(res.data.data))
      .catch((err) => console.log(err));
  };
  const benefits = [
    {
      title: "",
      description: "",
      icon: "",
      image: "",
    },
  ];
  return (
    <section className=" bg-center py-10 bg-white ">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-content text-center ">
          {/* <div className="absolute inset-0 bg-white/100 sm:bg-transparent bg-gradient-to-b from-white/100 to-black/20"></div> */}

          <div className="grid grid-cols-2 mx-auto py-32  gap-2 ">
            <LeftSide />
            <RightSide data={serviceData} />
          </div>
        </div>
      </div>
    </section>
  );
}
