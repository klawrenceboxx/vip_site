import { ChevronRight } from "../icons/ChevronRight";

export const TutorIntroductionSection = (): JSX.Element => {
  return (
    <section className="section-padding flex flex-col items-center gap-20 w-full bg-[#241D1C]">
      <div className="flex flex-col max-w-[1280px] items-start gap-20 w-full">
        <div className="flex flex-wrap items-center gap-20 w-full">
          <div className="flex flex-col items-start gap-8 flex-1 min-w-[320px]">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="text-[60px] leading-[72px] text-white">
                  Self-Paced Learning Option
                </h2>

                <p className="text-xl leading-8 text-white">
                  Prefer self-paced learning?
                  <br /> Vipul has also created a structured Udemy course
                  covering foundational investing concepts for students and
                  beginners.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6">
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white"
                type="button"
              >
                <span className="text-sm font-medium text-white">
                  Learn more
                </span>
              </button>

              <a
                href="#explore"
                className="inline-flex items-center justify-center gap-2 rounded-md"
              >
                <span className="text-sm font-medium text-white">Explore</span>
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>

          <img
            className="w-full max-w-[403px] h-[430px] object-cover rounded-[24px]"
            alt="Udemy course preview showing structured learning content for investing fundamentals"
            src="/images/placeholders/udemy-course.svg"
          />
        </div>
      </div>
    </section>
  );
};
