import { PricingEntity, Products } from "../../Interfaces";

export default function PriceItem(props: {
  data: Products;
  selectedItem?: PricingEntity;
}) {
  return (
    <>
      <p className="text-3xl font-bold text-info dark:text-white">
        {props.data.attributes.Title}
      </p>
      <p className="mb-4 mt-2 text-sm text-gray-500 dark:text-gray-300">
        {props.data.attributes.Description}
      </p>
      <p className="text-2xl mb-0 font-bold text-black dark:text-white">
        {props.selectedItem?.BasePrice ? (
          props.selectedItem.BasePrice == 1 ? (
            ""
          ) : (
            <>{"$" + addCommas(props.selectedItem?.BasePrice)}</>
          )
        ) : (
          "Contact For Pricing"
        )}
      </p>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
        <>{props.selectedItem?.MeasurementUnit}</>
      </p>
      <span className="block w-full h-1 my-2 bg-gray-100 rounded-lg"></span>
    </>
  );
}

function addCommas(num: number): string {
  // Convert the number to a string
  let numStr: string = num.toString();

  // Split the number string into integer and decimal parts
  let parts: string[] = numStr.split(".");
  let integerPart: string = parts[0];
  let decimalPart: string = parts.length > 1 ? "." + parts[1] : "";

  // Add commas to the integer part of the number
  let integerWithCommas: string = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  // Return the formatted number string
  return integerWithCommas + decimalPart;
}
