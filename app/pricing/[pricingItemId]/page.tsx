"use client";

import axios from "axios";
import Link from "next/link";
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
    <div className="px-4 pb-48">
      <PricingNav />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3  ">
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
        <button className="btn btn-block text-2xl  mt-8 mb-4">
          <p className="p-2"> {"<- Go Back To Pricing"}</p>
        </button>
      </Link>
    </div>
  );
}
