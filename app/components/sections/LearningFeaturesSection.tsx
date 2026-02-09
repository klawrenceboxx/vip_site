import { Explore } from "../icons/Explore";
import { IconComponentNode } from "../icons/IconComponentNode";

export const LearningFeaturesSection = (): JSX.Element => {
  return (
    <section className="overflow-hidden flex flex-col items-center w-full bg-[#FFFFFF] text-[#0C0403]">
      <div className="flex flex-wrap items-start w-full">
        <img
          className="w-full max-w-[710px] h-[543px] object-cover"
          alt="Vipul, founder of VIP NextGen Tutoring"
          src="/images/placeholders/tutor-portrait.svg"
        />

        <div className="flex flex-col h-[543px] items-end justify-center gap-8 px-16 flex-1">
          <div className="flex flex-col max-w-[624px] items-start gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <Explore className="w-20 h-20 text-[#0C0403]" />
              <div className="flex flex-col items-start gap-6">
                <h2 className="text-[60px] leading-[72px]">Meet Your Tutor</h2>

                <p className="text-[40px] leading-[48px]">
                  Hi, I&apos;m Vipul — founder of VIP NextGen Tutoring.
                </p>

                <p className="text-lg leading-[27px]">
                  I work with students across Math, English, Science, and French
                  in both one-on-one and small group settings. My approach goes
                  beyond memorization, helping students understand concepts
                  deeply and apply them with confidence.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#0C0403]"
              >
                <span className="text-sm font-medium">Explore</span>
              </button>

              <a
                href="#view"
                className="inline-flex items-center justify-center gap-2"
              >
                <span className="text-sm font-medium">View</span>
                <IconComponentNode className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
