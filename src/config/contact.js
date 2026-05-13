/**
 * Separación de canales (Marco Veritas):
 * - Voz → solo tel:+voicePhoneDigits (34695056887)
 * - Escritura WhatsApp → una de dos cosas (nunca el número de voz):
 *   1) Si hay whatsAppGroupInviteUrl: abrimos el GRUPO (varios asesores ven el mismo chat).
 *   2) Si está vacío: wa.me solo al whatsAppMessagesDigits (34624266445).
 */

export const contactChannels = {
  voicePhoneDigits: "34695056887",
  whatsAppMessagesDigits: "34624266445",
  /**
   * Enlace de invitación al grupo (WhatsApp → grupo → invitar por enlace).
   * Ambos asesores deben estar en el grupo. Los clientes entran aquí y escriben;
   * todos los miembros ven los mensajes en el grupo.
   * Déjelo vacío ("") si queréis usar solo mensajes privados wa.me al número de arriba.
   */
  whatsAppGroupInviteUrl:
    "https://chat.whatsapp.com/L2zrhSNjgkBCzXuNKJ6RY9",
};

export function formatVoicePhoneDisplay() {
  const d = contactChannels.voicePhoneDigits;
  const national = d.startsWith("34") ? d.slice(2) : d;
  return `+34 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
}

export function formatWhatsAppPhoneDisplay() {
  const d = contactChannels.whatsAppMessagesDigits;
  const national = d.startsWith("34") ? d.slice(2) : d;
  return `+34 ${national.slice(0, 3)} ${national.slice(3, 6)} ${national.slice(6)}`;
}

export function usesWhatsAppGroup() {
  return Boolean(contactChannels.whatsAppGroupInviteUrl?.trim());
}

export function getWhatsAppGroupInviteUrl() {
  return contactChannels.whatsAppGroupInviteUrl?.trim() ?? "";
}

export function buildContactMessage(serviceTitle = "mi situación") {
  return `Hola, escribo desde la web y necesito orientación tranquila sobre ${serviceTitle}. ¿Podemos hablar cuando podáis?`;
}

export function buildTelHref() {
  return `tel:+${contactChannels.voicePhoneDigits}`;
}

/** Destino único del botón WhatsApp de la web (grupo si está configurado). */
export function buildWhatsAppHref(serviceTitle) {
  const groupUrl = contactChannels.whatsAppGroupInviteUrl?.trim();
  if (groupUrl) {
    return groupUrl;
  }
  const query = encodeURIComponent(buildContactMessage(serviceTitle));
  return `https://wa.me/${contactChannels.whatsAppMessagesDigits}?text=${query}`;
}

/** wa.me al número de mensajes (para “opción privada” en el modal si hay grupo). */
export function buildWhatsAppDirectHref(serviceTitle) {
  const query = encodeURIComponent(buildContactMessage(serviceTitle));
  return `https://wa.me/${contactChannels.whatsAppMessagesDigits}?text=${query}`;
}
