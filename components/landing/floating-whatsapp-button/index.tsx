"use client";

import styles from "./FloatingWhatsAppButton.module.css";

type FloatingWhatsAppButtonProps = {
  visible: boolean;
};

const whatsappHref =
  "https://api.whatsapp.com/send/?phone=5521971795647&text=Oi%2C+vim+pelo+site+e+gostaria+de+realizar+um+or%C3%A7amento&type=phone_number&app_absent=0";

export function FloatingWhatsAppButton({
  visible,
}: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <span className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <span
          className={`${styles.whatsappRing} absolute inset-[-8px] rounded-full border border-[#ff003c]/50`}
        />
        <span
          className={`${styles.whatsappRing} ${styles.whatsappRingDelay} absolute inset-[-14px] rounded-full border border-[#ff003c]/30`}
        />

        <span
          className={`${styles.whatsappFloat} relative flex h-full w-full items-center justify-center rounded-full border border-[#ff003c]/65 bg-black/88 text-[#ff003c] shadow-[0_0_18px_rgba(255,0,60,0.42),0_0_36px_rgba(255,0,60,0.2)] backdrop-blur-sm`}
        >
          <span className="absolute inset-[3px] rounded-full border border-[#ff003c]/35 shadow-[inset_0_0_12px_rgba(255,0,60,0.3)]" />
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,0,60,0.24),transparent_68%)]" />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={`${styles.whatsappIcon} relative h-7 w-7 fill-current sm:h-8 sm:w-8`}
          >
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.41 2.2 11.83c0 1.73.45 3.42 1.31 4.91L2 22l5.42-1.42a9.8 9.8 0 0 0 4.61 1.17h.01c5.42 0 9.83-4.41 9.83-9.83a9.76 9.76 0 0 0-2.82-7.01Zm-7.02 15.18h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.21.84.86-3.13-.2-.32a8.1 8.1 0 0 1-1.25-4.34c0-4.49 3.66-8.15 8.16-8.15 2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.38 5.76c0 4.49-3.66 8.16-8.06 8.26Zm4.47-6.07c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.31.98 2.47.12.16 1.68 2.56 4.08 3.59.57.25 1.01.39 1.36.49.57.18 1.09.15 1.5.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
