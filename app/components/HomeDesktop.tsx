"use client";

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
import { useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
];

export const HomeDesktop = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="top" className="flex flex-col items-start bg-[#0C0403] text-white">
      <div className="sticky top-0 z-50 flex flex-col items-center self-stretch w-full bg-[#0C0403]/95 backdrop-blur">
        <header className="flex flex-col gap-4 px-4 py-4 w-full max-w-[1440px] md:flex-row md:h-[112px] md:items-center md:justify-around md:px-8">
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between md:flex-1">
            <div className="inline-flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
              <a href="#top" className="relative w-[140px] sm:w-[156px]">
                <img
                  className="h-auto"
                  alt="VIP NextGen Tutoring emblem"
                  src="/images/vip_images/vip_logo.png"
                />
              </a>
              <nav className="hidden md:inline-flex md:flex-wrap md:items-center md:gap-8 md:text-lg">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="leading-[24px] text-white/80 hover:text-white transition md:leading-[28.8px]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden md:inline-flex md:flex-wrap md:items-center md:justify-center md:gap-4">
              <a
                href="#contact"
                className="text-sm font-medium text-white/80 hover:text-white transition"
              >
                Contact
              </a>
              <a
                href="#schedule"
                className="text-sm font-medium text-white/80 hover:text-white transition"
              >
                Book
              </a>
            </div>
            <div className="flex items-center justify-between w-full md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-3 py-2 text-sm text-white/80 transition hover:text-white"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                Menu
              </button>
            </div>
          </div>
        </header>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[280px] bg-[#0C0403] shadow-lg transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Menu
          </span>
          <button
            type="button"
            className="text-sm text-white/70 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-white/80 hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href="#contact"
              className="text-base font-medium text-white/80 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#schedule"
              className="text-base font-medium text-white/80 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Book
            </a>
          </div>
        </div>
      </aside>
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
