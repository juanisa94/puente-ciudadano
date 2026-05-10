import { PrivacyPolicy } from "./PrivacyPolicy";

export function PrivacyModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-4 text-slate-950">
        <PrivacyPolicy />

        <div className="mt-7 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-5 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
