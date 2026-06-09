import { AnimatedReveal } from '../components/AnimatedReveal';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineStep } from '../components/TimelineStep';
import { processSteps } from '../data/process';

export const Process = () => (
  <section id="process" className="bg-white py-20 sm:py-24" aria-labelledby="process-heading">
    <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <SectionHeader
        align="left"
        eyebrow="Process"
        title="A measured path from friction to working system."
        description="The process starts with operational reality, then moves through design, testing, handover, and continuous improvement."
      />
      <AnimatedReveal>
        <ol>
          {processSteps.map((item, index) => (
            <TimelineStep key={item.step} item={item} isLast={index === processSteps.length - 1} />
          ))}
        </ol>
      </AnimatedReveal>
    </Container>
  </section>
);
