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
import { JSX, useState } from "react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
];

export const HomeDesktop = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="top" className="flex flex-col bg-[#0C0403] text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0C0403]/95 backdrop-blur">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-16">
          <div className="flex h-[112px] items-center justify-between">
            {/* Logo (left) */}
            <a href="#top" className="w-[156px] flex items-center">
              <img
                className="h-auto block"
                alt="VIP NextGen Tutoring emblem"
                src="/images/vip_images/vip_logo.png"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
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

            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2 rounded-md border-2 border-white text-white text-sm font-medium hover:bg-white/10 transition"
              >
                Contact
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center px-5 py-2 rounded-md border-2 border-white text-white text-sm font-medium hover:bg-white/10 transition"
              >
                Book
              </a>
            </div>

            {/* Mobile hamburger (right) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/40 px-3 py-2 text-sm text-white/80 hover:text-white transition"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-200 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile drawer */}
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
              className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-white/40 text-sm hover:bg-white/10 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-white/40 text-sm hover:bg-white/10 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Book
            </a>
          </div>
        </div>
      </aside>

      {/* Page Sections */}
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
