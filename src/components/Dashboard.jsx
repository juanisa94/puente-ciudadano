import { useState } from "react";
import { FirstCallSection } from "./FirstCallSection";
import { FloatingContact } from "./FloatingContact";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { PrivacyModal } from "./PrivacyModal";
import { ServiceCatalog } from "./ServiceCatalog";

const trustRules = [
  "No pedimos contraseñas, códigos ni claves por teléfono.",
  "No prometemos resultados administrativos: primero revisamos tu situación.",
  "No somos una sede oficial; somos una guía para ayudarte a encontrar el camino correcto.",
  "Cuando exista un trámite online, te indicamos la sede oficial correspondiente.",
];

const callChecklist = [
  "Explícanos tu caso con tus palabras.",
  "Ten a mano fechas importantes, citas o avisos si los tienes.",
  "No envíes documentos sensibles antes de hablar con un asesor.",
  "Pregunta todo lo que no entiendas; iremos paso a paso.",
];

export function Dashboard() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar onPrivacyClick={() => setIsPrivacyModalOpen(true)} />

      <main>
        <Hero onPrivacyClick={() => setIsPrivacyModalOpen(true)} />

        <FirstCallSection />

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
                Confianza antes que prisa
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Puente Ciudadano empieza escuchando. Nuestro trabajo es ayudarte
                a ordenar tu situación y explicarte el primer paso con claridad.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustRules.map((rule) => (
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

        <ServiceCatalog />

        <section
          aria-labelledby="checklist-title"
          className="bg-slate-950 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Antes de llamar
              </p>
              <h2
                id="checklist-title"
                className="mt-3 text-3xl font-bold tracking-tight"
              >
                Qué preparar para la primera conversación
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {callChecklist.map((item) => (
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
      </main>

      {isPrivacyModalOpen && (
        <PrivacyModal onClose={() => setIsPrivacyModalOpen(false)} />
      )}

      <FloatingContact />
    </div>
  );
}
