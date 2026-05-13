export const advisors = [
  {
    id: "principal",
    label: "Asesor principal",
    phone: "34695056887",
  },
  {
    id: "respaldo",
    label: "Asesor de respaldo",
    phone: "34624266445",
  },
];

export function getAdvisorForService(serviceTitle = "") {
  const seed = Array.from(serviceTitle).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );

  return advisors[seed % advisors.length];
}

export function buildContactMessage(serviceTitle = "mi situación") {
  return `Hola, vengo de la web Sede Veritas y necesito que me orienten con mi situación sobre ${serviceTitle}. ¿Podemos hablar?`;
}

export function buildTelHref(phone) {
  return `tel:${phone}`;
}

export function buildWhatsAppHref(phone, serviceTitle) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    buildContactMessage(serviceTitle),
  )}`;
}
