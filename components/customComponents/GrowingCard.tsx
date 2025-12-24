import Image from "next/image";
import React from "react";
import { AvatarGroup } from "./AvatarGroup";

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
      className={`w-82.5 text-${textColor}  overflow-hidden h-105 rounded-2xl flex flex-col  items-center `}
    >
      
      <div className=" flex  justify-center
       items-center w-full flex-col pt-6 ">
        <div className=" w-23.5 font-medium text-[32px] leading-13.75 tracking-[-0.04em] items-center flex justify-center">
          {title}
        </div>

        <p className="font-light text-[18px] w-48.5 leading-6   text-center">
          {description}
        </p>
      </div>

<div className="pt-12.5">

      {bgColor === "black" ? (
        <AvatarGroup />
      ) : bgColor === "#C8FF4B" ? (
        <div className="w-72.5 h-42 overflow-hidden rounded-full">
          <Image
            className="rounded-full"
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
      ) : (
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
      )}
</div>

    </div>
  );
}
