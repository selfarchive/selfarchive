import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type Project = {
  title: string;
  category: string;
  description: string;
  points: string[];
};

const projects: Project[] = [
  {
    title: 'Gajes Growth Tools',
    category: 'SEO / GEO / Analytics',
    description:
      'A local SEO/GEO reporting system for Gajes Mold that combines website crawling, SEO audits, Google Search Console data, GA4 traffic data, and daily growth reports.',
    points: [
      'Website crawl and SEO issue tracking',
      'Title, H1, and meta description audit',
      'Daily SEO/GEO report generation',
      'Google Search Console API integration',
      'GA4 API integration',
      'Growth Report combining SEO health, search visibility, and traffic data',
    ],
  },
  {
    title: 'Search Console Integration',
    category: 'Google Search Performance',
    description:
      'Integrated Google Search Console API into the local reporting workflow to track impressions, clicks, CTR, average position, top queries, and top search pages.',
    points: [
      'OAuth desktop authentication',
      'Domain property support: sc-domain:gajesim.com',
      'Proxy-compatible API requests',
      'Search query and landing page reporting',
      'Search visibility tracking',
    ],
  },
  {
    title: 'GA4 Traffic Integration',
    category: 'Website Analytics',
    description:
      'Installed GA4 on the Gajes website and connected the GA4 Data API to the local Growth Report to monitor users, sessions, page views, new users, and top pages.',
    points: [
      'GA4 tracking installation',
      'Measurement ID setup',
      'Property ID API connection',
      'Website traffic reporting',
      'Future lead event tracking',
    ],
  },
  {
    title: 'SEO/GEO Page Optimization',
    category: 'Website Optimization',
    description:
      'Cleaned and standardized metadata for key Gajes pages, including homepage, service pages, product category pages, product detail pages, and selected blog articles.',
    points: [
      'Reduced weak titles and weak descriptions',
      'Improved product page clarity',
      'Standardized B2B manufacturing keywords',
      'Prepared pages for Google and AI search understanding',
    ],
  },
  {
    title: 'B2B Manufacturing Website System',
    category: 'Gajes Mold',
    description:
      'Structured the Gajes website around injection mold making, DFM support, tooling, injection molding, factory capacity, product categories, and quote conversion.',
    points: [
      'Service page positioning',
      'Product page SEO cleanup',
      'Factory and FAQ content structure',
      'Get Quote conversion path',
      'Future lead tracking through GA4 events',
    ],
  },
  {
    title: 'Next Growth Modules',
    category: 'Roadmap',
    description:
      'Planned future upgrades including Lighthouse page experience audits, llms.txt / GEO assets, FAQ answer blocks, and lead conversion tracking.',
    points: [
      'Lighthouse performance audit',
      'AI search / GEO content assets',
      'Get Quote event tracking',
      'Email and WhatsApp click tracking',
      'Weekly growth intelligence report',
    ],
  },
];

const metrics = [
  ['Pages crawled', '78'],
  ['Remaining SEO issues', '21'],
  ['Search Console', 'Connected'],
  ['GA4', 'Connected'],
  ['Meta descriptions remaining', '18'],
  ['Weak titles remaining', '2'],
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Mos Growth Archive</p>
        <h1>Building practical SEO, GEO, and analytics systems for B2B growth.</h1>
        <p className="subtitle">
          A project archive documenting website optimization, Search Console integration, GA4 reporting, and growth intelligence workflows for manufacturing websites.
        </p>
        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#architecture" className="btn btn-secondary">View Growth System</a>
        </div>
      </header>

      <section className="section" id="about">
        <h2>About / Positioning</h2>
        <p>
          I build practical digital growth systems that connect website structure, SEO/GEO optimization, Google Search Console, GA4, and reporting workflows. The focus is not vanity design, but measurable visibility, traffic, and conversion readiness for B2B websites.
        </p>
      </section>

      <section className="section" id="metrics">
        <h2>Reports & Metrics</h2>
        <div className="metrics-grid">
          {metrics.map(([label, value]) => (
            <article key={label} className="metric-card">
              <p>{label}</p><strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <span className="badge">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="architecture">
        <h2>Growth System Architecture</h2>
        <div className="architecture">
          <div>Website Crawl + SEO Audit</div>
          <div>Search Console API + GA4 Data API</div>
          <div>Daily SEO/GEO Report + Growth Report</div>
          <div>Action Queue: Metadata, Content, Conversion Tracking</div>
        </div>
      </section>

      <section className="section" id="roadmap">
        <h2>Roadmap</h2>
        <p>Next module focus: Lighthouse audits, llms.txt / GEO assets, FAQ answer blocks, and lead conversion tracking.</p>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>For collaboration on B2B growth systems and analytics workflows, reach out to Mos / Gajes project operations.</p>
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
