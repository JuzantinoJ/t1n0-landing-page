export const scrollToSection = (href: string) => {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
