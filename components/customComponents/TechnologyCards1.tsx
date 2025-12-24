import React from "react";

export default function TechnologyCards1() {
  return (
    <div
      className="
        relative w-full min-h-80 h-auto rounded-xl bg-zinc-900 p-6
        md:min-h-40 md:h-97 md:rounded-2xl md:p-10
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
            h-40 w-full max-w-55 overflow-hidden rounded-lg
            md:h-60 md:w-[256px] md:rounded-xl
          "
        >
          <img
            src="/images/technology-section-image-1.svg"
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
            Rising Costs
          </h2>

          <p
            className="
              mt-3 w-full max-w-65 text-sm text-zinc-400 leading-relaxed
              md:mt-4 md:w-66 md:text-base
            "
          >
            New devices strain budgets and slow growing teams.
          </p>
        </div>
      </div>
    </div>
  );
}
