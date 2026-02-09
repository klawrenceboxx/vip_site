"use client";

import { useState } from "react";
import { Close } from "../icons/Close";
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

  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="section-padding flex flex-col items-center gap-20 w-full bg-[#241D1C]">
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
              className="flex flex-col items-start w-full bg-[#241D1C] rounded-[16px] border-2 border-white/20"
            >
              <button
                className="flex items-center gap-6 px-6 py-5 w-full text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndexes.includes(index)}
                aria-controls={`faq-answer-${index}`}
                type="button"
              >
                <h3 className="flex-1 text-lg font-semibold">{faq.question}</h3>
                <Close className="w-6 h-6" />
              </button>
              {openIndexes.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="flex items-start gap-4 pb-6 px-6 w-full"
                >
                  <p className="flex-1 text-lg leading-[28.8px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="flex flex-col max-w-[560px] items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-[40px] leading-[48px] text-center">
              Still have questions?
            </h3>
            <p className="text-xl leading-8 text-center">
              Reach out directly and we&#39;ll answer anything else.
            </p>
          </div>
          <div className="inline-flex items-center gap-6">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white">
              <span className="text-sm font-medium text-white">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
