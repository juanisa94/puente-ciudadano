import { ServiceIcon } from "./ServiceIcon";

function getPriceLabel(price) {
  if (price.type === "fixed") {
    return `Precio cerrado: ${price.amount}`;
  }

  return `Desde ${price.amount}`;
}

export function ServiceCard({ service, onSelect = () => {} }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-slate-300">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
        <ServiceIcon type={service.icon} />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
          100% online
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
          {service.estimatedTime}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>

      <p className="mt-3 flex-1 text-base leading-7 text-slate-700">
        {service.description}
      </p>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-500">
          Condición económica
        </p>
        <p className="mt-1 text-lg font-bold text-slate-950">
          {getPriceLabel(service.price)}
        </p>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        {service.securityNotice}
      </p>

      <button
        type="button"
        onClick={() => onSelect(service)}
        aria-label={`Abrir trámite oficial de ${service.title} en ${service.organization}`}
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
      >
        Ir a sede oficial
      </button>
    </article>
  );
}
