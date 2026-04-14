const navigationItems = [
  { label: "portfólio", href: "#portfolio" },
  { label: "sobre", href: "#" },
  { label: "avaliações", href: "#avaliacoes" },
  { label: "contato", href: "#contato" },
] as const;

export const Navbar = () => {
  return (
    <nav className="relative overflow-hidden bg-[#050505] px-4 py-3 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-40 bg-[radial-gradient(circle_at_left_center,rgba(255,0,76,0.22),transparent_72%)]" />
        <div className="absolute inset-y-0 right-0 w-48 bg-[radial-gradient(circle_at_right_center,rgba(255,0,76,0.22),transparent_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,60,0.06)_0%,rgba(0,0,0,0)_16%,rgba(0,0,0,0)_84%,rgba(255,0,60,0.06)_100%)]" />
      </div>

      <div className="relative flex items-center justify-between gap-4">
        <a href="#" className="shrink-0 uppercase leading-none">
          <span className="font-display block text-[1.85rem] tracking-[0.24em] text-white sm:text-[2rem]">
            SAUER
          </span>
          <span className="mt-1 block text-[0.62rem] tracking-[0.34em] text-white/55">
            tatto artist
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-8 text-[0.72rem] uppercase tracking-[0.22em] text-white/65 lg:flex ">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#EF0020] transition-colors duration-300 "
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex min-h-11 items-center justify-center border border-[#EF0020] bg-[linear-gradient(180deg,rgba(60,0,10,0.82)_0%,rgba(25,2,6,0.96)_100%)] px-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#fff1f4] shadow-[0_0_10px_rgba(255,0,76,0.45),0_0_22px_rgba(255,0,76,0.28),inset_0_0_10px_rgba(255,120,150,0.12)] transition duration-300 hover:border-[#ff003c] hover:text-white hover:shadow-[0_0_14px_rgba(255,0,76,0.62),0_0_28px_rgba(255,0,76,0.38),inset_0_0_12px_rgba(255,120,150,0.18)] sm:px-5 lg:px-6"
        >
          AGENDE JÁ
        </a>
      </div>

      <div className="relative mt-4 flex items-center gap-5 overflow-x-auto pb-1 text-[0.66rem] uppercase tracking-[0.24em] text-white/55 lg:hidden">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="shrink-0 whitespace-nowrap transition-colors duration-300 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
