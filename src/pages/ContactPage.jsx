import { useState } from 'react';
import { ArrowUpRight, Phone, MessageCircle, MapPin, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

const CONTACT_EMAIL = 'enquiries@846autos.com';
const WHATSAPP_NUMBER = '2347033301798';
const DISPLAY_WHATSAPP = '07033301798';

export function ContactPage() {
  const requestedService = new URLSearchParams(window.location.search).get('service') || 'General enquiry';
  const availableServices = ['General enquiry', 'Lounge & Bar', 'DJ & Entertainment', 'Drinks & Refreshments', 'Snooker', 'Car Wash', 'Vehicle Sales', 'Clearing & Forwarding'];
  const [service, setService] = useState(availableServices.includes(requestedService) ? requestedService : 'General enquiry');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const enquiry = [
      '846 Autos website enquiry',
      '',
      'Name: ' + name,
      'Phone: ' + phone,
      'Email: ' + (email || 'Not provided'),
      'Service: ' + service,
      '',
      'Message:',
      message,
    ].join('\n');
    const subject = encodeURIComponent('Website enquiry - ' + service);
    const body = encodeURIComponent(enquiry);
    const destination = event.nativeEvent.submitter?.value;

    if (destination === 'whatsapp') {
      const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(enquiry);
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;
  }

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">Contact 846 Autos Limited</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">Tell us what you have in mind.</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-lg">Whether you are planning a lounge visit, asking about DJ entertainment or drinks, arranging a game of snooker, looking for a car wash, enquiring about a vehicle or seeking clearing and forwarding support, the 846 Autos team can point you in the right direction. Choose the contact method that works best for you or send an enquiry using the form below.</p>
        </SectionReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <SectionReveal><a href="tel:09075505454" className="group block h-full rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:bg-white/[.07]"><span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"><Phone size={21}/></span><p className="mt-7 text-xs uppercase tracking-[.22em] text-white/35">Call us</p><h2 className="mt-2 text-2xl font-medium">09075505454</h2><p className="mt-3 text-sm leading-6 text-white/50">Speak directly with the team about services, availability and general enquiries.</p><span className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">Call 846 Autos <ArrowUpRight size={15}/></span></a></SectionReveal>
          <SectionReveal delay={.04}><a href={'https://wa.me/' + WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer" className="group block h-full rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:bg-white/[.07]"><span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"><MessageCircle size={21}/></span><p className="mt-7 text-xs uppercase tracking-[.22em] text-white/35">WhatsApp</p><h2 className="mt-2 text-2xl font-medium">{DISPLAY_WHATSAPP}</h2><p className="mt-3 text-sm leading-6 text-white/50">Send a message, share the details of your request and continue the conversation on WhatsApp.</p><span className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">Message on WhatsApp <ArrowUpRight size={15}/></span></a></SectionReveal>
          <SectionReveal delay={.08}><a href={'mailto:' + CONTACT_EMAIL} className="group block h-full rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:bg-white/[.07]"><span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"><Mail size={21}/></span><p className="mt-7 text-xs uppercase tracking-[.22em] text-white/35">Email</p><h2 className="mt-2 break-all text-xl font-medium md:text-2xl">{CONTACT_EMAIL}</h2><p className="mt-3 text-sm leading-6 text-white/50">Send a written enquiry with the information or questions you would like the team to review.</p><span className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">Email 846 Autos <ArrowUpRight size={15}/></span></a></SectionReveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-8">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[.25em] text-white/35">Visit and enquiries</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-.05em]">A direct conversation makes planning easier.</h2>
              <p className="mt-5 text-sm leading-7 text-white/55">If you are visiting for the lounge, bar, DJ entertainment or snooker, contact the team to ask about current arrangements. For car wash, vehicle sales and clearing and forwarding, share what you need so your enquiry can be directed appropriately.</p>
            </SectionReveal>
            <SectionReveal>
              <div className="rounded-3xl border border-white/10 bg-white/[.035] p-7">
                <div className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05]"><MapPin size={20}/></span><div><h3 className="font-medium">Location</h3><p className="mt-2 text-sm leading-6 text-white/55">846 Autos Limited, Lagos, Nigeria.</p><p className="mt-2 text-xs leading-5 text-white/40">Contact the team for precise directions and location details before setting out.</p></div></div>
                <div className="mt-7 flex items-start gap-4 border-t border-white/10 pt-7"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05]"><Clock size={20}/></span><div><h3 className="font-medium">Listed opening hours</h3><dl className="mt-3 space-y-2 text-sm text-white/55"><div className="flex justify-between gap-5"><dt>Monday – Saturday</dt><dd>9:00 AM – 6:00 PM</dd></div><div className="flex justify-between gap-5"><dt>Sunday</dt><dd>Closed</dd></div></dl><p className="mt-3 text-xs text-white/40">For late visits, entertainment arrangements or special service availability, please confirm directly.</p></div></div>
              </div>
            </SectionReveal>
            <SectionReveal>
              <div className="rounded-3xl border border-white/10 p-7">
                <p className="text-xs uppercase tracking-[.22em] text-white/35">Helpful details to include</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-white/55">
                  <li className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-white/65"/>The service you are enquiring about.</li>
                  <li className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-white/65"/>Your preferred date or time, if planning a visit.</li>
                  <li className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-white/65"/>Vehicle or shipment details for automotive and logistics enquiries.</li>
                  <li className="flex gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-white/65"/>A phone number or email where the team can reach you.</li>
                </ul>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal>
            <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-10">
              <div className="mb-8"><p className="text-xs uppercase tracking-[.24em] text-white/35">Send an enquiry</p><h2 className="mt-3 text-3xl font-medium tracking-[-.05em] md:text-4xl">How can we help?</h2><p className="mt-4 text-sm leading-6 text-white/50">Complete the details once, then choose whether to prepare the enquiry in your email app or open WhatsApp with the message filled in. You can review it before sending.</p></div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-white/55">Full name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-white/35 focus:outline-none" placeholder="Your name"/></div>
                  <div><label htmlFor="contact-phone" className="mb-2 block text-xs font-medium text-white/55">Phone number <span aria-hidden="true">*</span></label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-white/35 focus:outline-none" placeholder="Your phone number"/></div>
                </div>
                <div><label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-white/55">Email address <span className="text-white/30">(optional)</span></label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={150} className="w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm text-white placeholder:text-white/25 focus:border-white/35 focus:outline-none" placeholder="you@example.com"/></div>
                <div><label htmlFor="contact-service" className="mb-2 block text-xs font-medium text-white/55">Service of interest</label><select id="contact-service" value={service} onChange={event => setService(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#171717] px-4 py-3.5 text-sm text-white focus:border-white/35 focus:outline-none">{availableServices.map(item => <option key={item} value={item}>{item}</option>)}</select></div>
                <div><label htmlFor="contact-message" className="mb-2 block text-xs font-medium text-white/55">Your message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" required minLength={5} maxLength={3000} rows={6} className="w-full resize-y rounded-xl border border-white/10 bg-white/[.04] px-4 py-3.5 text-sm leading-6 text-white placeholder:text-white/25 focus:border-white/35 focus:outline-none" placeholder="Tell us what you would like to know or arrange..."/></div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button type="submit" value="email" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-white/90"><Mail size={17}/> Prepare email <ArrowUpRight size={15}/></button>
                  <button type="submit" value="whatsapp" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[.04] px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"><MessageCircle size={17}/> Continue on WhatsApp <ArrowUpRight size={15}/></button>
                </div>
                <p className="text-xs leading-5 text-white/35">Email opens your device's default email app with the enquiry addressed to {CONTACT_EMAIL}. WhatsApp opens a prepared message to 846 Autos. In either case, you review and send it from that app; this website does not silently send or store your message.</p>
              </form>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal className="mt-20">
          <div className="border-t border-white/10 pt-10"><p className="text-xs uppercase tracking-[.24em] text-white/35">Before you contact us</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em]">A few useful things to know.</h2><div className="mt-8 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/10 p-6"><h3 className="font-medium">Planning a lounge visit?</h3><p className="mt-3 text-sm leading-6 text-white/50">Ask about current opening arrangements, DJ entertainment and any details relevant to your preferred visit.</p></div><div className="rounded-2xl border border-white/10 p-6"><h3 className="font-medium">Interested in a vehicle?</h3><p className="mt-3 text-sm leading-6 text-white/50">Tell us the model or type you have in mind and request confirmed stock, condition, specifications and pricing.</p></div><div className="rounded-2xl border border-white/10 p-6"><h3 className="font-medium">Need vehicle services?</h3><p className="mt-3 text-sm leading-6 text-white/50">Describe your car wash or clearing and forwarding requirement so the team can advise on the next step.</p></div></div></div>
        </SectionReveal>
      </section>
    </div>
  );
}
