import Image from "next/image";
import { defaultWhatsAppHref } from "../whatsapp";

export function FooterSection() {
  return (
    <footer className="section-frame border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.28em] text-white/45 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a
            href="https://instagram.com/sauer.tattoos"
            className="transition-colors hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href={defaultWhatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-3">
          <p>© 2026 sauer.tattoos</p>
          <Image
            src="/raptor.png"
            alt="Raptor"
            width={28}
            height={28}
            className="opacity-40"
          />
        </div>
      </div>
    </footer>
  );
}
