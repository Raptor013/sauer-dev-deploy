import { boldonse, montserrat } from "@/app/fonts";
import Image from "next/image";
import type { RefObject } from "react";
import { Navbar } from "../navbar";
import styles from "./HeroSection.module.css";

const metrics = [
  { value: "5+", label: "ANOS DE", detail: "EXPERIÊNCIA" },
  { value: "10+", label: "PREMIADO", detail: "" },
  { value: "100%", label: "AVALIAÇÕES", detail: "POSITIVAS" },
] as const;

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    <section
      ref={heroRef}
      className="section-frame relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt="Retrato em preto e branco do tatuador Sauer"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_42%,rgba(255,0,60,0.16),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(255,0,60,0.12),transparent_20%),linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.76)_24%,rgba(0,0,0,0.28)_46%,rgba(0,0,0,0.72)_70%,rgba(0,0,0,0.94)_100%),linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.42)_18%,rgba(0,0,0,0.18)_46%,rgba(0,0,0,0.8)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_44%,rgba(0,0,0,0.52)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0.44),transparent)]" />
      {/* <div className="absolute inset-x-0 bottom-[-8%] h-[18%] w-2/5 left-[35%] bg-[#F9000029] rounded-tl-full rounded-tr-full blur-lg" /> */}

      <div className="noise absolute inset-0 opacity-[0.12]" />

      <div className="absolute inset-x-0 bottom-[-8%] h-[12%] w-full bg-[#f9000027] rounded-tl-full rounded-tr-full blur-lg" />

      <Navbar />

      <div className="relative z-10 flex flex-1 flex-col px-4 pb-8 pt-0 sm:px-6 sm:pb-10  lg:px-10 lg:pb-12 ">
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
                  100+
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
                      {item.value}
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

export const Title = ({ title }: { title: string }) => {
  return (
    <h1
      className={`relative inline-block origin-center scale-y-[1.13] text-[4.9rem] leading-[1.10] sm:text-[6.4rem] lg:text-[5.2rem] xl:text-[5rem]  ${boldonse.className}`}
    >
      <span data-text={title} className={`${styles.stroke}`}>
        {title}
      </span>

      {/* <span className={`${styles.fill}`}>{title}</span> */}
    </h1>
  );
};
