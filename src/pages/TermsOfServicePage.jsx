import { ArrowLeft, FileText, ShieldCheck, Phone } from 'lucide-react';
import { SectionReveal } from '../components/SectionReveal';

export function TermsOfServicePage() {
  const effectiveDate = '5 November 2026';

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <section className="mx-auto max-w-4xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <SectionReveal className="mb-12">
          <div className="flex items-center gap-3 text-white/40 mb-4">
            <FileText size={18} />
            <span className="text-xs font-semibold uppercase tracking-[.28em]">
              Terms of Service
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-[-.05em] md:text-5xl">
            Terms of use
          </h1>
          <p className="mt-6 text-lg text-white/55 leading-7">
            Welcome to 846 Autos Limited. These terms govern your use of our website. By accessing
            or using this site, you agree to these terms. Last updated{' '}
            <span className="text-white font-medium">{effectiveDate}</span>.
          </p>
        </SectionReveal>

        <div className="space-y-10 text-sm leading-7 text-white/55">
          <SectionReveal>
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              1. Acceptance of terms
            </h2>
            <p className="mb-4">
              By accessing or using the 846 Autos Limited website, you agree to be bound by these
              Terms of Service, all applicable laws and regulations, and agree that you are
              responsible for compliance with any applicable local laws. If you do not agree with
              any of these terms, you are prohibited from using or accessing this site.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              2. Use of the website
            </h2>
            <p className="mb-4">
              You may use this website for lawful purposes only. You agree not to:
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                Use the site in any way that violates any applicable local, national, or
                international law or regulation.
              </li>
              <li>Attempt to interfere with the proper working of the website.</li>
              <li>Transmit any malicious software, viruses, or harmful code.</li>
              <li>
                Impersonate any person or entity or misrepresent your affiliation with any person or
                entity.
              </li>
            </ul>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              3. Services offered
            </h2>
            <p className="mb-4">
              846 Autos Limited presents information about vehicle sales, car wash, lounge & bar,
              snooker, and clearing & forwarding services. All service descriptions, pricing, and
              availability are subject to confirmation. We reserve the right to modify or
              discontinue any service at any time without notice.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              4. Vehicle listings and inventory
            </h2>
            <p className="mb-4">
              Any vehicle information displayed on this website is for illustrative purposes only
              unless expressly confirmed as available stock. Prices, specifications, and
              availability are subject to change without notice. Please contact us directly to
              confirm current inventory before making any purchase decision.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              5. Intellectual property
            </h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, and software, is
              the property of 846 Autos Limited or its content suppliers and is protected by
              copyright and other intellectual property laws. You may not reproduce, distribute, or
              create derivative works from any content without prior written permission.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              6. Disclaimer of warranties
            </h2>
            <p className="mb-4">
              The website and all content are provided on an “as is” and “as available” basis
              without warranties of any kind, either express or implied, including but not limited
              to implied warranties of merchantability, fitness for a particular purpose, or
              non-infringement. 846 Autos Limited does not warrant that the website will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              7. Limitation of liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by law, 846 Autos Limited shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or any loss of data,
              use, goodwill, or other intangible losses, resulting from your access to or use of or
              inability to access or use the website.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              8. Indemnification
            </h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless 846 Autos Limited and its officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              costs, or expenses, including reasonable legal fees, arising out of or related to your
              breach of these terms or your use of the website.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              9. Governing law
            </h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with the laws of Nigeria,
              without regard to its conflict of law provisions. Any disputes arising under these
              terms shall be subject to the exclusive jurisdiction of the courts located in Lagos,
              Nigeria.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-4">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              10. Changes to these terms
            </h2>
            <p className="mb-4">
              We reserve the right to revise these terms at any time. The effective date at the top
              of this page will reflect the most recent revision. Your continued use of the website
              after any such changes constitutes your acceptance of the new terms.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-10 mb-10">
            <h2 className="mb-4 text-xl font-semibold text-white tracking-[-.03em]">
              11. Contact us
            </h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact 846 Autos Limited:
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
                <ShieldCheck size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-white/50">
                    <a
                      href="https://wa.me/2347033301798"
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
