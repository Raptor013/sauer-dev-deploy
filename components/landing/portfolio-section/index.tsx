"use client";

import { useState } from "react";
import { portfolioItems } from "../data";
import styles from "./PortfolioSection.module.css";

function getArtworkStyle(item: (typeof portfolioItems)[number]) {
  return {
    backgroundImage: item.artwork,
    backgroundPosition: item.artworkPosition,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as const;
}

function AwardIcon({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M14 24.5c0-1.3 1.5-2 2.5-1.2l9.3 7.4c.8.6 1.9.3 2.2-.6l3.2-10.1c.4-1.2 2.1-1.2 2.5 0l3.2 10.1c.3.9 1.4 1.2 2.2.6l9.3-7.4c1-.8 2.5-.1 2.5 1.2l-3.4 20.1H17.4L14 24.5Z"
        fill="#ffd24d"
        fillOpacity="0.28"
        stroke="#ffe8a3"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M17 44.5h30"
        stroke="#ffe8a3"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M16 50h32"
        stroke="#ffcf5a"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.5" r="3.2" fill="#fff3bf" />
      <circle cx="32" cy="16.5" r="3.6" fill="#fff3bf" />
      <circle cx="48" cy="22.5" r="3.2" fill="#fff3bf" />
      <path
        d="M21 35.5h22"
        stroke="#fff8dc"
        strokeOpacity="0.8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AwardBadge() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 flex justify-end p-4 sm:p-5">
      <div className="relative">
        <div
          className="award-badge-shine inline-flex cursor-default items-center justify-center overflow-hidden rounded-full border border-[#ff003c]/55 bg-black/78 px-2 py-2 text-white/88 backdrop-blur-sm outline-none transition-colors duration-300 hover:border-[#ff003c] focus-visible:border-[#ff003c] sm:px-2 sm:py-2"
          aria-hidden="true"
        >
          <AwardIcon className="h-9 w-9 drop-shadow-[0_0_12px_rgba(255,196,84,0.65)] sm:h-10 sm:w-10" />
        </div>
        <style jsx>{`
          .award-badge-shine {
            position: relative;
          }

          .award-badge-shine::before {
            content: "";
            position: absolute;
            inset: -35%;
            background: linear-gradient(
              115deg,
              transparent 0%,
              transparent 38%,
              rgba(255, 255, 255, 0.2) 47%,
              rgba(255, 255, 255, 0.48) 50%,
              rgba(255, 255, 255, 0.18) 53%,
              transparent 62%,
              transparent 100%
            );
            opacity: 0;
            transform: translateX(-140%) translateY(-8%) rotate(10deg);
            animation: award-badge-shine 3.8s linear infinite;
          }

          .award-badge-shine > :global(svg) {
            position: relative;
            z-index: 1;
          }

          @keyframes award-badge-shine {
            0% {
              transform: translateX(-140%) translateY(-8%) rotate(10deg);
              opacity: 0;
            }
            12% {
              opacity: 0.85;
            }
            38% {
              opacity: 0.3;
            }
            56% {
              transform: translateX(140%) translateY(8%) rotate(10deg);
              opacity: 0;
            }
            100% {
              transform: translateX(140%) translateY(8%) rotate(10deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function AwardDetails({
  award,
}: {
  award: NonNullable<(typeof portfolioItems)[number]["award"]>;
}) {
  return (
    <div className="pointer-events-none mb-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:mb-5">
      <div className="award-label text-[0.84rem] font-black uppercase tracking-[0.24em] text-[#ff6a7f] sm:text-[0.95rem]">
       
        <span>Premiado</span>
      </div>
      <p className="award-title mt-1 text-base font-black uppercase leading-tight tracking-[0.16em] text-[#ff7185] sm:mt-3 sm:text-lg">
        {award.title}
      </p>
      <p className="mt-6 text-[0.95rem] font-extrabold leading-snug text-white drop-shadow-[0_0_12px_rgba(255,0,60,0.42)] sm:text-base">
        {award.description}
      </p>
      <style jsx>{`
        .award-label,
        .award-title {
          text-shadow:
            0 0 6px rgba(255, 75, 109, 0.92),
            0 0 14px rgba(255, 24, 74, 0.82),
            0 0 28px rgba(255, 0, 60, 0.58),
            0 2px 10px rgba(52, 0, 8, 0.82);
        }

        .award-title {
          letter-spacing: 0.14em;
        }
      `}</style>
    </div>
  );
}

export function PortfolioSection() {
  const [showMore, setShowMore] = useState(false);
  const portfolioRows = [portfolioItems, portfolioItems];
  const desktopTopSpans = [11, 10, 13, 11];
  const desktopBottomSpans = [13, 14, 11, 13];

  return (
    <section
      id="portfolio"
      className="section-frame px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="absolute inset-x-0 top-1 h-[5%] w-full bg-[radial-gradient(circle_at_center,rgba(249,0,0,0.1),transparent_90%)] blur-2xl" />
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">PORTFÓLIO</p>
          <h2 className="font-display mt-3 max-w-xl text-4xl leading-none tracking-[-0.04em] sm:text-6xl">
            Galeria de projetos.
          </h2>
        </div>
        {/* <p className="max-w-lg justify-self-end text-sm leading-6 text-white/58 sm:text-base">
          Retratos verticais, cortes próximos e composição pensada para o
          enquadramento real de tatuagens no feed e no estúdio.
        </p> */}
      </div>

      <div className="grid gap-5 xl:hidden">
        {portfolioRows
          .slice(0, showMore ? 2 : 1)
          .map((row, rowIndex) => (
          <div
            key={`portfolio-row-${rowIndex}`}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {row.map((item, itemIndex) => (
              <article
                key={`${item.title}-${rowIndex}-${itemIndex}`}
                className={`${styles.portfolioCard} group ${item.frame}`}
              >
                {rowIndex === 0 && item.isAwarded ? <AwardBadge /> : null}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
                />
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={getArtworkStyle(item)}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.98)_100%)]" />
                <div className="absolute inset-0 bg-[#ff003c]/0 transition-colors duration-500 group-hover:bg-[#ff003c]/18" />
                <div className="relative min-h-[30rem] md:min-h-0" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                  <div className="bg-black/45 px-4 py-3 backdrop-blur-[1px] sm:bg-transparent sm:px-0 sm:py-0">
                    {item.isAwarded && item.award ? <AwardDetails award={item.award} /> : null}
                    <h3 className="font-display text-[2rem] leading-none tracking-[-0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] sm:text-5xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden xl:grid xl:grid-cols-4 xl:auto-rows-[2.75rem] xl:gap-5">
        {portfolioItems.map((item, index) => (
          <article
            key={`${item.title}-top`}
            className={`${styles.portfolioCard} group`}
            style={{ gridRow: `span ${desktopTopSpans[index]}` }}
          >
            {item.isAwarded ? <AwardBadge /> : null}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={getArtworkStyle(item)}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.98)_100%)]" />
            <div className="absolute inset-0 bg-[#ff003c]/0 transition-colors duration-500 group-hover:bg-[#ff003c]/18" />
            <div className="relative h-full min-h-[22rem]" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              {item.isAwarded && item.award ? <AwardDetails award={item.award} /> : null}
              <h3 className="font-display text-5xl leading-none tracking-[-0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]">
                {item.title}
              </h3>
            </div>
          </article>
        ))}

        {showMore &&
          portfolioItems.map((item, index) => (
            <article
              key={`${item.title}-bottom`}
              className={`${styles.portfolioCard} group`}
              style={{ gridRow: `span ${desktopBottomSpans[index]}` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent}`}
              />
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={getArtworkStyle(item)}
              />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.98)_100%)]" />
            <div className="absolute inset-0 bg-[#ff003c]/0 transition-colors duration-500 group-hover:bg-[#ff003c]/18" />
            <div className="relative h-full min-h-[22rem]" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              {item.isAwarded && item.award ? <AwardDetails award={item.award} /> : null}
              <h3 className="font-display text-5xl leading-none tracking-[-0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]">
                {item.title}
              </h3>
              </div>
            </article>
          ))}
      </div>

      <div className="mt-8 flex justify-center xl:mt-10">
        <button
          type="button"
          onClick={() => setShowMore((current) => !current)}
          className="brutal-button brutal-button-primary min-w-[14rem] cursor-pointer"
        >
          {showMore ? "VER MENOS" : "VER MAIS"}
        </button>
      </div>
    </section>
  );
}
