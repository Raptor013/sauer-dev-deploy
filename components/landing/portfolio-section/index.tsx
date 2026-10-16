"use client";

import { montserrat } from "@/app/fonts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { portfolioItems } from "../data";
import reflectionStyles from "@/components/ui/PolishedReflection.module.css";
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
  onOpen: (item: PortfolioItem, trigger: HTMLButtonElement) => void;
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
      <div className={styles.cardHoverWash} />
      <div className={`relative ${bodyClassName ?? "h-full min-h-[22rem]"}`} />
      <button
        type="button"
        onClick={(event) => onOpen(item, event.currentTarget)}
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
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const openItem = (item: PortfolioItem, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedItem(item);
  };
  const portfolioRows = [portfolioItems.slice(0, 4), portfolioItems.slice(4)];
  const desktopTopSpans = [11, 10, 13, 11];
  const desktopBottomSpans = [13, 14, 11, 13];

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const backgroundElements = new Map<HTMLElement, boolean>();
    let branch: HTMLElement | null = modalRef.current;

    closeButtonRef.current?.focus({ preventScroll: true });

    while (branch && branch !== document.body) {
      const parent: HTMLElement | null = branch.parentElement;
      if (!parent) break;
      for (const sibling of parent.children) {
        if (sibling instanceof HTMLElement && sibling !== branch) {
          backgroundElements.set(sibling, sibling.inert);
          sibling.inert = true;
        }
      }
      branch = parent;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedItem(null);
      } else if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus({ preventScroll: true });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      backgroundElements.forEach((inert, element) => {
        element.inert = inert;
      });
      if (trigger?.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [selectedItem]);

  return (
    <>
      <section
        id="portfolio"
        className={`${styles.gallerySection} section-frame px-6 py-20 sm:px-8 lg:px-12 lg:py-24`}
      >
        <header className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>GALERIA DE PROJETOS</h2>
          <span className={styles.titleRule} aria-hidden="true" />
          <div className={styles.subtitleComposition}>
            <Image
              src="/images/arabesco-esquerda.png"
              alt=""
              width={2172}
              height={724}
              sizes="(max-width: 639px) 32vw, (max-width: 1023px) 12vw, 16rem"
              className={styles.arabesqueLeft}
            />
            <p className={styles.gallerySubtitle}>
              Uma seleção de trabalhos feitos por Sauer, unindo técnica, composição e identidade em projetos criados para diferentes histórias
            </p>
            <Image
              src="/images/arabesco-direita.png"
              alt=""
              width={2171}
              height={724}
              sizes="(max-width: 639px) 32vw, (max-width: 1023px) 12vw, 16rem"
              className={styles.arabesqueRight}
            />
          </div>
        </header>

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
                  onOpen={openItem}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="hidden xl:grid xl:grid-cols-4 xl:auto-rows-[2.75rem] xl:gap-5">
          {portfolioRows[0].map((item, index) => (
            <PortfolioCard
              key={`${item.title}-top`}
              item={item}
              style={{ gridRow: `span ${desktopTopSpans[index]}` }}
              onOpen={openItem}
            />
          ))}

          {showMore &&
            portfolioRows[1].map((item, index) => (
              <PortfolioCard
                key={`${item.title}-bottom`}
                item={item}
                style={{ gridRow: `span ${desktopBottomSpans[index]}` }}
                onOpen={openItem}
              />
            ))}
        </div>

        <div className="mt-8 flex justify-center xl:mt-10">
          <button
            type="button"
            onClick={() => setShowMore((current) => !current)}
            className={`${styles.moreButton} ${reflectionStyles.reflection} ${montserrat.className}`}
          >
            <span className={reflectionStyles.label}>
              {showMore ? "VER MENOS" : "VER MAIS"}
            </span>
          </button>
        </div>
      </section>

      {selectedItem ? createPortal(
        <div
          ref={modalRef}
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
              ref={closeButtonRef}
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
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
