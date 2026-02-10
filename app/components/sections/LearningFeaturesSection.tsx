import { Explore } from "../icons/Explore";
import { IconComponentNode } from "../icons/IconComponentNode";
import { JSX } from "react";

export const LearningFeaturesSection = (): JSX.Element => {
  return (
    <section
      id="tutor"
      className="overflow-hidden flex flex-col justify-center items-center border-b-2 bg-[#0C0403] text-white mx-auto"
    >
      <div className="flex flex-col items-start w-full max-w-[1440px] mx-auto lg:flex-row">
        <img
          className="order-2 w-full max-w-full h-[320px] object-cover sm:h-[420px] lg:order-1 lg:max-w-[710px] lg:h-[543px]"
          alt="Vipul, founder of VIP NextGen Tutoring"
          src="/images/vip_images/vipul.png"
        />

        <div className="order-1 flex flex-col items-start justify-center gap-6 px-6 py-10 flex-1 sm:px-10 lg:order-2 lg:h-[543px] lg:items-end lg:gap-8 lg:px-16">
          <div className="flex flex-col max-w-[624px] items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <Explore className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" />
              <div className="flex flex-col items-start gap-6">
                <h2 className="text-3xl leading-[38px] sm:text-4xl sm:leading-[46px] lg:text-[60px] lg:leading-[72px]">
                  Meet Your Tutor
                </h2>

                <p className="text-2xl leading-8 sm:text-3xl sm:leading-[40px] lg:text-[40px] lg:leading-[48px]">
                  Hi, I&apos;m Vipul — founder of VIP NextGen Tutoring.
                </p>

                <p className="text-base leading-7 sm:text-lg sm:leading-[27px]">
                  I work with students across Math, English, Science, and French
                  in both one-on-one and small group settings. My approach goes
                  beyond memorization, helping students understand concepts
                  deeply and apply them with confidence.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6">
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Explore
              </a>

              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white hover:text-white/80 transition"
              >
                View
                <IconComponentNode className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
