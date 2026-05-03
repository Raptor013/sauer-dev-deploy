import { tattooCareSections } from "../data";

export function TattooCareSection() {
  return (
    <section className="section-frame overflow-hidden px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border border-[#ef0020]/10 bg-[#040404]">
          <div className="absolute left-0 top-0 h-2 w-36 bg-[#EF0020] shadow-[0_0_26px_rgba(239,0,32,0.9)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(239,0,32,0.1),transparent_26%)]" />

          <div className="relative px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
              <div className="flex items-start">
                <div className="w-full">
                  <p className="section-kicker text-[#ff8797]">CUIDADOS</p>
                  <h2 className="font-display mt-4 max-w-xl text-[2.2rem] leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    Antes da agulha e depois da sessão.
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/58 sm:text-base">
                    O resultado final depende tanto da execução quanto do
                    preparo e da cicatrização. Estas orientações ajudam a chegar
                    melhor para a sessão e preservar a tattoo com mais
                    contraste, textura e definição.
                  </p>

                  <div className="mt-8 grid gap-px bg-white/10 sm:max-w-xl sm:grid-cols-2">
                    <div className="bg-black px-4 py-5 sm:px-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/36">
                        foco
                      </p>
                      <p className="mt-3 font-display text-2xl leading-none tracking-[-0.04em] text-white">
                        Pele preparada.
                      </p>
                    </div>
                    <div className="bg-black px-4 py-5 sm:px-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/36">
                        objetivo
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/56">
                        Melhor sessão, recuperação mais limpa e resultado mais
                        fiel ao projeto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-5 xl:grid-cols-2">
                {tattooCareSections.map((section) => (
                  <article
                    key={section.id}
                    className="relative overflow-hidden border border-[#ef0020]/10 bg-black"
                  >
                    <div className={`absolute inset-0 ${section.accent}`} />
                    <div className="absolute inset-x-0 top-0 h-px bg-[#ef0020]/10" />

                    <div className="relative flex h-full flex-col px-4 py-5 sm:px-5 sm:py-6">
                      <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#ff8797]">
                        {section.kicker}
                      </p>
                      <h3 className="font-display mt-3 max-w-[14rem] text-[1.9rem] leading-none tracking-[-0.05em] text-white sm:max-w-none sm:text-[2.2rem]">
                        {section.title}
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-7 text-white/56">
                        {section.description}
                      </p>

                      <div className="mt-6 grid gap-px bg-[#ef0020]/10">
                        {section.items.map((item, index) => (
                          <div
                            key={item}
                            className="grid grid-cols-[auto_1fr] gap-3 bg-black px-4 py-4 sm:px-5"
                          >
                            <span className="font-display text-lg leading-none text-[#EF0020]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="text-sm leading-6 text-white/72">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
