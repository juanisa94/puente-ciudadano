import { Hero } from "./Hero";
import { LocalFirstPrivacy } from "./LocalFirstPrivacy";
import { Navbar } from "./Navbar";
import { ServicesGrid } from "./ServicesGrid";

export function FastTrackLanding() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <LocalFirstPrivacy />
    </main>
  );
}
