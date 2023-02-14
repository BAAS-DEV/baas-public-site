"use client";

import { useEffect, useState } from "react";
import AnimatedContainer from "../Containers/AnimatedContainer";
import axios from "axios";

function ServiceCard(props: { title: string }) {
  return (
    <div className="card bg-neutral text-neutral-content col-span-4 xs:col-span-4 sm:col-span-4 md:col-span-2 ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>
        {/* <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-ghost">Deny</button>
        </div> */}
      </div>
    </div>
  );
}

function CategoryButton(props: {
  i: number;
  category: Categories;
  enabled: boolean;
  handleClick: (index: number) => void;
}) {
  return (
    <div
      key={props.i}
      className="col-span-4 xs:col-span-4 md:col-span-2 h-24 xs:h-24"
    >
      <button
        className={`btn
                        btn-lg
                        btn-secondary
                        block
                        ${props.enabled ? "btn-success" : "btn-secondary"}
                        h-full
                        w-full 
                        text-left`}
        onClick={() => props.handleClick(props.i)}
      >
        {props.category.attributes.name}
      </button>
    </div>
  );
}

interface Categories {
  id: number;
  attributes: {
    name: string;
  };
}

interface Service {
  id: number;
  attributes: {
    Title: string;
    Description?: string;
  };
}
export default function Services() {
  const [allCategories, setAllCategories] = useState<Categories[]>([]);
  const [enabledCategories, setEnabledCategories] = useState<number[]>([]);
  const [allServices, setAllServices] = useState<Service[]>([]);

  useEffect(() => {
    loadCategories().then(() => loadServices());
  }, []);

  const setCategoriesToAllSelected = (categories: any[]) => {
    let arrayOfIndexs: number[] = [];
    console.log(categories);
    categories.forEach((item, i) => {
      arrayOfIndexs.push(i);
    });
    console.log(arrayOfIndexs);
    setEnabledCategories(arrayOfIndexs);
  };

  const handleCardClick = (index: number) => {
    let currentEnabled = enabledCategories;

    let pos = currentEnabled.indexOf(index);

    if (pos != -1) {
      currentEnabled.splice(pos, 1);
    }
    if (pos === -1) {
      currentEnabled = [...currentEnabled, index];
    }

    // console.log(currentEnabled);

    setEnabledCategories([...currentEnabled]);
  };

  const loadCategories = async () => {
    let res = await axios
      .get("/service-categories")
      .then((res) => {
        setAllCategories(res.data.data);
        setCategoriesToAllSelected(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const loadServices = async () => {
    let res = await axios
      .get("/services")
      .then((res) => setAllServices(res.data.data))
      .catch((err) => console.log(err));
  };

  const services = [
    {
      name: "Web",
      new: false,
    },
    {
      name: "Mobile",
      new: false,
    },
    {
      name: "IAM & Security",
      new: false,
    },
    {
      name: "iOT",
      new: true,
    },
    {
      name: "DevOps",
      new: true,
    },
    {
      name: "Automation Bots",
      new: false,
    },
    {
      name: "Data Science",
      new: false,
    },
  ];

  return (
    <div
      className="hero pt-56 pb-96 bg-white text-center"
      // style={{ backgroundImage: "url('/Cloudy.svg')" }}
    >
      <div className=" w-full container">
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-5  p-8 rounded-lg bg-opacity-50">
            <h2 className="text-6xl text-accent font-bold pb-4">We Do A Lot</h2>
            <h3 className="text-4xl text-black">
              Here Are Some of the Services We Have Been Tasked With{" "}
            </h3>

            <p className="py-6 text-lg text-primary">
              The tool is in alpha preview now for those <br /> who register on
              our website.
            </p>
            <button className="btn btn-accent rounded-lg text-slate-200">
              Get Started NOW!
            </button>
          </div>
          <div className="col-span-5  ">
            <div className="grid grid-cols-8 gap-2 px-8">
              {allCategories.map((item, i) => (
                <>
                  <CategoryButton
                    i={0}
                    category={item}
                    enabled={enabledCategories.includes(i)}
                    handleClick={() => handleCardClick(i)}
                  />
                </>
              ))}
            </div>
          </div>

          <div className="h-96 w-full col-span-5 px-8 pb-48">
            <div className="grid grid-cols-8 gap-1 px-1">
              {allServices.map((item, i) => (
                <>
                  <ServiceCard title={item.attributes.Title} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="card w-full col-span-4 xs:col-span-4 sm:col-span-4 md:col-span-2 bg-primary  shadow-xl mb-2 ">
//   <div className="card-body">
//     <h2 className="card-title">
//       {item.attributes.name}
//       {/* {item.new ? (
//                           <div className="badge badge-secondary">New</div>
//                         ) : (
//                           <div></div>
//                         )} */}
//     </h2>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline badge-warning">Unselected</div>
//     </div>
//   </div>
// </div>;
