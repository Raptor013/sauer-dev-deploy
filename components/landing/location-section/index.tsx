import { montserrat } from "@/app/fonts";
import styles from "./LocationSection.module.css";

const address = "Avenida Presidente Vargas, 1146, Centro, Rio de Janeiro - RJ";

const mapsQuery = encodeURIComponent(address);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export function LocationSection() {
  return (
    <section id="localizacao" className={styles.section} aria-labelledby="location-heading">
      <div className={styles.panel}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.kicker}>LOCALIZAÇÃO</p>
            <h2 id="location-heading" className={styles.title}>
              No coração do Centro do Rio.
            </h2>
            <p className={styles.description}>
              Um espaço pensado para receber cada projeto com atenção, clareza e
              foco total no processo. O estúdio fica em uma área central, com
              acesso prático e referência fácil.
            </p>

            <address className={styles.addressCard}>
              <p className={styles.addressLabel}>ENDEREÇO</p>
              <p className={styles.addressMain}>
                Avenida Presidente Vargas, 1146
              </p>
              <p className={styles.addressDetail}>Centro, Rio de Janeiro - RJ</p>
            </address>
          </div>

          <div className={styles.mapColumn}>
            <div className={styles.mapFrame}>
              <iframe
                title="Mapa do estúdio em Avenida Presidente Vargas, 1146, Centro, Rio de Janeiro - RJ"
                src={mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
            </div>

            <div className={styles.mapActions}>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className={styles.mapsLink}
              >
                ABRIR NO GOOGLE MAPS
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className={`${montserrat.className} ${styles.routeButton}`}
              >
                VER ROTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
