"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Product from "../../../lib/Components/pricing/Product";
import PriceItem from "../../../lib/Components/pricing/RenderedPriceItem";
import {
  ProductCategory,
  ProductCategoryState,
  ProductCategoryWithChildren,
  Products,
} from "../../../lib/Interfaces";
import baasAxios from "../../../lib/Utils/axios";

export default function PricePage({
  params,
  searchParams,
}: {
  params: { pricingItemId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  useEffect(() => {
    // loadCategories();
    loadProductCategory();
    loadProducts();

    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState<Products[]>([]);
  const [priceCategory, setPriceCategory] = useState<ProductCategory>({
    attributes: {
      Description: "",
      imageURL: "",
      Name: "",
      Slug: "",
    },
  });
  const loadProducts = async () => {
    let res: Products[] = await baasAxios
      .get(
        "/products?filters[product_category][slug][$eq]=" +
          params.pricingItemId +
          "&populate=deep&sort=Order"
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

  const loadProductCategory = async () => {
    let res: ProductCategory = await baasAxios
      .get("/product-categories?filters[Slug][$eq]=" + params.pricingItemId)
      .then((res) => {
        console.log("Category", res.data.data[0]);
        return res.data.data[0];
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    let newData: ProductCategory = res;
    setPriceCategory(newData);
  };
  return (
    <div className="px-4 pb-48">
      {/* <PricingNav /> */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 pb-8">
        <div>
          <Image
            loader={() =>
              priceCategory?.attributes.imageURL
                ? priceCategory?.attributes.imageURL
                : ""
            }
            height={50}
            width={50}
            className="rounded-xl w-full h-full"
            src={
              priceCategory?.attributes.imageURL
                ? priceCategory.attributes.imageURL
                : ""
            }
            alt="Shoes"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 px-4 my-auto">
          <h1 className="text-4xl font-bold">
            {priceCategory?.attributes.Name}
          </h1>
          <p className="py-6 font-thin">
            {priceCategory?.attributes.Description}
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3  pt-8">
        {products.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function PricingNav() {
  return (
    <div className="dropdown dropdown-bottom w-full">
      <Link href={`/pricing`} className="">
        <button className="btn  text-2xl mb-4">
          <p className="p-2 text-md text-white"> {"Back"}</p>
        </button>
      </Link>
    </div>
  );
}
