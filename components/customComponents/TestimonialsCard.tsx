import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

interface TestimonialCardProps {
  headline: React.ReactNode;
  quote: React.ReactNode;
  name: string;
  title?: string;
  avatarSrc?: string;
  bgColor?: string;
  textColor?: string;
}

export default function TestimonialCard({
  headline,
  quote,
  name,
  title,
  avatarSrc,
  bgColor = "white",
  textColor = "black",
}: TestimonialCardProps) {
  return (
    <div
      className={`w-125 h-110.75 flex flex-col justify-between p-10  rounded-3xl`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="w-[320px] font-medium text-[32px] leading-13.75 tracking-[-0.04em]">
        {headline}
      </div>

      <p className="w-100 font-normal text-[20px] leading-7.5 tracking-[0em]">
        {quote}
      </p>

      <div className="flex items-center gap-6">
        <Avatar className="w-12.5 h-12.5">
          {avatarSrc ? (
            <AvatarImage src={avatarSrc} alt={name} />
          ) : (
            <AvatarImage alt={name} />
          )}
        </Avatar>

        <div>
          <div className="font-space-grotesk font-normal text-[18px] leading-7.5 tracking-[0em]">
            {name}
          </div>

          <p className="font-normal text-[18px] leading-7.5 tracking-[0em]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
