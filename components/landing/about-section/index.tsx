import Image from "next/image";

export function AboutSection() {
  return (
    <section className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border border-white/10 bg-[#040404]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,60,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]" />
          <div className="absolute left-0 top-0 h-px w-28 bg-[#ff003c]/75 sm:w-40" />
          <div className="absolute bottom-0 right-0 h-px w-24 bg-white/10 sm:w-32" />

          <div className="relative grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:p-10 xl:p-12">
            <div className="relative">
              <div className="absolute -left-3 top-8 bottom-8 hidden w-px bg-[#ff003c]/35 lg:block" />
              <div className="relative overflow-hidden border border-white/12 bg-black">
                <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_44%,rgba(0,0,0,0.65)_100%)]" />
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_36%)] mix-blend-screen" />
                <Image
                  src="/fred.jpeg"
                  alt="Retrato do tatuador Fred Sauer"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover object-center"
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 44vw, (min-width: 640px) 80vw, 100vw"
                  priority={false}
                />
              </div>

              <div className="mt-4 grid gap-px bg-white/10 sm:grid-cols-[minmax(0,1fr)_auto]">
                <div className="bg-black px-4 py-4 sm:px-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
                    Rio de Janeiro, RJ
                  </p>
                  <p className="mt-2 font-display text-2xl leading-none tracking-[-0.04em] text-white sm:text-3xl">
                    Fred Sauer
                  </p>
                </div>
                <div className="bg-black px-4 py-4 sm:px-5">
                  <p className="font-display text-3xl leading-none text-[#ff003c]">
                    100+
                  </p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                    projetos concluídos
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full">
                <p className="section-kicker">ARTISTA</p>

                <h2 className="font-display mt-4 max-w-3xl text-4xl leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Fred Sauer traduz identidade em arte permanente.
                </h2>

                <div className="mt-8 space-y-5">
                  <p className="max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                    Tatuador carioca com linguagem autoral, Fred constrói cada
                    projeto a partir da história, da intenção e da presença de
                    quem vai carregar aquela peça. O resultado nasce do encontro
                    entre técnica, composição e leitura real do corpo.
                  </p>

                  <p className="max-w-2xl text-sm leading-7 text-white/52 sm:text-base">
                    Com influências do realismo e recursos como whip shading e
                    free hand, seu trabalho busca profundidade visual, contraste
                    forte e uma assinatura que permanece sólida do conceito à
                    cicatrização.
                  </p>
                </div>

                <div className="mt-8 grid gap-px bg-white/10 sm:max-w-2xl sm:grid-cols-2">
                  <div className="bg-black px-5 py-5 sm:px-6">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/36">
                      abordagem
                    </p>
                    <p className="mt-3 font-display text-2xl leading-none tracking-[-0.04em]">
                      Projetos pensados para durar visualmente.
                    </p>
                  </div>
                  <div className="bg-black px-5 py-5 sm:px-6">
                    <p className="text-sm leading-6 text-white/56">
                      Cada tatuagem nasce para ter leitura forte, presença
                      estética e conexão real com a pessoa retratada nela.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-[0.72rem] uppercase tracking-[0.34em] text-white/34">
                  Algumas histórias precisam ser eternas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
