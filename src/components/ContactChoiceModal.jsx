import { ClipboardCopy, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  buildContactMessage,
  buildTelHref,
  buildWhatsAppHref,
  getWhatsAppGroupInviteUrl,
  usesWhatsAppGroup,
} from "../config/contact";

export function ContactChoiceModal({ serviceTitle, onClose }) {
  const [messageCopyFeedback, setMessageCopyFeedback] = useState("idle");
  const [linkCopyFeedback, setLinkCopyFeedback] = useState("idle");

  if (!serviceTitle) {
    return null;
  }

  const isGroup = usesWhatsAppGroup();
  const groupInviteUrl = getWhatsAppGroupInviteUrl();

  async function handleCopySuggestedMessage() {
    try {
      await navigator.clipboard.writeText(buildContactMessage(serviceTitle));
      setMessageCopyFeedback("ok");
      setTimeout(() => setMessageCopyFeedback("idle"), 2200);
    } catch {
      setMessageCopyFeedback("err");
      setTimeout(() => setMessageCopyFeedback("idle"), 2200);
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

  const messageCopyLabel =
    messageCopyFeedback === "ok"
      ? "Mensaje copiado"
      : messageCopyFeedback === "err"
        ? "No se pudo copiar"
        : "Copiar mensaje sugerido para pegar en el grupo";

  const linkCopyLabel =
    linkCopyFeedback === "ok"
      ? "Enlace copiado"
      : linkCopyFeedback === "err"
        ? "No se pudo copiar"
        : "Copiar enlace del grupo";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 px-4 py-6 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-choice-title"
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Contacto seguro
            </p>
            <h2
              id="contact-choice-title"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-950"
            >
              ¿Cómo prefieres hablar?
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
          Elige el canal que prefieras para recibir orientación sobre{" "}
          <strong>{serviceTitle}</strong>.
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href={buildTelHref()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar para asesoría gratuita
          </a>

          <a
            href={buildWhatsAppHref(serviceTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title="Invitación al grupo de WhatsApp"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </div>

        {isGroup ? (
          <div className="mt-4 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="text-xs leading-5 text-slate-700">
                Este botón abre la{" "}
                <strong className="text-slate-900">invitación al grupo</strong>
                , no un chat oculto con un solo número. Si en el grupo tenéis
                activado que las personas nuevas tienen que ser aceptadas o han
                de escribir a un administrador,{" "}
                <strong className="text-slate-900">
                  ese primer mensaje puede llegar como chat privado a un admin
                  (a veces al núm. donde está la cuenta gestora).
                </strong>{" "}
                Eso depende solo de cómo está configurado el grupo en
                WhatsApp. Cuando la persona ya está dentro del grupo, lo que
                escriba en el grupo lo ven todos los miembros.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopySuggestedMessage}
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              <ClipboardCopy className="h-4 w-4 shrink-0" aria-hidden="true" />
              {messageCopyLabel}
            </button>
            <button
              type="button"
              onClick={handleCopyGroupLink}
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              <ClipboardCopy className="h-4 w-4 shrink-0" aria-hidden="true" />
              {linkCopyLabel}
            </button>
          </div>
        ) : null}

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Líneas de atención oficial. Sus datos están protegidos bajo nuestra
          política Local-First. No compartas contraseñas, códigos ni documentos
          sensibles por este primer contacto.
        </p>
      </div>
    </div>
  );
}
