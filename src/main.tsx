import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Compass,
  Factory,
  GitBranch,
  Globe,
  ImagePlus,
  LayoutPanelTop,
  LineChart,
  Mail,
  MapPinned,
  Monitor,
  Search,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import './styles.css';

const navItems = ['Systems', 'Projects', 'Workflow', 'Visuals', 'Roadmap', 'Contact'];
const archiveChips = ['4 Core Systems', '8 Project Modules', 'SEO/GEO Workflow', 'Market Research', 'Visual Production', 'UI Optimization'];

const systems = [
  {
    title: 'SEO & GEO Optimization Tools',
    description:
      'A custom workflow for crawling websites, auditing metadata, checking page health, tracking visibility, and preparing AI-search/GEO content.',
    chips: ['Site Crawl', 'Metadata Audit', 'Search Visibility', 'GEO Planning', 'Reports'],
    className: 'wide',
  },
  {
    title: 'Market Research Tools',
    description:
      'A research workflow for mapping demand, competitors, communities, buyer signals, Kickstarter leads, Google Maps prospects, and outreach angles.',
    chips: ['Competitor Mapping', 'Reddit Signals', 'Kickstarter Leads', 'Google Maps', 'Buyer Pain Points'],
    className: 'tall',
  },
  {
    title: 'Promotional Image & Product Visual System',
    description:
      'A visual production workflow for product posters, LinkedIn covers, promotional banners, feature graphics, factory visuals, and social templates.',
    chips: ['Product Posters', 'LinkedIn Covers', 'Feature Graphics', 'Image Cleanup', 'Templates'],
    className: 'image',
  },
  {
    title: 'Website UI Design & Optimization',
    description:
      'A UI optimization workflow for homepage structure, product page clarity, CTA paths, mobile adaptation, and conversion-oriented layouts.',
    chips: ['Landing Pages', 'Product Pages', 'CTA Path', 'Mobile UX', 'Conversion Layout'],
    className: 'ui',
  },
];

const projects = [
  ['Core Module', 'SEO & GEO Optimization Tools', 'A workflow for crawling pages, auditing metadata, tracking visibility, and generating optimization reports.', ['Crawl Map', 'Metadata QA', 'Report Stack'], 'Active'],
  ['Core Module', 'Market Research Tools', 'A research system for competitor mapping, buyer signal extraction, community monitoring, and lead discovery.', ['Demand Signals', 'Communities', 'Lead Discovery'], 'Active'],
  ['Core Module', 'Promotional Image & Product Visual System', 'A visual workflow for product posters, promotional graphics, factory visuals, and social content templates.', ['Poster Layout', 'Banners', 'Template Pack'], 'Production'],
  ['Core Module', 'Website UI Design & Optimization', 'A UI workflow for landing pages, product pages, CTA placement, mobile layout, and conversion paths.', ['Desktop Wire', 'Mobile UX', 'CTA Path'], 'Iterating'],
  ['Support Module', 'Analytics & Reporting Dashboard', 'A reporting layer that organizes SEO data, traffic metrics, visibility checks, and next-step recommendations.', ['Signal Feed', 'Action Queue', 'Weekly Recap'], 'Connected'],
  ['Support Module', 'B2B Outreach Workflow', 'A structured process for tailored cold emails, LinkedIn messages, company research, and follow-up planning.', ['Contact Map', 'Message Blocks', 'Follow-up'], 'Running'],
  ['Support Module', 'AI Search / GEO Content Assets', 'A planned content layer for llms.txt, FAQ answer blocks, structured summaries, and AI-readable project pages.', ['llms.txt', 'FAQ Blocks', 'Schema Notes'], 'Planned'],
  ['Support Module', 'Visual Content Prompt Library', 'A reusable library of prompts and templates for product visuals, ad concepts, web sections, and image generation.', ['Prompt Packs', 'Scene Kits', 'Reuse Index'], 'Building'],
] as const;

const workflowNodes = [
  [Search, 'Research', 'Market and audience signal discovery'],
  [Compass, 'Strategy', 'Opportunity framing and direction'],
  [Sparkles, 'Visual Direction', 'Styling and concept alignment'],
  [ImagePlus, 'Product Visuals', 'Asset generation and editing'],
  [Monitor, 'Website UI', 'Layout and CTA structure'],
  [Globe, 'SEO/GEO', 'Indexable and AI-search-ready content'],
  [LineChart, 'Analytics', 'Performance reviews and iteration'],
  [Mail, 'Outreach', 'Distribution and relationship loops'],
] as const;

const roadmap = [
  'Lighthouse page experience audit',
  'Inquiry event tracking',
  'Email / WhatsApp click tracking',
  'llms.txt and AI-search assets',
  'Weekly growth intelligence report',
  'Product visual template library',
];

function App() {
  return (
    <div className="app-bg">
      <motion.div className="blob blob-a" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 18, repeat: Infinity }} />
      <motion.div className="blob blob-b" animate={{ x: [0, -35, 0], y: [0, 25, 0] }} transition={{ duration: 22, repeat: Infinity }} />
      <main className="page">
        <nav className="nav glass">
          <strong>Mos Digital Archive</strong>
          <div>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        </nav>

        <section className="hero" id="top">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">MOS DIGITAL ARCHIVE</p>
            <h1>Digital tools, research workflows, and visual systems for modern web growth.</h1>
            <p className="sub">A personal archive of SEO/GEO optimization tools, market research workflows, product visual systems, promotional graphics, and website UI design experiments.</p>
            <div className="cta-row">
              <motion.a whileHover={{ y: -2 }} href="#systems" className="btn primary">Explore Systems <ArrowRight size={16} /></motion.a>
              <motion.a whileHover={{ y: -2 }} href="#projects" className="btn">View Projects</motion.a>
            </div>
            <div className="chip-row">{archiveChips.map((c) => <motion.span whileHover={{ y: -2 }} key={c}>{c}</motion.span>)}</div>
          </motion.div>

          <motion.div className="archive-os glass" animate={{ y: [0, -7, 0] }} transition={{ duration: 7, repeat: Infinity }}>
            <div className="window-top"><span /><span /><span />Digital Archive Interface</div>
            <div className="module-grid">
              {['SEO/GEO Tools', 'Market Research', 'Product Visuals', 'UI Optimization'].map((m) => <div key={m} className="module-tile">{m}</div>)}
            </div>
            <div className="node-path" />
            <div className="strip-row"><i /><i /><i /></div>
            <div className="thumb-grid">{Array.from({ length: 6 }).map((_, i) => <b key={i} />)}</div>
            <div className="status-row"><em>Live</em><em>Queued</em><em>Review</em></div>
            <div className="floating f1" /><div className="floating f2" /><div className="floating f3" />
          </motion.div>
        </section>

        <section id="systems" className="section">
          <h2>Core Systems</h2><p>Four connected workflows that turn research, visuals, websites, and optimization into usable project systems.</p>
          <div className="systems-bento">{systems.map((s) => (
            <motion.article key={s.title} className={`glass sys ${s.className}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>{s.title}</h3><p>{s.description}</p><div className="chip-row">{s.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
              <div className="visual-skeleton" />
            </motion.article>))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Selected Project Modules</h2>
          <div className="projects-masonry">{projects.map((p, i) => (
            <motion.article key={p[1]} className={`glass project size-${(i % 4) + 1}`} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="thumb" /><small>{p[0]}</small><h3>{p[1]}</h3><p>{p[2]}</p><div className="chip-row">{p[3].map((x) => <span key={x}>{x}</span>)}</div><b>{p[4]}</b>
            </motion.article>))}
          </div>
        </section>

        <section id="workflow" className="section">
          <h2>Workflow Stack</h2>
          <div className="workflow-map">{workflowNodes.map(([Icon, label, d]) => <motion.div key={label} className="node glass" animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 3, repeat: Infinity }}><Icon size={16} /><h4>{label}</h4><p>{d}</p><span /></motion.div>)}</div>
        </section>

        <section id="visuals" className="section two-col">
          <div>
            <h2>Visual Production Board</h2>
            <div className="board-grid">{['Product poster layout','LinkedIn cover layout','Feature-benefit graphic','Product image cleanup','Factory image commercial processing','Social media visual template'].map((x) => <motion.article whileHover={{ y: -4 }} key={x} className="glass mini"><div className="thumb" /><p>{x}</p></motion.article>)}</div>
          </div>
          <div>
            <h2>Website UI Optimization Preview</h2>
            <div className="ui-preview glass"><div className="desktop" /><div className="mobile" /><div className="path" /><div className="compare" /></div>
          </div>
        </section>

        <section className="section">
          <h2>Market Research Intelligence Board</h2>
          <div className="intel-grid glass"><div><MapPinned size={16} /> competitor map</div><div><Users size={16} /> buyer pain point chips</div><div><Blocks size={16} /> Reddit/community signal cards</div><div><GitBranch size={16} /> Kickstarter stage cards</div><div><BriefcaseBusiness size={16} /> Google Maps lead discovery panel</div><div><Target size={16} /> outreach angle cards</div></div>
        </section>

        <section id="roadmap" className="section">
          <h2>Roadmap</h2><div className="timeline">{roadmap.map((item) => <div key={item} className="time-node glass"><span />{item}</div>)}</div>
        </section>

        <section id="contact" className="section contact glass">
          <h2>Build, organize, and improve digital growth systems.</h2>
          <p>A compact archive of SEO/GEO tools, research workflows, visual systems, and website optimization experiments.</p>
          <a className="btn primary" href="#top">Discuss Project</a>
          <footer>Mos Digital Archive — Digital systems, research workflows, visual production, and web optimization.</footer>
        </section>
      </main>
    </div>
  );
}

document.title = 'Mos Digital Archive | SEO, GEO, Research & Visual Systems';
const meta = document.querySelector('meta[name="description"]');
if (meta) meta.setAttribute('content', 'A light-mode digital project archive for SEO/GEO optimization tools, market research workflows, product visuals, promotional image systems, and website UI design improvements.');

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
