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
      className="section-padding flex flex-col items-center gap-20 w-full bg-[#4C3F00]"
    >
      <div className="flex flex-col max-w-[1280px] items-start gap-20 w-full">
        <div className="flex flex-wrap items-center gap-20 w-full">
          <div className="flex flex-col items-start gap-8 flex-1 min-w-[320px]">
            <header className="flex flex-col items-start gap-4 w-full">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Future
              </p>
              <div className="flex flex-col items-start gap-6">
                <h2 className="text-[60px] leading-[72px]">
                  Beyond textbooks into tomorrow
                </h2>
                <p className="text-xl leading-8">
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
                      <IconComponent className="w-12 h-12 text-white" />
                      <h3 className="text-[26px] leading-[31px]">
                        {feature.title}
                      </h3>
                      <p className="text-lg leading-[28.8px]">
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
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white"
              >
                <span className="text-sm font-medium text-white">
                  Learn more
                </span>
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md"
              >
                <span className="text-sm font-medium text-white">Explore</span>
                <ChevronRight className="w-6 h-6" />
              </button>
            </nav>
          </div>

          <img
            className="flex-1 min-w-[320px] aspect-[0.94] object-cover rounded-[24px]"
            alt="Student using laptop in a modern learning environment"
            src="/images/vip_images/beyond_textbooks.png"
          />
        </div>
      </div>
    </section>
  );
};
