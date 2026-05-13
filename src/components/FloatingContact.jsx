import { MessageCircle } from "lucide-react";
import {
  buildWhatsAppHref,
  formatWhatsAppPhoneDisplay,
} from "../config/contact";

const defaultServiceTitle = "orientación general";

export function FloatingContact() {
  const whatsDisplay = formatWhatsAppPhoneDisplay();

  return (
    <a
      href={buildWhatsAppHref(defaultServiceTitle)}
      target="_blank"
      rel="noopener noreferrer"
      title={`WhatsApp mensajes (${whatsDisplay}). La llamada de voz es otro número.`}
      aria-label={`Abrir WhatsApp para escribir mensajes al ${whatsDisplay}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-md shadow-slate-950/10 transition-colors hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-200"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
