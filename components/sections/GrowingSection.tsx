'use client';
import Image from "next/image";
import GrowingCard from "../customComponents/GrowingCard";
import { useEffect, useState, } from "react";

export default function GrowingSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b border-gray-400 px-5 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        <div className="font-space-grotesk font-normal text-[32px] md:text-[52px] leading-10 md:leading-13 tracking-[-0.04em] text-center md:text-left">
          Trusted by Growing Teams
        </div>

        <div className="font-space-grotesk font-light text-[16px] md:text-[18px] leading-5 md:leading-6 tracking-[-0.03em] text-center md:text-left max-w-md">
          Book a short discovery call to discuss your IT needs, explore flexible
          options, and calculate how much your business can save.
        </div>

        <div className="w-36.5 h-32.75">
          <Image
            src="/images/growing-section/growing-section-logo.svg"
            alt="Logo 1"
            width={146}
            height={131}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 py-12">
        <GrowingCard
          title="Education"
          description="Reliable tech that supports learning and sustainability."
          imageSrc="/images/growing-section/growing-section-image-1.svg"
          rotate={isMobile ? 0 : -15}
          bgColor="#C8FF4B"
          marginTop={isMobile ? "0" : "100px"}
        />

        <GrowingCard
          title="SMEs"
          description="Scale faster with lower hardware costs."
          imageSrc="/images/growing-section/growing-section-image-2.svg"
          rotate={isMobile ? 0 : 0}
          bgColor="#024EFF"
          textColor="white"
          marginTop="0"
        />

        <GrowingCard
          title="Enterprise"
          description="Secure, large-scale deployments without compromise."
          imageSrc="/images/growing-section/growing-section-image-3.svg"
          rotate={isMobile ? 0 : 15}
          bgColor="black"
          textColor="white"
          marginTop={isMobile ? "0" : "100px"}
        />
      </div>
    </div>
  );
}
