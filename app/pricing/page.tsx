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
      .get("/product-categories")
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
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 w-full gap-2">
        {categories.map((category, i) => (
          <>
            <div className="card mx-auto w-full hover:bg-base-300 hover:cursor-pointer">
              <Link href={`/pricing/` + category.attributes.Slug}>
                <div className="card bg-base-100 px-4 h-96 sm:60 md:60 shadow-xl">
                  <figure className="px-10 pt-10">
                    <Image
                      loader={() => category.attributes.imageURL}
                      src={category.attributes.imageURL}
                      alt="Shoes"
                      fill
                      className="rounded-xl "
                    />
                  </figure>
                </div>
                <div className="card-body py-2 items-center text-center w-full">
                  <h2 className="card-title text-2xl text-left">
                    {category.attributes.Name}
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
