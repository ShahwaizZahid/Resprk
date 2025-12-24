import Image from "next/image";
import React from "react";

type GrowingCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  bgColor?: string;
  textColor?: string;
  rotate?: number;
  marginTop?: string;
};

export default function GrowingCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  rotate = 0,
  bgColor = "black",
  textColor = "#000",
  marginTop = "0",
}: GrowingCardProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        marginTop: marginTop,
        transform: `rotate(${rotate}deg)`,
      }}
      className={`w-82.5 text-${textColor}  overflow-hidden h-105 rounded-2xl flex flex-col justify-between items-center p-10`}
    >
      <div className="font-space-grotesk font-medium text-[32px] leading-13.75 tracking-[-0.04em]">
        {title}
      </div>

      <p className="font-light text-[18px] w-48.5 leading-6 p-4 tracking-[-0.03em] text-center">
        {description}
      </p>

      <div className="w-72.5 h-42">
        <Image
          src={imageSrc}
          alt={
            typeof imageAlt === "string"
              ? imageAlt
              : typeof title === "string"
              ? title
              : ""
          }
          width={290}
          height={168}
        />
      </div>
    </div>
  );
}
