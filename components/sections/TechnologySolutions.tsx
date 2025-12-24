import Image from "next/image";
import { Button } from "../ui/button"; // shadcn button
import { FaArrowDown } from "react-icons/fa";
const technologySolutionsData = [
            {
              img: "/images/technology-solution/technology-solution-img-1.svg",
              title: "Laptops",
              desc: "Certified refurbished laptops from leading brands like Dell, HP, and Lenovo.",
            },
            {
              img: "/images/technology-solution/technology-solution-img-2.svg",
              title: "Desktop PCs",
              desc: "Reconditioned all-in-one PCs and towers for office and home use.",
            },
            {
              img: "/images/technology-solution/technology-solution-img-3.svg",
              title: "Mobiles & Tablets",
              desc: "A wide selection of refurbished smartphones and tablets.",
            },
            {
              img: "/images/technology-solution/technology-solution-img-4.svg",
              title: "Peripherals & Accessories",
              desc: "Keyboards, monitors, and other essentials.",
            },
          ]
export default function TechnologySolutions() {
  return (
    <section className="px-5 md:px-20 py-10 md:py-16">
      <div className="mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 border-t border-b border-dotted border-gray-500">
        <div className="lg:w-1/3 border-l-0 border-r-0 border-t-0 border-b-0 flex flex-col justify-between p-5 md:p-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-3xl md:text-4xl font-bold md:w-67.5">
              Tailored Technology Solutions
            </h2>
            <Button className="py-3 md:py-6 bg-white w-full md:w-61 text-gray-500 border border-gray-500 flex justify-center items-center gap-2">
              Schedule a free call <FaArrowDown />
            </Button>
          </div>

          <p className="text-sm md:text-base text-gray-500 mt-4 md:mt-6 md:w-67.5">
            Mix new and Re-Sporked systems to match your budget, scale, and use case.
          </p>
        </div>

        <div className="flex flex-col border-l  gap-6 md:gap-8 lg:w-2/3 p-5 md:p-10">
          {technologySolutionsData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <div className="shrink-0 relative w-24 h-24 md:w-49.75 md:h-49.75">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-medium text-xl md:text-[32px] leading-6 md:leading-13.75 tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="font-light text-sm md:text-[25px] md:w-117 leading-5 md:leading-7.5 text-gray-500 tracking-[-0.02em]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 mt-6 md:mt-10 border-b-2 border-dotted border-gray-500 pb-6">
        <div className="flex justify-center items-center font-light text-[60px] md:text-[100.72px] leading-27.5 md:leading-[173.11px] tracking-[-0.04em] w-full md:w-auto">
          45%
        </div>

        <div className="w-full md:w-105 text-sm md:text-[18px] leading-5 md:leading-6 tracking-[-0.04em] font-light">
          We provide a comprehensive range of technology solutions for businesses and individuals. Our inventory is carefully graded to provide clarity and transparency, from pristine to excellent value.
        </div>

        <div className=" w-full md:w-146.75 h-40 md:h-full relative">
          <Image
            src="/images/technology-solution/technology-solution-img-5.svg"
            alt="Laptop"
            fill
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
