import { ShowcaseCarousel, createPlaceholder } from "../showcase-carosel";

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
    <ShowcaseCarousel
      id="avaliacoes"
      kicker="AVALIACOES"
      title="Quem tatua aqui, recomenda."
      description="Relatos de clientes sobre processo, atendimento e resultado final no estudio."
      regionLabel="Carrossel de avaliacoes de clientes"
      items={testimonialItems}
    />
  );
}
