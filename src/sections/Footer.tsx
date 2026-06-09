import { Container } from '../components/Container';
import { siteConfig } from '../constants/siteConfig';
import { scrollToSection } from '../utils/scroll';

export const Footer = () => (
  <footer className="bg-brand-navy py-12 text-white">
    <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <img src={siteConfig.logoUrl} alt="T1N0.ai logo" className="h-11 w-11 rounded-full bg-white object-cover" />
          <div>
            <p className="font-heading text-lg font-semibold">{siteConfig.companyName}</p>
            <p className="text-sm text-slate-300">{siteConfig.motto}</p>
          </div>
        </div>
        <a href={`mailto:${siteConfig.email}`} className="mt-5 inline-block text-sm font-semibold text-brand-mint">
          {siteConfig.email}
        </a>
      </div>
      <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(link.href);
            }}
            className="text-sm font-medium text-slate-300 transition hover:text-brand-mint focus:outline-none focus:ring-4 focus:ring-brand-mint/40"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </Container>
  </footer>
);
