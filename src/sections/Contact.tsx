import { Mail } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import { siteConfig } from '../constants/siteConfig';

export const Contact = () => (
  <section id="contact" className="bg-white py-20 sm:py-24" aria-labelledby="contact-heading">
    <Container>
      <div className="rounded-[2rem] bg-brand-navy p-8 text-white sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-mint">Contact</p>
            <h2 id="contact-heading" className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight sm:text-5xl">
              Find out where AI can save your team time.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Book a workflow audit and discover practical opportunities to improve efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <PrimaryButton href={`mailto:${siteConfig.email}`} className="bg-white !text-brand-teal hover:bg-brand-mint hover:!text-brand-navy">
              Contact T1N0.ai
            </PrimaryButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-mint hover:text-brand-mint focus:outline-none focus:ring-4 focus:ring-brand-mint/40"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
