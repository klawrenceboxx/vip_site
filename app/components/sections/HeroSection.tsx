import { JSX } from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      id="about"
      className="flex flex-col items-center w-full bg-[#0C0403]"
    >
      <div className="section-padding flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-col max-w-[1280px] items-center gap-12 sm:gap-16 lg:gap-20 w-full">
          <div className="flex flex-col max-w-[768px] items-center gap-6 sm:gap-8 w-full">
            <div className="flex flex-col items-center gap-6 w-full">
              <h1 className="text-4xl leading-[44px] text-center sm:text-5xl sm:leading-[56px] lg:text-[84px] lg:leading-[92px]">
                Master today&#39;s skills and tomorrow&#39;s opportunities
              </h1>

              <p className="text-base leading-7 text-center sm:text-lg sm:leading-8 lg:text-xl">
                Learn from Vipul&#39;s proven methods that blend traditional
                academics with AI and investing concepts. Build the foundation
                every student needs.
              </p>
            </div>

            <div className="inline-flex flex-wrap items-start justify-center gap-3 sm:gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0C0403] rounded-md border-2 border-white text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0C0403]"
              >
                Book now
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0C0403]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full max-w-[1280px] px-4 pb-10 sm:px-8 sm:pb-16"
        alt="Students learning together with modern technology and traditional methods"
        src="/images/vip_images/study_image.png"
      />
    </section>
  );
};
