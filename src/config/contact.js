/**
 * Canal de llamadas: un solo número.
 * WhatsApp a un grupo: ambos asesores deben estar dentro del mismo grupo y
 * publicar aquí el enlace de invitación (WhatsApp → Grupo → Ajustes → Enlace).
 * WhatsApp no permite que un mensaje a un número “llegue” a otro número;
 * el grupo es la forma habitual de que lo vean varias personas a la vez.
 */
export const contactChannels = {
  phone: "34695056887",
  /** Fallback si aún no hay grupo: chat directo con el número de WhatsApp. */
  whatsappDirect: "34624266445",
  /**
   * Pega el enlace completo, p. ej. https://chat.whatsapp.com/AbCdEfGh...
   * Déjalo vacío para usar solo wa.me al número whatsappDirect.
   */
  whatsappGroupInviteUrl: "",
};

export function buildContactMessage(serviceTitle = "mi situación") {
  return `Hola, necesito orientación con el trámite de ${serviceTitle}. ¿Podemos hablar?`;
}

export function buildTelHref() {
  return `tel:+${contactChannels.phone}`;
}

export function usesWhatsAppGroup() {
  return Boolean(
    contactChannels.whatsappGroupInviteUrl &&
      contactChannels.whatsappGroupInviteUrl.trim().length > 0,
  );
}

/** URL para abrir WhatsApp (grupo si está configurado; si no, chat directo con texto). */
export function buildWhatsAppHref(serviceTitle) {
  const groupUrl = contactChannels.whatsappGroupInviteUrl?.trim();
  if (groupUrl) {
    return groupUrl;
  }
  return `https://wa.me/${contactChannels.whatsappDirect}?text=${encodeURIComponent(
    buildContactMessage(serviceTitle),
  )}`;
}
