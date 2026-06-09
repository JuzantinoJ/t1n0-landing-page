import { AnimatedReveal } from '../components/AnimatedReveal';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { features } from '../data/features';

export const WhyT1N0 = () => (
  <section id="about" className="bg-brand-white py-20 sm:py-24" aria-labelledby="about-heading">
    <Container>
      <SectionHeader
        eyebrow="Why T1N0.ai"
        title="AI implementation with business discipline."
        description="The work is designed to be understandable, useful, and maintainable after handover."
      />
      <AnimatedReveal className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-slate">{feature.description}</p>
            </article>
          );
        })}
      </AnimatedReveal>
    </Container>
  </section>
);
