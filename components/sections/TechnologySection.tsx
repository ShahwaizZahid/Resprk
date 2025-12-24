import { Button } from "../ui/button";
import { FaArrowDown } from "react-icons/fa";
import TechnologyCards1 from "../customComponents/TechnologyCards1";
import TechnologyCards2 from "../customComponents/TechnologyCards2";

export default function TechnologySection() {
  return (
    <div className="px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 py-10">
        <div className="font-[Space_Grotesk] font-normal text-2xl sm:text-3xl md:text-[52px] leading-7 sm:leading-9 md:leading-13 tracking-[-0.04em] w-full md:w-1/2 text-center md:text-left">
          The Vicious Cycle of Outdated Technology
        </div>

        <p className="text-sm sm:text-base md:text-base text-gray-600 w-full md:w-1/3 text-center md:text-left">
          As device prices rise, budgets shrink — while discarded hardware continues to pile up as e-waste
        </p>

        <Button className="py-2 sm:py-3 md:py-6 px-4 sm:px-6 md:px-12 bg-white text-gray-500 border border-gray-500 w-full sm:w-auto flex justify-center items-center gap-2">
          Schedule a free call <FaArrowDown />
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-0 md:px-6 py-10">
        <TechnologyCards1 />
        <TechnologyCards2 />
      </div>
    </div>
  );
}
