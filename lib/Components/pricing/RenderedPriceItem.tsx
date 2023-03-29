import { PricingEntity, Products } from "../../Interfaces";

export default function PriceItem(props: {
  data: Products;
  selectedItem?: PricingEntity;
}) {
  return (
    <>
      <p className="text-3xl font-bold text-black dark:text-white">
        {props.data.attributes.Title}
      </p>
      <p className="mb-4 mt-2 text-sm text-gray-500 dark:text-gray-300">
        {props.data.attributes.Description}
      </p>
      <p className="text-3xl font-bold text-black dark:text-white">
        <>{"$" + props.selectedItem?.BasePrice}</>
      </p>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
        <>{props.selectedItem?.MeasurementUnit}</>
      </p>
      <span className="block w-full h-1 my-2 bg-gray-100 rounded-lg"></span>
    </>
  );
}
