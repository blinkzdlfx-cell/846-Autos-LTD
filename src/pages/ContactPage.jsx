import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">
            Contact 846 Autos
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.94] tracking-[-.065em] md:text-8xl">
            Let’s get you to the right place.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Reach 846 Autos Limited through our official channels. Whether you are interested in
            vehicle sales, car wash, lounge & bar, snooker, or clearing & forwarding, we are ready
            to assist you.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Official contact channels</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:bg-white/[.06] transition">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p className="mt-1 text-sm text-white/50">
                    <a href="tel:09075505454" className="text-white hover:text-white/80 transition">
                      09075505454
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-white/40">Available Mon–Sat, 9am–6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:bg-white/[.06] transition">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">WhatsApp</h3>
                  <p className="mt-1 text-sm text-white/50">
                    <a
                      href="https://wa.me/07033301798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80 transition"
                    >
                      07033301798
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-white/40">Send us a message anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:bg-white/[.06] transition">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="mt-1 text-sm text-white/45">enquiries@846autos.com</p>
                  <p className="mt-1 text-xs text-white/40">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Visit us</h2>
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:bg-white/[.06] transition">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium text-white">Business address</h3>
                <p className="mt-1 text-sm text-white/45">846 Autos Limited</p>
                <p className="mt-1 text-xs text-white/40">Lagos, Nigeria</p>
                <p className="mt-1 text-xs text-white/40">Address pending owner confirmation</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6 hover:bg-white/[.06] transition">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-medium text-white">Opening hours</h3>
                <dl className="mt-2 space-y-2 text-sm text-white/50">
                  <div className="flex justify-between">
                    <dt>Monday – Saturday</dt>
                    <dd>9:00 AM – 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Send a message</h2>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6 md:p-8">
              <form className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white focus:border-white/30 focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white focus:border-white/30 focus:outline-none transition"
                      placeholder="08012345678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white focus:border-white/30 focus:outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Service of interest
                  </label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white focus:border-white/30 focus:outline-none transition">
                    <option>Vehicle Sales</option>
                    <option>Car Wash</option>
                    <option>Lounge & Bar</option>
                    <option>Snooker</option>
                    <option>Clearing & Forwarding</option>
                    <option>General enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-white focus:border-white/30 focus:outline-none transition"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-black font-medium hover:bg-white/90 transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="grid gap-6 md:grid-cols-3 text-xs text-white/35">
            <div>
              <h4 className="mb-3 text-white font-medium">Quick links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/vehicles" className="hover:text-white transition">
                    Vehicles
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-white font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-white font-medium">Follow us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="rounded-full border border-white/10 bg-white/[.03] p-2 hover:bg-white/[.06] transition"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/10 bg-white/[.03] p-2 hover:bg-white/[.06] transition"
                  aria-label="Instagram"
                >
                  <span className="size-5 rounded-full border border-white/10 bg-white/[.03] flex items-center justify-center">
                    <span className="size-2.5 rounded-full bg-white" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
