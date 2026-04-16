import { montserrat } from "@/app/fonts";
import styles from "./Navbar.module.css";

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
          <span
            className={`font-boldonse block text-[1.40rem] tracking-[0.24em] text-white sm:text-[1.70rem] pt-2`}
          >
            SAUER
          </span>
          <span className="font-alata mt-2 block text-[0.62rem] tracking-[0.34em] text-white/55">
            tatto artist
          </span>
        </a>

        <nav className="font-alata hidden items-center justify-center gap-8 text-[0.72rem] uppercase tracking-[0.22em] lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLinkDesktop}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className={`${montserrat.className} cta-pulse-glow group relative inline-flex min-h-12 min-w-[11.5rem] items-center justify-center overflow-hidden border border-[#EF0020] bg-[linear-gradient(180deg,rgba(116,0,16,0.98)_0%,rgba(44,2,6,0.98)_100%)] px-7 text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#fff4f4] [text-shadow:0_0_1px_rgba(255,244,244,0.85),0_0_14px_rgba(239,0,32,0.22)] transition duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_12%,rgba(255,255,255,0.18)_34%,transparent_56%)] before:translate-x-[-135%] before:transition-transform before:duration-700 hover:-translate-y-0.5 hover:border-[#ff2946] hover:text-white hover:shadow-[0_0_0_1px_rgba(239,0,32,0.42),0_0_22px_rgba(239,0,32,0.62),0_0_42px_rgba(239,0,32,0.34),inset_0_0_18px_rgba(239,0,32,0.16)] hover:before:translate-x-[135%] sm:min-w-[12.5rem] sm:px-8 lg:min-w-[13.5rem] lg:px-9`}
        >
          <span className="relative">AGENDE JÁ</span>
        </a>
      </div>

      <div className="font-alata relative mt-4 flex items-center gap-5 overflow-x-auto pb-1 text-[0.66rem] uppercase tracking-[0.24em] lg:hidden">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`shrink-0 whitespace-nowrap ${styles.navLinkMobile}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
