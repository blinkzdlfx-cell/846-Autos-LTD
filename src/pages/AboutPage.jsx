import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";
import { services } from "../data/site";

export function AboutPage() {
  const featured = services.filter((service) => ["Lounge & Bar", "Snooker"].includes(service.name));
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">About 846 Autos</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">More than vehicles. A place to spend time.</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">846 Autos brings automotive services and leisure together, with the lounge, bar and snooker experience given a central place alongside vehicle sales, car wash, and clearing & forwarding.</p>
        </SectionReveal>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {featured.map((service, index) => (
            <SectionReveal key={service.name}>
              <article className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.03] md:min-h-[480px]">
                <img src={service.image} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="text-xs uppercase tracking-[.24em] text-white/50">0{index + 1} / 846 experience</p>
                  <h2 className="mt-3 text-4xl font-medium tracking-[-.05em] md:text-5xl">{service.name}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">{service.description}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-6 text-white/50">This website will use verified business information and owner-approved media. No unconfirmed company history, claims or inventory is being presented as fact.</p>
          <a href="/services" className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white">Explore services <ArrowUpRight size={16} /></a>
        </div>
      </section>
    </div>
  );
}
