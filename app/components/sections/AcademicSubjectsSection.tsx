import { ChevronRight } from "../icons/ChevronRight";
import { Finance } from "../icons/Finance";
import { Science } from "../icons/Science";
import { JSX } from "react";

export const AcademicSubjectsSection = (): JSX.Element => {
  const features = [
    {
      icon: Science,
      title: "AI literacy",
      description:
        "Understand artificial intelligence and its role in modern society",
    },
    {
      icon: Finance,
      title: "Investing basics",
      description:
        "Learn wealth-building principles and financial decision-making early",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 w-full bg-[#0C0403]"
    >
      <div className="flex flex-col max-w-[1280px] items-start gap-12 sm:gap-16 lg:gap-20 w-full">
        <div className="flex flex-wrap items-center gap-10 sm:gap-16 lg:gap-20 w-full">
          <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 min-w-[280px]">
            <header className="flex flex-col items-start gap-4 w-full">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Future
              </p>
              <div className="flex flex-col items-start gap-6">
                <h2 className="text-3xl leading-[38px] sm:text-4xl sm:leading-[46px] lg:text-[60px] lg:leading-[72px]">
                  Beyond textbooks into tomorrow
                </h2>
                <p className="text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl">
                  Every lesson builds more than test scores. NGA weaves AI
                  literacy and investing concepts into core subjects, preparing
                  students for a world that demands both analytical thinking and
                  financial awareness.
                </p>
              </div>
            </header>

            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-wrap gap-6 w-full">
                {features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <article
                      key={feature.title}
                      className="flex flex-col items-start gap-4 flex-1 min-w-[220px]"
                    >
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      <h3 className="text-xl leading-7 sm:text-2xl sm:leading-8 lg:text-[26px] lg:leading-[31px]">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-7 sm:text-lg sm:leading-[28.8px]">
                        {feature.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <nav
              className="inline-flex items-center gap-6"
              aria-label="Academic subjects actions"
            >
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white text-sm font-medium text-white hover:bg-white/10 transition"
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
            </nav>
          </div>

          <img
            className="flex-1 min-w-[280px] aspect-[0.94] object-cover rounded-[24px] w-full"
            alt="Student using laptop in a modern learning environment"
            src="/images/vip_images/beyond_textbooks.png"
          />
        </div>
      </div>
    </section>
  );
};
