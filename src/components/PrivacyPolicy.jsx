import {
  ArrowUpRight,
  DatabaseZap,
  Eye,
  FileCheck2,
  Laptop,
  ShieldCheck,
} from "lucide-react";

const guarantees = [
  {
    title: "Transparencia total y datos mínimos",
    icon: Eye,
    text: "Te explicamos qué ocurre antes de cada paso. La web está diseñada para pedir lo mínimo: solo lo necesario para orientarte y llevarte a la sede oficial correcta.",
  },
  {
    title: 'Arquitectura "local-first"',
    icon: Laptop,
    text: "Local-first significa que no centralizamos datos sensibles. La primera orientación se hace por teléfono y no tenemos un almacén de claves ni documentos personales.",
  },
  {
    title: "Datos tratados",
    icon: DatabaseZap,
    text: "Solo trabajamos con datos técnicos anónimos. Nunca pedimos ni guardamos datos fiscales, académicos o de salud.",
  },
  {
    title: "Salida segura",
    icon: ArrowUpRight,
    text: "Antes de salir hacia una sede oficial, mostramos un aviso para que compruebes el organismo y la dirección. Así sabes cuándo estás dejando Puente Ciudadano.",
  },
  {
    title: "Derechos RGPD",
    icon: FileCheck2,
    text: "Nuestra protección principal es la minimización: si no necesitamos un dato personal para guiarte, no lo pedimos. La navegación está pensada para ser privada desde el inicio.",
  },
];

export function PrivacyPolicy() {
  return (
    <section aria-labelledby="privacy-policy-title" className="bg-white">
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Compromiso de seguridad
            </p>
            <h2
              id="privacy-policy-title"
              className="mt-2 text-2xl font-bold tracking-tight text-slate-950"
            >
              Cómo protegemos tu privacidad
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              La claridad es más importante que la letra pequeña: Puente Ciudadano te
              guía, pero no guarda tus claves ni tus datos sensibles.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {guarantees.map((guarantee) => {
            const Icon = guarantee.icon;

            return (
              <article
                key={guarantee.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {guarantee.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {guarantee.text}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
