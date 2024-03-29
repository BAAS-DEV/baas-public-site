"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  ProductCategory,
  ProductCategoryState,
  ProductCategoryWithChildren,
  Products,
} from "../../lib/Interfaces";
import Image from "next/image";
import Link from "next/link";
import baasAxios from "../../lib/Utils/axios";
export default function PricePage() {
  useEffect(() => {
    loadCategories();
    loadProducts();
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, []);

  const [categories, setCategories] = useState<ProductCategoryState[]>([]);
  const [products, setProducts] = useState<Products[]>([]);

  const loadCategories = async () => {
    let res: ProductCategory[] = await baasAxios
      .get("/product-categories?sort=Order")
      .then((res) => {
        console.log(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });

    let newData: ProductCategoryState[] = [];
    if (res != null && res.length > 0) {
      res.forEach((item, i) => {
        newData.push({ ...item, checked: false });
      });
      setCategories(newData);
    }

    console.log(newData);
  };

  const loadProducts = async () => {
    let res: Products[] = await baasAxios
      .get("/products?populate=deep")
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 h-full w-full gap-2 pb-48">
        {categories.map((category, i) => (
          <>
            <div className="card mx-auto w-full  bg-white hover:bg-gray-300 mb-8  hover:cursor-pointer">
              <Link href={`/pricing/` + category.attributes.Slug}>
                <figure className="p-0">
                  <Image
                    loader={() => category.attributes.imageURL}
                    src={category.attributes.imageURL}
                    alt={"picture of " + category.attributes.Name}
                    width={50}
                    height={50}
                    className="rounded-t-lg h-full w-full"
                  />
                </figure>
                <div className="card-body py-4 w-full ">
                  <h2 className="card-title text-2xl text-primary text-center">
                    {category.attributes.Name}
                  </h2>
                  <p className="text-sm">{category.attributes.Description}</p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
