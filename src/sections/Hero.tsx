import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Container } from '../components/Container';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { WorkflowNetwork } from '../components/WorkflowNetwork';
import { siteConfig } from '../constants/siteConfig';
import { stats } from '../data/features';

export const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section id="hero" ref={ref} className="relative isolate overflow-hidden bg-brand-navy py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(110,231,216,0.14),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(1,101,92,0.2),transparent_32%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-mint">{siteConfig.tagline}</p>
          <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
            Understand AI before you automate.
            <span className="block text-brand-mint">Then build what works.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            For Singapore teams who feel unsure where to start, T1N0.ai explains the options, maps the workflow, and builds practical AI systems only where they make sense.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#contact">Book a Clarity Call</PrimaryButton>
            <SecondaryButton href="#projects" className="border-white/20 bg-white/10 text-white hover:border-brand-mint hover:text-brand-mint">
              See Real Work
            </SecondaryButton>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <dt className="text-sm leading-6 text-slate-300">{stat.label}</dt>
                <dd className="mt-2 font-heading text-3xl font-semibold text-white">
                  {inView ? <CountUp end={stat.value} duration={1.8} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <WorkflowNetwork />
      </Container>
    </section>
  );
};
