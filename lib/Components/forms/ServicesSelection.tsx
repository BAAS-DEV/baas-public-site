"use client";

import { useEffect, useState } from "react";
import baasAxios from "../../Utils/axios";

export default function ServicesSelection(props: {
  handleStateChange: (key: string, value: string) => void;
  servicesChecked: string[];
}) {
  useEffect(() => {
    loadCategories();
  }, []);

  interface ServiceLocalState {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      name: string;
      image: string;
      Description: string;
      slug?: string;
    };
  }

  const [pageLocalState, setPageLocalState] = useState<ServiceLocalState[]>([]);

  const loadCategories = async () => {
    await baasAxios
      .get("/service-categories")
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
      <div className="grid grid-cols-3 w-full">
        {pageLocalState.map((item, i) => (
          <>
            <div className="form-control  text-left">
              <label className="label cursor-pointer w-1/2">
                <span className="label-text w-full">
                  {item.attributes.name}
                </span>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  checked={props.servicesChecked.includes(item.attributes.name)}
                  value={item.attributes.name}
                  className="checkbox checkbox-primary text-left"
                  onChange={(e) => {
                    console.log(e.target.value);
                    props.handleStateChange("services", e.target.value);
                  }}
                />
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
