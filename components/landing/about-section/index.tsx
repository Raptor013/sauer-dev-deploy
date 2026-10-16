import Image from "next/image";
import styles from "./AboutSection.module.css";

const benefits = [
  {
    icon: "pencil",
    title: "CRIAÇÃO AUTORAL",
    description: "Uma composição exclusiva para cada corpo.",
  },
  {
    icon: "person",
    title: "EXPERIÊNCIA INDIVIDUAL",
    description: "Um cliente por dia. Tempo e atenção ao seu projeto.",
  },
  {
    icon: "diamond",
    title: "TÉCNICA + ESTRUTURA",
    description: "Cuidado em cada etapa, do planejamento à cicatrização.",
  },
] as const;

function BenefitIcon({ icon }: { icon: (typeof benefits)[number]["icon"] }) {
  if (icon === "pencil") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="m8 33 24-24 7 7-24 24-9 2 2-9Z" />
        <path d="m28 13 7 7M8 33l7 7" />
      </svg>
    );
  }

  if (icon === "person") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="14" r="8" />
        <path d="M8 43v-5c0-9 7-15 16-15s16 6 16 15v5H8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 8h28l8 12-22 23L2 20 10 8Z" />
      <path d="M2 20h44M10 8l7 12 7-12 7 12 7-12M17 20l7 23 7-23" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className={styles.aboutSection} aria-labelledby="about-heading">
      <div className={styles.aboutShell}>
        <div className={styles.featurePanel}>
          <div className={styles.featureGrid}>
            <div className={styles.photoColumn}>
              <figure className={styles.photoFrame}>
                <Image
                  src="/images/fred-sobre.png"
                  alt="Fred Sauer tatuando um cliente em seu estúdio"
                  fill
                  sizes="(max-width: 900px) 90vw, (max-width: 1472px) 36vw, 30rem"
                  className={styles.photo}
                />
                <figcaption className={styles.photoCaption}>RIO DE JANEIRO, RJ</figcaption>
              </figure>
            </div>

            <div className={styles.artistCopy}>
              <p className={styles.kicker}>O ARTISTA</p>
              <h2 id="about-heading" className={styles.artistTitle}>
                FRED SAUER TRADUZ{" "}<br />
                IDENTIDADE EM ARTE PERMANENTE.
              </h2>
              <p className={styles.intro}>
                Tatuador carioca com linguagem autoral, Fred constrói cada projeto a partir da história de quem vai eternizar essa arte no corpo.
              </p>
              <div className={styles.specialties}>
                <p>Realismo em Black &amp; Grey, contraste e profundidade.</p>
                <p>Atenção individual do conceito à cicatrização.</p>
              </div>
              <p className={styles.closing}>Arte criada para pertencer ao corpo.</p>
            </div>
          </div>
        </div>

        <div className={styles.reasonsPanel}>
          <h3 className={styles.reasonsHeading}>
            <span>POR QUE ESCOLHER</span> O SAUER?
          </h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <article key={benefit.title} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <BenefitIcon icon={benefit.icon} />
                </div>
                <div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
