import { whyChooseItems } from "../data";

function WhyChooseIcon({
  icon,
}: {
  icon: (typeof whyChooseItems)[number]["icon"];
}) {
  if (icon === "spark") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#EF0020] sm:h-7 sm:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 13.9 8.1 19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[#EF0020] sm:h-7 sm:w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 19 6v5.4c0 4.3-2.8 8.2-7 9.6-4.2-1.4-7-5.3-7-9.6V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.8" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#EF0020] sm:h-7 sm:w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 3" />
      <path d="M12 4v1.5" />
      <path d="M20 12h-1.5" />
      <path d="M12 20v-1.5" />
      <path d="M4 12h1.5" />
    </svg>
  );
}

export function WhyChooseSection() {
  return (
    <section className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="relative border border-[#EF0020]/10 bg-[#040404]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />
        <div className="absolute left-0 top-0 h-px w-24 bg-[#EF0020]/75 sm:w-36" />
        {/* <div className="absolute right-0 top-0 h-px w-14 bg-white/10 sm:w-24" /> */}

        <div className="relative p-5 sm:p-8 lg:p-10 xl:p-12">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="section-kicker">DIFERENCIAL</p>
              <h2 className="font-display mt-3 max-w-xl text-4xl leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Por que escolher o Sauer?
              </h2>
            </div>

            {/* <p className="max-w-2xl text-sm leading-7 text-white/58 sm:text-base sm:leading-7 lg:justify-self-end">
              Um processo pensado para transformar referência em tatuagem com
              assinatura, leitura forte e presença real na pele.
            </p> */}
          </div>

          <div className="mt-8 grid gap-px bg-white/10 lg:mt-10 lg:grid-cols-3">
            {whyChooseItems.map((item) => (
              <article
                key={item.title}
                className="group bg-black px-5 py-6 transition-colors duration-300 hover:bg-[#080808] sm:px-6 sm:py-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EF0020]/28 bg-[#EF0020]/8 transition-colors duration-300 group-hover:border-[#EF0020]/55 group-hover:bg-[#EF0020]/12 sm:h-14 sm:w-14">
                    <WhyChooseIcon icon={item.icon} />
                  </div>
                  <span className="h-px w-14 bg-white/14 transition-all duration-300 group-hover:w-20 group-hover:bg-[#EF0020]" />
                </div>

                <h3 className="font-display mt-8 max-w-xs text-3xl leading-none tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/56 sm:text-[0.95rem] sm:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
