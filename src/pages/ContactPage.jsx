import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";

const contactChannels = [
  { label: "Phone", icon: Phone },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Email", icon: Mail },
  { label: "Location", icon: MapPin }
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">Contact 846 Autos</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">Let’s get you to the right place.</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">Official contact channels will be published after the owner confirms the details. This keeps the website from displaying incorrect phone numbers, addresses or email accounts.</p>
        </SectionReveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {contactChannels.map(({ label, icon: Icon }) => (
            <div key={label} className="flex min-h-36 items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.04]"><Icon size={19} /></span>
              <div><h2 className="font-medium">{label}</h2><p className="mt-2 text-sm leading-6 text-white/45">Owner confirmation pending</p></div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs leading-5 text-white/35">These are content placeholders for the development stage, not active contact links.</p>
      </section>
    </div>
  );
}
