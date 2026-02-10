export default function PrivacyPolicyPage() {
  return (
    <main className="section-padding flex flex-col items-center w-full bg-[#0C0403] text-white">
      <div className="flex flex-col w-full max-w-[880px] gap-6">
        <h1 className="text-[60px] leading-[72px]">Privacy Policy</h1>
        <p className="text-lg leading-8 text-white/80">
          VIP NextGen Tutoring respects your privacy. This page outlines how we
          collect, use, and protect information you share with us.
        </p>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Information we collect</h2>
          <p className="text-lg leading-8 text-white/80">
            We collect the details you submit through our forms, such as your
            name, email address, and tutoring preferences. We also collect basic
            analytics data to understand how visitors use our site.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">How we use information</h2>
          <p className="text-lg leading-8 text-white/80">
            Information is used to schedule sessions, respond to inquiries, and
            improve the learning experience. We do not sell your data.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Contact</h2>
          <p className="text-lg leading-8 text-white/80">
            If you have questions about this policy, email us at
            info@vipnextgentutoring.com.
          </p>
        </section>
      </div>
    </main>
  );
}
