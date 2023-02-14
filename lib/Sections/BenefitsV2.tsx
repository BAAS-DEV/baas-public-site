"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import SLideInFromRightWhenViewed from "../Containers/SlideInFromRightWhenViewed ";
import baasAxios from "../Utils/axios";

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
    <div className="w-full text-center col-span-1 xs:col-span-1 sm:col-span-1 md:col-span-1 align-middle h-full sm:text-left md:text-center">
      <div className="align-middle pt-96">
        <h1 className="text-6xl font-extrabold sm:text-5xl  ">
          We Go Above
          <strong className="block text-3xl font-extrabold text-accent ">
            In Every Category
          </strong>
        </h1>
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
                  <div className="card w-full my-4 bg-base-100 shadow-xl image-full bg-cover">
                    <figure className="">
                      {/* <img
                        src={item.attributes.image}
                        alt="Shoes"
                        className="max-h-48"
                      /> */}
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.attributes.name}</h2>
                      {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
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
                  <div className="card w-full my-4 bg-base-100 shadow-xl image-full bg-auto">
                    <figure className="">
                      {/* <img
                        src={item.attributes.image}
                        alt="Shoes"
                        className="max-h-48 w-full"
                      /> */}
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.attributes.name}</h2>
                      {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
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
    <section className=" bg-center py-10 bg-white">
      {/* <div className="absolute inset-0 bg-white/100 sm:bg-transparent bg-gradient-to-b from-white/100 to-black/20"></div> */}

      <div className="grid grid-cols-2 mx-auto px-4 py-32 sm:px-6 gap-2 ">
        <LeftSide />
        <RightSide data={serviceData} />
      </div>
    </section>
  );
}
