import { ClipboardCheck, Ear, PhoneCall, SearchCheck } from "lucide-react";

const callSteps = [
  {
    title: "Te escuchamos",
    icon: Ear,
    text: "Nos cuentas tu situación con tus palabras. No necesitas saber el nombre exacto del trámite ni enviar documentos sensibles para empezar.",
  },
  {
    title: "Identificamos el camino",
    icon: SearchCheck,
    text: "Vemos si tu caso encaja mejor en extranjería, ayudas económicas, familia o formación y trabajo.",
  },
  {
    title: "Te orientamos con claridad",
    icon: ClipboardCheck,
    text: "Si podemos ayudarte, te explicamos el siguiente paso y cualquier presupuesto antes de empezar. Sin presión.",
  },
];

export function FirstCallSection() {
  return (
    <section id="primera-llamada" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Primera llamada
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Así será tu primera llamada
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Primero te escuchamos. Antes de hablar de cualquier gestión,
              queremos entender qué te preocupa y qué necesitas resolver.
            </p>

            <a
              href="#servicios"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Hablar con un asesor
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {callSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                    Paso {index + 1}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
