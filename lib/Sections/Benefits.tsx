import ContactForm from "../Containers/ContactForm";
import SlideInFromBottomWhenViewed from "../Containers/SlideInFromBottomWhenViewed";
import SlideInFromLeftWhenViewed from "../Containers/SlideInFromLeftWhenViewed";
import VisualDetectionContainer from "../Containers/SlideInFromLeftWhenViewed";
import SLideInFromRightWhenViewed from "../Containers/SlideInFromRightWhenViewed ";

export default function Benefits() {
  let data = [
    {
      title: "Improved efficiency and productivity",
      text: "Custom software is designed to meet the specific needs and requirements of your business, so it can help streamline processes and improve overall efficiency and productivity",
      backgroundImage: "",
    },
    {
      title: "Enhanced security",
      text: "Custom software can be built with robust security measures to protect your sensitive data and prevent unauthorized access.",
      backgroundImage: "",
    },
    {
      title: "Better user experience",
      text: "Since custom software is tailored to your business, it can provide a better user experience for your employees and customers.",
      backgroundImage: "",
    },
    {
      title: "Increased flexibility and scalability",
      text: "Custom software can be easily modified and updated as your business grows and changes, allowing you to adapt quickly to new challenges and opportunities.",
      backgroundImage: "",
    },
    {
      title: "Competitive advantage",
      text: "Custom software can give your business a competitive edge by providing unique and innovative solutions that set you apart from your competitors.",
      backgroundImage: "",
    },
    {
      title: "Reduced Costs",
      text: "In the long run, custom software can be more cost-effective than off-the-shelf solutions, as it can be designed to meet your specific needs and can be easily updated and maintained without incurring additional costs.",
      backgroundImage: "",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <h2 className="text-6xl text-primary text-center text-bold">
          How Custom Solutions Empower Your Business
        </h2>

        <div className="hero pb-4 pb-32">
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-auto text-center gap-1 w-full">
            <div className="w-full p-4 text-right">
              <div className="float-right pt-8 w-full">
                <SlideInFromLeftWhenViewed animation="easeInOut">
                  {data.map((item, i) => (
                    <>
                      {i < 3 ? (
                        <div className="card w-full float-right max-w-xl mx-auto h-72  text-primary-content my-4">
                          <div className="card-body w-full">
                            <h2 className="card-title text-right">
                              {item.title}
                            </h2>
                            <p>{item.text}</p>
                            <div className="card-actions justify-end">
                              <button className="btn">Read More</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </SlideInFromLeftWhenViewed>
              </div>
            </div>
            {/* SECOND SECTION */}
            <div className={`w-full text-center h-full align-middle pt-32`}>
              <SlideInFromBottomWhenViewed animation="easeInOut">
                <div className="mockup-phone">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <h3>Get Your Free Consultation</h3>
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </SlideInFromBottomWhenViewed>
            </div>
            {/* END SECOND SECTION */}

            <div className="w-full p-4 text-left">
              <div className="float-left  pt-8">
                <SLideInFromRightWhenViewed animation="easeInOut">
                  {data.map((item, i) => (
                    <>
                      {i > 2 ? (
                        <div className="card w-full float-right max-w-xl mx-auto h-72 bg-primary text-primary-content my-4">
                          <div className="card-body w-full">
                            <h2 className="card-title text-left">
                              {item.title}
                            </h2>
                            <p>{item.text}</p>
                            <div className="card-actions justify-end">
                              <button className="btn">Buy Now</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </SLideInFromRightWhenViewed>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
