"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./TestimonialsSection.module.css";

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

const testimonialItems = [
  {
    title: "Ana Clara",
    previewName: "Ana Clara",
    description:
      "Atendimento impecável do início ao fim. O Sauer pegou minha referência, refinou a ideia e a tattoo ficou ainda melhor do que eu imaginava.",
  },
  {
    title: "Marcos Vinicius",
    previewName: "Marcos",
    description:
      "Traço firme, ambiente organizado e muito cuidado em cada etapa. Foi uma experiência segura e o resultado cicatrizou lindo.",
  },
  {
    title: "Juliana",
    previewName: "Juliana",
    description:
      "Eu queria uma peça com presença e leitura de longe. O projeto veio muito bem resolvido e o acabamento ficou absurdo.",
  },
  {
    title: "Pedro Henrique",
    previewName: "Pedro",
    description:
      "Gostei muito da clareza no processo. Desde o orçamento até a sessão, tudo foi direto, profissional e com muita atenção aos detalhes.",
  },
  {
    title: "Fernanda",
    previewName: "Fernanda",
    description:
      "A composição encaixou perfeitamente no corpo. Dá para sentir que existe estudo, técnica e uma assinatura forte no trabalho.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="avaliacoes" className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div className={styles.kickerRow}>
            <p className={styles.kicker}>AVALIAÇÕES</p>
            <span className={styles.ornament} aria-hidden="true" />
          </div>
          <h2 id="testimonials-heading" className={styles.title}>
            QUEM TATUA AQUI, RECOMENDA.
          </h2>
          <p className={styles.description}>
            Relatos de clientes sobre processo, atendimento e resultado final no estúdio.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className={styles.carousel}
          aria-label="Carrossel de avaliações de clientes"
        >
          <CarouselPrevious
            aria-label="Avaliação anterior"
            className={`${styles.arrow} ${styles.previous}`}
          >
            <ArrowLeftIcon className={styles.arrowIcon} />
          </CarouselPrevious>

          <CarouselContent className="-ml-5 cursor-grab pb-2 active:cursor-grabbing">
            {testimonialItems.map((item) => (
              <CarouselItem
                key={item.title}
                className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className={styles.card}>
                  <div className={styles.visual}>
                    <span className={styles.visualName} aria-hidden="true">
                      {item.previewName}
                    </span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{item.title}</h3>
                    <p className={styles.cardText}>{item.description}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext
            aria-label="Próxima avaliação"
            className={`${styles.arrow} ${styles.next}`}
          >
            <ArrowRightIcon className={styles.arrowIcon} />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
