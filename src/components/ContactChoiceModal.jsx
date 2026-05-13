import { ClipboardCopy, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  buildContactMessage,
  buildTelHref,
  buildWhatsAppHref,
  formatVoicePhoneDisplay,
  formatWhatsAppPhoneDisplay,
} from "../config/contact";

export function ContactChoiceModal({ serviceTitle, onClose }) {
  const [copyFeedback, setCopyFeedback] = useState("idle");

  if (!serviceTitle) {
    return null;
  }

  async function handleCopySuggestedMessage() {
    try {
      await navigator.clipboard.writeText(buildContactMessage(serviceTitle));
      setCopyFeedback("ok");
      setTimeout(() => setCopyFeedback("idle"), 2200);
    } catch {
      setCopyFeedback("err");
      setTimeout(() => setCopyFeedback("idle"), 2200);
    }
  }

  const copyLabel =
    copyFeedback === "ok"
      ? "Texto copiado"
      : copyFeedback === "err"
        ? "No se pudo copiar"
        : "Copiar texto sugerido para WhatsApp";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 px-4 py-6 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-choice-title"
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-lg shadow-slate-950/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Contacto tranquilo
            </p>
            <h2
              id="contact-choice-title"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-950"
            >
              ¿Prefiere llamarnos o escribirnos?
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-200"
            aria-label="Cerrar opciones de contacto"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-700">
          Primera orientación gratuita sobre{" "}
          <strong>{serviceTitle}</strong>. Elija lo que le resulte más cómodo.
        </p>

        <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
          <span className="font-semibold text-slate-800">Llamada de voz:</span>{" "}
          {formatVoicePhoneDisplay()}
          <br />
          <span className="font-semibold text-slate-800">
            WhatsApp (mensajes):
          </span>{" "}
          {formatWhatsAppPhoneDisplay()} — otro número, solo escritura.
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href={buildTelHref()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Llamar para orientación gratuita</span>
            <span className="sr-only">
              {" "}
              al número de voz {formatVoicePhoneDisplay()}
            </span>
          </a>

          <a
            href={buildWhatsAppHref(serviceTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title={`WhatsApp mensajes al ${formatWhatsAppPhoneDisplay()}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Escribir por WhatsApp</span>
            <span className="sr-only">
              {" "}
              al número solo mensajes {formatWhatsAppPhoneDisplay()}, distinto
              del teléfono de llamadas
            </span>
          </a>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs leading-5 text-slate-700">
            Si quiere, puede pegar un texto corto en WhatsApp; también puede
            enviar solo “hola” y le iremos preguntando con calma.
          </p>
          <button
            type="button"
            onClick={handleCopySuggestedMessage}
            className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <ClipboardCopy className="h-4 w-4 shrink-0" aria-hidden="true" />
            {copyLabel}
          </button>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Puente Ciudadano no es una sede oficial. Sus datos están protegidos
          según nuestra política Local-First. No comparta contraseñas ni
          documentos sensibles en este primer contacto.
        </p>
      </div>
    </div>
  );
}
