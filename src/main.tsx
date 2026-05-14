import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import { ArrowRight, Compass, LayoutTemplate, Search, Send, WandSparkles } from 'lucide-react';
import './styles.css';

const navItems = [
  ['Home', '#home'],
  ['Case Studies', '#case-studies'],
  ['Process', '#process'],
  ['Visuals', '#visuals'],
  ['Research', '#research'],
  ['Contact', '#contact'],
] as const;

const featuredCases = [
  {
    id: 'case-seo',
    layout: 'wide',
    category: 'SEO / GEO / Analytics',
    title: 'SEO & GEO Optimization Tool System',
    summary: 'Built a workflow for crawling websites, auditing metadata, checking page health, tracking search visibility, preparing GEO content, and generating optimization reports.',
    problem: 'websites lacked structured SEO/GEO visibility and repeatable reporting',
    process: 'crawl, audit, metadata review, search tracking, report generation',
    output: 'SEO audit reports, meta description suggestions, daily reports, growth reports',
    skills: ['Python', 'Search Console', 'GA4', 'metadata optimization', 'GEO planning'],
  },
  { id: 'case-research', layout: 'split', category: 'Research / Intelligence / Lead Discovery', title: 'Market Research Workflow System', summary: 'Built a repeatable market research workflow for mapping competitors, finding buyer signals, analyzing Reddit/community discussions, studying Kickstarter product stages, and discovering Google Maps prospects.', problem: 'hard to identify useful B2B buyer signals manually', process: 'competitor scan, community research, demand signals, lead source mapping', output: 'buyer pain points, lead lists, outreach angles, market notes', skills: ['market research', 'Reddit intelligence', 'Kickstarter research', 'Google Maps prospecting', 'outreach strategy'] },
  { id: 'case-visual', layout: 'gallery', category: 'Visual Design / Product Marketing', title: 'Promotional Image & Product Visual System', summary: 'Created a workflow for producing product posters, LinkedIn covers, promotional banners, feature-benefit graphics, product image cleanup, and factory capability visuals.', problem: 'product visuals and B2B promotional images needed clearer structure and stronger commercial presentation', process: 'visual direction, product positioning, image cleanup, layout design, feature communication', output: 'product posters, LinkedIn covers, social templates, product feature visuals', skills: ['visual direction', 'AI image prompting', 'product image editing', 'layout design', 'B2B marketing visuals'] },
  { id: 'case-ui', layout: 'board', category: 'Web UI / UX / Conversion', title: 'Website UI Design & Optimization', summary: 'Designed and optimized website page structures including homepage layout, product page clarity, service page hierarchy, CTA placement, mobile adaptation, and inquiry path improvements.', problem: 'pages needed stronger visual hierarchy, clearer service positioning, and better inquiry paths', process: 'structure review, wireframe planning, layout refinement, CTA path design, mobile review', output: 'homepage sections, product page structures, landing page layouts, quote path improvements', skills: ['UI design', 'landing page structure', 'mobile UX', 'conversion layout', 'visual hierarchy'] },
] as const;

const ProcessCard = ({ icon: Icon, steps }: { icon: React.ElementType; steps: string }) => (
  <motion.article className="process-card" whileHover={{ y: -6 }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Icon size={18} />
    <p>{steps}</p>
  </motion.article>
);

function App() {
  return <main className="site" id="home">
    <nav className="nav">
      <strong>Mos Digital Archive</strong>
      <div>{navItems.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</div>
    </nav>

    <section className="hero">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow">MOS DIGITAL ARCHIVE</p>
        <h1>A case-study archive of SEO/GEO tools, research workflows, product visuals, and web UI optimization.</h1>
        <p>Selected digital projects documenting how I build optimization tools, research systems, promotional visuals, and website improvements from idea to working output.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#case-studies">View Case Studies <ArrowRight size={16} /></a>
          <a className="btn" href="#process">Explore Process</a>
        </div>
      </motion.div>
      <motion.div className="portfolio-wall" animate={{ y: [0, -8, 0] }} transition={{ duration: 8, repeat: Infinity }}>
        {['SEO/GEO report preview', 'Market research board preview', 'Product poster preview', 'Website UI redesign preview', 'Outreach workflow preview'].map((x, i) => <div key={x} className={`paper p${i + 1}`}>{x}</div>)}
      </motion.div>
    </section>

    <section id="case-studies" className="section">
      <h2>Featured Case Studies</h2>
      <div className="cases">
        {featuredCases.map((item) => <motion.article key={item.id} className={`case ${item.layout}`} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className={`case-visual ${item.id}`}></div><span className="badge">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p>
          <div className="triplet"><div><strong>Problem</strong><p>{item.problem}</p></div><div><strong>Process</strong><p>{item.process}</p></div><div><strong>Output</strong><p>{item.output}</p></div></div>
          <div className="tags">{item.skills.map((s) => <span key={s}>{s}</span>)}</div><a href={`#${item.id}`} className="view">View Case</a>
        </motion.article>)}
      </div>
    </section>

    {featuredCases.map((item) => <section key={item.id} id={item.id} className="section detail"><h2>{item.title}</h2><p className="brief">{item.summary}</p><div className="detail-grid"><article><h4>Challenge</h4><p>{item.problem}</p><h4>Workflow</h4><p>{item.process}</p><h4>Outputs</h4><p>{item.output}</p><div className="tags">{item.skills.map((s) => <span key={s}>{s}</span>)}</div></article><div className={`detail-mock ${item.id}`}></div></div></section>)}

    <section id="process" className="section"><h2>Process Gallery</h2><div className="process-grid"><ProcessCard icon={Search} steps="Crawl → Audit → Report" /><ProcessCard icon={Compass} steps="Research → Signals → Outreach Angle" /><ProcessCard icon={WandSparkles} steps="Visual Direction → Image Layout → Marketing Asset" /><ProcessCard icon={LayoutTemplate} steps="Wireframe → UI Layout → Inquiry Path" /></div></section>

    <section id="visuals" className="section"><h2>Visual Work Gallery</h2><div className="thumb-grid">{['Product poster concepts', 'LinkedIn cover systems', 'Product feature graphics', 'Factory image treatment', 'Product image cleanup', 'Social visual templates'].map((x) => <article key={x} className="thumb"><div></div><p>{x}</p></article>)}</div></section>

    <section className="section"><h2>Website UI Optimization Gallery</h2><div className="thumb-grid">{['homepage hero layout mockup', 'product page card structure', 'service page layout', 'quote CTA section', 'mobile responsive preview', 'before/after layout comparison'].map((x) => <article key={x} className="thumb ui"><div></div><p>{x}</p></article>)}</div></section>

    <section id="research" className="section"><h2>Research Workflow Gallery</h2><div className="thumb-grid">{['competitor map', 'buyer signal board', 'Reddit/community research notes', 'Kickstarter lead research', 'Google Maps prospect board', 'outreach angle matrix'].map((x) => <article key={x} className="thumb research"><div></div><p>{x}</p></article>)}</div></section>

    <section className="section small"><h2>Tools & Systems Summary</h2><div className="tags">{['SEO/GEO Tooling', 'Market Research Workflow', 'Visual Production System', 'UI Optimization Workflow', 'Reporting Dashboard', 'Outreach Planning'].map((x) => <span key={x}>{x}</span>)}</div></section>

    <section className="section"><h2>Roadmap</h2><div className="roadmap">{['Lighthouse audit module', 'Inquiry tracking', 'AI-search/GEO asset library', 'visual template library', 'weekly portfolio/report update system'].map((x) => <div key={x}><span />{x}</div>)}</div></section>

    <section id="contact" className="section contact"><h2>Contact</h2><p>If you want a similar case-study-driven growth system, let’s connect.</p><a className="btn primary" href="#home"><Send size={14} /> Back to top</a></section>
  </main>;
}

document.title = 'Mos Digital Archive | Digital Project Case Studies';
const meta = document.querySelector('meta[name="description"]');
if (meta) meta.setAttribute('content', 'A light-mode portfolio archive showcasing SEO/GEO tools, market research workflows, promotional visual systems, and website UI optimization case studies.');

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
