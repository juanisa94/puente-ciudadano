import { MessageCircle } from "lucide-react";
import { buildWhatsAppHref } from "../config/contact";

const defaultServiceTitle = "orientación general";

export function FloatingContact() {
  return (
    <a
      href={buildWhatsAppHref(defaultServiceTitle)}
      target="_blank"
      rel="noopener noreferrer"
      title="Abrir invitación al grupo de WhatsApp (no usa el chat directo con un número)"
      aria-label="Abrir grupo de WhatsApp de Puente Ciudadano"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-emerald-700 shadow-lg shadow-slate-950/10 transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-100"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
