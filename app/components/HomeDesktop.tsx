import { AcademicSubjectsSection } from "./sections/AcademicSubjectsSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LearningFeaturesSection } from "./sections/LearningFeaturesSection";
import { LearningOverviewSection } from "./sections/LearningOverviewSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TutorIntroductionSection } from "./sections/TutorIntroductionSection";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
];

export const HomeDesktop = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start bg-[#0C0403] text-white">
      <div className="flex flex-col items-center self-stretch w-full bg-[#4C3F00]">
        <header className="flex h-[72px] items-center justify-around px-16 w-full">
          <div className="flex items-center justify-between flex-1">
            <div className="inline-flex items-center gap-6">
              <div className="relative w-[84px] h-9">
                <div className="relative w-[83.33%] h-full left-[7.94%]">
                  <img
                    className="absolute w-[26.87%] h-[44.29%] top-[30.21%] left-[72.59%]"
                    alt="VIP NextGen Tutoring emblem"
                    src="/images/logo/vector.svg"
                  />
                  <img
                    className="absolute w-[27.77%] h-[68.55%] top-[31.45%] left-[49.04%]"
                    alt=""
                    src="/images/logo/image.svg"
                  />
                  <img
                    className="absolute w-[26.87%] h-[44.29%] top-[30.21%] left-[26.51%]"
                    alt=""
                    src="/images/logo/vector-2.svg"
                  />
                  <img
                    className="absolute w-[30.85%] h-[44.96%] top-[28.45%] left-0"
                    alt=""
                    src="/images/logo/vector-3.svg"
                  />
                  <img
                    className="absolute w-[21.61%] h-[25.81%] top-0 left-0"
                    alt=""
                    src="/images/logo/vector-4.svg"
                  />
                </div>
              </div>
              <nav className="inline-flex items-center gap-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg leading-[28.8px] text-white hover:text-[#FFD400]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="inline-flex items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md border-2 border-white">
                <span className="text-white text-sm font-medium">Contact</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#FFD400] rounded-md shadow-[0px_1px_2px_rgba(12,4,3,0.1),inset_0px_-2px_1px_rgba(0,0,0,0.2)]">
                <span className="text-[#0C0403] text-sm font-medium">Book</span>
              </button>
            </div>
          </div>
        </header>
      </div>
      <HeroSection />
      <LearningOverviewSection />
      <AcademicSubjectsSection />
      <LearningFeaturesSection />
      <TutorIntroductionSection />
      <TestimonialsSection />
      <ContactFormSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
