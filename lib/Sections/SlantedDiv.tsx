export default function SlantedDiv() {
  return (
    <div
      className="bg-white w-full h-96 mb-48"
      style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 76%, 0% 100%)",
        clipPath: "polygon(0 0, 100% 0, 100% 76%, 0% 100%)",
      }}
    ></div>
  );
}
