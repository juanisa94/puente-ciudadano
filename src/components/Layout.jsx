import { Hero } from "./Hero";
import { LocalFirstPrivacy } from "./LocalFirstPrivacy";
import { Navbar } from "./Navbar";
import { ServicesGrid } from "./ServicesGrid";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <LocalFirstPrivacy />
      </main>
      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-sm leading-6 text-slate-600">
            Fast-Track Admin es un servicio de guía técnica para trámites online.
            No custodiamos certificados, no solicitamos claves y no realizamos
            firmas en nombre del usuario.
          </p>
        </div>
      </footer>
    </div>
  );
}
