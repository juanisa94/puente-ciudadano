/**
 * Separación estricta de canales (Marco Veritas):
 * - Voz / llamada → siempre tel:+34695056887
 * - Mensajes WhatsApp → siempre wa.me/34624266445 (nunca el número de voz)
 *
 * No intercambiar estos valores: mezclarlos genera abandono por desconfianza.
 */

export const contactChannels = {
  /** Llamadas de voz (único número para tel:) */
  voicePhoneDigits: "34695056887",
  /** Solo mensajes por WhatsApp (único número para wa.me) */
  whatsAppMessagesDigits: "34624266445",
};

/** Legible para pie de pantalla / persona mayor (+34 XXX XXX XXX). */
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

export function buildContactMessage(serviceTitle = "mi situación") {
  return `Hola, escribo desde la web y necesito orientación tranquila sobre ${serviceTitle}. ¿Podemos hablar cuando podáis?`;
}

export function buildTelHref() {
  return `tel:+${contactChannels.voicePhoneDigits}`;
}

export function buildWhatsAppHref(serviceTitle) {
  const query = encodeURIComponent(buildContactMessage(serviceTitle));
  return `https://wa.me/${contactChannels.whatsAppMessagesDigits}?text=${query}`;
}
