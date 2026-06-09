import { AnimatedReveal } from '../components/AnimatedReveal';
import { ClientCard } from '../components/ClientCard';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { clients } from '../data/clients';

export const Clients = () => (
  <section className="bg-brand-white py-20 sm:py-24" aria-labelledby="clients-heading">
    <Container>
      <SectionHeader
        eyebrow="Selected AI work"
        title="Built around real operating constraints."
        description="T1N0.ai focuses on workflow clarity, maintainability, and practical business outcomes for businesses ready to apply AI inside day-to-day operations."
      />
      <AnimatedReveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <ClientCard key={client.name} client={client} />
        ))}
      </AnimatedReveal>
    </Container>
  </section>
);
