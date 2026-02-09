"use client";

import { useState } from "react";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";
import { LinkedIn } from "../icons/LinkedIn";
import { X } from "../icons/X";
import { Youtube } from "../icons/Youtube";

const servicesLinks = [
  { id: 1, label: "Math tutoring", href: "#math-tutoring" },
  { id: 2, label: "English tutoring", href: "#english-tutoring" },
  { id: 3, label: "Science tutoring", href: "#science-tutoring" },
  { id: 4, label: "French tutoring", href: "#french-tutoring" },
  { id: 5, label: "Future skills", href: "#future-skills" },
];

const companyLinks = [
  { id: 1, label: "About us", href: "#about-us" },
  { id: 2, label: "Our approach", href: "#our-approach" },
  { id: 3, label: "Student results", href: "#student-results" },
  { id: 4, label: "Book a session", href: "#book-session" },
  { id: 5, label: "Contact us", href: "#contact-us" },
];

const socialLinks = [
  { id: 1, label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { id: 2, label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { id: 3, label: "X", icon: X, href: "https://x.com" },
  { id: 4, label: "LinkedIn", icon: LinkedIn, href: "https://linkedin.com" },
  { id: 5, label: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

const legalLinks = [
  { id: 1, label: "Privacy policy", href: "#privacy-policy" },
  { id: 2, label: "Terms of service", href: "#terms-of-service" },
  { id: 3, label: "Cookie settings", href: "#cookie-settings" },
];

export const FooterSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <footer className="section-padding flex flex-col items-center gap-20 w-full bg-[#4C3F00]">
      <div className="flex flex-col max-w-[1280px] items-start gap-20 w-full">
        <div className="flex flex-wrap items-start gap-16 w-full">
          <div className="flex flex-col w-full max-w-[500px] items-start gap-6">
            <div className="relative w-[84px] h-9" aria-label="VIP logo">
              <div className="relative w-[83.33%] h-full left-[7.94%]">
                <img
                  className="absolute w-[26.87%] h-[44.29%] top-[30.21%] left-[72.59%]"
                  alt=""
                  src="/images/logo/vector-5.svg"
                />
                <img
                  className="absolute w-[27.77%] h-[68.55%] top-[31.45%] left-[49.04%]"
                  alt=""
                  src="/images/logo/vector-6.svg"
                />
                <img
                  className="absolute w-[26.87%] h-[44.29%] top-[30.21%] left-[26.51%]"
                  alt=""
                  src="/images/logo/vector-7.svg"
                />
                <img
                  className="absolute w-[30.85%] h-[44.96%] top-[28.45%] left-0"
                  alt=""
                  src="/images/logo/vector-8.svg"
                />
                <img
                  className="absolute w-[21.61%] h-[25.81%] top-0 left-0"
                  alt=""
                  src="/images/logo/vector-9.svg"
                />
              </div>
            </div>

            <p className="text-lg leading-[28.8px]">
              Get insights on tutoring and future skills.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col items-start gap-3 w-full"
            >
              <div className="flex flex-wrap items-start gap-4 w-full">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  className="px-3 py-2 flex-1 rounded-md border-2 border-white bg-transparent text-lg text-white placeholder:text-white/60"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white"
                >
                  <span className="text-sm font-medium text-white">
                    Subscribe
                  </span>
                </button>
              </div>

              <p className="text-xs text-white/80">
                We respect your privacy and only send what matters.
              </p>
            </form>
          </div>

          <nav className="flex flex-wrap items-start gap-10 flex-1">
            <div className="flex flex-col items-start gap-4 min-w-[180px]">
              <h2 className="text-sm font-semibold">Services</h2>
              <ul className="flex flex-col items-start w-full">
                {servicesLinks.map((link) => (
                  <li key={link.id} className="py-2 w-full">
                    <a
                      href={link.href}
                      className="text-sm leading-[25.6px] hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 min-w-[180px]">
              <h2 className="text-sm font-semibold">Company</h2>
              <ul className="flex flex-col items-start w-full">
                {companyLinks.map((link) => (
                  <li key={link.id} className="py-2 w-full">
                    <a
                      href={link.href}
                      className="text-sm leading-[25.6px] hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 min-w-[180px]">
              <h2 className="text-sm font-semibold">Follow us</h2>
              <ul className="flex flex-col items-start w-full">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.id} className="flex items-center gap-3 py-2">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:underline"
                        aria-label={`Visit our ${link.label} page`}
                      >
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm leading-[25.6px]">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <img className="w-full h-0.5" alt="" src="/images/divider.svg" />

          <div className="flex flex-wrap justify-between items-start w-full gap-4">
            <p className="text-sm">
              © 2025 VIP NextGen Tutoring. All rights reserved.
            </p>
            <nav className="inline-flex items-start gap-6" aria-label="Legal">
              {legalLinks.map((link) => (
                <a key={link.id} href={link.href} className="text-sm underline">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
