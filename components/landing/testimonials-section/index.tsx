"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { SectionTitle } from "../section-title";

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

function createPlaceholder(label: string, from: string, to: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#bg)" />
      <g opacity="0.24" stroke="#ff8797" stroke-width="1">
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

const testimonialItems = [
  {
    title: "Ana Clara",
    description:
      "Atendimento impecavel do inicio ao fim. O Sauer pegou minha referencia, refinou a ideia e a tattoo ficou ainda melhor do que eu imaginava.",
    image: createPlaceholder("Ana Clara", "#1a0509", "#4a0d1d"),
  },
  {
    title: "Marcos Vinicius",
    description:
      "Traco firme, ambiente organizado e muito cuidado em cada etapa. Foi uma experiencia segura e o resultado cicatrizou lindo.",
    image: createPlaceholder("Marcos", "#120406", "#360814"),
  },
  {
    title: "Juliana",
    description:
      "Eu queria uma peca com presença e leitura de longe. O projeto veio muito bem resolvido e o acabamento ficou absurdo.",
    image: createPlaceholder("Juliana", "#1b060a", "#5c1023"),
  },
  {
    title: "Pedro Henrique",
    description:
      "Gostei muito da clareza no processo. Desde o orçamento ate a sessao, tudo foi direto, profissional e com muita atencao aos detalhes.",
    image: createPlaceholder("Pedro", "#120305", "#44101f"),
  },
  {
    title: "Fernanda",
    description:
      "A composicao encaixou perfeitamente no corpo. Da para sentir que existe estudo, tecnica e uma assinatura forte no trabalho.",
    image: createPlaceholder("Fernanda", "#180507", "#4f0e1f"),
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="avaliacoes"
      className="section-frame overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="relative overflow-hidden border border-[#EF0020]/10 bg-[#040404]">
        <div className="absolute left-0 top-0 h-2 w-24 bg-[#EF0020] shadow-[0_0_24px_rgba(239,0,32,0.82)] sm:w-32" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.14),transparent_28%)]" />
        <div className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <SectionTitle
            kicker="AVALIACOES"
            title="Quem tatua aqui, recomenda."
            description="Relatos de clientes sobre processo, atendimento e resultado final no estudio."
          />

          <Carousel
            opts={{ align: "start", loop: true }}
            className="mt-10"
            aria-label="Carrossel de avaliacoes de clientes"
          >
            <CarouselPrevious
              aria-label="Avaliacao anterior"
              className="carousel-arrow-idle absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#EF0020]/55 bg-black/78 text-[#ff8797] backdrop-blur-sm transition-all duration-300 hover:scale-[1.08] hover:border-[#EF0020] hover:bg-[#EF0020]/16 hover:text-white hover:shadow-[0_0_30px_rgba(239,0,32,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8797] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 sm:-translate-x-1/2"
            >
              <span
                aria-hidden="true"
                className="carousel-arrow-halo pointer-events-none absolute inset-[3px] rounded-full border border-[#EF0020]/35"
              />
              <ArrowLeftIcon className="carousel-arrow-icon-left h-5 w-5" />
            </CarouselPrevious>

            <CarouselContent className="-ml-5 cursor-grab pb-2 active:cursor-grabbing">
              {testimonialItems.map((item) => (
                <CarouselItem
                  key={item.title}
                  className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="group h-full select-none overflow-hidden border border-[#EF0020]/10 bg-[#080808] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF0020]/35 hover:shadow-[0_0_24px_rgba(239,0,32,0.14)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`Prévia da avaliacao de ${item.title}`}
                        fill
                        unoptimized
                        draggable={false}
                        className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.92)_100%)]" />
                      <div className="absolute inset-0 bg-[#EF0020]/0 transition-colors duration-500 group-hover:bg-[#EF0020]/10" />
                    </div>
                    <div className="relative p-5 sm:p-6">
                      <div className="mb-4 h-px w-14 bg-[#EF0020]/55 transition-all duration-300 group-hover:w-20 group-hover:bg-[#EF0020]" />
                      <h3 className="font-display text-[1.9rem] leading-none tracking-[-0.04em] text-white sm:text-[2.2rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext
              aria-label="Proxima avaliacao"
              className="carousel-arrow-idle absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#EF0020]/55 bg-black/78 text-[#ff8797] backdrop-blur-sm transition-all duration-300 hover:scale-[1.08] hover:border-[#EF0020] hover:bg-[#EF0020]/16 hover:text-white hover:shadow-[0_0_30px_rgba(239,0,32,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8797] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 sm:translate-x-1/2"
            >
              <span
                aria-hidden="true"
                className="carousel-arrow-halo pointer-events-none absolute inset-[3px] rounded-full border border-[#EF0020]/35"
              />
              <ArrowRightIcon className="carousel-arrow-icon-right h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
