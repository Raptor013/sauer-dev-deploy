const faqItems = [
  {
    question: "Como funciona o orçamento?",
    answer:
      "Voce envia sua ideia, referencias, tamanho aproximado e local do corpo. A partir disso, o projeto e avaliado para alinhar proposta, complexidade, disponibilidade e faixa de valor.",
  },
  {
    question: "Preciso chegar com o desenho pronto?",
    answer:
      "Nao. Voce pode trazer uma referencia, conceito ou direcao visual. O projeto final e desenvolvido para encaixar melhor no corpo, no estilo desejado e na leitura da tattoo.",
  },
  {
    question: "Quanto tempo dura a sessao?",
    answer:
      "Depende do tamanho, nivel de detalhe e regiao tatuada. Algumas tattoos sao resolvidas em uma sessao, enquanto projetos maiores podem ser divididos em etapas.",
  },
  {
    question: "Quais cuidados devo ter antes da tatuagem?",
    answer:
      "Chegue alimentado, bem hidratado e descansado. Evite alcool antes da sessao e siga as orientacoes passadas no atendimento para a pele chegar nas melhores condicoes.",
  },
  {
    question: "E depois da sessao, como fica a cicatrizacao?",
    answer:
      "Os cuidados pos-tattoo influenciam diretamente no resultado. Voce recebe orientacoes claras de limpeza, hidratacao e protecao para preservar contraste e definicao durante a cicatrizacao.",
  },
  {
    question: "Posso remarcar uma sessao?",
    answer:
      "Sim, desde que o aviso seja feito com antecedencia dentro das condicoes combinadas no agendamento. Isso ajuda a reorganizar a agenda sem comprometer o fluxo do estudio.",
  },
];

function FaqIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function FaqSection() {
  return (
    <section className="section-frame overflow-hidden px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border border-[#EF0020]/10 bg-[#040404]">
          <div className="absolute left-0 top-0 h-2 w-36 bg-[#EF0020] shadow-[0_0_26px_rgba(239,0,32,0.9)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,0,32,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(239,0,32,0.1),transparent_26%)]" />

          <div className="relative grid gap-8 px-4 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-10 lg:py-10 xl:px-12">
            <div className="flex items-start">
              <div className="w-full">
                <p className="section-kicker text-[#ff8797]">FAQ</p>
                <h2 className="font-display mt-4 max-w-xl text-[2.2rem] leading-none tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Dúvidas que costumam aparecer antes da sessão.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/58 sm:text-base">
                  Um resumo direto sobre orçamento, processo, preparo e
                  cicatrização para deixar tudo mais claro antes do contato.
                </p>

                <div className="mt-8 grid gap-px bg-white/10 sm:max-w-xl">
                  <div className="bg-black px-4 py-5 sm:px-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/36">
                      atendimento
                    </p>
                    <p className="mt-3 font-display text-2xl leading-none tracking-[-0.04em] text-white">
                      Processo claro do primeiro contato ate a cicatrizacao.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group overflow-hidden border border-[#EF0020]/10 bg-black/90 open:border-[#EF0020]/30 open:bg-[#070707]"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-4 sm:px-5 sm:py-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#EF0020]/28 bg-[#EF0020]/8 text-[#ff6a8b] transition-colors duration-300 group-open:border-[#EF0020]/55 group-open:bg-[#EF0020]/12 group-open:text-white">
                      {/* <FaqIcon /> */}
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/34">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mt-2 font-display text-[1.6rem] leading-none tracking-[-0.04em] text-white sm:text-[1.9rem]">
                        {item.question}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-[#ff8aa7] transition-all duration-300 group-open:rotate-45 group-open:border-[#EF0020]/35 group-open:text-white">
                      <FaqIcon />
                    </div>
                  </summary>

                  <div className="border-t border-white/10 px-4 py-4 sm:px-5 sm:py-5">
                    <p className="max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
