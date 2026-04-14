export const portfolioItems = [
  {
    title: "A Aranha",
    frame: "aspect-[4/5] md:aspect-[4/6]",
    accent: "from-[#140005] via-[#2b020f] to-black",
    isAwarded: true,
    award: {
      title: "Tattoo Evento 2024",
      description: "1º lugar - Realismo",
    },
    artworkPosition: "center 24%",
    artwork: "url(/tattoos/tattoo-1.jpg)",
  },
  {
    title: "Médico da Peste",
    frame: "aspect-[4/5] md:aspect-[4/5]",
    accent: "from-black via-[#170005] to-[#25000d]",
    isAwarded: true,
    award: {
      title: "Tattoo Evento 2024",
      description: "1º lugar - Realismo",
    },
    artworkPosition: "center center",
    artwork:
      "radial-gradient(circle at 65% 28%, rgba(255,255,255,0.22), transparent 24%), linear-gradient(160deg, transparent 0 28%, rgba(255,255,255,0.07) 28% 32%, transparent 32% 50%, rgba(255,0,60,0.28) 50% 56%, transparent 56% 100%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.94))",
  },
  {
    title: "Espantalho da Morte",
    frame: "aspect-[4/6] md:aspect-[4/7]",
    accent: "from-[#160208] via-black to-[#1c1c1c]",
    isAwarded: true,
    award: {
      title: "Tattoo Evento 2024",
      description: "1º lugar - Realismo",
    },
    artworkPosition: "center center",
    artwork:
      "radial-gradient(circle at 50% 18%, rgba(255,255,255,0.2), transparent 20%), linear-gradient(180deg, transparent 0 16%, rgba(255,255,255,0.06) 16% 20%, transparent 20% 38%, rgba(255,0,60,0.24) 38% 45%, transparent 45% 100%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.95))",
  },
  {
    title: "A Lacraia",
    frame: "aspect-[4/5] md:aspect-[4/6]",
    accent: "from-[#1a0007] via-[#090909] to-black",
    isAwarded: true,
    award: {
      title: "Tattoo Evento 2024",
      description: "1º lugar - Realismo",
    },
    artworkPosition: "center center",
    artwork:
      "radial-gradient(circle at 42% 34%, rgba(255,255,255,0.18), transparent 26%), linear-gradient(145deg, transparent 0 22%, rgba(255,255,255,0.06) 22% 26%, transparent 26% 54%, rgba(255,0,60,0.22) 54% 58%, transparent 58% 100%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.96))",
  },
] as const;

export const styles = [
  {
    title: "BLACKWORK",
    description:
      "Linhas sólidas, sombras profundas e composições marcantes que transformam a pele em uma tela de impacto visual. Cada peça é pensada para criar presença, intensidade e significado, explorando o poder do preto em sua forma mais expressiva.",
  },
  {
    title: "REALISMO",
    description:
      "Retratos, símbolos e elementos da vida real ganham forma na pele através de técnicas avançadas de sombra e profundidade, criando tatuagens que parecem vivas e carregadas de significado.",
  },
  {
    title: "CUSTOM PROJECTS",
    description:
      "Aqui não existem modelos prontos: o processo começa na conversa, evolui no desenho e termina em uma tatuagem exclusiva, criada para refletir a história, a identidade e a visão de quem a carrega.",
  },
  {
    title: "LARGE SCALE",
    description:
      "Braços fechados, costas, pernas ou composições completas exigem planejamento artístico e técnico para que cada elemento se conecte e forme uma obra única em grande escala.",
  },
] as const;

export const whyChooseItems = [
  {
    icon: "spark",
    title: "Criação autoral",
    description:
      "A ideia ganha desenho exclusivo, pensado para a anatomia, para o conceito da peça e para uma leitura forte no corpo real.",
  },
  {
    icon: "shield",
    title: "Técnica com consistência",
    description:
      "Traço, contraste e profundidade são executados com controle para entregar presença visual na sessão e solidez depois da cicatrização.",
  },
  {
    icon: "compass",
    title: "Processo sem ruído",
    description:
      "Do briefing aos cuidados finais, cada etapa é conduzida com direção clara para que o cliente saiba o que esperar antes, durante e depois da sessão.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "IDEIA",
    text: "Referência, conceito e intenção antes da agulha tocar a pele.",
  },
  {
    index: "02",
    title: "DESIGN",
    text: "Composição autoral, escala precisa e leitura do corpo em movimento.",
  },
  {
    index: "03",
    title: "SESSÃO",
    text: "Execução firme, contraste alto e foco absoluto em acabamento.",
  },
  {
    index: "04",
    title: "CICATRIZAÇÃO",
    text: "Orientação clara para preservar preto, textura e definição.",
  },
] as const;

export const tattooCareSections = [
  {
    id: "pre",
    kicker: "antes da sessão",
    title: "Cuidados pré-tatuagem",
    description:
      "Preparar o corpo antes da sessão ajuda na resistência, na leitura da pele e na qualidade da execução do começo ao fim.",
    accent:
      "bg-[radial-gradient(circle_at_top_left,rgba(255,0,60,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_26%)]",
    items: [
      "Durma bem na noite anterior e chegue descansado para a sessão.",
      "Alimente-se antes do horário marcado e mantenha boa hidratação ao longo do dia.",
      "Evite álcool nas 24 horas anteriores e reduza excessos que sensibilizem a pele.",
      "Não vá com a pele queimada de sol, lesionada ou irritada na área da tattoo.",
      "Use roupa confortável e que facilite o acesso à região tatuada.",
    ],
  },
  {
    id: "post",
    kicker: "depois da sessão",
    title: "Cuidados pós-tatuagem",
    description:
      "A cicatrização define brilho, contraste e definição. O cuidado nas primeiras semanas preserva o resultado real da peça.",
    accent:
      "bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,60,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%)]",
    items: [
      "Higienize com sabonete neutro e água fria ou morna, sem esfregar com força.",
      "Aplique a pomada indicada em camada fina, respeitando a orientação passada no estúdio.",
      "Evite sol, piscina, mar, sauna e treino com atrito intenso durante a cicatrização.",
      "Não coce, não arranque casquinhas e não use produtos fora da recomendação.",
      "Mantenha a região limpa, seca e protegida até a pele estabilizar totalmente.",
    ],
  },
] as const;
