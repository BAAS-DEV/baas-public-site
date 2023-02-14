import TypingTexts from "../TypographyCollections/TypingTexts";

export default function Code() {
  return (
    <div className="mockup-code w-full mx-auto max-w-4xl  ">
      <div className="w-full mx-auto mt-8 text-sm sm:text-sm xs:text-sm md:text-2xl text-left">
        <h1 className="text-4xl text-center">
          Custom Software Consultation & Development
        </h1>
        <p className="text-center pt-4">
          We build your dream, the way you want it.
        </p>
        <div className="divider"></div>

        <pre data-prefix=">" className="text">
          <code>Automate the Boring Tasks</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Move Everything To One Platform</code>
        </pre>
        <pre data-prefix=">" className="text">
          <code>Scale Faster</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>More Revenue & Value</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>SOLVE YOUR PROBLEMS</code>
        </pre>
        <div className="divider"></div>
        <div className="text-center w-full text-2xl ">
          Are You Ready To Start Your
          <TypingTexts />
          Project?
        </div>
      </div>
    </div>
  );
}
