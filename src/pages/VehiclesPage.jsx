import { ArrowUpRight, CarFront } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";

export function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">Vehicle sales</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">The right vehicle starts with the right details.</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">The vehicle catalogue will be published when the owner confirms the available stock, specifications, pricing and photographs.</p>
        </SectionReveal>
        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[.03] p-8 md:p-14">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[.04]"><CarFront size={25} /></div>
          <p className="mt-8 text-xs uppercase tracking-[.24em] text-white/40">Inventory preparation</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-.045em] md:text-5xl">Real listings only. No demo cars presented as available stock.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/55">Once approved details arrive, each listing can include vehicle photos, make and model, year, mileage, condition, price and an enquiry route where those details are supplied.</p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white">Contact 846 Autos <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </div>
  );
}
