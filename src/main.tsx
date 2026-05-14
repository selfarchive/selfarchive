import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'motion/react';
import { ArrowRight, Circle, Mail } from 'lucide-react';
import './styles.css';

type CaseItem = {
  id: string;
  title: string;
  category: 'SEO/GEO' | 'Research' | 'Visuals' | 'UI' | 'Reporting';
  description: string;
  brief: string;
  problem: string;
  process: string;
  output: string;
  tools: string[];
};

const nav = [
  ['Home', '#home'],
  ['Cases', '#cases'],
  ['Workflow', '#workflow'],
  ['Refinement', '#refinement'],
  ['Profile', '#profile'],
  ['Contact', '#contact'],
] as const;

const cases: CaseItem[] = [
  { id: 'seo-geo', title: 'SEO & GEO Optimization Tool System', category: 'SEO/GEO', description: 'A workflow for crawling websites, auditing metadata, tracking visibility, and generating growth reports.', brief: 'A complete search performance workflow combining crawl diagnostics, metadata quality, and GEO-oriented content checks.', problem: 'Search visibility data existed across disconnected tools, making prioritization slow and inconsistent.', process: 'Crawl & index checks → metadata QA → intent mapping → GEO formatting checks → report assembly.', output: 'Actionable report templates, technical issue priority matrix, and weekly growth recommendations.', tools: ['Screaming Frog', 'Search Console', 'GA4', 'Schema checks'] },
  { id: 'market-research', title: 'Market Research Workflow System', category: 'Research', description: 'A repeatable system for competitor mapping, market signal extraction, lead discovery, and outreach angle planning.', brief: 'A research board to convert market noise into usable B2B opportunity signals.', problem: 'Research signals were scattered across communities and competitor touchpoints.', process: 'Competitor map → signal clustering → ICP notes → angle testing matrix.', output: 'Research boards, buyer signal summaries, and outreach-ready opportunity segments.', tools: ['Notion boards', 'Community tracking', 'Signal tagging'] },
  { id: 'promo-visual', title: 'Promotional Image & Product Visual System', category: 'Visuals', description: 'A visual production workflow for transforming raw product images into promotional graphics, banners, posters, and commercial assets.', brief: 'A visual direction framework from raw product image to final commercial poster.', problem: 'Raw product photos lacked message hierarchy and promotional context.', process: 'Prompt direction → composition planning → feature labeling → campaign variant output.', output: 'Poster sets, LinkedIn covers, and sales-ready visual bundles.', tools: ['Prompt engineering', 'Layout systems', 'Retouch workflow'] },
  { id: 'ui-optimization', title: 'Website UI Design & Optimization', category: 'UI', description: 'A workflow for improving page hierarchy, product page clarity, CTA paths, and conversion-oriented layouts.', brief: 'Layout refinement for clearer scanning, faster decisions, and stronger CTA momentum.', problem: 'Key pages had weak structure and unclear conversion paths.', process: 'Page audit → wireframe path → visual hierarchy updates → responsive QA.', output: 'Refined landing flows, improved product blocks, and stronger CTA structures.', tools: ['Wireframing', 'UX audit', 'Responsive checks'] },
  { id: 'analytics-reporting', title: 'Analytics & Reporting Dashboard', category: 'Reporting', description: 'A reporting layer that organizes SEO, traffic, visibility, and next-step optimization recommendations.', brief: 'A lightweight reporting layer to connect performance metrics to next actions.', problem: 'Teams saw metrics but lacked clear optimization priorities.', process: 'KPI snapshots → issue scoring → recommendation sequencing.', output: 'Weekly report cards and optimization next-step modules.', tools: ['Looker Studio', 'GA4', 'Custom scorecards'] },
  { id: 'b2b-outreach', title: 'B2B Outreach Workflow', category: 'Research', description: 'A structured process for turning company research into tailored outreach messages and follow-up systems.', brief: 'A repeatable outreach system powered by targeted company context.', problem: 'Outreach quality dropped when messaging lacked research depth.', process: 'Account brief → message framework → follow-up timeline.', output: 'Message cards, outreach calendar, and reply-tracking criteria.', tools: ['CRM board', 'Messaging templates', 'Follow-up logic'] },
];

const filters = ['Show All', 'SEO/GEO', 'Research', 'Visuals', 'UI', 'Reporting'] as const;

function RefinementSlider({ title, description, promptFragments }: { title: string; description: string; promptFragments: string[] }) {
  const [progress, setProgress] = useState(42);
  const x = progress;

  return <section className="refine-wrap">
    <div className="refine-head"><h3>{title}</h3><p>{description}</p></div>
    <div className="slider-scene">
      <div className="poster before">
        <div className="photo" />
        <span>Original Product Image</span>
      </div>

      <div className="poster after" style={{ clipPath: `inset(0 ${100 - x}% 0 0 round 24px)` }}>
        <div className="layout-grid" />
        <div className="headline" />
        <div className="chips" />
        <span>Final Promotional Visual</span>
      </div>

      <input aria-label="refinement slider" type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} className="slider-input" />
      <motion.div className="handle" style={{ left: `${x}%` }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.8, repeat: Infinity }}><Circle size={16} fill="currentColor" /></motion.div>

      {promptFragments.map((txt, i) => {
        const active = progress > 15;
        const pull = Math.max(0, (progress - 25) / 75);
        return <motion.div key={txt} className="prompt-chip" initial={{ opacity: 0, x: -40 }} animate={{ opacity: active ? 1 - pull * 0.7 : 0, x: active ? -10 + pull * (160 + i * 18) : -40 + i * 10, y: i * 44 - 84 + Math.sin((progress + i * 8) / 8) * 6 }} transition={{ duration: 0.45 }}>
          {txt}
          <span className="thread" style={{ width: `${32 + pull * 52}px` }} />
        </motion.div>;
      })}
    </div>
  </section>;
}

function App() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Show All');
  const viewCases = useMemo(() => filter === 'Show All' ? cases : cases.filter((c) => c.category === filter), [filter]);

  return <main className="site" id="home">
    <motion.nav className="nav" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}>
      <strong>Mos Digital Archive</strong><div>{nav.map(([n, h]) => <a key={n} href={h}>{n}</a>)}</div>
    </motion.nav>

    <section className="hero">
      <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>DIGITAL CASE ARCHIVE</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Building digital growth cases through research, visuals, tools, and web optimization.</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>A personal archive of SEO/GEO workflows, market research systems, promotional visuals, product image refinement, and website UI optimization cases.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}><a className="btn primary" href="#cases">View Cases <ArrowRight size={16} /></a><a className="btn" href="#contact">Contact Me</a></motion.div>
      <motion.div className="float-cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        {['Visibility Audit', 'Research Board', 'Poster Direction'].map((c, i) => <motion.div key={c} className="float-card" animate={{ y: [0, -10 + i * 2, 0] }} transition={{ duration: 4 + i, repeat: Infinity }}>{c}</motion.div>)}
      </motion.div>
    </section>

    <section id="cases" className="section">
      <div className="section-head"><h2>Case Gallery</h2><div className="pills">{filters.map((f) => <button key={f} className={f === filter ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div></div>
      <div className="gallery">{viewCases.map((item) => <motion.article key={item.id} className="case-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} whileHover="hover" viewport={{ once: true }}>
        <a href={`#detail-${item.id}`} className="cover" aria-label={item.title}>
          <div className={`cover-art ${item.id}`} />
          <motion.div className="overlay" variants={{ hover: { opacity: 1 } }}>
            <motion.h3 variants={{ hover: { y: 0, opacity: 1 } }} initial={{ y: 20, opacity: 0 }}>{item.title}</motion.h3>
            <p>{item.description}</p><span>{item.category}</span><em>View Case →</em>
          </motion.div>
        </a>
      </motion.article>)}</div>
    </section>

    <section className="section" id="featured"><h2>Featured Case Detail</h2>{cases.slice(0, 3).map((c) => <article id={`detail-${c.id}`} key={c.id} className="detail">
      <div><small>{c.category}</small><h3>{c.title}</h3><p>{c.brief}</p><h4>Problem</h4><p>{c.problem}</p><h4>Process</h4><p>{c.process}</p><h4>Output</h4><p>{c.output}</p><div className="tags">{c.tools.map((t) => <span key={t}>{t}</span>)}</div></div>
      <div className={`detail-visual ${c.id}`} />
    </article>)}</section>

    <section id="refinement" className="section"><h2>Product Visual Refinement Demo</h2><RefinementSlider title="Raw Image → Prompt Direction → Promotional Poster" description="A refinement sequence showing how prompt fragments are absorbed into layout decisions, producing a final commercial visual." promptFragments={['clean commercial lighting', 'feature-benefit layout', 'premium product poster', 'factory capability visual', 'soft shadows', 'B2B marketing composition']} /></section>

    <section id="workflow" className="section"><h2>Workflow</h2><div className="workflow">{['Research', 'Prompt Direction', 'Visual Refinement', 'Web Layout', 'SEO/GEO', 'Reporting', 'Outreach'].map((s, i) => <div key={s}><b>{String(i + 1).padStart(2, '0')}</b><p>{s}</p></div>)}</div></section>

    <section id="profile" className="section profile"><h2>Profile / What I Build</h2><p>I build practical digital project systems that connect research, visual production, website structure, SEO/GEO optimization, and reporting. My work focuses on turning scattered business needs into usable case studies, visual systems, and repeatable workflows.</p></section>

    <section id="contact" className="section contact"><h2>Let’s build a usable digital workflow.</h2><a className="btn primary" href="mailto:hello@example.com"><Mail size={16} /> Contact Me</a></section>
  </main>;
}

document.title = 'Mos Digital Archive | Visual Case Studies & Digital Growth Workflows';
const meta = document.querySelector('meta[name="description"]');
if (meta) meta.setAttribute('content', 'A light-mode case-study archive for SEO/GEO tools, market research workflows, promotional product visuals, and website UI optimization projects.');

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
