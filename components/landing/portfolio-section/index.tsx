"use client";

import { useEffect, useState } from "react";
import { portfolioItems } from "../data";
import styles from "./PortfolioSection.module.css";

type PortfolioItem = (typeof portfolioItems)[number];

function getArtworkStyle(item: PortfolioItem) {
  return {
    backgroundImage: item.artwork,
    backgroundPosition: item.artworkPosition,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  } as const;
}

function AwardDetails({
  award,
}: {
  award: NonNullable<PortfolioItem["award"]>;
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

function PortfolioCard({
  item,
  className,
  style,
  bodyClassName,
  onOpen,
}: {
  item: PortfolioItem;
  className?: string;
  style?: React.CSSProperties;
  bodyClassName?: string;
  onOpen: (item: PortfolioItem) => void;
}) {
  return (
    <article
      className={`${styles.portfolioCard} group ${className ?? ""}`.trim()}
      style={style}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={getArtworkStyle(item)}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[#ff003c]/0 transition-colors duration-500 group-hover:bg-[#ff003c]/18" />
      <div className={`relative ${bodyClassName ?? "h-full min-h-[22rem]"}`} />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
        <div className="bg-black/45 px-4 py-3 backdrop-blur-[1px] sm:bg-transparent sm:px-0 sm:py-0">
          {item.isAwarded && item.award ? (
            <AwardDetails award={item.award} />
          ) : null}
          <h3 className="font-display text-[2rem] leading-none tracking-[-0.04em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] sm:text-5xl">
            {item.title}
          </h3>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onOpen(item)}
        className="absolute inset-0 z-20 cursor-pointer"
        aria-label={`Abrir visualização de ${item.title}`}
      >
        <span className="sr-only">Abrir imagem em destaque</span>
      </button>
    </article>
  );
}

export function PortfolioSection() {
  const [showMore, setShowMore] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const portfolioRows = [portfolioItems, portfolioItems];
  const desktopTopSpans = [11, 10, 13, 11];
  const desktopBottomSpans = [13, 14, 11, 13];

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <section
        id="portfolio"
        className="section-frame px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        {/* <div className="absolute inset-x-0 top-1 h-[5%] w-full bg-[radial-gradient(circle_at_center,rgba(249,0,0,0.1),transparent_90%)] blur-2xl" /> */}
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
          {portfolioRows.slice(0, showMore ? 2 : 1).map((row, rowIndex) => (
            <div
              key={`portfolio-row-${rowIndex}`}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            >
              {row.map((item, itemIndex) => (
                <PortfolioCard
                  key={`${item.title}-${rowIndex}-${itemIndex}`}
                  item={item}
                  className={item.frame}
                  bodyClassName="min-h-[30rem] md:min-h-0"
                  onOpen={setSelectedItem}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="hidden xl:grid xl:grid-cols-4 xl:auto-rows-[2.75rem] xl:gap-5">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={`${item.title}-top`}
              item={item}
              style={{ gridRow: `span ${desktopTopSpans[index]}` }}
              onOpen={setSelectedItem}
            />
          ))}

          {showMore &&
            portfolioItems.map((item, index) => (
              <PortfolioCard
                key={`${item.title}-bottom`}
                item={item}
                style={{ gridRow: `span ${desktopBottomSpans[index]}` }}
                onOpen={setSelectedItem}
              />
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

      {selectedItem ? (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização de ${selectedItem.title}`}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={styles.modalCard}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className={styles.closeButton}
              aria-label="Fechar visualização"
            >
              Fechar
            </button>

            <div className={styles.modalArtworkFrame}>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${selectedItem.accent}`}
              />
              <div
                className={styles.modalArtwork}
                style={getArtworkStyle(selectedItem)}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.26)_42%,rgba(0,0,0,0.9)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8">
                {selectedItem.isAwarded && selectedItem.award ? (
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#ff6a7f] sm:text-sm">
                    {selectedItem.award.title} •{" "}
                    {selectedItem.award.description}
                  </p>
                ) : null}
                <h3 className="font-display text-4xl leading-none tracking-[-0.04em] text-white sm:text-6xl">
                  {selectedItem.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
