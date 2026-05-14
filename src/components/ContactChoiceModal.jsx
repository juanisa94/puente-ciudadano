import { ClipboardCopy, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  buildContactMessage,
  buildTelHref,
  buildWhatsAppDirectHref,
  buildWhatsAppHref,
  formatVoicePhoneDisplay,
  formatWhatsAppPhoneDisplay,
  getWhatsAppGroupInviteUrl,
  usesWhatsAppGroup,
} from "../config/contact";

export function ContactChoiceModal({ serviceTitle, onClose }) {
  const [msgCopyFeedback, setMsgCopyFeedback] = useState("idle");
  const [linkCopyFeedback, setLinkCopyFeedback] = useState("idle");

  const isGroup = usesWhatsAppGroup();

  if (!serviceTitle) {
    return null;
  }

  const groupInviteUrl = getWhatsAppGroupInviteUrl();

  async function handleCopySuggestedMessage() {
    try {
      await navigator.clipboard.writeText(buildContactMessage(serviceTitle));
      setMsgCopyFeedback("ok");
      setTimeout(() => setMsgCopyFeedback("idle"), 2200);
    } catch {
      setMsgCopyFeedback("err");
      setTimeout(() => setMsgCopyFeedback("idle"), 2200);
    }
  }

  async function handleCopyGroupLink() {
    try {
      await navigator.clipboard.writeText(groupInviteUrl);
      setLinkCopyFeedback("ok");
      setTimeout(() => setLinkCopyFeedback("idle"), 2200);
    } catch {
      setLinkCopyFeedback("err");
      setTimeout(() => setLinkCopyFeedback("idle"), 2200);
    }
  }

  const msgCopyLabel =
    msgCopyFeedback === "ok"
      ? "Texto copiado"
      : msgCopyFeedback === "err"
        ? "No se pudo copiar"
        : "Copiar texto para pegar en WhatsApp";

  const linkCopyLabel =
    linkCopyFeedback === "ok"
      ? "Enlace copiado"
      : linkCopyFeedback === "err"
        ? "No se pudo copiar"
        : "Copiar enlace del grupo";

  const whatsPrimaryLabel = isGroup
    ? "Entrar al grupo de WhatsApp del equipo"
    : "Escribir por WhatsApp";

  const whatsPrimarySr = isGroup
    ? "Abrir invitación al grupo de WhatsApp donde pueden leer varios asesores. La llamada de voz sigue siendo otro número."
    : `Abrir WhatsApp al número solo mensajes ${formatWhatsAppPhoneDisplay()}, distinto del teléfono de llamadas`;

  const whatsPrimaryTitle = isGroup
    ? "Grupo del equipo: varios asesores pueden leer el mismo chat"
    : `WhatsApp mensajes al ${formatWhatsAppPhoneDisplay()}`;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-y-contain bg-slate-950/60 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-choice-title"
    >
      <div className="flex min-h-[100dvh] min-h-screen items-center justify-center">
        <div className="relative w-full max-w-md max-h-[min(92dvh,920px)] overflow-y-auto rounded-3xl bg-white shadow-lg shadow-slate-950/10">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-slate-100 bg-white px-5 pt-5 pb-4 sm:px-6 sm:pt-6">
            <div className="min-w-0 pr-2">
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
              className="shrink-0 rounded-full p-2.5 text-slate-600 ring-1 ring-slate-200 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-200"
              aria-label="Cerrar opciones de contacto"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 pb-6 pt-4 sm:px-6">
            <p className="text-sm leading-6 text-slate-700">
              Primera orientación gratuita sobre{" "}
              <strong>{serviceTitle}</strong>. Elija lo que le resulte más cómodo.
            </p>

            <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
              <span className="font-semibold text-slate-800">
                Solo llamadas de voz:
              </span>{" "}
              {formatVoicePhoneDisplay()}
              {isGroup ? (
                <>
                  <br />
                  <span className="font-semibold text-slate-800">
                    WhatsApp (recomendado, equipo):
                  </span>{" "}
                  grupo donde varios asesores ven el mismo chat. No usa el número
                  de llamadas.
                </>
              ) : (
                <>
                  <br />
                  <span className="font-semibold text-slate-800">
                    WhatsApp (mensajes):
                  </span>{" "}
                  {formatWhatsAppPhoneDisplay()} — otro número, solo escritura.
                </>
              )}
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
                title={whatsPrimaryTitle}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{whatsPrimaryLabel}</span>
                <span className="sr-only"> {whatsPrimarySr}</span>
              </a>
            </div>

            {isGroup ? (
              <p className="mt-3 text-center">
                <a
                  href={buildWhatsAppDirectHref(serviceTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-600 underline-offset-4 transition hover:text-slate-950 hover:underline focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  Prefiero escribir en privado al {formatVoicePhoneDisplay()}
                </a>
              </p>
            ) : null}

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs leading-5 text-slate-700">
                {isGroup
                  ? "En el grupo puede pegar un texto corto o decir solo «hola»; le iremos guiando con calma. El enlace del grupo no rellena el mensaje solo: puede copiar el texto de abajo."
                  : "Puede pegar un texto corto en WhatsApp o enviar solo «hola»; le iremos preguntando con calma."}
              </p>
              <button
                type="button"
                onClick={handleCopySuggestedMessage}
                className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                <ClipboardCopy className="h-4 w-4 shrink-0" aria-hidden="true" />
                {msgCopyLabel}
              </button>
              {isGroup ? (
                <button
                  type="button"
                  onClick={handleCopyGroupLink}
                  className="mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  <ClipboardCopy
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  {linkCopyLabel}
                </button>
              ) : null}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Puente Ciudadano no es una sede oficial. Sus datos están
              protegidos según nuestra política Local-First. No comparta
              contraseñas ni documentos sensibles en este primer contacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
