import { MessageCircle } from "lucide-react";
import { buildWhatsAppHref, getAdvisorForService } from "../config/contact";

const defaultServiceTitle = "orientación general";

export function FloatingContact() {
  const advisor = getAdvisorForService(defaultServiceTitle);

  return (
    <a
      href={buildWhatsAppHref(advisor.phone, defaultServiceTitle)}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar WhatsApp a Puente Ciudadano"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-emerald-700 shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-100"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
