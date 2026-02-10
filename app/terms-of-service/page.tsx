export default function TermsOfServicePage() {
  return (
    <main className="section-padding flex flex-col items-center w-full bg-[#0C0403] text-white">
      <div className="flex flex-col w-full max-w-[880px] gap-6">
        <h1 className="text-[60px] leading-[72px]">Terms of Service</h1>
        <p className="text-lg leading-8 text-white/80">
          By using VIP NextGen Tutoring services, you agree to the terms
          outlined below. Please review them carefully.
        </p>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Scheduling</h2>
          <p className="text-lg leading-8 text-white/80">
            Sessions are booked through our scheduling tools. We ask for at
            least 24 hours notice for rescheduling or cancellations.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Payments</h2>
          <p className="text-lg leading-8 text-white/80">
            Payment terms are agreed upon prior to the first session. Late or
            missed payments may result in paused services.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Questions</h2>
          <p className="text-lg leading-8 text-white/80">
            Reach out to info@vipnextgentutoring.com for any questions about
            these terms.
          </p>
        </section>
      </div>
    </main>
  );
}
