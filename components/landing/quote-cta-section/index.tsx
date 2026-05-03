import { defaultWhatsAppHref } from "../whatsapp";

export function QuoteCtaSection() {
  return (
    <section className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="relative mx-auto max-w-5xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 bg-[#EF0020]/28 blur-[34px] sm:-inset-5 lg:-inset-6"
        />

        <div className="relative overflow-hidden border border-[#EF0020]/35 bg-[#040404] px-6 py-8 shadow-[0_0_36px_rgba(239,0,32,0.1)] sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute left-0 top-0 h-2 w-36 bg-[#EF0020] shadow-[0_0_26px_rgba(239,0,32,0.9)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(239,0,32,0.1),transparent_26%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-kicker text-[#ff8aa7]">ORÇAMENTO</p>
              <h2 className="font-display mt-4 max-w-3xl text-4xl leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Tem uma ideia forte?
                <br />
                Vamos transformar em projeto.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
                Envie sua referência, explique a proposta e receba um contato
                direto para alinhar conceito, tamanho, posicionamento e valores.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href={defaultWhatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="brutal-button brutal-button-primary min-w-[15rem] shadow-[0_0_30px_rgba(255,0,60,0.2)]"
              >
                FAZER ORÇAMENTO
              </a>
              <a
                href="#contato"
                className="brutal-button brutal-button-secondary"
              >
                PREENCHER BRIEFING
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
