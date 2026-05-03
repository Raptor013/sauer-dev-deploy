"use client";

import Image from "next/image";
import type { KeyboardEvent, PointerEvent, TransitionEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionTitle } from "../section-title";
// import { SectionTitle } from "../section-title";

export type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
};

type ShowcaseCarouselProps = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  regionLabel: string;
  items: ShowcaseItem[];
};

const LOOP_MULTIPLIER = 3;
const GAP_PX = 20;
const DRAG_RATIO_TRIGGER = 0.18;

function ArrowLeftIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function createPlaceholder(label: string, from: string, to: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#bg)" />
      <g opacity="0.24" stroke="#ff8aa7" stroke-width="1">
        <path d="M0 40 H800 M0 120 H800 M0 200 H800 M0 280 H800 M0 360 H800 M0 440 H800" />
        <path d="M80 0 V520 M200 0 V520 M320 0 V520 M440 0 V520 M560 0 V520 M680 0 V520" />
      </g>
      <text x="400" y="258" text-anchor="middle" fill="#ffe1e8" font-size="36" font-family="Arial, sans-serif" font-weight="700">
        ${label}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function ShowcaseCarousel({
  id,
  kicker,
  title,
  description,
  regionLabel,
  items,
}: ShowcaseCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const baseIndex = items.length;

  const [cardsPerView, setCardsPerView] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(baseIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef<number | null>(null);

  const loopedItems = useMemo(
    () => Array.from({ length: LOOP_MULTIPLIER }).flatMap(() => items),
    [items],
  );

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setViewportWidth(entry.contentRect.width);
      }
    });

    observer.observe(viewport);
    setViewportWidth(viewport.clientWidth);

    return () => observer.disconnect();
  }, []);

  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - (cardsPerView - 1) * GAP_PX) / cardsPerView
      : 0;

  const stepPx = cardWidth + GAP_PX;

  const moveBy = (delta: number) => {
    if (!stepPx || isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => prev + delta);
  };

  const movePrev = () => moveBy(-1);
  const moveNext = () => moveBy(1);

  const normalizeIndex = (index: number) => {
    if (index >= baseIndex + items.length) {
      return index - items.length;
    }

    if (index < baseIndex) {
      return index + items.length;
    }

    return index;
  };

  const finishMovement = () => {
    const normalized = normalizeIndex(currentIndex);

    if (normalized !== currentIndex) {
      setIsAnimating(false);
      setCurrentIndex(normalized);
      return;
    }

    setIsAnimating(false);
  };

  const handleTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform"
    ) {
      return;
    }

    finishMovement();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveNext();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!stepPx || isAnimating) return;

    dragStartXRef.current = event.clientX;
    setIsDragging(true);

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartXRef.current == null) return;

    const delta = event.clientX - dragStartXRef.current;
    const maxOffset = stepPx * 0.35;
    const limitedDelta = Math.max(-maxOffset, Math.min(maxOffset, delta));
    setDragOffset(limitedDelta);
  };

  const handlePointerUp = () => {
    if (!isDragging || !stepPx) return;

    const threshold = stepPx * DRAG_RATIO_TRIGGER;
    const finalOffset = dragOffset;

    setIsDragging(false);
    dragStartXRef.current = null;
    setDragOffset(0);

    if (Math.abs(finalOffset) < threshold) {
      return;
    }

    if (finalOffset > 0) {
      movePrev();
    } else {
      moveNext();
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    dragStartXRef.current = null;
    setDragOffset(0);
  };

  const trackTransition =
    isDragging || !stepPx || !isAnimating
      ? "none"
      : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)";

  const transformX = stepPx ? -(currentIndex * stepPx) + dragOffset : 0;

  return (
    <section
      id={id}
      className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="relative overflow-hidden border border-white/10 bg-[#040404]">
        {/* <div className="absolute left-0 top-0 h-2 w-24 bg-[#ff003c] shadow-[0_0_24px_rgba(255,0,60,0.82)] sm:w-32" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,60,0.14),transparent_28%)]" />
        <div className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <SectionTitle
            kicker={kicker}
            title={title}
            description={description}
          />

          <div className="relative mt-10">
            <button
              type="button"
              aria-label="Projeto anterior"
              onClick={movePrev}
              className="carousel-arrow-idle absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ff003c]/55 bg-black/78 text-[#ff6a8b] backdrop-blur-sm transition-all duration-300 hover:scale-[1.08] hover:border-[#ff003c] hover:bg-[#ff003c]/16 hover:text-white hover:shadow-[0_0_30px_rgba(255,0,60,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8aa7] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:-translate-x-1/2"
            >
              <span
                aria-hidden="true"
                className="carousel-arrow-halo pointer-events-none absolute inset-[3px] rounded-full border border-[#ff003c]/35"
              />
              <ArrowLeftIcon className="carousel-arrow-icon-left h-5 w-5" />
            </button>

            <div
              ref={viewportRef}
              role="region"
              tabIndex={0}
              aria-label={regionLabel}
              onKeyDown={handleKeyDown}
              className="overflow-hidden pb-2 focus-visible:outline-none"
            >
              <div
                className={`flex gap-5 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{
                  transform: `translateX(${transformX}px)`,
                  transition: trackTransition,
                  touchAction: "pan-y",
                }}
                onTransitionEnd={handleTrackTransitionEnd}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onPointerLeave={handlePointerUp}
              >
                {loopedItems.map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="group shrink-0 select-none overflow-hidden border border-white/10 bg-[#080808] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff003c]/35 hover:shadow-[0_0_24px_rgba(255,0,60,0.14)]"
                    style={{ width: cardWidth > 0 ? `${cardWidth}px` : "100%" }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`Prévia do projeto ${item.title}`}
                        fill
                        unoptimized
                        draggable={false}
                        className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.92)_100%)]" />
                      <div className="absolute inset-0 bg-[#ff003c]/0 transition-colors duration-500 group-hover:bg-[#ff003c]/10" />
                    </div>
                    <div className="relative p-5 sm:p-6">
                      <div className="mb-4 h-px w-14 bg-[#ff003c]/55 transition-all duration-300 group-hover:w-20 group-hover:bg-[#ff003c]" />
                      <h3 className="font-display text-[1.9rem] leading-none tracking-[-0.04em] text-white sm:text-[2.2rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Próximo projeto"
              onClick={moveNext}
              className="carousel-arrow-idle absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#ff003c]/55 bg-black/78 text-[#ff6a8b] backdrop-blur-sm transition-all duration-300 hover:scale-[1.08] hover:border-[#ff003c] hover:bg-[#ff003c]/16 hover:text-white hover:shadow-[0_0_30px_rgba(255,0,60,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8aa7] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:translate-x-1/2"
            >
              <span
                aria-hidden="true"
                className="carousel-arrow-halo pointer-events-none absolute inset-[3px] rounded-full border border-[#ff003c]/35"
              />
              <ArrowRightIcon className="carousel-arrow-icon-right h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
