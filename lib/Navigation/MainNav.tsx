"use client";

import Link from "next/link";
import DrowndownButton from "./DrowndownButton";
import LinkButton from "./LinkButton";

export interface Navigation {
  text: string;
  icon?: string;
  path?: string;
  subItems?: Navigation[];
}

let NavData: Navigation[] = [
  {
    text: "Home",
    icon: "home",
    path: "/",
  },
  {
    text: "Articles",
    icon: "articles",
    path: "/articles",
  },
  {
    text: "Services",
    icon: "services",
    path: "/services",
  },
  {
    text: "Pricing",
    icon: "pricing",
    path: "/pricing",
  },

  {
    text: "Projects",
    icon: "projects",
    path: "/projects",
  },
  {
    text: "Contact Us",
    icon: "contact",
    path: "/contact",
  },
];

export default function MainNav() {
  const navRender = (data: Navigation[]) => {
    return (
      <>
        {data.map((item, i) =>
          item.subItems && item.subItems?.length > 0
            ? DrowndownButton(item)
            : LinkButton(item.text, item.path ? item.path : "", item.icon)
        )}
      </>
    );
  };

  const handleEmail = () => {
    window.open("mailto:info@baas.dev");
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn btn-ghost relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <p className="text-sm px-2" style={{ marginBottom: 0! }}>
              Menu
            </p>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navRender(NavData)}
            <li></li>
            <li>
              <div className="alert alert-info shadow-lg hover:text-black ">
                <button onClick={handleEmail}>
                  <div>
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      className="relative float-left"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.99946 7.51126C2.09768 8.08885 1.5 9.09963 1.5 10.25V16.25C1.5 19.1495 3.85051 21.5 6.75 21.5H15.75C16.9004 21.5 17.9112 20.9023 18.4887 20.0005L6.75 20C4.67893 20 3 18.3211 3 16.25L2.99946 7.51126ZM18.75 4H7.25C5.51697 4 4.10075 5.35645 4.00514 7.06558L4 7.25V15.75C4 17.483 5.35645 18.8992 7.06558 18.9949L7.25 19H18.75C20.483 19 21.8992 17.6435 21.9949 15.9344L22 15.75V7.25C22 5.51697 20.6435 4.10075 18.9344 4.00514L18.75 4ZM5.5 8.899L12.6507 12.6637C12.8381 12.7623 13.0569 12.7764 13.2532 12.706L13.3493 12.6637L20.5 8.9V15.75C20.5 16.6682 19.7929 17.4212 18.8935 17.4942L18.75 17.5H7.25C6.33183 17.5 5.57881 16.7929 5.5058 15.8935L5.5 15.75V8.899ZM7.25 5.5H18.75C19.6682 5.5 20.4212 6.20711 20.4942 7.10647L20.498 7.206L13 11.1525L5.50057 7.20483C5.52453 6.25921 6.2986 5.5 7.25 5.5Z"
                        fill="#ffffff"
                      />
                    </svg>
                    <span className="text-white float-right pl-2 pt-1 ">
                      info@baas.dev
                    </span>
                  </div>
                </button>
              </div>
              <span className="text-info font-bold">v1.0</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-4xl">BAAS</a>
      </div>
      <div className="navbar-end"></div>
    </div>
    // <div className="navbar bg-black z-10 sticky top-0 z-50">
    // {
    /* <div className="container mx-auto">
        <div className="grid grid-cols-3 w-full">
          <div className="w-full">
            <Link
              href={"/"}
              className={"btn btn-ghost normal-case text-3xl text-white"}
            >
              BAAS
            </Link>
          </div>
          <div className="w-full">
            <div className=" mx-auto">
              <ul className="menu menu-horizontal w-full px-1 text-white text-center place-content-center">
                {navRender(NavData)}
              </ul>
            </div>
          </div>

          <div className="w-full">
            <button className="btn btn-accent float-right text-white hover:underline">
              Ask Us Anything
            </button>
          </div>
        </div>
      </div> */
    // }
    // </div>
  );
}
