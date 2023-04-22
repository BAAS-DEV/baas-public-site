"use client";

import { useEffect, useState } from "react";
import { Products, PricingEntity } from "../../Interfaces";
import BenfitsList from "./Benefits";
import Details from "./Details";
import PriceItem from "./RenderedPriceItem";

export default function Product(props: { item: Products }) {
  useEffect(() => {
    setSelectedItem(props.item.attributes.pricing[0]);
  }, []);
  const [selectedItem, setSelectedItem] = useState<PricingEntity>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleSelectedItem = (index: number) => {
    setSelectedItem(props.item.attributes.pricing[index]);
    setSelectedIndex(index);
  };
  return (
    <>
      <>
        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
          {/* Things Can change here. */}

          <PriceItem data={props.item} selectedItem={selectedItem} />

          {selectedItem ? <Details item={selectedItem} /> : <></>}

          {selectedItem ? <BenfitsList item={selectedItem} /> : <></>}

          <div className="grid grid-cols-3 w-full gap-2">
            {props.item.attributes.pricing.length > 1 &&
              props.item.attributes.pricing.map((item, i) => (
                <>
                  <div>
                    <button
                      onClick={() => {
                        handleSelectedItem(i);
                      }}
                      className={`btn btn-primary text-xs block w-full p-2 ${
                        selectedIndex === i ? "" : "btn-outline"
                      }`}
                    >
                      {item.DisplayTitle}
                    </button>
                  </div>
                </>
              ))}
          </div>
        </div>
      </>
    </>
  );
}
