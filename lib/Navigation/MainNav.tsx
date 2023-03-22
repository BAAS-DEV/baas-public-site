import Link from "next/link";
import DrowndownButton from "./DrowndownButton";
import LinkButton from "./LinkButton";

export interface Navigation {
  text: string;
  path?: string;
  subItems?: Navigation[];
}

let NavData: Navigation[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Articles",
    path: "/articles",
  },
  {
    text: "Services",
    path: "/services",
  },
  {
    text: "Pricing",
    path: "/pricing",
  },

  {
    text: "Mockups",
    path: "/mockups",
  },
  {
    text: "Contact Us",
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
            : LinkButton(item.text, item.path ? item.path : "")
        )}
      </>
    );
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
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-4xl">BAAS</a>
      </div>
      <div className="navbar-end">
        {/* <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        {/* <div className="alert alert-info shadow-lg  w-72">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Thank You For Viewing BAAS.dev{" "}
              <span className="text-accent font-bold">v1.2</span>
            </span>
          </div>
        </div> */}
        {/* <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}
      </div>
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
