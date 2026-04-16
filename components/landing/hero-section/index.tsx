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

  return (
    <section
      ref={heroRef}
      className={`section-frame ${styles.heroRoot} relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-white`}
    >
      <div className={`absolute ${styles.heroMediaFrame} ${styles.heroMedia}`}>
        <Image
          src="/hero.webp"
          alt="Retrato em preto e branco do tatuador Sauer"
          fill
          priority
          sizes="100vw"
          className={`object-contain ${styles.heroImage}`}
        />
      </div>

      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_42%,rgba(255,0,60,0.16),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(255,0,60,0.12),transparent_20%),linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_24%,rgba(0,0,0,0.28)_46%,rgba(0,0,0,0.72)_70%,rgba(0,0,0,0.94)_100%),linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.42)_18%,rgba(0,0,0,0.18)_46%,rgba(0,0,0,0.8)_100%)] ${styles.heroOverlay}`}
      />
      <div className={`absolute inset-0 lg:hidden ${styles.heroMobileOverlay}`} />

      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_44%,rgba(0,0,0,0.52)_100%)] ${styles.heroVignette}`}
      />
      <div
        className={`absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0.44),transparent)] ${styles.heroTopFade}`}
      />
      {/* <div className="absolute inset-x-0 bottom-[-8%] h-[18%] w-2/5 left-[35%] bg-[#F9000029] rounded-tl-full rounded-tr-full blur-lg" /> */}

      <div className={`noise absolute inset-0 ${styles.heroNoise}`} />

      <div
        className={`absolute inset-x-0 bottom-[-8%] h-[12%] w-full rounded-tl-full rounded-tr-full bg-[#f9000027] blur-lg ${styles.heroTransitionGlow}`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-[32vh] ${styles.heroExitFade}`}
      />

      <Navbar />

      <div
        className={`relative z-10 flex flex-1 flex-col px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-0 sm:px-6 sm:pb-[calc(1.25rem+env(safe-area-inset-bottom))] lg:hidden ${styles.heroContent}`}
      >
        <div className="mt-auto">
          <div
            className={`relative mx-auto w-full max-w-[23rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/42 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_22px_70px_rgba(0,0,0,0.5)] backdrop-blur-md sm:max-w-[25rem] sm:rounded-[2rem] sm:p-5 ${styles.mobileHeroPanel}`}
          >
            <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(239,0,32,0.68),transparent)]" />

            <p
              className={`${montserrat.className} inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/72 sm:text-[0.68rem]`}
            >
              tattoo artist
            </p>

            <div className="relative mt-4">
              <div
                className={`${styles.heroNeonBackdrop} absolute -inset-x-4 -inset-y-5 opacity-70`}
              />

              <Title
                title="SAUER"
                compact
                className="tracking-[0.08em]"
              />
            </div>

            <p
              className={`${montserrat.className} mt-3 max-w-[16rem] text-[0.88rem] font-semibold uppercase leading-[1.18] tracking-[0.18em] text-white sm:max-w-[18rem] sm:text-[0.98rem]`}
            >
              Algumas histórias precisam ser eternas
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[0.62rem] uppercase tracking-[0.22em] text-white/78 sm:text-[0.68rem]">
              <span className="inline-flex min-h-9 items-center rounded-full border border-[#EF0020]/25 bg-[#EF0020]/10 px-3">
                {formatCounterValue(100, animationProgress, "+")} projetos
              </span>
              <span className="inline-flex min-h-9 items-center rounded-full border border-white/10 bg-white/[0.04] px-3">
                Rio de Janeiro
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#contato"
                className={`${montserrat.className} inline-flex min-h-12 items-center justify-center rounded-full border border-[#EF0020] bg-[linear-gradient(180deg,rgba(116,0,16,0.94)_0%,rgba(44,2,6,0.96)_100%)] px-5 text-[0.74rem] font-bold uppercase tracking-[0.24em] text-[#fff2f2] shadow-[0_0_0_1px_rgba(239,0,32,0.16),0_0_22px_rgba(239,0,32,0.2)] transition duration-300 hover:border-[#ff2946] hover:shadow-[0_0_0_1px_rgba(239,0,32,0.3),0_0_28px_rgba(239,0,32,0.28)]`}
              >
                Agende sua tattoo
              </a>

              <a
                href="#portfolio"
                className={`${montserrat.className} inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/76 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white`}
              >
                Ver portfólio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 hidden flex-1 flex-col px-4 pb-8 pt-0 sm:px-6 sm:pb-10 lg:flex lg:px-10 lg:pb-12 ${styles.heroContent}`}
      >
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-1 gap-8 pt-10 sm:pt-12 lg:grid-cols-[minmax(290px,0.88fr)_minmax(280px,1.06fr)_minmax(180px,0.4fr)] lg:items-center lg:gap-4 lg:pt-6 xl:grid-cols-[minmax(320px,0.88fr)_minmax(360px,1.08fr)_minmax(190px,0.42fr)]">
            <div className="relative z-20 order-1 flex max-w-[26rem] flex-col justify-center lg:pl-3 xl:pl-8">
              <p
                className={`${montserrat.className} mb-4 text-[0.88rem] font-semibold uppercase tracking-[0.55em] text-white sm:text-[1rem]`}
                // style={{ fontFamily: montserrat.style.fontFamily }}
              >
                TATTO ARTIST
              </p>

              <div className="relative mt-3 sm:mt-5">
                <div
                  className={`${styles.heroNeonBackdrop} absolute -inset-x-5 -inset-y-7 opacity-60`}
                />

                <Title title="SAUER" />
              </div>

              <p
                className={`${montserrat.className} mt-4 max-w-[16rem] text-[1.05rem] font-semibold uppercase leading-[1.12] tracking-[0.2em] text-white sm:mt-5 sm:max-w-[20rem] sm:text-[1.18rem]`}
              >
                ALGUMAS HISTÓRIAS
                <br />
                PRECISAM SER ETERNAS
              </p>

              <div className="mt-8 inline-flex w-fit min-w-[11rem] flex-col border border-[#EF0020] bg-black/40 px-5 py-4 shadow-[0_0_0_1px_rgba(255,0,60,0.16),0_0_24px_rgba(255,0,60,0.1)] backdrop-blur-[2px] sm:px-6 sm:py-5">
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

              <a
                href="#contato"
                className={`${montserrat.className} mt-8 inline-flex min-h-14 w-full max-w-[16rem] items-center justify-center border-[1px] border-[#EF0020] bg-black/36 px-6 text-[1rem] font-normal uppercase tracking-[0.28em] text-[#FFEAEA] shadow-[0_0_0_1px_rgba(255,0,60,0.08)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-[#ff0037] hover:bg-[#130204]/92 hover:shadow-[0_0_24px_rgba(255,0,60,0.22)] sm:max-w-[17rem]`}
              >
                VEM DE SAUER
              </a>
            </div>

            <div className="order-2 hidden lg:block" />

            <aside className="hidden lg:flex order-3 items-center lg:justify-end">
              <div className="grid w-full gap-4 sm:grid-cols-3 lg:w-auto lg:grid-cols-1 lg:gap-6 xl:gap-8">
                {metrics.map((item) => (
                  <div
                    key={`${item.value}-${item.label}`}
                    className="relative border border-white/8 bg-black/20 p-4 backdrop-blur-[2px] lg:min-w-[11.5rem] lg:border-0 lg:bg-transparent lg:p-0 lg:pl-7"
                  >
                    <div className="absolute inset-y-4 left-0 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(255,0,60,0.88),transparent)] lg:block" />
                    <p
                      className={`${boldonse.className} text-[2.4rem] leading-none text-[#EF0020] sm:text-[2.7rem] lg:text-[2.2rem]`}
                    >
                      {formatCounterValue(
                        item.value,
                        animationProgress,
                        item.suffix,
                      )}
                    </p>
                    <p
                      className={`${montserrat.className} mt-2 text-[0.82rem] uppercase leading-[1.1] tracking-[0.24em] text-white`}
                    >
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

// export const Title = ({ title }: { title: string }) => {
//   return (
//     <h1
//       data-text={title}
//       className={`${boldonse.className} relative inline-block origin-center scale-y-[1.04] text-[4.9rem] leading-[1.10] tracking-[0.14em] sm:text-[6.4rem] lg:text-[5.2rem] xl:text-[5rem] ${styles.heroNeonSign} ${styles.heroTextStroke}`}
//       // style={{ fontFamily: boldonse.style.fontFamily }}
//     >
//       {title}
//     </h1>

//     // <h1 className={`${boldonse.className}`}>SAUER</h1>
//   );
// };

export const Title = ({
  title,
  compact = false,
  className = "",
}: {
  title: string;
  compact?: boolean;
  className?: string;
}) => {
  const sizeClasses = compact
    ? "text-[clamp(2.85rem,15vw,4.85rem)] leading-[0.94]"
    : "text-[4.9rem] leading-[1.10] sm:text-[6.4rem] lg:text-[5.2rem] xl:text-[5rem]";

  return (
    <h1
      className={`relative inline-block origin-center scale-y-[1.13] ${sizeClasses} ${className} ${boldonse.className}`}
    >
      <span data-text={title} className={`${styles.stroke}`}>
        {title}
      </span>

      {/* <span className={`${styles.fill}`}>{title}</span> */}
    </h1>
  );
};

function formatCounterValue(
  target: number,
  progress: number,
  suffix = "",
) {
  const currentValue = Math.round(target * progress);

  return `${currentValue}${suffix}`;
}
