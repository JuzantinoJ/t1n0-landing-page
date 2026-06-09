import { AnimatedReveal } from '../components/AnimatedReveal';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export const Services = () => (
  <section id="services" className="bg-brand-white py-20 sm:py-24" aria-labelledby="services-heading">
    <Container>
      <SectionHeader
        eyebrow="Services"
        title="Practical AI support from audit to handover."
        description="Choose focused workflow reviews, custom assistants, automations, training, SOP systems, or supervised agentic workflows built for everyday operations."
      />
      <AnimatedReveal className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </AnimatedReveal>
    </Container>
  </section>
);
