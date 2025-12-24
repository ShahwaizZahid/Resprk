import React from "react";

export default function TechnologyCards1() {
  return (
    <div className="relative w-full  min-h-40 h-97 rounded-2xl bg-zinc-900 p-10 ">
      <div className="absolute top-6 right-6 flex items-end gap-3">
        <div className="h-60 w-[256px] overflow-hidden rounded-xl">
          <img
            src="/images/technology-section-image-1.svg"
            alt="Devices"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-12 left-6 flex items-end gap-3">
        <div className=" rounded-xl">
          <h2 className="text-4xl font-light text-white">Rising Costs</h2>

          <p className="mt-4 w-66 text-zinc-400  leading-relaxed">
            New devices strain budgets and slow growing teams.
          </p>
        </div>
      </div>
    </div>
  );
}
