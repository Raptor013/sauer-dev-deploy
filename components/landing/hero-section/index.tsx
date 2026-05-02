"use client";

import { boldonse, montserrat } from "@/app/fonts";
import Image from "next/image";
import { useEffect, useState, type RefObject } from "react";
import { Navbar } from "../navbar";
import styles from "./HeroSection.module.css";

const metrics = [
  { value: 5, suffix: "+", label: "ANOS DE", detail: "EXPERIÊNCIA" },
  { value: 10, suffix: "+", label: "PREMIADO", detail: "" },
  { value: 100, suffix: "%", label: "AVALIAÇÕES", detail: "POSITIVAS" },
] as const;

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) {
      return;
    }

    let frameId = 0;
    let hasStarted = false;

    const animateCounters = () => {
      const startTime = performance.now();
      const duration = 1800;

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const linearProgress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

        setAnimationProgress(easedProgress);

        if (linearProgress < 1) {
          frameId = window.requestAnimationFrame(step);
        }
      };

      frameId = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasStarted) {
          return;
        }

        hasStarted = true;
        observer.disconnect();
        animateCounters();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [heroRef]);

  const sectionClassName = `section-frame ${styles.heroRoot} relative isolate flex h-full min-h-dvh flex-col overflow-hidden bg-black text-white`;
  const mobileMediaClassName = `absolute inset-0 md:hidden ${styles.heroMedia} ${styles.heroMediaMobile}`;
  const desktopMediaClassName = `absolute hidden md:block ${styles.heroMediaFrame} ${styles.heroMedia}`;
  const sharedOverlayClassName = `absolute inset-0 bg-[radial-gradient(circle_at_20%_42%,rgba(255,0,60,0.16),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(255,0,60,0.12),transparent_20%),linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_24%,rgba(0,0,0,0.28)_46%,rgba(0,0,0,0.72)_70%,rgba(0,0,0,0.94)_100%),linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.42)_18%,rgba(0,0,0,0.18)_46%,rgba(0,0,0,0.8)_100%)] ${styles.heroOverlay}`;
  const vignetteClassName = `absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_44%,rgba(0,0,0,0.52)_100%)] ${styles.heroVignette}`;
  const topFadeClassName = `absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0.44),transparent)] ${styles.heroTopFade}`;
  const transitionGlowClassName = `absolute inset-x-0 bottom-[-8%] h-[10%] w-full rounded-tl-full rounded-tr-full bg-[radial-gradient(ellipse_at_center,rgba(255,20,20,0.98)_0%,rgba(249,0,0,0.64)_34%,rgba(249,0,0,0.24)_62%,transparent_100%)] blur-lg ${styles.heroTransitionGlow}`;
  const exitFadeClassName = `absolute inset-x-0 bottom-0 h-[32vh] ${styles.heroExitFade}`;

  const mobileContentClassName = `relative z-10 flex flex-1 flex-col px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-0 sm:px-6 sm:pb-[calc(1.25rem+env(safe-area-inset-bottom))] md:hidden ${styles.heroContent}`;

  const mobileKickerClassName = `${montserrat.className} text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/72 drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)] sm:text-[0.68rem]`;

  const mobileDescriptionClassName = `${montserrat.className} max-w-[16rem] text-[0.88rem] font-semibold uppercase leading-[1.18] tracking-[0.18em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:max-w-[18rem] sm:text-[0.98rem]`;
  const mobilePrimaryCtaClassName = `${montserrat.className} inline-flex min-h-14 w-full max-w-[16rem] items-center justify-center border border-[#EF0020] bg-black/36 px-4 text-[0.84rem] font-normal uppercase tracking-[0.24em] text-[#FFEAEA] shadow-[0_0_0_1px_rgba(255,0,60,0.08)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-[#ff0037] hover:bg-[#130204]/92 hover:shadow-[0_0_24px_rgba(255,0,60,0.22)]`;

  const desktopContentClassName = `relative z-10 hidden flex-1 flex-col px-4 pb-8 pt-0 sm:px-6 sm:pb-10 md:flex md:px-8 md:pb-11 lg:px-10 lg:pb-12 ${styles.heroContent}`;
  const desktopGridClassName =
    "grid w-full grid-cols-1 gap-8 pt-10 sm:pt-12 md:max-w-[44rem] md:gap-10 md:pt-8 lg:max-w-none lg:grid-cols-[minmax(290px,0.88fr)_minmax(280px,1.06fr)_minmax(180px,0.4fr)] lg:items-center lg:gap-4 lg:pt-6 xl:grid-cols-[minmax(320px,0.88fr)_minmax(360px,1.08fr)_minmax(190px,0.42fr)]";
  const desktopKickerClassName = `${montserrat.className} text-[0.88rem] font-semibold uppercase tracking-[0.55em] text-white sm:text-[1rem]`;
  const desktopDescriptionClassName = `${montserrat.className} mt-1.5 max-w-[16rem] text-[1.05rem] font-semibold uppercase leading-[1.12] tracking-[0.2em] text-white sm:mt-2 sm:max-w-[20rem] sm:text-[1.18rem]`;
  const desktopFeaturedMetricClassName =
    "mt-8 inline-flex w-fit min-w-44 flex-col border border-[#EF0020] bg-black/40 px-5 py-4 shadow-[0_0_0_1px_rgba(255,0,60,0.16),0_0_24px_rgba(255,0,60,0.1)] backdrop-blur-[2px] sm:px-6 sm:py-5";

  const desktopPrimaryCtaClassName = `${montserrat.className} mt-8 inline-flex min-h-14 w-full max-w-[16rem] items-center justify-center border border-[#EF0020] bg-black/36 px-6 text-[1rem] font-normal uppercase tracking-[0.28em] text-[#FFEAEA] shadow-[0_0_0_1px_rgba(255,0,60,0.08)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-[#ff0037] hover:bg-[#130204]/92 hover:shadow-[0_0_24px_rgba(255,0,60,0.22)] sm:max-w-68`;

  const metricsGridClassName =
    "grid w-full gap-4 sm:grid-cols-3 lg:w-auto lg:grid-cols-1 lg:gap-6 xl:gap-8";
  const metricCardClassName =
    "relative border border-white/8 bg-black/20 p-4 backdrop-blur-[2px] lg:min-w-46 lg:border-0 lg:bg-transparent lg:p-0 lg:pl-7";
  const metricValueClassName = `${boldonse.className} text-[2.4rem] leading-none text-[#EF0020] sm:text-[2.7rem] lg:text-[2.2rem]`;
  const metricLabelClassName = `${montserrat.className} mt-2 text-[0.82rem] uppercase leading-[1.1] tracking-[0.24em] text-white`;

  return (
    <section ref={heroRef} className={sectionClassName}>
      {/* Background media - mobile */}
      <div className={mobileMediaClassName}>
        <Image
          src="/mobile-hero.png"
          alt="Retrato em preto e branco do tatuador Sauer"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-bottom-left ${styles.heroImage} ${styles.heroImageMobile}`}
        />
      </div>

      {/* Background media - desktop */}
      <div className={desktopMediaClassName}>
        <Image
          src="/hero.png"
          alt="Retrato em preto e branco do tatuador Sauer"
          fill
          priority
          sizes="100vw"
          className={`object-contain ${styles.heroImage}`}
        />
      </div>

      {/* Shared overlays */}
      <div className={sharedOverlayClassName} />
      <div
        className={`absolute inset-0 md:hidden ${styles.heroMobileOverlay}`}
      />

      <div className={vignetteClassName} />
      <div className={topFadeClassName} />

      <div className={`noise absolute inset-0 ${styles.heroNoise}`} />

      <div className={transitionGlowClassName} />
      <div className={exitFadeClassName} />

      <Navbar />

      {/* Mobile content */}
      <div className={mobileContentClassName}>
        <div className="mt-auto">
          <div
            className={`relative mx-auto flex w-full max-w-92 flex-col items-start sm:max-w-100 ${styles.mobileHeroPanel}`}
          >
            <p className={mobileKickerClassName}>tattoo artist</p>

            <div className="">
              <Title compact />
            </div>

            <p className={mobileDescriptionClassName}>
              Algumas histórias precisam ser eternas
            </p>

            <div className="mb-10 mt-6 flex w-full justify-center">
              <a href="#contato" className={mobilePrimaryCtaClassName}>
                Vem fazer história
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop content */}
      <div className={desktopContentClassName}>
        <div className="flex flex-1 items-center">
          <div className={desktopGridClassName}>
            {/* Desktop copy block */}
            <div
              className={`relative z-20 order-1 flex max-w-104 flex-col justify-center lg:pl-3 xl:pl-8 ${styles.desktopCopyBlock}`}
            >
              <p
                className={`${desktopKickerClassName} ${styles.desktopKicker}`}
              >
                TATTOO ARTIST
              </p>

              <div className={styles.desktopTitleWrap}>
                <Title />
              </div>

              <p className={desktopDescriptionClassName}>
                ALGUMAS HISTÓRIAS
                <br />
                PRECISAM SER ETERNAS
              </p>

              <div className={desktopFeaturedMetricClassName}>
                <span
                  className={`${boldonse.className} text-[2.5rem] leading-none text-[#EF0020] sm:text-[2.2rem]`}
                >
                  {formatCounterValue(100, animationProgress, "+")}
                </span>
                <span
                  className={`${montserrat.className} mt-2 text-[0.82rem] uppercase leading-[1.15] tracking-[0.22em] text-white`}
                >
                  PROJETOS
                  <br />
                  REALIZADOS
                </span>
              </div>

              <a href="#contato" className={desktopPrimaryCtaClassName}>
                VEM DE SAUER
              </a>
            </div>

            {/* Desktop spacer for the media composition */}
            <div className="order-2 hidden lg:block" />

            {/* Desktop metrics rail */}
            <aside className="order-3 hidden items-center lg:flex lg:justify-end">
              <div className={metricsGridClassName}>
                {metrics.map((item) => (
                  <div
                    key={`${item.value}-${item.label}`}
                    className={metricCardClassName}
                  >
                    <div className="absolute inset-y-4 left-0 hidden w-px bg-[#EF0020] lg:block" />
                    <p className={metricValueClassName}>
                      {formatCounterValue(
                        item.value,
                        animationProgress,
                        item.suffix,
                      )}
                    </p>
                    <p className={metricLabelClassName}>
                      {item.label}
                      {item.detail ? (
                        <>
                          <br />
                          {item.detail}
                        </>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatCounterValue(target: number, progress: number, suffix = "") {
  const currentValue = Math.round(target * progress);

  return `${currentValue}${suffix}`;
}

export const Title = ({ compact = false }: { compact?: boolean }) => {
  const titleClassName = compact
    ? `${styles.heroTitle} ${styles.heroTitleCompact}`
    : styles.heroTitle;

  return (
    <div className={titleClassName}>
      <Image
        src="/image.png"
        alt="SAUER"
        width={1143}
        height={840}
        sizes={
          compact
            ? "(max-width: 640px) 82vw, 320px"
            : "(max-width: 1023px) 420px, (max-width: 1280px) 360px, 400px"
        }
        className={styles.heroTitleImage}
      />
    </div>
  );
};
