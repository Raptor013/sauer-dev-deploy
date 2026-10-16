const whatsappPhone = "5521990937740";

const defaultWhatsAppMessage =
  "Olá, Sauer! Vim pelo site e gostaria de fazer um orçamento.";

export function createWhatsAppHref(message = defaultWhatsAppMessage) {
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppHref = createWhatsAppHref();
