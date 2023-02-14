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
    res.forEach((item, i) => {
      newData.push({ ...item, checked: false });
    });
    console.log(newData);
    setCategories(newData);
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
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full py-8 gap-2">
        {categories.map((category, i) => (
          <>
            <div className="card mx-auto w-full hover:bg-base-300 hover:cursor-pointer">
              <Link href={`/pricing/` + category.attributes.Slug}>
                <div className="card bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={category.attributes.imageURL}
                      alt="Shoes"
                      className="rounded-xl h-48"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">
                      {category.attributes.Name}
                    </h2>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    {/* <div className="card-actions">
                      <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
