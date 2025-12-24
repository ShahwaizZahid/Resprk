import React from "react";

export default function TechnologyCards2() {
  return (
    <div className="relative w-full  min-h-40 h-97  rounded-2xl bg-[#024EFF] p-10 ">
      <div className="absolute top-6 right-6 flex items-end gap-3">
        <div className="h-60 w-80.25 overflow-hidden rounded-xl">
          <img
            src="/images/technology-section-image-2.svg"
            alt="Devices"
            className="h-full w-full object-cover"
          />
        </div>

       
      </div>
 <div className="absolute bottom-12 left-6 flex items-end gap-3">
        <div className=" rounded-xl">
          
        <h2 className="text-4xl font-light text-white">
          Global E-Waste
        </h2>

        <p className="mt-4 w-66 text-zinc-400  leading-relaxed">
      The UK generates 1.6 million tonnes of e-waste every year.
        </p>
        </div>

       
      </div>
      
    </div>
  );
}
