import { PricingEntity } from "../../Interfaces";

export default function BenfitsList(props: { item: PricingEntity }) {
  return (
    <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
      <>
        {props.item.Details?.map((detail, i) => (
          <>
            <li className="flex items-center mb-3">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 1792 1792"
              >
                <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
              </svg>
              {detail.Point}
            </li>
          </>
        ))}
      </>
    </ul>
  );
}
