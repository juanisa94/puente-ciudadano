import { MessageCircle } from "lucide-react";
import {
  buildWhatsAppHref,
  formatWhatsAppPhoneDisplay,
  usesWhatsAppGroup,
} from "../config/contact";

const defaultServiceTitle = "orientación general";

export function FloatingContact() {
  const isGroup = usesWhatsAppGroup();
  const whatsDisplay = formatWhatsAppPhoneDisplay();

  const title = isGroup
    ? `Grupo de WhatsApp del equipo (varios asesores leen el chat). Llamadas de voz: otro número.`
    : `WhatsApp mensajes (${whatsDisplay}). La llamada de voz es otro número.`;

  const ariaLabel = isGroup
    ? "Abrir grupo de WhatsApp del equipo donde pueden leer varios asesores"
    : `Abrir WhatsApp para escribir mensajes al ${whatsDisplay}`;

  return (
    <a
      href={buildWhatsAppHref(defaultServiceTitle)}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={ariaLabel}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-md shadow-slate-950/10 transition-colors hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-200"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
