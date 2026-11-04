import { ArrowLeft, ShieldCheck, FileText, Phone } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

export function PrivacyPolicyPage() {
  const effectiveDate = '4 November 2026';

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal className="mb-12">
          <div className="flex items-center gap-3 text-white/40 mb-4">
            <ShieldCheck size={18} />
            <span className="text-xs font-semibold uppercase tracking-[.28em]">Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-.05em] md:text-5xl">
            Your privacy matters to us
          </h1>
          <p className="mt-6 text-lg text-white/55 leading-7">
            This privacy policy explains how 846 Autos Limited collects, uses, discloses, and
            protects information when you visit our website or contact us. It was last updated on{' '}
            <span className="text-white font-medium">{effectiveDate}</span>.
          </p>
        </SectionReveal>

        <div className="space-y-10 text-sm leading-7 text-white/55">
          <SectionReveal>
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              1. Information we collect
            </h2>
            <p className="mb-4">
              We may collect the following types of information when you interact with 846 Autos
              Limited:
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                <strong>Personal information:</strong> name, phone number, WhatsApp number, and
                email address when you call, message, or submit our contact form.
              </li>
              <li>
                <strong>Enquiry details:</strong> information about the service you are interested
                in (vehicle sales, car wash, lounge & bar, snooker, or clearing & forwarding).
              </li>
              <li>
                <strong>Usage data:</strong> anonymised information about how you navigate our
                website, including pages visited and device type.
              </li>
            </ul>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              2. How we use your information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Respond to your enquiries about our services.</li>
              <li>
                Provide vehicle sales, car wash, lounge & bar, snooker, and clearing & forwarding
                information.
              </li>
              <li>Improve our website and customer experience.</li>
              <li>Send service-related updates, only with your consent.</li>
            </ul>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              3. Sharing and disclosure
            </h2>
            <p className="mb-4">
              846 Autos Limited does not sell or rent your personal information to third parties. We
              may share information only when:
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Required by law or a valid legal request.</li>
              <li>
                Necessary to protect the rights, safety, or property of 846 Autos Limited or others.
              </li>
              <li>You have given us explicit consent to do so.</li>
            </ul>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              4. Data security
            </h2>
            <p className="mb-4">
              We implement reasonable technical and organisational measures to protect your
              information from unauthorised access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </SectionReveal>

          <SectionReveal className="mb-10 mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              5. Your rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-3 list-disc pl-6">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction or deletion of your personal information.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Lodge a complaint with us if you believe your privacy has been mishandled.</li>
            </ul>
            <p className="mt-5">
              To exercise these rights, contact us at <strong>09075505454</strong> or WhatsApp{' '}
              <strong>07033301798</strong>.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              6. Cookies and tracking
            </h2>
            <p className="mb-4">
              Our website may use cookies and similar technologies to improve functionality and
              analyse traffic. You can control cookie preferences through your browser settings.
              Disabling cookies may affect some features of the site.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              7. Links to third-party websites
            </h2>
            <p className="mb-4">
              Our website may contain links to external websites. 846 Autos Limited is not
              responsible for the privacy practices or content of those third-party sites. We
              encourage you to read their privacy policies before providing any information.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              8. Children’s privacy
            </h2>
            <p className="mb-4">
              Our services are not directed to children under 13. We do not knowingly collect
              personal information from children. If you believe a child has provided us with
              personal information, please contact us so we can take appropriate steps.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              9. Changes to this policy
            </h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. The effective date at the top of
              this page will reflect the most recent revision. We encourage you to review this
              policy periodically.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-10 mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              10. Contact us
            </h2>
            <p className="mb-4">
              If you have questions about this privacy policy or our data practices, please contact
              846 Autos Limited:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm text-white/50">
                    <a href="tel:09075505454" className="text-white hover:text-white/80 transition">
                      09075505454
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-white/50">
                    <a
                      href="https://wa.me/07033301798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80 transition"
                    >
                      07033301798
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/35">
          <span>846 Autos Limited</span>
          <a href="/" className="hover:text-white transition">
            <ArrowLeft size={14} /> Back to home
          </a>
        </div>
      </section>
    </div>
  );
}
