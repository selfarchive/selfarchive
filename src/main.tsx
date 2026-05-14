import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Hero } from './components/Hero';
import { CaseGallery } from './components/CaseGallery';
import { CaseDetail } from './components/CaseDetail';
import { Workflow } from './components/Workflow';
import { RefinementSlider } from './components/RefinementSlider';
import type { CaseItem } from './components/types';

type View = 'home' | 'cases' | 'caseDetail' | 'workflow' | 'refinement' | 'profile' | 'contact';

const cases: CaseItem[] = [
  { id: 'seo-geo', title: 'SEO & GEO Optimization Tool System', category: 'SEO/GEO', description: 'Workflow for crawling, metadata auditing, and visibility recommendations.', brief: 'A complete search performance workflow.', problem: 'Data was fragmented across tools.', process: 'Crawl checks → metadata QA → intent mapping → reporting.', output: 'Priority matrix and growth recommendations.', tools: ['Screaming Frog', 'Search Console', 'GA4'], visualType: 'seo' },
  { id: 'market-research', title: 'Market Research Workflow System', category: 'Research', description: 'System for competitor mapping and market signal extraction.', brief: 'Research board that turns noise into opportunities.', problem: 'Research signals were scattered.', process: 'Competitor map → signal clustering → ICP notes.', output: 'Research boards and outreach segments.', tools: ['Notion', 'Signal tagging'], visualType: 'research' },
  { id: 'promo-visual', title: 'Promotional Image & Product Visual System', category: 'Visuals', description: 'Transforming raw product shots into polished promotional visuals.', brief: 'Raw product image to final commercial poster.', problem: 'Raw photos lacked message hierarchy.', process: 'Prompt direction → composition planning → campaign outputs.', output: 'Poster sets and sales-ready visuals.', tools: ['Prompt engineering', 'Layout systems'], visualType: 'visual' },
  { id: 'ui-optimization', title: 'Website UI Design & Optimization', category: 'UI', description: 'Improving hierarchy, CTA flows, and responsive clarity.', brief: 'Layout refinement for clearer scanning and stronger CTA momentum.', problem: 'Weak structure and unclear conversion paths.', process: 'Audit → wireframe path → hierarchy updates.', output: 'Refined landing and product flows.', tools: ['UX audit', 'Responsive QA'], visualType: 'ui' },
  { id: 'analytics-reporting', title: 'Analytics & Reporting Dashboard', category: 'Reporting', description: 'Reporting layer that converts metrics into optimization priorities.', brief: 'Performance summaries connected to next steps.', problem: 'Metrics lacked clear action paths.', process: 'KPI snapshots → issue scoring.', output: 'Weekly report cards.', tools: ['Looker Studio', 'GA4'], visualType: 'report' },
  { id: 'b2b-outreach', title: 'B2B Outreach Workflow', category: 'Research', description: 'Turning company research into tailored outreach messaging systems.', brief: 'Repeatable outreach powered by company context.', problem: 'Messaging quality dropped without research depth.', process: 'Account brief → message framework → follow-up timeline.', output: 'Message cards and outreach calendars.', tools: ['CRM board', 'Templates'], visualType: 'research' }
];

function App() {
  const [view, setView] = useState<View>('home');
  const [selectedId, setSelectedId] = useState<string>('promo-visual');
  const selected = useMemo(() => cases.find((c) => c.id === selectedId) ?? cases[0], [selectedId]);
  const nav: [string, View][] = [['Home', 'home'], ['Cases', 'cases'], ['Workflow', 'workflow'], ['Refinement', 'refinement'], ['Profile', 'profile'], ['Contact', 'contact']];

  return <main className="site"><nav className="nav"><strong>Mos Digital Archive</strong><div>{nav.map(([n, v]) => <button key={n} onClick={() => setView(v)}>{n}</button>)}</div></nav>
    {view === 'home' ? <Hero onViewCases={() => setView('cases')} onContact={() => setView('contact')} /> : null}
    {view === 'cases' ? <CaseGallery cases={cases} onOpenCase={(id) => { setSelectedId(id); setView('caseDetail'); }} /> : null}
    {view === 'caseDetail' ? <CaseDetail item={selected} onBack={() => setView('cases')} /> : null}
    {view === 'workflow' ? <Workflow /> : null}
    {view === 'refinement' ? <RefinementSlider /> : null}
    {view === 'profile' ? <section className="section"><h2>Profile</h2><p>I build practical digital project systems that connect research, visual production, website structure, SEO/GEO optimization, and reporting.</p></section> : null}
    {view === 'contact' ? <section className="section"><h2>Contact</h2><p>Let’s build a usable digital workflow.</p><a className="btn primary" href="mailto:hello@example.com">Contact Me</a></section> : null}
  </main>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
