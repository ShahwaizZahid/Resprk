import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

interface TestimonialCardProps {
  headline: React.ReactNode
  quote: React.ReactNode
  name: string
  title?: string
  avatarSrc?: string
  bgColor?: string
  textColor?: string
}

export default function TestimonialCard({
  headline,
  quote,
  name,
  title,
  avatarSrc,
  bgColor = 'white',
  textColor = 'black',
}: TestimonialCardProps) {
  return (
    <div
      className="
        w-full max-w-120.75 h-auto p-6 rounded-2xl
        flex flex-col justify-between
        md:w-125 md:h-110.75 md:p-10 md:rounded-3xl
      "
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div
        className="
          w-full font-medium text-[22px] leading-7 tracking-[-0.04em]
          md:w-[320px] md:text-[32px] md:leading-13.75
        "
      >
        {headline}
      </div>

      <p
        className="
          w-full font-normal text-[16px] leading-6 mt-4
          md:w-100 md:text-[20px] md:leading-7.5
        "
      >
        {quote}
      </p>

      <div className="flex items-center gap-4 md:gap-6 mt-6">
        <Avatar className="w-10 h-10 md:w-12.5 md:h-12.5">
          {avatarSrc ? (
            <AvatarImage src={avatarSrc} alt={name} />
          ) : (
            <AvatarImage alt={name} />
          )}
        </Avatar>

        <div>
          <div
            className="
              font-space-grotesk font-normal text-[16px] leading-6
              md:text-[18px] md:leading-7.5
            "
          >
            {name}
          </div>

          {title && (
            <p
              className="
                font-normal text-[14px] leading-5
                md:text-[18px] md:leading-7.5
              "
            >
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
