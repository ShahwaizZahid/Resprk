import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "../customComponents/TestimonialsCard";

export default function TestimonialsSection() {
  return (
    <div className="relative px-5 md:px-20 py-8 md:py-16">
      <div className="flex flex-col px-10 md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="font-normal text-[32px] md:text-[52px] leading-10 md:leading-13 tracking-[-0.04em] text-center md:text-left">
          Testimonials
        </div>

        <div className="flex justify-center items-center gap-4 mt-4 md:mt-0">
          <div className="border border-black rounded-full p-4 md:p-6 h-12 md:h-18.5 w-12 md:w-18.5 flex justify-center items-center">
            <FaArrowLeft className="text-sm md:text-base" />
          </div>
          <div className="bg-[#D4D7FD] rounded-full p-4 md:p-6 h-12 md:h-18.5 w-12 md:w-18.5 flex justify-center items-center">
            <FaArrowRight className="text-sm md:text-base" />
          </div>
        </div>
      </div>

      <div
        className="
          mt-6 md:mt-10
          flex gap-6 overflow-x-auto snap-x snap-mandatory
          md:relative md:block md:overflow-visible
          h-auto md:h-150
        "
      >
        <div className="snap-start shrink-0 md:absolute md:top-0 md:left-16">
          <TestimonialCard
            headline="40% cost savings"
            quote="The quality is indistinguishable from new. We cut hardware spend by 40% and reinvested straight into hiring."
            name="Sarah Jenkins"
            title="CTO, FinTech Start-up"
            avatarSrc="/images/testimonials/testimonials-profile-1.svg"
            bgColor="#1A1A1A"
            textColor="white"
          />
        </div>

        <div className="snap-start shrink-0 md:absolute md:top-0 md:left-80.25">
          <TestimonialCard
            headline="THE best AI Event!"
            quote="“Six months in and not a single return. Resprk helped us hit sustainability and budget targets.”"
            name="Elena Rojas"
            title="AI Researcher, DeepMind"
            avatarSrc="/images/testimonials/testimonials-profile-2.svg"
            bgColor="#0147FF"
            textColor="white"
          />
        </div>

        <div className="snap-start shrink-0 md:absolute md:top-0 md:left-157">
          <TestimonialCard
            headline="Fast delivery"
            quote="“Fast, personal service with a perfect mix of new and refurbished devices.”"
            name="David Laurent"
            title="CEO, FutureAI Labs"
            avatarSrc="/images/testimonials/testimonials-profile-3.svg"
            bgColor="#FFDC48"
            textColor="#111"
          />
        </div>

        <div className="snap-start shrink-0 md:absolute md:top-0 md:left-288">
          <TestimonialCard
            headline="Pristine devices"
            quote="“The ‘Pristine’ grading is spot on. Client-facing devices looked brand new.”"
            name="James Caldott"
            title="Founder, Logistics SME"
            avatarSrc="/images/testimonials/testimonials-profile-4.svg"
            bgColor="#C8FF4B"
            textColor="#111"
          />
        </div>
      </div>
    </div>
  );
}
