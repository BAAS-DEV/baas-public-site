import Link from "next/link";
import { Navigation } from "./MainNav";

export default function DrowndownButton(props: Navigation) {
  return (
    <div className="collapse">
      <input type="checkbox" className="peer" />
      <div className="collapse-title w-full bg-white peer-checked:bg-white peer-checked:text-secondary-content">
        {props.text}
      </div>
      <div className="collapse-content bg-primary text-primary-content text-left peer-checked:bg-white peer-checked:text-secondary-content">
        <ul className="p-2 bg-base-100 z-10">
          {props.subItems &&
            props.subItems?.map((item, i) => (
              <li key={i} className="">
                <Link href={item.path ? item.path : "/"}>{item.text}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

/* <Link className="text-lg" href={props.path ? props.path : "/"}>
        {props.text}
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </Link>
      <ul className="p-2 bg-base-100 z-10">
        {props.subItems &&
          props.subItems?.map((item, i) => (
            <li key={i} className="">
              <Link href={item.path ? item.path : "/"}>{item.text}</Link>
            </li>
          ))}
      </ul> */
//
