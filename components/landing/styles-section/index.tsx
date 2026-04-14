import { styles } from "../data";

export function StylesSection() {
  return (
    <section className="section-frame px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">ESTILOS</p>
          <h2 className="font-display mt-3 text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
            Linguagens que carregam assinatura.
          </h2>
        </div>
      </div>

      <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
        {styles.map((style, index) => (
          <article
            key={style.title}
            className="group bg-black p-6 transition-colors duration-300 hover:bg-[#090909]"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-5xl text-white/18 transition-colors duration-300 group-hover:text-[#ff003c]">
                0{index + 1}
              </span>
              <span className="mt-2 h-3 w-12 bg-white/12 transition-all duration-300 group-hover:w-20 group-hover:bg-[#ff003c]" />
            </div>
            <h3 className="mt-14 font-display text-3xl leading-none tracking-[-0.04em]">
              {style.title}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/54">
              {style.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
