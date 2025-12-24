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
        marginTop,
        transform: `rotate(${rotate}deg)`,
        color: textColor,
      }}
      className="
        w-full max-w-[320px] h-auto rounded-xl overflow-hidden
        flex flex-col items-center
        md:max-w-82.5 md:h-105 md:rounded-2xl
      "
    >
      {/* Text */}
      <div className="flex flex-col items-center pt-4 md:pt-6 w-full">
        <div
          className="
            w-full font-medium text-[22px] leading-7 tracking-[-0.04em]
            text-center
            md:w-23.5 md:text-[32px] md:leading-13.75
          "
        >
          {title}
        </div>

        <p
          className="
            font-light text-[14px] leading-5 text-center mt-2
            md:text-[18px] md:leading-6 md:w-48.5
          "
        >
          {description}
        </p>
      </div>

      {/* Media */}
      <div className="pt-6 md:pt-12.5">
        {bgColor === "black" ? (
          <AvatarGroup />
        ) : bgColor === "#C8FF4B" ? (
          <div
            className="
              w-56 h-32 rounded-full overflow-hidden
              md:w-72.5 md:h-42
            "
          >
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
          <div
            className="
              w-56 h-32
              md:w-72.5 md:h-42
            "
          >
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
