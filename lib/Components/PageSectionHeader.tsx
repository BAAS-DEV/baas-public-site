import SlideInFromBottomWhenViewed from "../Containers/SlideInFromBottomWhenViewed";

export interface PageSectionHeader {
  title: string;
  description: string;
}

export default function PageSectionHeader(props: PageSectionHeader) {
  return (
    <>
      <div className=" pb-8  z-10">
        <div className="hero rounded w-full mx-auto ">
          {/* <div className="hero-overlay bg-opacity-80"></div> */}
          <div className=" mb-0 w-full mx-auto bg-accent py-24 text-white shadow-xl rounded text-center ">
            <h1 className="mb-5 text-5xl "> {props.title}</h1>
            <SlideInFromBottomWhenViewed animation="easeIn">
              <p className="mb-5 font-light max-w-md mx-auto ">
                {props.description}
              </p>
            </SlideInFromBottomWhenViewed>
            {/* <p className="mb-5 text-2xl">{props.description}</p> */}
            {/* <button className="btn btn-accent">Get Started</button> */}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('/svgs/pointbg.svg')`,
          }}
          className="mx-auto  bg-contain bg-no-repeat h-96 w-full text-bold text-center card  bg-center text-white -mt-40 pt-8 sm:-mt-28 
        "
        ></div>
      </div>
    </>
  );
}
