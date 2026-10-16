import Image from "next/image";
import styles from "./FooterSection.module.css";

export function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src="/images/sauer-logo.webp"
            alt="Sauer Tattoos"
            width={1440}
            height={720}
            sizes="(max-width: 640px) 112px, 152px"
            className={styles.sauerLogo}
          />
          <p className={styles.tagline}>
            ALGUMAS HISTÓRIAS PRECISAM SER ETERNAS.
          </p>
        </div>

        <a
          href="https://instagram.com/sauer.tattoos"
          target="_blank"
          rel="noreferrer"
          className={styles.instagram}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span>@sauer.tattoos</span>
        </a>

        <p className={styles.copyright}>© 2026 SAUER TATTOOS</p>

        <div className={styles.raptorCredit}>
          <span>SITE POR</span>
          <Image
            src="/images/raptor-logo.png"
            alt="Raptor"
            width={1660}
            height={948}
            sizes="(max-width: 640px) 96px, 108px"
            className={styles.raptorLogo}
          />
        </div>
      </div>
    </footer>
  );
}
