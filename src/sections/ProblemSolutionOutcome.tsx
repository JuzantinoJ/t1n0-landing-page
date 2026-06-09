import { ArrowRight, CheckCircle2, CircleAlert, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';

const cards = [
  {
    title: 'Problem',
    description: 'Manual work, repetitive reporting, disconnected systems.',
    icon: CircleAlert
  },
  {
    title: 'Solution',
    description: 'Practical AI systems connecting people, processes, and tools.',
    icon: Workflow
  },
  {
    title: 'Outcome',
    description: 'Less manual work. Improved consistency. Better decisions. Higher productivity.',
    icon: CheckCircle2
  }
];

export const ProblemSolutionOutcome = () => (
  <section className="bg-brand-navy py-20 text-white sm:py-24">
    <Container>
      <div className="grid gap-5 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              {index < cards.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-5 top-1/2 hidden h-6 w-6 text-brand-mint lg:block" />}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint/10 text-brand-mint">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-300">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Container>
  </section>
);
