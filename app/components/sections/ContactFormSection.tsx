"use client";
import { JSX } from "react";

import { FormEvent, useState } from "react";

export const ContactFormSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      setEmail("");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding flex flex-col items-center gap-20 w-full bg-[#4C3F00]"
    >
      <div className="flex flex-col max-w-[1280px] items-center gap-20 w-full">
        <div className="flex flex-col max-w-[768px] items-center gap-8 w-full">
          <header className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-[60px] leading-[72px] text-center">
              Get in touch with us
            </h2>

            <p className="text-xl leading-8 text-center">
              Have questions about sessions or want to discuss your
              student&#39;s needs?
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-[513px] items-center gap-4"
          >
            <div className="flex flex-wrap items-start gap-4 w-full">
              <label htmlFor="email-input" className="sr-only">
                Your email address
              </label>
              <input
                id="email-input"
                className="px-3 py-2 flex-1 rounded-md border-2 border-white bg-transparent text-lg text-white placeholder:text-white/60"
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                name="email"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FFD400] rounded-md shadow-[0px_1px_2px_rgba(12,4,3,0.1),inset_0px_-2px_1px_rgba(0,0,0,0.2)]"
              >
                <span className="text-sm font-medium text-[#0C0403]">Send</span>
              </button>
            </div>

            <p className="text-xs text-center">
              By submitting this form you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
