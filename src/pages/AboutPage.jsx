import { ArrowUpRight, Music2, Coffee, Trophy, CarFront, Sparkles } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';
import loungeFullView from '../../real_images/lounge-full-view.webp';

const highlights = [
  { icon: Music2, title: 'Music and atmosphere', text: 'DJ entertainment adds rhythm and energy to the experience, creating a setting for guests to meet, relax and enjoy their time.' },
  { icon: Coffee, title: 'The lounge and bar', text: 'A social space for conversations, refreshments and unhurried moments. Guests can make the lounge the start or the centrepiece of their visit.' },
  { icon: Trophy, title: 'Snooker and friendly competition', text: 'A game gives friends and visitors another way to connect. Whether you play casually or take your shots seriously, snooker is part of the 846 experience.' },
  { icon: CarFront, title: 'Automotive services', text: 'Beyond leisure, 846 Autos supports vehicle-related needs through car wash, vehicle sales enquiries, and clearing and forwarding services.' },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">About 846 Autos Limited</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">One destination. More ways to spend your time.</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 md:text-lg">846 Autos Limited brings leisure, entertainment and automotive services together. The lounge and bar create a place to relax and connect; DJ entertainment and drinks shape the atmosphere; snooker adds a little friendly competition. Alongside the social experience, the business also serves customers looking for car wash, vehicle sales and clearing and forwarding support.</p>
        </SectionReveal>

        <SectionReveal className="mt-16">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] p-8 md:p-14">
            <img
              src={loungeFullView}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover [clip-path:polygon(58%_0,100%_0,100%_100%,34%_100%)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/95 to-[#111]/35" />
            <div className="pointer-events-none absolute -right-12 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-2 -top-14 h-60 w-60 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-[-4rem] top-12 h-36 w-36 rounded-full border border-white/10" />
            <div className="relative grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
              <div><p className="text-xs uppercase tracking-[.25em] text-white/40">The 846 experience</p><h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-.05em] md:text-6xl">Come for the atmosphere. Stay for the experience.</h2></div>
              <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-base">A good visit can mean different things to different people. It might be a relaxed stop at the bar, an evening with music, a few frames of snooker with friends, or taking care of a vehicle while you are nearby. 846 brings these experiences under one business, with a team available to guide each enquiry to the right service.</p>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-20">
          <SectionReveal><p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">What makes up 846</p><h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-.05em] md:text-6xl">A social destination with practical services alongside.</h2></SectionReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {highlights.map(({icon: Icon,title,text}, index) => (
              <SectionReveal key={title} delay={index * 0.04}>
                <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] p-7 md:p-9">
                  <div className="pointer-events-none absolute -bottom-12 -right-8 h-40 w-40 rounded-full border border-white/[.07]" />
                  <div className="relative"><span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.06]"><Icon size={21}/></span><p className="mt-8 text-xs uppercase tracking-[.2em] text-white/35">0{index + 1} / 846</p><h3 className="mt-3 text-2xl font-medium tracking-[-.04em]">{title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">{text}</p></div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal className="mt-20">
          <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-xs uppercase tracking-[.25em] text-white/35">Our approach</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] md:text-4xl">Straightforward service. A welcoming experience.</h2></div>
            <div className="space-y-5 text-sm leading-7 text-white/55"><p>We want visitors to understand what 846 offers and how to reach the team without having to work through a complicated catalogue. The website brings the key services together, explains what each one is for and provides a direct route for questions.</p><p>For services that depend on current availability—such as vehicle stock, specific wash options, entertainment arrangements or clearing and forwarding requirements—customers are encouraged to contact the team for up-to-date information before making plans.</p><a href="/services" className="inline-flex items-center gap-2 text-white/85 hover:text-white">Explore our services <ArrowUpRight size={16}/></a></div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-20">
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-8 text-black md:flex-row md:items-center md:p-12"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-black/45">Get in touch</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] md:text-5xl">What can 846 help you with?</h2><p className="mt-4 max-w-xl text-sm leading-6 text-black/60">Speak with the team about a visit, entertainment, snooker, vehicle care, vehicle sales or logistics support.</p></div><a href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white">Contact 846 <ArrowUpRight size={16}/></a></div>
        </SectionReveal>
      </section>
    </div>
  );
}
