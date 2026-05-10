export function LocalFirstPrivacy() {
  const guarantees = [
    "No solicitamos la contraseña de tu certificado.",
    "No subimos ni copiamos certificados digitales.",
    "No realizamos firmas en nombre del usuario.",
    "Tú revisas y confirmas cada envío en la sede oficial.",
  ];

  return (
    <section id="privacidad" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Privacidad local-first
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tu certificado es tu llave. Solo tú la usas.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Funcionamos como una guía técnica en tiempo real: te acompañamos
              durante el trámite, pero el acceso se realiza desde tu propio
              equipo y con tu certificado digital local.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Es como una llave física: nosotros te indicamos qué puerta abrir y
              en qué orden, pero la llave nunca sale de tu mano.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 10V8a5 5 0 0 1 10 0v2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 10h12a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 14v3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold">Control verificable</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Antes de identificarte, comprueba que estás en una sede oficial
                  y que el navegador te pide elegir tu certificado desde el
                  propio equipo.
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {guarantees.map((guarantee) => (
                <li key={guarantee} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                  <span className="text-sm leading-6 text-slate-200">
                    {guarantee}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
