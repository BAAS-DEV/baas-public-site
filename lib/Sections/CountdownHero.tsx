import ContactForm from "../Containers/ContactForm";

export default function CountDownHero() {
  return (
    <div
      className="hero min-h-screen pt-8"
      style={{
        backgroundImage: "url('/Live-Background.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left">
          <div className="w-full text-center">
            <div className="bg-slate-200 p-8 rounded-lg mb-10  text-black">
              <h1 className="text-5xl font-bold pb-2">New Year, New Us!</h1>
              <p className="py-6 px-2 text-2xl">
                We are currently testing our new beta site and app.
              </p>
              <p className="text-2xl mb-8">
                We will be deploying these to you soon to support the influx of
                projects we have received.
              </p>
              <p className="text-4xl text-accent mb-8">
                Contact Us Before We Launch!
              </p>
            </div>

            <div className="mockup-phone ">
              <div className="camera"></div>
              <div className="display ">
                <div className="artboard artboard-demo phone-1">
                  <figure>
                    <img src="/logo-light.svg" alt="Shoes" width={100} />
                  </figure>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
