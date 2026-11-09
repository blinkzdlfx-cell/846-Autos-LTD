import { ArrowUpRight, Music2, Wine, Trophy, Sparkles, CarFront, Truck, Armchair } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import { services } from '../data/site';

const icons = [Armchair, Music2, Wine, Trophy, Sparkles, CarFront, Truck];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">Services at 846</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">Leisure, entertainment and automotive services in one place.</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-lg">From a relaxed lounge visit to DJ entertainment, drinks and a game of snooker, 846 offers different ways to enjoy your time. The business also provides practical automotive services, including car wash, vehicle sales enquiries, and clearing and forwarding. Explore the services below and contact the team for current details or availability.</p>
        </SectionReveal>

        <SectionReveal className="mt-14">
          <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/[.035] p-6 md:grid-cols-3 md:p-8">
            <div><p className="text-xs uppercase tracking-[.22em] text-white/35">01 / Leisure</p><h2 className="mt-3 text-2xl font-medium">Make time to unwind</h2><p className="mt-3 text-sm leading-6 text-white/50">Lounge, bar, drinks and DJ entertainment create the social side of 846.</p></div>
            <div className="border-white/10 md:border-l md:pl-7"><p className="text-xs uppercase tracking-[.22em] text-white/35">02 / Games</p><h2 className="mt-3 text-2xl font-medium">Bring on the game</h2><p className="mt-3 text-sm leading-6 text-white/50">Snooker gives friends and guests a reason to play, practise and compete.</p></div>
            <div className="border-white/10 md:border-l md:pl-7"><p className="text-xs uppercase tracking-[.22em] text-white/35">03 / Automotive</p><h2 className="mt-3 text-2xl font-medium">Take care of the details</h2><p className="mt-3 text-sm leading-6 text-white/50">Car wash, vehicle sales and clearing and forwarding enquiries are also handled by 846 Autos.</p></div>
          </div>
        </SectionReveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index] || Sparkles;
            return (
              <SectionReveal key={service.name} delay={(index % 2) * 0.04}>
                <article className="group relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111] md:min-h-[500px]">
                  {service.video ? (
                    <video
                      src={service.video}
                      poster={service.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-hidden="true"
                      tabIndex={-1}
                      className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                    />
                  ) : (
                    <img src={service.image} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70"/>
                  )}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/10"/>
                  <div className="absolute right-7 top-7 grid size-14 place-items-center rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md"><Icon size={23}/></div>
                  <div className="relative p-7 md:p-9">
                    <p className="text-xs uppercase tracking-[.24em] text-white/45">{service.number} / {service.eyebrow}</p>
                    <h2 className="mt-4 text-3xl font-medium tracking-[-.05em] md:text-4xl">{service.name}</h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">{service.description}</p>
                    <a href={'/contact?service=' + encodeURIComponent(service.name)} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:gap-3">Ask about this service <ArrowUpRight size={16}/></a>
                  </div>
                  <div className="pointer-events-none absolute -bottom-20 -right-16 -z-0 h-64 w-64 rounded-full border border-white/10"/>
                  <div className="pointer-events-none absolute -bottom-12 -right-8 -z-0 h-44 w-44 rounded-full border border-white/10"/>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-20">
          <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[.24em] text-white/35">Planning a visit?</p><h2 className="mt-4 text-4xl font-medium tracking-[-.05em]">Get the details before you arrive.</h2></div><div><p className="text-sm leading-7 text-white/55">Opening arrangements, entertainment schedules, available drinks, snooker access, wash options, vehicle availability and logistics requirements can change. Contact 846 Autos directly and explain what you are looking for. The team can provide the most relevant information for your enquiry.</p><a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">Contact the team <ArrowUpRight size={16}/></a></div></div>
        </SectionReveal>
      </section>
    </div>
  );
}
