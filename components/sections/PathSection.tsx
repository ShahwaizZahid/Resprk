import React from "react";
import { Button } from "../ui/button";
import { FaArrowDown } from "react-icons/fa";

export default function PathSection() {
  return (
    <div className="px-5 md:px-20 py-10 md:py-16">
      <div className="text-black py-10 px-5 sm:px-10 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <div className="font-[Space_Grotesk] font-normal text-2xl sm:text-3xl md:text-[52px] leading-7 sm:leading-9 md:leading-13 tracking-[-0.04em] text-center md:text-left w-full md:w-auto">
          A Smarter, Greener Path
        </div>

        <p className="text-sm sm:text-base md:text-base text-gray-600 w-full md:w-auto text-center md:text-left">
          45% average savings compared to new retail prices.
        </p>

        <Button className="py-2 sm:py-3 md:py-6 px-4 sm:px-6 md:px-12 bg-white text-gray-500 border border-gray-500 w-full sm:w-auto flex justify-center items-center gap-2">
          Schedule a free call <FaArrowDown />
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-4 px-6 py-10">
        <div className="flex flex-col flex-1 gap-3 min-h-75">
          <div className="flex-1 rounded-3xl bg-[#8F97FA63] flex flex-col justify-between p-4 md:p-6">
            <h1 className="text-sm md:text-base">Average saving</h1>
            <div className="text-2xl md:text-[54px] font-bold">45%</div>
          </div>
          <img
            src="/images/path-section-image-2.svg"
            alt=""
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        <div className="relative flex-1 min-h-75">
          <img
            src="/images/path-section-image-3.svg"
            alt="technology-section-image"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col justify-between h-full p-4 md:p-6 text-white">
              <div>
                <div className="text-2xl md:text-[54px] font-normal leading-[156%] tracking-[-0.02em]">
                  £3,000+
                </div>
                <p className="text-sm md:text-base">Saved per Team</p>
              </div>
              <p className="text-sm md:text-[20px] leading-[120%] text-center px-2 md:px-10">
                On average, companies reinvest hardware savings into growth,
                hiring, and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-3 min-h-75">
          <img
            src="/images/path-section-image-2.svg"
            alt=""
            className="w-full h-auto object-contain rounded-xl"
          />
          <div className="flex-1 rounded-3xl bg-[#C8FF4B8A] flex items-center justify-center p-4 md:p-6">
            <p className="text-lg md:text-[35px] font-normal text-center w-full">
              Less Waste. More Impact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
