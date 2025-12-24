import Navbar from "../customComponents/Navbar";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-[url('/images/background.webp')] bg-cover bg-center min-h-screen  w-full text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center px-5 sm:px-10 md:px-20 lg:px-44">
        <div className="font-semibold tracking-[-0.04em]">
          <div
            className="flex flex-wrap items-center gap-2
                    text-4xl sm:text-5xl md:text-7xl lg:text-[122px]
                    leading-tight lg:leading-35"
          >
            <span>Re</span>

            <img
              src="/images/heading-1-logo.svg"
              alt="heading-1-logo"
              className="inline-block h-[1em] sm:h-[1.2em] lg:h-[1.1em] w-auto"
            />

            <span>Sprking</span>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 
                    text-4xl sm:text-5xl md:text-7xl lg:text-[122px]
                    leading-tight"
          >
            <span>Technology</span>

            <img
              src="/images/heading-2-logo.svg"
              alt="heading-2-logo"
              className="inline-block h-[1em] sm:h-[1.1em] lg:h-[1em] w-auto"
            />

            <span>for a</span>
          </div>

          <div
            className="mt-2
                   text-4xl sm:text-5xl md:text-7xl lg:text-[122px]
                    leading-tight"
          >
            Sustainable Future
          </div>
        </div>
      </main>

      <footer className="flex flex-col md:flex-row w-full border-t border-white">
        <div className="flex flex-col  flex-wrap md:flex-row gap-4 md:gap-6 w-full md:w-1/2 border-b md:border-b-0 md:border-r border-white px-5 sm:px-5 py-6">
          <Button className="bg-white text-black w-fit  px-6 py-3 md:px-10 md:py-6">
            Book a Consultation
          </Button>

          <Button className="w-44.75  py-3 md:py-6 px-4 md:px-8 bg-black border border-white rounded-4xl shadow-[inset_6px_0_12px_rgba(255,255,255,0.6)] flex items-center justify-center gap-2">
            <span>Get a Quote</span> <FaArrowRight />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-1/2 px-5 sm:px-10 py-6 gap-4 md:gap-0 border-t md:border-t-0 md:border-l border-white">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold">45%</div>
          <div className="max-w-md text-center md:text-left">
            <p className="text-sm sm:text-base md:text-base leading-relaxed">
              Premium certified refurbished technology. Save up to 45% on IT
              costs while eliminating e-waste.
            </p>
          </div>
          <img
            src="/images/footer-logo.svg"
            alt="footer-logo"
            className="w-12 h-12 mx-auto md:mx-0"
          />
        </div>
      </footer>
    </div>
  );
}
