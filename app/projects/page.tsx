"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import baasAxios from "../../lib/Utils/axios";
import Image from "next/image";
export default function Industries() {
  useEffect(() => {
    loadSystems();
    window.scrollTo(0, 0);
  }, []);

  interface ServiceLocalState {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      Title: string;
      Image: string;
      Description: string;
      slug?: string;
    };
  }
  const [pageLocalState, setPageLocalState] = useState<ServiceLocalState[]>([]);

  const loadSystems = async () => {
    let res = await baasAxios
      .get("/systems")
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
      {/* <div
        className="hero  "
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      > */}
      {/* <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-light">See Some Examples</h1>
            <p className="mb-5 font-thin">
              Listed below are collections of mockups we have done for our
              projects.
            </p>
            <Link href={`/mockups/${item.attributes.Title}`}>
              <button className="btn btn-accent">View Components</button>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="grid  container mx-auto grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full gap-2 mb-96 mt-24 px-4">
        {pageLocalState.map((item, i) => (
          <>
            {console.log(item.attributes.Image)}
            <div className="card mx-auto w-full hover:bg-base-300 hover:cursor-pointer">
              <Link href={`/mockups/${item.attributes.Title}`}>
                <div className="card bg-base-100 px-4 h-72 sm:h-60 md:h-96 shadow-xl">
                  <figure className="px-10 pt-10">
                    <Image
                      loader={() => item.attributes.Image}
                      src={item.attributes.Image}
                      alt="Shoes"
                      fill
                      className="rounded-xl "
                    />
                  </figure>
                </div>
                <div className="card-body py-2 items-center text-center w-full">
                  <h2 className="card-title text-2xl text-left">
                    {item.attributes.Title}
                  </h2>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
