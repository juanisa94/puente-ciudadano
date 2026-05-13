export function Navbar({ onPrivacyClick }) {
  return (
    <header className="border-b border-slate-200 bg-white/95">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-200"
          aria-label="Puente Ciudadano, inicio"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
            PC
          </span>
          <span className="text-base font-bold tracking-tight text-slate-950">
            Puente Ciudadano
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#servicios"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Servicios
          </a>
          <a
            href="#privacidad"
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Privacidad
          </a>
          <a
            href="#servicios"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Hablar con un asesor
          </a>
          <button
            type="button"
            onClick={onPrivacyClick}
            className="text-sm font-semibold text-slate-600 underline-offset-4 transition hover:text-slate-950 hover:underline focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            ¿Cómo protegemos tu privacidad?
          </button>
        </div>
      </nav>
    </header>
  );
}
