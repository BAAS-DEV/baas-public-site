import { PricingEntity } from "../../Interfaces";

export default function Details(props: { item: PricingEntity }) {
  return (
    <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
      <>
        {props.item.Bonuses?.map((bonus, i) => (
          <>
            <li className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
                width="16"
                height="16"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
              </svg>
              {bonus.Point}
            </li>
          </>
        ))}
      </>
    </ul>
  );
}
