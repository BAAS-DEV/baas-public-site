"use client";
import useWindowDimensions from "../Hooks/windowHook";
import Image from "next/image";
import { useRouter } from "next/navigation";
const links: Links[] = [
  {
    category: "Favorites",
    links: [
      {
        text: "Services",
        path: "services",
      },
      {
        text: "Pricing",
        path: "pricing",
      },
      {
        text: "Mock-Ups",
        path: "mockups",
      },
    ],
  },
  {
    category: "Most Popular",
    links: [
      {
        text: "Web Services",
        path: "services/web",
      },
      {
        text: "Mobile Services",
        path: "services/mobile",
      },
    ],
  },
];

interface Links {
  category: string;
  links: {
    text: string;
    path: string;
  }[];
}
export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { height, width } = useWindowDimensions();

  return (
    <div className="grid h-full grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full min-h-screen pb-96">
      <div className="col-span-2">
        <div className="card w-full px-4 py-4 ">{children}</div>
      </div>
      <div className="divider-vertical min-h-screen w-full col-span-1 mx-auto">
        <AboutComponent />
        <ImportantLinks />
        {/* <Posts /> */}
      </div>
    </div>
  );
}

function AboutComponent() {
  const router = useRouter();

  return (
    <div className="card w-full bg-base-100 shadow-xl image-full my-4">
      <figure>
        {/* <Image fill src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
      </figure>
      <div className="card-body">
        <h2 className="text-center mx-auto card-title text-white font-bold text-4xl">
          We Are BAAS
        </h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
          <button
            onClick={() => router.push("/contact")}
            className="btn btn-accent mt-4 text-white btn-lg btn-block"
          >
            Plan Your Project
          </button>
        </div>
      </div>
    </div>
  );
}

function ImportantLinks() {
  const router = useRouter();

  return (
    <>
      <div className="card w-full bg-base-300 shadow-xl mb-4">
        <ul className="menu bg-base-100 w-full p-2 rounded-box ">
          <h3 className="text-2xl px-4 pt-4 mb-4">Important Links</h3>
          {links.map((linkItem, i) => (
            <>
              <div className="">
                <li className="menu-title">
                  <span>{linkItem.category}</span>
                </li>
                <ul>
                  {linkItem.links.map((subitem, k) => (
                    <>
                      <li
                        onClick={() => router.push("/" + subitem.path)}
                        className="py-0.5"
                      >
                        <a>{subitem.text}</a>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

function Posts() {
  return (
    <div className="card w-full bg-white shadow-xl">
      <ul className="menu w-full rounded-box">
        <div className="card-title">
          <h3 className="text-2xl px-4 mt-4 ">More Of Our Posts</h3>
        </div>
        <li>
          <div className="card card-side">
            <figure>
              {/* <img src="https://placeimg.com/200/280/arch" alt="Movie" /> */}
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p className="text-sm">
                Click the button to watch on Jetflix app.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
