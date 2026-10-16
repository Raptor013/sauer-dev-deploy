"use client";

import Image, { getImageProps } from "next/image";
import { type RefObject } from "react";
import { Navbar } from "../navbar";
import { defaultWhatsAppHref } from "../whatsapp";
import reflectionStyles from "@/components/ui/PolishedReflection.module.css";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

const desktopHeroImage = getImageProps({
  src: "/images/sauer-hero-desktop-v2.png",
  alt: "",
  fill: true,
  sizes: "100vw",
}).props;

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      className={styles.heroRoot}
      aria-labelledby="hero-title"
    >
      <Navbar />
      <div className={styles.heroComposition}>
        <div className={styles.heroMedia}>
          <picture>
            <source
              media="(min-width: 960px)"
              srcSet={desktopHeroImage.srcSet}
              sizes={desktopHeroImage.sizes}
            />
            <Image
              src="/images/sauer-hero.webp"
              alt="Sauer trabalhando em uma tatuagem no braço de um cliente"
              fill
              loading="eager"
              sizes="(max-width: 959px) 180vw, 100vw"
              className={styles.heroImage}
            />
          </picture>
        </div>
        <div className={styles.heroContent}>
          <p className={styles.kicker}>TATUAGEM AUTORAL • RIO DE JANEIRO</p>
          <Image
            src="/images/sauer-logo.webp"
            unoptimized
            alt="Sauer Tattoos"
            width={1440}
            height={720}
            priority
            sizes="(max-width: 959px) 87vw, 38vw"
            className={styles.heroLogo}
          />
          <h1 id="hero-title" className={styles.heroTitle}>
            Sua ideia transformada em uma tatuagem única.
          </h1>
          <p className={styles.description}>
            Projetos personalizados. Histórias feitas para permanecer.
          </p>
          <div className={styles.actions}>
            <a
              href={defaultWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              VEM DE SAUER
              <svg viewBox="0 0 32 24" fill="none" aria-hidden="true">
                <path
                  d="M1 12h28M19 2l10 10-10 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
            <a
              href={defaultWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.secondaryButton} ${reflectionStyles.reflection}`}
            >
              <span className={reflectionStyles.label}>CRIAR MEU PROJETO</span>
            </a>
          </div>
          <p className={styles.tagline}>
            ALGUMAS HISTÓRIAS PRECISAM SER ETERNAS.
          </p>
        </div>
      </div>
    </section>
  );
}
