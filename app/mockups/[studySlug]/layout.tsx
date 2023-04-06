"use client";

import PageSectionHeader from "../../../lib/Components/PageSectionHeader";
import useWindowSize from "../../../lib/Hooks/windowHook";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const size = useWindowSize();
  return (
    <div className=" min-h-screen mx-auto bg-none">
      <>
        <div
          className="absolute w-screen h-full top-0 left-0 bg-fixed  -z-10 "
          style={
            {
              // height: size.height,
              // backgroundImage: "url('/particles.svg')",
            }
          }
        ></div>
        <div className="mx-auto relative">{children}</div>
      </>
    </div>
  );
}
