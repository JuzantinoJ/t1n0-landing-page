import { Helmet } from "react-helmet-async";
import { Clients } from "./sections/Clients.js";
import { Contact } from "./sections/Contact.js";
import { Hero } from "./sections/Hero.js";
import { ProblemSolutionOutcome } from "./sections/ProblemSolutionOutcome.js";
import { Process } from "./sections/Process.js";
import { Projects } from "./sections/Projects.js";
import { Services } from "./sections/Services.js";
import { WhyT1N0 } from "./sections/WhyT1N0.js";
import { PageLayout } from "./layouts/PageLayout.js";
import { siteConfig } from "./constants/siteConfig.js";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.companyName,
  url: siteConfig.url,
  email: siteConfig.email,
  slogan: siteConfig.motto,
  description: siteConfig.seo.description,
  serviceType: [
    "AI workflow automation",
    "AI consultancy",
    "Business automation",
    "AI assistants",
  ],
};

export const App = () => (
  <>
    <Helmet>
      <title>{siteConfig.seo.title}</title>
      <meta name="description" content={siteConfig.seo.description} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(", ")} />
      <link rel="canonical" href={siteConfig.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteConfig.seo.title} />
      <meta property="og:description" content={siteConfig.seo.description} />
      <meta property="og:url" content={siteConfig.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.seo.title} />
      <meta name="twitter:description" content={siteConfig.seo.description} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
    <PageLayout>
      <Hero />
      <Clients />
      <Projects />
      <ProblemSolutionOutcome />
      <Services />
      <Process />
      <WhyT1N0 />
      <Contact />
    </PageLayout>
  </>
);
