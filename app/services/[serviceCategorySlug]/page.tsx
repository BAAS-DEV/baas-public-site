"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PageSectionHeader from "../../../lib/Components/PageSectionHeader";
import baasAxios from "../../../lib/Utils/axios";
import SLideInFromRightWhenViewed from "../../../lib/Containers/SlideInFromRightWhenViewed ";

interface Service {
  id: number;
  attributes: {
    name: string;
    slug: string;
    image: string;
    Description: string;
  };
}

interface ServiceItems {
  id: number;
  attributes: {
    Title: string;
    Description: string;
  };
}

export default function ServicesListPage({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    FindAllServicesUnderCategory(params.serviceCategorySlug);
    FindServiceInformation(params.serviceCategorySlug);
    window.scrollTo(0, 0);
  }, []);

  async function FindAllServicesUnderCategory(term: string) {
    try {
      const response = await baasAxios(
        "/services?filters[service_categories][slug][$eq]=" + term,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.data;

      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function LoadServiceInformation(term: string) {}

  async function FindServiceInformation(term: string) {
    try {
      const response = await baasAxios.get(
        "/service-categories?filters[slug][$eq]=" + term,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.data;

      console.log("service", res.data);
      setService(res.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const [data, setData] = useState<ServiceItems[]>([]);
  const [service, setService] = useState<Service>();
  const [modalObj, setModalObj] = useState<ServiceItems>({
    id: 0,
    attributes: {
      Title: "",
      Description: "",
    },
  });

  const HandleReadMore = (item: ServiceItems) => {
    setModalObj(item);
  };

  return (
    <div className="py-24">
      <div className=" bg-base-200 pb-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <Image
              loader={() =>
                service?.attributes.image ? service.attributes.image : ""
              }
              height={50}
              width={50}
              className="rounded-xl w-full h-full"
              src={service?.attributes.image ? service.attributes.image : ""}
              alt="Shoes"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 px-4 my-auto">
            <h1 className="text-2xl font-semibold">
              {service?.attributes.name}
            </h1>

            <SLideInFromRightWhenViewed animation="easeInOut">
              <p className="py-6 text-lg font-thin ">
                {service?.attributes.Description}
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </SLideInFromRightWhenViewed>
          </div>
        </div>
      </div>
      <div className="divider "></div>

      <div className="mx-auto w-full container py-4 px-2">
        <h3 className="text-2xl font-bold mb-4">Example Services:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {data.map((item, i) => (
            <>
              <div className="w-full p-4 bg-white rounded-xl">
                {/* <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/420x260"
                  />
                </a> */}
                <div className="mt-4">
                  {/* <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    PROJECT
                  </h3> */}
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    {item.attributes.Title}
                  </h2>
                  <p className="mt-1 truncate text-sm">
                    {item.attributes.Description}
                  </p>
                  <label
                    onClick={() => HandleReadMore(item)}
                    htmlFor="my-modal-4"
                    className="btn"
                  >
                    Read More
                  </label>
                  <ServiceCategoryModal
                    title={modalObj.attributes.Title}
                    Description={modalObj.attributes.Description}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="divider pt-16"></div>
        <div className="container">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                  Find the Perfect Plan for Your Business
                </h1>
                <p className="py-6">
                  We have priced out dozens of services with estimated budget
                  requirements, and are happy to provide specific cost based on
                  your project needs
                </p>

                <Link href={`/pricing`}>
                  <button className="btn btn-accent mx-1 text-white">
                    View Pricing
                  </button>
                </Link>
                <Link href={`/contact`}>
                  <button className="btn btn-primary mx-1 text-white ">
                    Ask Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCategoryModal(params: { title: string; Description: string }) {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle w-full" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative max-w-5xl" htmlFor="">
          <h3 className="text-4xl font-bold">{params.title}</h3>
          <p className="py-4">{params.Description}</p>
        </label>
      </label>
    </>
  );
}
