import { ChevronRight } from "../icons/ChevronRight";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TestimonialsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "From helping my high school son with math and science to teaching him real-world skills like budgeting, investing, and career planning — he truly prepares students for life beyond the classroom.",
      name: "Nathalie B.",
      role: "Parent, high school student",
      avatar: "/images/avatars/avatar-1.svg",
    },
    {
      id: 2,
      quote:
        "The career coaching helped me land my dream job right after graduation.",
      name: "James T.",
      role: "Recent Graduate",
      avatar: "/images/avatars/avatar-2.svg",
    },
    {
      id: 3,
      quote:
        "The financial education course gave me the confidence to start investing.",
      name: "Emily R.",
      role: "Young Professional",
      avatar: "/images/avatars/avatar-3.svg",
    },
  ];

  return (
    <section
      id="results"
      className="section-padding flex flex-col items-center gap-20 w-full bg-[#0C0403]"
    >
      <div className="flex flex-col max-w-[1280px] items-start gap-20 w-full">
        <header className="max-w-[768px] items-start gap-6 flex flex-col w-full">
          <h2 className="text-[60px] leading-[72px]">Real results</h2>
          <p className="text-xl leading-8">Students and parents speak</p>
        </header>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex flex-wrap items-start gap-8 w-full">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex flex-col items-start gap-8 p-8 flex-1 min-w-[240px] bg-[#0C0403] rounded-[16px] border-2 border-white/20"
              >
                <div className="flex flex-col items-start gap-12 w-full">
                  <div className="flex flex-col items-start gap-6 w-full">
                    <blockquote className="text-xl leading-8">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    <div className="flex items-center gap-5 w-full">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        alt={`${testimonial.name} avatar`}
                        src={testimonial.avatar}
                      />

                      <div className="flex flex-col items-start flex-1">
                        <div className="text-sm font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-lg leading-[28.8px]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-md"
                    aria-label={`Read case study for ${testimonial.name}`}
                  >
                    <span className="text-lg leading-[28.8px]">
                      Read case study
                    </span>
                    <ChevronRight className="w-6 h-6" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
