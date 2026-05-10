import { useOfficialProcedures } from "../hooks/useOfficialProcedures";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid({ onSelectProcedure = () => {} }) {
  const { procedures } = useOfficialProcedures();

  return (
    <section id="servicios" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Servicios online
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Elige el trámite y sigue una guía segura
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Solo incluimos procesos que pueden completarse de forma telemática
            cuando la sede o plataforma oficial lo permite.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {procedures.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectProcedure}
            />
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-600">
          Los tiempos son orientativos. Algunos trámites pueden requerir
          validaciones, pagos, anexos o revisión posterior por parte del
          organismo.
        </p>
      </div>
    </section>
  );
}
