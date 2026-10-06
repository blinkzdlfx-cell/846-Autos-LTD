import { ArrowDown, ArrowUpRight, Menu, MoveUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { AnimatedText } from "./components/AnimatedText";
import { Button } from "./components/ui/button";
import { HeroCarousel } from "./components/HeroCarousel";
import { SectionReveal } from "./components/SectionReveal";
import { heroSlides, navItems, services } from "./data/site";

function Section({ children, className = "", id }) {
  return <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-32 ${className}`}>{children}</section>;
}

function ServiceCard({ service, index }) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }} className="group relative min-h-[410px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.035] md:min-h-[470px]">
      <img src={service.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-1000 ease-out group-hover:scale-105 group-hover:opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />
      <div className="relative z-10 flex h-full flex-col p-7 md:p-8">
        <div className="flex items-start justify-between text-xs uppercase tracking-[.24em] text-white/50"><span>{service.number}</span><span>846</span></div>
        <div className="mt-auto">
          <h3 className="max-w-md text-3xl font-medium tracking-[-.04em] md:text-4xl">{service.name}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/60 md:text-base">{service.description}</p>
          <a href="#contact" className="mt-6 inline-flex items-center text-sm font-medium text-white transition group-hover:gap-2">Enquire <ArrowUpRight size={15} className="ml-1.5" /></a>
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="overflow-hidden bg-[#070707] text-white">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="group flex items-center gap-2" aria-label="846 Autos home"><span className="text-xl font-black tracking-[-.08em]">846</span><span className="h-1.5 w-1.5 rounded-full bg-white/70 transition group-hover:scale-125" /></a>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1.5 backdrop-blur-xl md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-xs font-medium text-white/60 transition hover:bg-white/[.08] hover:text-white">{item.label}</a>)}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2.5 text-xs font-medium text-white/80 backdrop-blur-md transition hover:bg-white/10 md:inline-flex">Contact <MoveUpRight size={14} /></a>
          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="grid size-11 place-items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
        {menuOpen && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-4 rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-white/75 transition hover:bg-white/[.06] hover:text-white">{item.label}<ArrowUpRight size={15} /></a>)}
          </motion.nav>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[94svh] items-end overflow-hidden border-b border-white/10">
          <HeroCarousel slides={heroSlides} />
          <Section className="relative z-10 pb-16 pt-40 md:pb-24">
            <div className="max-w-6xl">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
                <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-white/55 md:text-xs">
                  <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 backdrop-blur-md">846 Autos Limited</span><span className="text-white/30">Working demo</span>
                </div>
                <h1 className="max-w-6xl text-[clamp(3.4rem,9.2vw,9rem)] font-semibold leading-[.86] tracking-[-.075em]">More than<br />just <AnimatedText words={["automotive.", "mobility.", "lifestyle.", "experience."]} /></h1>
                <p className="mt-8 max-w-xl text-sm leading-6 text-white/60 md:text-base">A premium digital front door for a business that brings vehicles, movement, care and leisure together.</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}>Explore 846 <ArrowDown size={16} /></Button>
                  <Button variant="outline" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>Start a conversation <ArrowUpRight size={16} /></Button>
                </div>
              </motion.div>
            </div>
          </Section>
        </section>

        <Section className="border-b border-white/10">
          <SectionReveal><div className="grid gap-10 md:grid-cols-[.65fr_1.35fr] md:items-end"><p className="text-xs font-semibold uppercase tracking-[.28em] text-white/35">The 846 approach</p><div><h2 className="max-w-5xl text-4xl font-medium leading-[.98] tracking-[-.055em] md:text-6xl lg:text-7xl">One destination for movement, care, connection and good times.</h2><p className="mt-7 max-w-2xl text-sm leading-6 text-white/50 md:text-base">The site is intentionally structured as a flexible foundation. Verified business details, vehicles and contact channels can be connected as the demo moves toward production.</p></div></div></SectionReveal>
        </Section>

        <Section id="services">
          <SectionReveal><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.28em] text-white/35">What we do</p><h2 className="mt-3 text-5xl font-medium tracking-[-.055em] md:text-7xl">Our services.</h2></div><p className="max-w-sm text-sm leading-6 text-white/45">A modular presentation that can later become individual service pages or dashboard-managed content.</p></div></SectionReveal>
          <div className="grid gap-4 md:grid-cols-2">{services.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}</div>
        </Section>

        <Section id="vehicles" className="border-y border-white/10">
          <SectionReveal><div className="grid gap-12 md:grid-cols-[.85fr_1.15fr] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.28em] text-white/35">Vehicles</p><h2 className="mt-5 text-5xl font-medium leading-[.92] tracking-[-.06em] md:text-7xl">Drive something worth remembering.</h2></div><div className="md:pb-2"><div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 md:p-8"><p className="text-xs uppercase tracking-[.24em] text-white/35">Inventory module</p><p className="mt-4 text-lg leading-7 text-white/65">Vehicle listings are intentionally not fabricated in this demo. Verified inventory can be connected here later with photos, specifications, availability and enquiry actions.</p><span className="mt-6 inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">Ready for real inventory</span></div></div></div></SectionReveal>
        </Section>

        <Section id="experience">
          <SectionReveal><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.12),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(255,255,255,.08),transparent_25%)]" /><div className="relative grid min-h-[520px] gap-10 p-8 md:grid-cols-2 md:p-14"><div className="flex flex-col"><p className="text-xs font-semibold uppercase tracking-[.28em] text-white/35">Beyond the road</p><h2 className="mt-auto max-w-xl text-5xl font-medium leading-[.92] tracking-[-.06em] md:text-7xl">Stay a little longer.</h2></div><div className="flex flex-col justify-end"><p className="max-w-lg text-lg leading-8 text-white/55">From vehicle care to the lounge and snooker, the 846 concept extends beyond the car itself and into the experience around it.</p><div className="mt-8 grid grid-cols-3 gap-2">{["Wash", "Lounge", "Snooker"].map((label) => <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-xs text-white/50">{label}</div>)}</div></div></div></div></SectionReveal>
        </Section>

        <Section id="contact" className="pt-8">
          <SectionReveal><div className="overflow-hidden rounded-[2rem] bg-white p-8 text-black md:p-16"><div className="grid gap-12 md:grid-cols-[1.2fr_.8fr] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.28em] text-black/40">Contact</p><h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[.9] tracking-[-.06em] md:text-7xl">Ready when you are.</h2></div><div><p className="text-sm leading-6 text-black/55">Contact details will be connected once the owner confirms the official phone, WhatsApp, email and social channels.</p><Button variant="dark" className="mt-7">Contact 846 Autos <ArrowUpRight size={16} /></Button></div></div></div></SectionReveal>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs text-white/35 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-2 text-white/60"><span className="font-black tracking-[-.06em]">846</span><span>Autos Limited</span></div><div className="flex flex-wrap gap-x-5 gap-y-2"><span>Demo foundation</span><span>© 2026</span><span>Verified content pending</span></div></div></footer>
    </div>
  );
}
