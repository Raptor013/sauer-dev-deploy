export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-frame px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="relative overflow-hidden border border-[#ff003c]/40 bg-[#040404] px-6 py-10 shadow-[0_0_45px_rgba(255,0,60,0.12)] sm:px-8 sm:py-12 lg:px-12">
        <div className="absolute right-0 top-0 h-2 w-32 bg-[#ff003c] shadow-[0_0_24px_rgba(255,0,60,0.95)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,60,0.16),transparent_26%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* <p className="section-kicker text-[#ff8aa7]">CTA FINAL</p> */}
            <h2 className="font-display mt-3 max-w-3xl text-4xl leading-none tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Sua próxima tattoo começa aqui.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <a
              href="https://api.whatsapp.com/send/?phone=5521971795647&text=Oi%2C+vim+pelo+site+e+gostaria+de+realizar+um+or%C3%A7amento&type=phone_number&app_absent=0"
              target="_blank"
              className="brutal-button brutal-button-primary"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/sauer.tattoos"
              target="_blank"
              className="brutal-button brutal-button-secondary"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
