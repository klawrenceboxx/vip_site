import { ChevronRight } from "../icons/ChevronRight";
import { JSX } from "react";

export const TutorIntroductionSection = (): JSX.Element => {
  return (
    <section
      id="self-paced"
      className="section-padding flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 w-full bg-[#0C0403]"
    >
      <div className="flex flex-col max-w-[1280px] items-start gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-wrap items-center gap-10 sm:gap-16 lg:gap-20 w-full">
          <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 min-w-[280px]">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="text-3xl leading-[38px] text-white sm:text-4xl sm:leading-[46px] lg:text-[60px] lg:leading-[72px]">
                  Self-Paced Learning Option
                </h2>

                <p className="text-base leading-7 text-white sm:text-lg sm:leading-8 lg:text-xl">
                  Prefer self-paced learning?
                  <br /> Vipul has also created a structured Udemy course
                  covering foundational investing concepts for students and
                  beginners.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6">
              <a
                href="https://www.udemy.com/course/ixnvestnow/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0C0403]"
              >
                Learn more
              </a>

              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-white hover:text-white/80 transition"
              >
                Explore
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          <img
            className="w-full max-w-[320px] aspect-square object-contain rounded-[24px] mx-auto sm:mx-0 sm:max-w-[360px] lg:max-w-[430px]"
            alt="Udemy course preview showing structured learning content for investing fundamentals"
            src="/images//vip_images/udemy_logo.png"
          />
        </div>
      </div>
    </section>
  );
};
