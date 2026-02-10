import { JSX } from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section
      id="about"
      className="flex flex-col items-center w-full bg-[#0C0403]"
    >
      <div className="section-padding flex flex-col items-center gap-20 w-full">
        <div className="flex flex-col max-w-[1280px] items-center gap-20 w-full">
          <div className="flex flex-col max-w-[768px] items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-6 w-full">
              <h1 className="text-[84px] leading-[92px] text-center">
                Master today&#39;s skills and tomorrow&#39;s opportunities
              </h1>

              <p className="text-xl leading-8 text-center">
                Learn from Vipul&#39;s proven methods that blend traditional
                academics with AI and investing concepts. Build the foundation
                every student needs.
              </p>
            </div>

            <div className="inline-flex flex-wrap items-start gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0C0403] rounded-md border-2 border-white text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Book now
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className=""
        alt="Students learning together with modern technology and traditional methods"
        src="/images/vip_images/study_image.png"
      />
    </section>
  );
};
