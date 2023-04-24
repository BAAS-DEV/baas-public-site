"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container pt-48 mx-auto text-center min-h-screen w-full">
        <h1 className="text-4xl">Thank You For Your Submission!</h1>
        <p className="text-xl">We will be in touch shortly.</p>
        <button
          className="btn btn-accent"
          type="button"
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>
    </>
  );
}
