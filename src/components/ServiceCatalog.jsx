import {
  BadgeCheck,
  BriefcaseBusiness,
  FileUser,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Home,
  Landmark,
  PhoneCall,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { ContactChoiceModal } from "./ContactChoiceModal";

const serviceAreas = [
  {
    title: "Extranjería e Integración",
    description:
      "Te ayudamos a entender qué camino puede encajar con tu situación antes de iniciar un trámite oficial.",
    icon: FileUser,
    services: [
      {
        title: "Arraigo",
        icon: BadgeCheck,
        situation:
          "Si llevas tiempo en España y necesitas saber si puedes regularizar tu situación.",
      },
      {
        title: "NIE / TIE",
        icon: FileUser,
        situation:
          "Si necesitas identificarte, renovar tu tarjeta o entender qué documento corresponde a tu caso.",
      },
      {
        title: "Nacionalidad",
        icon: ShieldCheck,
        situation:
          "Si quieres saber si ya puedes iniciar el proceso para solicitar la nacionalidad española.",
      },
      {
        title: "Reagrupación familiar",
        icon: UsersRound,
        situation:
          "Si quieres traer o regularizar a un familiar y necesitas revisar los requisitos básicos.",
      },
      {
        title: "Asilo",
        icon: HeartHandshake,
        situation:
          "Si necesitas orientación inicial sobre protección internacional y próximos pasos seguros.",
      },
      {
        title: "Huellas",
        icon: BadgeCheck,
        situation:
          "Si ya tienes una resolución o cita pendiente y necesitas saber cómo preparar el proceso.",
      },
      {
        title: "Canje de carnet",
        icon: FileUser,
        situation:
          "Si tienes un permiso de conducir extranjero y quieres saber si puedes canjearlo en España.",
      },
    ],
  },
  {
    title: "Apoyo Económico y Vivienda",
    description:
      "Revisamos contigo qué ayuda puede tener sentido antes de que pierdas tiempo en formularios confusos.",
    icon: HandCoins,
    services: [
      {
        title: "Ingreso Mínimo Vital",
        icon: HandCoins,
        situation:
          "Si tus ingresos son bajos y necesitas saber si puedes pedir una ayuda mensual.",
      },
      {
        title: "Paro",
        icon: BriefcaseBusiness,
        situation:
          "Si has dejado de trabajar y quieres saber cómo consultar o solicitar tu prestación.",
      },
      {
        title: "Subsidio",
        icon: HandCoins,
        situation:
          "Si no tienes derecho al paro o ya lo agotaste y necesitas revisar otras opciones.",
      },
      {
        title: "Bono eléctrico",
        icon: Landmark,
        situation:
          "Si necesitas reducir el coste de la luz y quieres comprobar si cumples las condiciones.",
      },
      {
        title: "Ayuda alquiler",
        icon: Home,
        situation:
          "Si tienes dificultades para pagar la vivienda y buscas orientación sobre ayudas disponibles.",
      },
    ],
  },
  {
    title: "Familia y Bienestar",
    description:
      "Acompañamiento claro para trámites que afectan a cuidados, salud y estabilidad familiar.",
    icon: UsersRound,
    services: [
      {
        title: "Maternidad / Paternidad",
        icon: HeartHandshake,
        situation:
          "Si ha nacido o va a nacer un hijo y necesitas entender tus permisos o prestaciones.",
      },
      {
        title: "Familia numerosa",
        icon: UsersRound,
        situation:
          "Si quieres saber si tu unidad familiar puede solicitar o renovar este reconocimiento.",
      },
      {
        title: "Dependencia",
        icon: HeartHandshake,
        situation:
          "Si una persona necesita apoyo diario y quieres conocer los primeros pasos de la solicitud.",
      },
      {
        title: "Tarjeta sanitaria",
        icon: ShieldCheck,
        situation:
          "Si necesitas acceso sanitario o revisar cómo obtener la tarjeta correspondiente.",
      },
    ],
  },
  {
    title: "Formación y Trabajo",
    description:
      "Guía inicial para documentos y gestiones útiles en estudios, empleo y vida laboral.",
    icon: GraduationCap,
    services: [
      {
        title: "Becas MEC",
        icon: GraduationCap,
        situation:
          "Si estudias o tienes hijos estudiando y necesitas saber cómo preparar la solicitud.",
      },
      {
        title: "Declaración de la Renta",
        icon: Landmark,
        situation:
          "Si necesitas orientación para acceder a tus datos fiscales o entender el proceso online.",
      },
      {
        title: "Vida laboral",
        icon: BriefcaseBusiness,
        situation:
          "Si te piden tu historial de trabajo o quieres comprobar tus periodos cotizados.",
      },
      {
        title: "Número de Seguridad Social",
        icon: ShieldCheck,
        situation:
          "Si vas a trabajar, estudiar prácticas o iniciar un trámite que requiere este número.",
      },
    ],
  },
];

function ServiceItem({ service, onContactClick }) {
  const Icon = service.icon;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Si te encuentras en esta situación: {service.situation}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onContactClick(service.title)}
        className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
      >
        <PhoneCall className="h-4 w-4" aria-hidden="true" />
        Consultar mi situación por teléfono
      </button>
    </article>
  );
}

export function ServiceCatalog() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(null);

  return (
    <section id="servicios" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Asesoría inicial por teléfono
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Cuéntanos tu caso y te orientamos con calma
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            No necesitas saber el nombre exacto del trámite. Elige el área que
            más se parece a tu situación y revisamos contigo el primer paso.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {serviceAreas.map((area) => {
            const AreaIcon = area.icon;

            return (
              <section
                key={area.title}
                aria-labelledby={`${area.title.replaceAll(" ", "-").toLowerCase()}-title`}
                className="rounded-3xl border border-slate-200 bg-white/70 p-5 lg:p-7"
              >
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <AreaIcon className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <div>
                    <h3
                      id={`${area.title.replaceAll(" ", "-").toLowerCase()}-title`}
                      className="text-2xl font-bold tracking-tight text-slate-950"
                    >
                      {area.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {area.services.map((service) => (
                    <ServiceItem
                      key={service.title}
                      service={service}
                      onContactClick={setSelectedServiceTitle}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <ContactChoiceModal
        serviceTitle={selectedServiceTitle}
        onClose={() => setSelectedServiceTitle(null)}
      />
    </section>
  );
}
