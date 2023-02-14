export default function SidebarLayout2({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 w-full min-h-screen">
      <div className="col-span-1 ">
        <div className="card w-full bg-base-100 shadow-xl mt-4">
          <AboutComponent />
        </div>
      </div>
      <div className="col-span-2 divider-vertical w-full">{children}</div>
    </div>
  );
}

function AboutComponent() {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-block">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

function ImportantLinks() {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl mb-4">
        <ul className="menu bg-base-100 w-full p-2 rounded-box ">
          <h3 className="text-2xl px-4 mb-4">Important Links</h3>
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
}

function Posts() {
  return (
    <div className="card w-full bg-white shadow-xl">
      <ul className="menu w-full rounded-box">
        <div className="card-title">
          <h3 className="text-2xl px-4 mt-4 ">More Of Our Posts</h3>
        </div>
        <li>
          <div className="card card-side">
            <figure>
              {/* <Image src="https://placeimg.com/200/280/arch" alt="Movie" /> */}
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p className="text-sm">
                Click the button to watch on Jetflix app.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
