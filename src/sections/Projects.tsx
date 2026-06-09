import { AnimatedReveal } from '../components/AnimatedReveal';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/projects';

export const Projects = () => (
  <section id="projects" className="bg-white py-20 sm:py-24" aria-labelledby="projects-heading">
    <Container>
      <SectionHeader
        eyebrow="Featured AI implementation"
        title="AI systems built into real e-commerce work."
        description="Selected Jamal Kazura projects across Shopify operations, custom GPTs, scheduled research automation, reporting, and strategy support."
      />
      <AnimatedReveal className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={`${project.client}-${project.title}`} project={project} />
        ))}
      </AnimatedReveal>
    </Container>
  </section>
);
