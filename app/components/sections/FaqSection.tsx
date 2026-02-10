"use client";

import { useState } from "react";
import { ChevronRight } from "../icons/ChevronRight";
import { JSX } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection = (): JSX.Element => {
  const faqData: FaqItem[] = [
    {
      question: "How long are sessions?",
      answer:
        "Sessions are typically 60 minutes, though we can adjust based on your student's needs and schedule. Most students benefit from consistent weekly sessions to build momentum.",
    },
    {
      question: "What subjects do you teach?",
      answer:
        "We specialize in Math, English, Science, and French. Every subject is taught with connections to AI literacy and investing concepts, giving students a modern edge.",
    },
    {
      question: "Is this just test prep?",
      answer:
        "No. While we help students excel academically, the real focus is building critical thinking and financial awareness. Tests improve naturally when students understand the why behind concepts.",
    },
    {
      question: "How do you customize lessons?",
      answer:
        "Every student is different. We start with an assessment to understand learning style, goals, and gaps. From there, lessons are tailored to match pace and interests.",
    },
    {
      question: "Can we do online sessions?",
      answer:
        "Yes. We offer both in-person and online tutoring. Online sessions work just as well and give you flexibility with scheduling and location.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      setEmail("");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section
      id="faq"
      className="section-padding flex flex-col items-center gap-20 w-full bg-[#0C0403]"
    >
      <div className="flex flex-col max-w-[1280px] items-center gap-20 w-full">
        <header className="max-w-[768px] items-center gap-6 flex flex-col w-full">
          <h2 className="text-[60px] leading-[72px] text-center">FAQ</h2>
          <p className="text-xl leading-8 text-center">
            Common questions about how VIP NextGen Tutoring works and what to
            expect.
          </p>
        </header>

        <div className="flex flex-col max-w-[768px] items-start gap-4 w-full">
          {faqData.map((faq, index) => (
            <article
              key={faq.question}
              className="flex flex-col items-start w-full bg-[#0C0403] rounded-[16px] border-2 border-white/20"
            >
              <button
                className="flex items-center gap-6 px-6 py-5 w-full text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndexes.includes(index)}
                aria-controls={`faq-answer-${index}`}
                type="button"
              >
                <h3 className="flex-1 text-lg font-semibold">{faq.question}</h3>
                <ChevronRight
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndexes.includes(index) ? "rotate-90" : "rotate-0"
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`flex items-start gap-4 px-6 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndexes.includes(index)
                    ? "max-h-80 pb-6 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="flex-1 text-lg leading-[28.8px]">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          id="contact"
          className="flex flex-col max-w-[560px] items-center gap-6 w-full"
        >
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-[40px] leading-[48px] text-center">
              Stay connected
            </h3>
            <p className="text-xl leading-8 text-center">
              Leave your email and we&#39;ll reach out with next steps.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-[480px] items-center gap-4"
          >
            <label htmlFor="faq-email" className="sr-only">
              Your email address
            </label>
            <div className="flex flex-wrap items-start gap-4 w-full">
              <input
                id="faq-email"
                className="px-3 py-2 flex-1 rounded-md border-2 border-white bg-transparent text-lg text-white placeholder:text-white/60"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                name="email"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Notify me
              </button>
            </div>
            <p className="text-xs text-center text-white/80">
              We&#39;ll only use your email to follow up on tutoring.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
