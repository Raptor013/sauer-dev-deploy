"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { defaultWhatsAppHref } from "../whatsapp";
import reflectionStyles from "@/components/ui/PolishedReflection.module.css";
import styles from "./Navbar.module.css";

const navigationItems = [
  { label: "portfólio", href: "#portfolio" },
  { label: "sobre", href: "#sobre" },
  { label: "avaliações", href: "#avaliacoes" },
  { label: "contato", href: "#contato" },
  { label: "localização", href: "#localizacao" },
] as const;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 960px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleViewportChange);
    return () => mediaQuery.removeEventListener("change", handleViewportChange);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={styles.navbar}
      aria-label="Navegação principal"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          closeMenu();
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className={styles.navbarInner}>
        <a href="#" className={styles.brand} aria-label="Sauer Tattoos — início" onClick={closeMenu}>
          <Image
            src="/images/sauer-logo.webp"
            unoptimized
            alt="Sauer Tattoos"
            width={1440}
            height={720}
            priority
            sizes="(max-width: 959px) 110px, 160px"
          />
        </a>

        {/* Desktop Navigation */}
        <div className={styles.desktopNavigation}>
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLinkDesktop}>
              {item.label}
            </a>
          ))}
        </div>
        <a href={defaultWhatsAppHref} target="_blank" rel="noopener noreferrer" className={`${styles.scheduleButton} ${styles.desktopSchedule} ${reflectionStyles.reflection}`}>
          <span className={reflectionStyles.label}>AGENDE JÁ</span>
        </a>

        {/* Mobile Navigation */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className={styles.menuButton}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </span>
        </button>
      </div>
      <div id="mobile-navigation" className={styles.mobileNavigation} hidden={!isMenuOpen}>
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} className={styles.navLinkMobile}>
            {item.label}
          </a>
        ))}
        <a href={defaultWhatsAppHref} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className={`${styles.scheduleButton} ${reflectionStyles.reflection}`}>
          <span className={reflectionStyles.label}>AGENDE JÁ</span>
        </a>
      </div>
    </nav>
  );
};
