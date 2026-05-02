const whatsappPhone = "5521971795647";

const defaultWhatsAppMessage =
  "Oi, vim pelo site e gostaria de realizar um orçamento.";

export function createWhatsAppHref(message = defaultWhatsAppMessage) {
  return `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export const defaultWhatsAppHref = createWhatsAppHref();
