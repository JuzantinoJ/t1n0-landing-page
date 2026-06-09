import { Menu } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../constants/siteConfig';
import { scrollToSection } from '../utils/scroll';
import { Container } from '../components/Container';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate('#hero');
          }}
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-brand-mint/40"
          aria-label="T1N0.ai home"
        >
          <img src={siteConfig.logoUrl} alt="T1N0.ai logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading text-lg font-semibold text-slate-950">{siteConfig.companyName}</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(link.href);
              }}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-teal focus:outline-none focus:ring-4 focus:ring-brand-mint/40"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate('#contact');
            }}
            className="hidden rounded-full bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#01584f] focus:outline-none focus:ring-4 focus:ring-brand-mint/40 sm:inline-flex"
          >
            Book a Workflow Audit
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </Container>
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(link.href);
                }}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-teal focus:outline-none focus:ring-4 focus:ring-brand-mint/40"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
