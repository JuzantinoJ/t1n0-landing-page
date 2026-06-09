import { AnimatedReveal } from '../components/AnimatedReveal';
import { Container } from '../components/Container';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/projects';

export const Projects = () => (
  <section id="projects" className="bg-white py-20 sm:py-24" aria-labelledby="projects-heading">
    <Container>
      <SectionHeader
        eyebrow="Featured projects"
        title="Implementation work that removes operational drag."
        description="Projects are rendered from typed data so future CMS or API-backed case studies can be added without redesigning the page."
      />
      <AnimatedReveal className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={`${project.client}-${project.title}`} project={project} />
        ))}
      </AnimatedReveal>
    </Container>
  </section>
);
