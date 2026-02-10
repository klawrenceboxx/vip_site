import { AcademicSubjectsSection } from "./sections/AcademicSubjectsSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LearningFeaturesSection } from "./sections/LearningFeaturesSection";
import { LearningOverviewSection } from "./sections/LearningOverviewSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TutorIntroductionSection } from "./sections/TutorIntroductionSection";
import { JSX } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
];

export const HomeDesktop = (): JSX.Element => {
  return (
    <div
      id="top"
      className="flex flex-col items-start bg-[#0C0403] text-white"
    >
      <div className="sticky top-0 z-50 flex flex-col items-center self-stretch w-full bg-[#0C0403]/95 backdrop-blur">
        <header className="flex h-[72px] items-center justify-around px-16 w-full max-w-[1440px]">
          <div className="flex items-center justify-between flex-1">
            <div className="inline-flex items-center gap-6">
              <a href="#top" className="relative w-[84px] h-9">
                <img
                  className="h-full w-auto"
                  alt="VIP NextGen Tutoring emblem"
                  src="/images/vip_images/vip_logo.png"
                />
              </a>
              <nav className="inline-flex items-center gap-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg leading-[28.8px] text-white/80 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="inline-flex items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md border-2 border-white text-white text-sm font-medium hover:bg-white/10 transition"
              >
                Contact
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#0C0403] rounded-md border-2 border-white text-white text-sm font-medium hover:bg-white/10 transition"
              >
                Book
              </a>
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
