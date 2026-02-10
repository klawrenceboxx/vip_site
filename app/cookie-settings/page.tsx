export default function CookieSettingsPage() {
  return (
    <main className="section-padding flex flex-col items-center w-full bg-[#0C0403] text-white">
      <div className="flex flex-col w-full max-w-[880px] gap-6">
        <h1 className="text-[60px] leading-[72px]">Cookie Settings</h1>
        <p className="text-lg leading-8 text-white/80">
          We use cookies to improve site performance and understand how visitors
          engage with VIP NextGen Tutoring. You can adjust your preferences
          below.
        </p>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">
            Essential cookies
          </h2>
          <p className="text-lg leading-8 text-white/80">
            Required for the site to function. These cookies are always on.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Analytics cookies</h2>
          <p className="text-lg leading-8 text-white/80">
            Help us understand how visitors use our site so we can improve the
            experience.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-[32px] leading-[38px]">Need help?</h2>
          <p className="text-lg leading-8 text-white/80">
            Email info@vipnextgentutoring.com with any questions about cookie
            preferences.
          </p>
        </section>
      </div>
    </main>
  );
}
