export function Hero({ onPrivacyClick }) {
  return (
    <section id="inicio" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
            Asesoría inicial por teléfono para trámites oficiales
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Te ayudamos a entender qué trámite necesitas
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Extranjería, ayudas económicas, familia, formación y trabajo. Nos
            cuentas tu situación por teléfono y te orientamos con calma antes de
            iniciar cualquier gestión.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-slate-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Pedir orientación gratuita
            </a>

            <button
              type="button"
              onClick={onPrivacyClick}
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
            >
              ¿Cómo protegemos tu privacidad?
            </button>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            No pedimos contraseñas, no copiamos documentos sensibles y no
            firmamos en tu nombre.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m9.5 12 1.7 1.7L15 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold tracking-tight">
            Primero escuchamos tu caso
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            Puente Ciudadano funciona como una guía inicial. Te ayudamos a
            ordenar la información, detectar el área correcta y evitar pasos
            innecesarios antes de entrar en una sede oficial.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Primero hablamos contigo por teléfono.",
              "No hacemos promesas sobre resultados administrativos.",
              "Si hay trámite online, te indicamos la sede oficial correspondiente.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.32a1 1 0 0 1-1.42 0L3.29 9.274a1 1 0 1 1 1.414-1.414l4.04 4.04 6.54-6.604a1 1 0 0 1 1.42-.006Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-6 text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
