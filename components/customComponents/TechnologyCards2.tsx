
export default function TechnologyCards2() {
  return (
    <div
      className="
        relative w-full min-h-80 h-auto rounded-xl bg-[#024EFF] p-6
        overflow-hidden
        md:min-h-40 md:h-97 md:rounded-2xl md:p-10 md:overflow-visible
      "
    >
      <div
        className="
          relative mb-6 flex justify-center
          md:absolute md:top-6 md:right-6 md:mb-0
        "
      >
        <div
          className="
            h-40 w-full max-w-65 overflow-hidden rounded-lg
            md:h-60 md:w-80.25 md:rounded-xl
          "
        >
          <img
            src="/images/technology-section-image-2.svg"
            alt="Devices"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div
        className="
          relative flex items-end
          md:absolute md:bottom-12 md:left-6
        "
      >
        <div>
          <h2
            className="
              text-2xl font-light text-white
              md:text-4xl
            "
          >
            Global E-Waste
          </h2>

          <p
            className="
              mt-3 w-full max-w-65 text-sm text-zinc-200 leading-relaxed
              md:mt-4 md:w-66 md:text-base
            "
          >
            The UK generates 1.6 million tonnes of e-waste every year.
          </p>
        </div>
      </div>
    </div>
  );
}
