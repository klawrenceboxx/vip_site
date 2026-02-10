import { JSX } from "react";

const calendlyLink = "https://calendly.com/vipul";

export const ContactFormSection = (): JSX.Element => {
  return (
    <section
      id="schedule"
      className="section-padding flex flex-col items-center gap-12 sm:gap-16 w-full bg-[#0C0403]"
    >
      <div className="flex flex-col max-w-[1280px] items-center gap-10 sm:gap-12 w-full">
        <header className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-[768px]">
          <h2 className="text-3xl leading-[38px] text-center sm:text-4xl sm:leading-[46px] lg:text-[60px] lg:leading-[72px]">
            Schedule time with Vipul
          </h2>

          <p className="text-base leading-7 text-center text-white/80 sm:text-lg sm:leading-8 lg:text-xl">
            Choose a time that works best and book your session directly on
            Calendly.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6 w-full">
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border-2 border-white text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Open Calendly
          </a>

          <div className="w-full max-w-[960px] border-2 border-white/20 rounded-[20px] overflow-hidden">
            <iframe
              title="Calendly scheduling link for VIP NextGen Tutoring"
              src={`${calendlyLink}?hide_landing_page_details=1&hide_gdpr_banner=1`}
              className="w-full h-[520px] sm:h-[640px] lg:h-[720px] bg-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
