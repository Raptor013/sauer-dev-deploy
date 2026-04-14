const address =
  "Avenida Presidente Vargas, 1146, Centro, Rio de Janeiro - RJ";

const mapsQuery = encodeURIComponent(address);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export function LocationSection() {
  return (
    <section className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border border-white/10 bg-[#040404]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,0,60,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%)]" />
          <div className="absolute left-0 top-0 h-2 w-24 bg-[#ff003c] shadow-[0_0_24px_rgba(255,0,60,0.8)] sm:w-32" />

          <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-10 xl:p-12">
            <div className="flex items-center">
              <div className="w-full">
                <p className="section-kicker text-[#ff8aa7]">LOCALIZAÇÃO</p>
                <h2 className="font-display mt-4 max-w-xl text-[2.5rem] leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  No coração do Centro do Rio.
                </h2>
                <p className="mt-5 max-w-[92%] text-sm leading-7 text-white/58 sm:max-w-lg sm:text-base">
                  Um espaço pensado para receber cada projeto com atenção,
                  clareza e foco total no processo. O estúdio fica em uma área
                  central, com acesso prático e referência fácil.
                </p>

                <div className="mt-8 grid gap-px bg-white/10 sm:max-w-xl">
                  <div className="bg-black px-5 py-5 sm:px-6">
                    <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/36">
                      endereço
                    </p>
                    <p className="mt-3 max-w-[14rem] text-balance font-display text-[1.75rem] leading-none tracking-[-0.04em] text-white sm:max-w-none sm:text-3xl">
                      Avenida Presidente Vargas, 1146
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/56">
                      Centro, Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>

                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex max-w-full items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-white sm:gap-4 sm:text-[0.72rem] sm:tracking-[0.32em]"
                >
                  <span className="break-words">abrir no google maps</span>
                  <span className="h-px w-14 bg-[#ff003c]/60 transition-all duration-300 hover:w-20" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden border border-white/12 bg-black shadow-[0_0_36px_rgba(255,0,60,0.08)]">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.32))]" />
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,0,60,0.1),transparent_26%)]" />
                <div className="relative aspect-[4/5] min-h-[20rem] sm:aspect-[16/10] lg:min-h-[28rem]">
                  <iframe
                    title="Mapa do estúdio em Avenida Presidente Vargas, 1146, Centro, Rio de Janeiro - RJ"
                    src={mapsEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-[0.72] invert"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-4 border border-white/10 bg-black/90 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="min-w-0">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/36">
                    referência
                  </p>
                  <p className="mt-2 break-words text-sm leading-6 text-white/56">
                    Avenida Presidente Vargas, 1146, Centro
                  </p>
                </div>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="brutal-button brutal-button-secondary w-full sm:w-auto sm:min-w-[11rem]"
                >
                  VER ROTA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
