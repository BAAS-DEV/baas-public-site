"use client";

import { useRouter } from "next/navigation";

export default function StepButtons(props: {
  pos: number;
  handleStepChange: (arg0: number) => void;
}) {
  const router = useRouter();
  console.log(props.pos);
  switch (props.pos) {
    case 0:
      return (
        <button
          onClick={(e) => props.handleStepChange(1)}
          className="btn btn-lg btn-info rounded-lg text-slate-200"
        >
          Click Me!
        </button>
      );
    case 1:
    case 2:
      return (
        <>
          <button
            onClick={(e) => props.handleStepChange(-1)}
            value={1}
            className="btn btn-secondary mx-1 mr-2 rounded-lg text-slate-200"
          >
            Previous
          </button>
          <button
            onClick={(e) => props.handleStepChange(1)}
            className="btn btn-info ml-2 mx-1 rounded-lg text-slate-200"
          >
            Next
          </button>
        </>
      );
    case 3:
      return (
        <>
          <button
            onClick={(e) => props.handleStepChange(-1)}
            value={1}
            className="btn btn-secondary text-sm rounded-lg text-slate-200 mb-2"
          >
            previous
          </button>
          <br />

          <button
            onClick={() => router.push("/contact")}
            value={1}
            className="btn btn-success btn-xl text-2xl mb-2 rounded-lg text-slate-200"
          >
            Start Now!
          </button>
        </>
      );
    default:
      return <div></div>;
  }
}
