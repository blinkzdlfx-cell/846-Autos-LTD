import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { services } from "../data/site";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">Services at 846</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">Make room for good times.</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">Start with the lounge and bar, stay for snooker, and explore the automotive services available across the 846 business.</p>
        </SectionReveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <SectionReveal key={service.name}>
              <article className={`group relative min-h-[380px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.03] md:min-h-[460px] ${index < 2 ? "md:min-h-[520px]" : ""}`}>
                <img src={service.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="text-xs uppercase tracking-[.24em] text-white/45">0{index + 1} / Service</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-.04em] md:text-4xl">{service.name}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">{service.description}</p>
                  <a href="/contact" className="mt-5 inline-flex items-center gap-1 text-sm text-white/80 transition hover:gap-2 hover:text-white">Enquiry details <ArrowUpRight size={15} /></a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
