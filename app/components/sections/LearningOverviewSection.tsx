import { ChevronRight } from "../icons/ChevronRight";
import { JSX } from "react";

interface SubjectCard {
  tagline: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const LearningOverviewSection = (): JSX.Element => {
  const subjects: SubjectCard[] = [
    {
      tagline: "Math",
      title: "Numbers, logic, and practical applications",
      description: "Explore deeper into mathematical thinking",
      image: "/images/vip_images/subject_study_1.png",
      imageAlt: "Math subject illustration",
    },
    {
      tagline: "English",
      title: "Writing, reading, and clear communication skills",
      description: "Strengthen your command of language",
      image: "/images/vip_images/subject_study_2.png",
      imageAlt: "English subject illustration",
    },
    {
      tagline: "Science",
      title: "Understand the natural world through experimentation",
      description: "Discover scientific principles and methods",
      image: "/images/vip_images/subject_study_3.png",
      imageAlt: "Science subject illustration",
    },
    {
      tagline: "French",
      title: "Language fluency and cultural understanding",
      description: "Learn a new language with confidence",
      image: "/images/vip_images/subject_study_4.png",
      imageAlt: "French subject illustration",
    },
  ];

  return (
    <section
      id="subjects"
      className="section-padding flex flex-col items-center gap-20 w-full bg-[#0C0403]"
    >
      <div className="flex flex-col max-w-[1280px] items-center gap-20 w-full">
        <header className="flex flex-col max-w-[768px] items-center gap-4 w-full">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Subjects
          </p>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-[60px] leading-[72px] text-center">
              Master core academic subjects
            </h2>

            <p className="text-xl leading-8 text-center">
              Build strong foundations in mathematics with real-world problem
              solving
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex flex-wrap items-stretch gap-8 w-full">
            {subjects.map((subject) => (
              <article
                key={subject.tagline}
                className="group flex flex-col items-start flex-1 min-w-[240px] h-full bg-[#0C0403] rounded-[16px] overflow-hidden border-2 border-white/20 transition hover:-translate-y-1 hover:border-white hover:shadow-[0px_18px_45px_rgba(255,255,255,0.08)]"
              >
                <div className="flex flex-col items-start justify-center gap-6 p-6 w-full flex-1">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {subject.tagline}
                    </span>
                    <div className="flex flex-col items-start gap-2 w-full">
                      <h3 className="text-[32px] leading-[38px]">
                        {subject.title}
                      </h3>
                      <p className="text-lg leading-[28.8px]">
                        {subject.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center gap-2 rounded-md"
                      aria-label={`Explore ${subject.tagline}`}
                    >
                      <span className="text-sm font-medium text-white">
                        Explore
                      </span>
                      <ChevronRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <img
                  className="w-full h-[171px] object-cover"
                  alt={subject.imageAlt}
                  src={subject.image}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
