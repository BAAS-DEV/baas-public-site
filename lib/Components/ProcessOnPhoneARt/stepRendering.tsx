import StepsData from "./StepsData";
import Image from "next/image";
export default function StepRendering(props: { step: number }) {
  let data = StepsData();
  return (
    <div>
      <div className="card w-full text-left bg-base-100 max-w-md shadow-xl image-full ">
        <figure>
          <Image
            loader={() => data[props.step].image}
            fill
            src={`${data[props.step].image}`}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl text-white">
            {data[props.step].step}
          </h2>
          <p className="text-md">{data[props.step].description}</p>
        </div>
      </div>
      {/* <div className="card w-full bg-info shadow-xl  px-2">
        <div className="card-body">
          <h3 className="card-title">Things We Usually Give Clients:</h3>
          <div>
            {data[props.step].deliveries.map((item, i) => (
              <p key={i}>- {item}</p>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
