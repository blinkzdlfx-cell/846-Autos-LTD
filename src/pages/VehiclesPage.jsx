import { ArrowUpRight, CarFront, ClipboardCheck, Gauge, ShieldCheck, CalendarDays } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

const steps = [
  { icon: MessageSquareIcon, title: 'Tell us what you need', text: 'Share the make, model, budget range or vehicle type you have in mind. If you are open to options, explain what matters most to you.' },
  { icon: ClipboardCheck, title: 'Confirm current availability', text: 'The team can discuss the vehicles currently available and provide the latest confirmed details, specifications and pricing.' },
  { icon: CalendarDays, title: 'Arrange the next step', text: 'Once you have the information you need, speak with the team about inspection, viewing arrangements and the purchase process.' },
];
function MessageSquareIcon(props) { return <CarFront {...props}/>; }

export function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">Vehicle sales</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">A clearer route to your next vehicle.</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-lg">846 Autos handles vehicle sales enquiries for customers looking for their next car. Rather than showing a static list that may become outdated, this page gives you a direct route to ask about current stock, confirm important details and discuss the right next step with the team.</p>
        </SectionReveal>

        <SectionReveal className="mt-12">
          <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
            <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-[#111] md:min-h-[340px]">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85" alt="Modern vehicle exterior" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-70"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/5"/>
              <p className="absolute bottom-6 left-6 text-sm font-medium text-white/85">Vehicle sales enquiries</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <div className="relative min-h-[160px] overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
                <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=85" alt="Vehicle detail" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-60"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                <p className="absolute bottom-5 left-5 text-sm font-medium">Explore vehicle options</p>
              </div>
              <div className="relative min-h-[160px] overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85" alt="Car on the road" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-60"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                <p className="absolute bottom-5 left-5 text-sm font-medium">Ask about current availability</p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-14">
            <div className="pointer-events-none absolute -right-10 -top-12 h-72 w-72 rounded-full border border-white/10"/><div className="pointer-events-none absolute -right-2 top-0 h-52 w-52 rounded-full border border-white/10"/><div className="pointer-events-none absolute right-10 top-10 h-32 w-32 rounded-full border border-white/10"/>
            <div className="relative grid gap-10 md:grid-cols-[.85fr_1.15fr] md:items-end">
              <div><span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"><CarFront size={26}/></span><p className="mt-8 text-xs uppercase tracking-[.24em] text-white/40">Vehicle enquiries</p><h2 className="mt-3 text-4xl font-medium tracking-[-.05em] md:text-6xl">Start with what matters to you.</h2></div>
              <div className="space-y-5 text-sm leading-7 text-white/55"><p>Tell us the type of vehicle you are interested in, your preferred make or model, and any requirements you would like the team to consider. You can also ask about a specific vehicle you have seen or discuss available alternatives.</p><p>Vehicle stock, prices and specifications can change. Always confirm availability, mileage, condition, documentation and other important details directly with 846 Autos before making a decision or payment.</p><a href="/contact?service=Vehicle%20Sales" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Enquire about vehicles <ArrowUpRight size={16}/></a></div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-20">
          <SectionReveal><p className="text-xs uppercase tracking-[.24em] text-white/35">How to enquire</p><h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-.05em] md:text-6xl">Three simple steps to get started.</h2></SectionReveal>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {steps.map(({icon: Icon,title,text}, index) => <SectionReveal key={title} delay={index * .04}><article className="h-full rounded-3xl border border-white/10 bg-white/[.035] p-7"><span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"><Icon size={21}/></span><p className="mt-8 text-xs uppercase tracking-[.2em] text-white/35">0{index + 1}</p><h3 className="mt-3 text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-white/55">{text}</p></article></SectionReveal>)}
          </div>
        </div>

        <SectionReveal className="mt-20">
          <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[.24em] text-white/35">What to ask about</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em]">Get the information you need to make an informed decision.</h2></div><div className="grid grid-cols-2 gap-3 text-sm text-white/60"><div className="rounded-2xl border border-white/10 p-4"><Gauge size={19}/><p className="mt-3">Mileage and specifications</p></div><div className="rounded-2xl border border-white/10 p-4"><ShieldCheck size={19}/><p className="mt-3">Condition and documentation</p></div><div className="rounded-2xl border border-white/10 p-4"><CalendarDays size={19}/><p className="mt-3">Viewing arrangements</p></div><div className="rounded-2xl border border-white/10 p-4"><ClipboardCheck size={19}/><p className="mt-3">Price and availability</p></div></div></div>
        </SectionReveal>
      </section>
    </div>
  );
}
