import { useState } from "react";
import { educationalErrorMessages } from "../constants/errors";
import {
  certificateSecurityRules,
  getCertificateReadinessChecklist,
} from "../services/digitalCertificate";
import { ExitModal } from "./ExitModal";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { PrivacyModal } from "./PrivacyModal";
import { ServicesGrid } from "./ServicesGrid";

export function Dashboard() {
  const readinessChecklist = getCertificateReadinessChecklist();
  const [exitProcedure, setExitProcedure] = useState(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const errorMessages = Object.values(educationalErrorMessages);

  function handleConfirmExit() {
    if (!exitProcedure) {
      return;
    }

    window.open(exitProcedure.officialUrl, "_blank", "noopener,noreferrer");
    setExitProcedure(null);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar onPrivacyClick={() => setIsPrivacyModalOpen(true)} />

      <main>
        <Hero onPrivacyClick={() => setIsPrivacyModalOpen(true)} />

        <section
          aria-labelledby="security-rules-title"
          className="border-y border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Reglas de seguridad
              </p>
              <h2
                id="security-rules-title"
                className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
              >
                Local-first por diseño
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Puente Ciudadano guía el proceso, pero no custodia claves ni ejecuta
                firmas. El usuario mantiene el control de su certificado en todo
                momento.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {certificateSecurityRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm font-semibold leading-6 text-slate-800">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid onSelectProcedure={setExitProcedure} />

        <section
          aria-labelledby="checklist-title"
          className="bg-slate-950 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Antes de continuar
              </p>
              <h2
                id="checklist-title"
                className="mt-3 text-3xl font-bold tracking-tight"
              >
                Comprueba tu entorno local
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {readinessChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="error-help-title"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Si algo falla
              </p>
              <h2
                id="error-help-title"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-950"
              >
                Mensajes claros antes de continuar
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {errorMessages.map((error) => (
                <article
                  key={error.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-bold text-slate-950">{error.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {error.message}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ExitModal
        procedure={exitProcedure}
        onClose={() => setExitProcedure(null)}
        onConfirm={handleConfirmExit}
        onPrivacyClick={() => setIsPrivacyModalOpen(true)}
      />

      {isPrivacyModalOpen && (
        <PrivacyModal onClose={() => setIsPrivacyModalOpen(false)} />
      )}
    </div>
  );
}
