"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ProductCategory,
  ProductCategoryState,
  ProductCategoryWithChildren,
  Products,
} from "../../../lib/Interfaces";
import baasAxios from "../../../lib/Utils/axios";

export default function PricePage({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    // loadCategories();
    loadProducts();
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState<Products[]>([]);

  const loadProducts = async () => {
    let res: Products[] = await baasAxios
      .get(
        "/products?filters[product_category][slug][$eq]=" +
          params.pricingItemId +
          "&populate=deep"
      )
      .then((res) => {
        console.log("HE", res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });

    let newData: Products[] = [];
    newData = res;
    setProducts(newData);
  };
  return (
    <div className="">
      <PricingNav />
      <div className="grid grid-cols-4 gap-2">
        {products.map((item, i) => (
          <>
            <div
              key={i}
              className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800"
            >
              <p className="text-3xl font-bold text-black dark:text-white">
                {item.attributes.Title}
              </p>
              <p className="mb-4 mt-2 text-sm text-gray-500 dark:text-gray-300">
                {item.attributes.Description}
              </p>

              <p className="text-3xl font-bold text-black dark:text-white">
                {item.attributes.pricing.length > 0 ? (
                  <>{"$" + item.attributes.pricing[0].BasePrice}</>
                ) : (
                  <></>
                )}
              </p>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
                {item.attributes.pricing.length > 0 ? (
                  <>{item.attributes.pricing[0].MeasurementUnit}</>
                ) : (
                  <></>
                )}
              </p>
              <span className="block w-full h-1 my-2 bg-gray-100 rounded-lg"></span>

              <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
                {item.attributes.pricing.length > 0 &&
                item.attributes.pricing[0].Details &&
                item.attributes.pricing[0].Details?.length > 0 ? (
                  <>
                    {item.attributes.pricing[0].Details.map((details, j) => (
                      <>
                        <li className="flex items-center mb-3">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 1792 1792"
                          >
                            <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                          </svg>
                          {details.Point}
                        </li>
                      </>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </ul>
              {/* <span className="block w-full h-1 my-2 bg-gray-100 rounded-lg"></span> */}

              <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
                {item.attributes.pricing.length > 0 &&
                item.attributes.pricing[0].Bonuses &&
                item.attributes.pricing[0].Bonuses?.length > 0 ? (
                  <>
                    <div>
                      {item.attributes.pricing[0].Bonuses.map((bonsues, k) => (
                        <>
                          <li className="flex items-center mb-3 space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-2"
                              width="16"
                              height="16"
                              fill="#10b981"
                              viewBox="0 0 1792 1792"
                            >
                              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                            </svg>
                            {bonsues.Point}
                          </li>
                        </>
                      ))}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

function PricingNav() {
  return (
    <div className="dropdown dropdown-bottom">
      <Link href={`/pricing`} className="">
        <button className="btn btn-block text-2xl  mt-8 mb-4">
          <p className="p-2"> {"<- Go Back To Pricing"}</p>
        </button>
      </Link>
    </div>
  );
}
