interface Button1Props {
  btnText: string;
}

export default function Button1(props: Button1Props) {
  let { btnText } = props;

  return (
    <>
      <div className="w-full text-center py-5">
        <button className="btn btn-accent btn-lg rounded-lg text-center text-white">
          {btnText}
        </button>
      </div>
    </>
  );
}
