"use client";

import { montserrat } from "@/app/fonts";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const navigationItems = [
  { label: "portfólio", href: "#portfolio" },
  { label: "sobre", href: "#sobre" },
  { label: "avaliações", href: "#avaliacoes" },
  { label: "contato", href: "#contato" },
] as const;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-20 overflow-hidden bg-[#050505]/92 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-40 bg-[radial-gradient(circle_at_left_center,rgba(255,0,76,0.22),transparent_72%)]" />
        <div className="absolute inset-y-0 right-0 w-48 bg-[radial-gradient(circle_at_right_center,rgba(255,0,76,0.22),transparent_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,60,0.06)_0%,rgba(0,0,0,0)_16%,rgba(0,0,0,0)_84%,rgba(255,0,60,0.06)_100%)]" />
      </div>

      <div className="relative hidden items-center justify-between gap-4 lg:flex">
        <a href="#" className="shrink-0 uppercase leading-none">
          <span
            className={`font-boldonse block pt-2 text-[1.40rem] tracking-[0.24em] text-white sm:text-[1.70rem]`}
          >
            SAUER
          </span>
          <span className="font-alata mt-2 block text-[0.62rem] tracking-[0.34em] text-white/55">
            tattoo artist
          </span>
        </a>

        <div className="font-alata flex items-center justify-center gap-8 text-[0.72rem] uppercase tracking-[0.22em]">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.navLinkDesktop}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className={`${montserrat.className} cta-pulse-glow group relative inline-flex min-h-12 min-w-[11.5rem] items-center justify-center overflow-hidden border border-[#EF0020] bg-[linear-gradient(180deg,rgba(116,0,16,0.98)_0%,rgba(44,2,6,0.98)_100%)] px-7 text-[0.82rem] font-black uppercase tracking-[0.18em] text-[#fff4f4] [text-shadow:0_0_1px_rgba(255,244,244,0.85),0_0_14px_rgba(239,0,32,0.22)] transition duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_12%,rgba(255,255,255,0.18)_34%,transparent_56%)] before:translate-x-[-135%] before:transition-transform before:duration-700 hover:-translate-y-0.5 hover:border-[#ff2946] hover:text-white hover:shadow-[0_0_0_1px_rgba(239,0,32,0.42),0_0_22px_rgba(239,0,32,0.62),0_0_42px_rgba(239,0,32,0.34),inset_0_0_18px_rgba(239,0,32,0.16)] hover:before:translate-x-[135%] sm:min-w-[12.5rem] sm:px-8 lg:min-w-[13.5rem] lg:px-9`}
        >
          <span className="relative">AGENDE JÁ</span>
        </a>
      </div>

      <div className="relative lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="min-w-0 shrink uppercase leading-none">
            <span className="font-boldonse block pt-1 text-[1.08rem] tracking-[0.22em] text-white sm:text-[1.15rem]">
              SAUER
            </span>
            <span className="font-alata mt-1 block text-[0.54rem] tracking-[0.3em] text-white/46">
              tattoo artist
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className={`${montserrat.className} inline-flex h-10 items-center justify-center rounded-full border border-[#EF0020]/80 bg-[linear-gradient(180deg,rgba(116,0,16,0.94)_0%,rgba(44,2,6,0.96)_100%)] px-4 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#fff2f2] shadow-[0_0_0_1px_rgba(239,0,32,0.18),0_0_18px_rgba(239,0,32,0.18)]`}
            >
              Agendar
            </a>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className={`${styles.menuButton} inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white`}
            >
              <span className={styles.menuIcon}>
                <span
                  className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineOpenTop : ""}`}
                />
                <span
                  className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineHidden : ""}`}
                />
                <span
                  className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineOpenBottom : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`${styles.mobileMenuWrapper} ${isMenuOpen ? styles.mobileMenuWrapperOpen : ""}`}
        >
          <div className={styles.mobileMenuInner}>
            <div
              id="mobile-navigation"
              className="grid grid-cols-2 gap-2 rounded-[1.4rem] border border-white/10 bg-black/78 p-2 backdrop-blur-xl"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`${styles.navLinkMobile} font-alata inline-flex min-h-11 items-center justify-center rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 text-center text-[0.68rem] uppercase tracking-[0.2em]`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
