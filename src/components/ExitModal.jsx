export function ExitModal({ procedure, onClose, onConfirm, onPrivacyClick }) {
  if (!procedure) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
    >
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 text-slate-950">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          Salida segura
        </p>

        <h2
          id="exit-modal-title"
          className="mt-3 text-2xl font-bold tracking-tight"
        >
          Vas a salir de Puente Ciudadano
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Vas a salir de Puente Ciudadano para entrar en la Sede Oficial de{" "}
          {procedure.organization}. Comprueba que la URL es segura antes de
          identificarte.
        </p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-500">
            URL oficial que se abrirá
          </p>
          <p className="mt-2 break-all text-sm font-semibold text-slate-900">
            {procedure.officialUrl}
          </p>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          Puente Ciudadano no pedirá tu contraseña ni firmará en tu nombre. La
          identificación se realiza solo dentro de la sede oficial.
        </p>

        <button
          type="button"
          onClick={onPrivacyClick}
          className="mt-4 text-sm font-semibold text-blue-700 underline-offset-4 transition hover:text-blue-900 hover:underline focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          ¿Cómo protegemos tu privacidad?
        </button>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-base font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Volver a Puente Ciudadano
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-5 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Entiendo, ir a la sede oficial
          </button>
        </div>
      </div>
    </div>
  );
}
