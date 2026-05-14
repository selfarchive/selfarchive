import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type SystemCard = {
  icon: string;
  title: string;
  description: string;
  chips: string[];
  status: string;
};

type ProjectCard = {
  category: string;
  title: string;
  description: string;
  bullets: string[];
  status: string;
  preview: string;
};

const archiveMetrics = [
  '4 Core Systems',
  '8 Project Modules',
  'SEO/GEO Workflow Built',
  'Analytics Pipeline Connected',
  'Visual Production Workflow',
  'Market Research Workflow',
];

const coreSystems: SystemCard[] = [
  {
    icon: '🔎',
    title: 'SEO & GEO Tools',
    description: 'Crawling, metadata QA, visibility tracking, and AI-search content planning in one practical workflow.',
    chips: ['Site Crawl', 'Metadata Audit', 'GEO Planning'],
    status: 'Active System',
  },
  {
    icon: '📊',
    title: 'Market Research',
    description: 'Demand mapping, competitor intelligence, buyer signal analysis, and export opportunity discovery.',
    chips: ['Competitor Mapping', 'Reddit Signals', 'Lead Discovery'],
    status: 'Operational',
  },
  {
    icon: '🧩',
    title: 'Product Visuals',
    description: 'A structured image workflow for posters, covers, banners, and product feature communication.',
    chips: ['Poster Concepts', 'Feature Graphics', 'Template Library'],
    status: 'Production Ready',
  },
  {
    icon: '🖥️',
    title: 'UI Optimization',
    description: 'Homepage, landing, and product-page layout optimization focused on trust, clarity, and conversion.',
    chips: ['Page Structure', 'CTA Path', 'Mobile Review'],
    status: 'In Iteration',
  },
];

const projects: ProjectCard[] = [
  {
    category: 'Core Module',
    title: 'SEO & GEO Optimization Tools',
    description: 'Custom workflow for crawl audits, metadata checks, search visibility, GA4 traffic, and GEO-ready content planning.',
    bullets: ['Page health audit', 'Search Console tracking', 'Daily growth reporting'],
    status: 'Built',
    preview: 'Audit Board',
  },
  {
    category: 'Core Module',
    title: 'Market Research Tools',
    description: 'Research stack for market demand, competitor positioning, B2B buyer signals, and outreach angle generation.',
    bullets: ['Supplier mapping', 'Community intelligence', 'Pain-point extraction'],
    status: 'Built',
    preview: 'Signal Grid',
  },
  {
    category: 'Core Module',
    title: 'Promotional Image & Product Visual System',
    description: 'Visual production flow for product posters, banners, feature graphics, and social-ready marketing images.',
    bullets: ['Image enhancement', 'Factory visual processing', 'Social template sets'],
    status: 'Built',
    preview: 'Visual Kit',
  },
  {
    category: 'Core Module',
    title: 'Website UI Design & Optimization',
    description: 'Homepage and landing-page refinement with stronger hierarchy, trust signals, and clearer conversion routes.',
    bullets: ['Service page optimization', 'CTA hierarchy', 'Responsive review'],
    status: 'Built',
    preview: 'UI Blocks',
  },
  {
    category: 'Support Module',
    title: 'Analytics & Reporting Dashboard',
    description: 'Reporting layer combining page health, visibility, traffic metrics, and recommended next actions.',
    bullets: ['SEO + traffic merge', 'Issue prioritization', 'Next-step recommendations'],
    status: 'Connected',
    preview: 'Report View',
  },
  {
    category: 'Support Module',
    title: 'B2B Outreach Workflow',
    description: 'Structured outreach framework for LinkedIn intros, tailored emails, and follow-up sequencing.',
    bullets: ['Company-specific copy', 'Follow-up system', 'Message variants'],
    status: 'Active',
    preview: 'Message Flow',
  },
  {
    category: 'Support Module',
    title: 'AI Search / GEO Content Assets',
    description: 'Planned assets for llms.txt, FAQ answer blocks, structured service summaries, and AI-readable pages.',
    bullets: ['llms.txt', 'FAQ blocks', 'Capability summaries'],
    status: 'Planned',
    preview: 'Asset Drafts',
  },
  {
    category: 'Support Module',
    title: 'Visual Content Prompt Library',
    description: 'Reusable prompt set for banners, ads, product visuals, and website section image generation.',
    bullets: ['Prompt modules', 'Layout templates', 'Production reuse'],
    status: 'Building',
    preview: 'Prompt Deck',
  },
];

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <strong>Mos Digital Archive</strong>
        <div>
          <a href="#systems">Systems</a>
          <a href="#projects">Projects</a>
          <a href="#workflow">Workflow</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-left">
          <p className="eyebrow">Mos Digital Archive</p>
          <h1>Digital tools, research workflows, and visual systems for modern web growth.</h1>
          <p className="subtitle">
            A personal project archive covering SEO/GEO optimization tools, market intelligence workflows, product image systems, promotional visuals, and website UI improvements.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#workflow" className="btn btn-secondary">View Workflow</a>
          </div>
          <div className="metrics-row">
            {archiveMetrics.map((metric) => <span key={metric} className="metric-chip">{metric}</span>)}
          </div>
        </div>

        <aside className="system-preview">
          <h3>System Preview</h3>
          <div className="mini-grid">
            <article><strong>SEO/GEO Tools</strong><p>Crawl, metadata, visibility</p></article>
            <article><strong>Market Research</strong><p>Demand, competitors, buyer signals</p></article>
            <article><strong>Product Visuals</strong><p>Posters, covers, visual kits</p></article>
            <article><strong>UI Optimization</strong><p>Layout clarity, CTA paths</p></article>
          </div>
          <p className="flow">Research → Strategy → Visuals → Website → SEO/GEO → Analytics → Outreach</p>
        </aside>
      </header>

      <section className="section" id="systems">
        <div className="section-head"><h2>Core Systems Overview</h2></div>
        <div className="systems-grid">
          {coreSystems.map((item) => (
            <article key={item.title} className="system-card">
              <div className="title-row"><span>{item.icon}</span><h3>{item.title}</h3><em>{item.status}</em></div>
              <p>{item.description}</p>
              <div className="chip-row">{item.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head"><h2>Selected Projects</h2></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-top"><span className="badge">{project.category}</span><em>{project.status}</em></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>{project.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="preview">{project.preview}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="section-head"><h2>Workflow Stack</h2></div>
        <div className="workflow-wrap">
          {['Research', 'Strategy', 'Visual Direction', 'Product Visuals', 'Website UI', 'SEO/GEO', 'Analytics', 'Outreach'].map((step) => (
            <span key={step} className="workflow-step">{step}</span>
          ))}
        </div>
      </section>

      <section className="section" id="map">
        <div className="section-head"><h2>System Map</h2></div>
        <div className="map-grid">
          <article>Market Research <small>feeds SEO/GEO Strategy</small></article>
          <article>SEO/GEO <small>feeds Website UI Optimization</small></article>
          <article>Product Visuals <small>support Website UI and Outreach</small></article>
          <article>Analytics <small>feeds future optimization decisions</small></article>
        </div>
      </section>

      <section className="section" id="preview">
        <div className="section-head"><h2>Visual & UI Work Preview</h2></div>
        <div className="preview-grid">
          {['Product poster layout', 'LinkedIn cover layout', 'Website hero redesign', 'Product page structure', 'Report dashboard', 'Outreach message system'].map((item) => (
            <article key={item}><strong>{item}</strong><p>Compact concept panel</p></article>
          ))}
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="section-head"><h2>Roadmap</h2></div>
        <ul className="checklist">
          <li>Lighthouse page experience audit</li>
          <li>GA4 key events for inquiry tracking</li>
          <li>Email / WhatsApp click tracking</li>
          <li>llms.txt and AI-search assets</li>
          <li>Weekly growth intelligence summary</li>
          <li>Product visual template library</li>
        </ul>
      </section>

      <section className="section contact" id="contact">
        <h2>Build, organize, and improve digital growth systems.</h2>
        <p>A compact archive of SEO/GEO tools, research workflows, visual systems, and website optimization experiments.</p>
        <a className="btn btn-primary" href="#top">Discuss Project</a>
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
