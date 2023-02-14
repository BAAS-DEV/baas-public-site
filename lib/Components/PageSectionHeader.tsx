export interface PageSectionHeader {
  title: string;
  description: string;
}

export default function PageSectionHeader(props: PageSectionHeader) {
  return (
    <>
      <div className="bg-base-200 pb-8">
        <div
          className="hero h-96 bg-cover"
          style={{
            backgroundImage: `url('/svgs/sec-bg.svg')`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content w-full text-left text-neutral-content">
            <h1 className="mb-5 text-6xl text-white font-bold">
              {props.title}
            </h1>
            {/* <p className="mb-5 text-2xl">{props.description}</p> */}
            {/* <button className="btn btn-accent">Get Started</button> */}
          </div>
        </div>
        <div
          className="mx-auto max-w-md card bg-info text-white -mt-8 w-full text-center
        "
        >
          <div className="card-body">{props.description}</div>
        </div>
      </div>
    </>
  );
}
