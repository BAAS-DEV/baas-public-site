export default function WhyWeAreTheBest() {
  let data = [
    {
      title: "Clear Expectations & Plans",
      text: "",
      backgroundImage: "",
    },
    {
      title: "",
      text: "",
      backgroundImage: "",
    },
    {
      title: "Monitoring & Alerting",
      text: "",
      backgroundImage: "",
    },
    {
      title: "Flexibility",
      text: "",
      backgroundImage: "",
    },
  ];
  return (
    <>
      <div className="mb-64">
        <div className="hero pb-4">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">We Go Beyond</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div
          className="grid
            gap-1
            px-1 
            pb-4
            xs:grid-cols-1
            sm:grid-cols-1
            md:grid-cols-4
            lg:grid-cols-4

            "
        >
          {data.map((item, i) => (
            <div key={i} className="card mx-2 mb-2 shadow-xl image-full">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
