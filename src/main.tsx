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
  { id: 'seo-geo', title: 'SEO & GEO Optimization Tool System', category: 'SEO/GEO', description: 'A local workflow for crawling pages, checking metadata, tracking visibility, and preparing SEO/GEO recommendations.', brief: 'A complete search performance workflow.', problem: 'Data was fragmented across tools.', process: 'Crawl checks → metadata QA → intent mapping → reporting.', output: 'Priority matrix and growth recommendations.', tools: ['Screaming Frog', 'Search Console', 'GA4'], visualType: 'seo', coverImage: '/cases/seo-geo/cover.png' },
  { id: 'market-research', title: 'Market Research Workflow System', category: 'Research', description: 'A research board for collecting market signals, competitor notes, buyer pain points, and outreach angles.', brief: 'Research board that turns noise into opportunities.', problem: 'Research signals were scattered.', process: 'Competitor map → signal clustering → ICP notes.', output: 'Research boards and outreach segments.', tools: ['Notion', 'Signal tagging'], visualType: 'research', coverImage: '/cases/market-research/cover.png' },
  { id: 'promo-visual', title: 'Promotional Image & Product Visual System', category: 'Visuals', description: 'A visual production workflow that turns raw product material into usable campaign images and product storyboards.', brief: 'Raw product image to final commercial poster.', problem: 'Raw photos lacked message hierarchy.', process: 'Prompt direction → composition planning → campaign outputs.', output: 'Poster sets and sales-ready visuals.', tools: ['Prompt engineering', 'Layout systems'], visualType: 'visual', coverImage: '/cases/product-visuals/cover.png' },
  { id: 'ui-optimization', title: 'Website UI Design & Optimization', category: 'UI', description: 'Interface experiments focused on hierarchy, CTA paths, responsive layouts, and smoother case presentation.', brief: 'Layout refinement for clearer scanning and stronger CTA momentum.', problem: 'Weak structure and unclear conversion paths.', process: 'Audit → wireframe path → hierarchy updates.', output: 'Refined landing and product flows.', tools: ['UX audit', 'Responsive QA'], visualType: 'ui', coverImage: '/cases/ui-optimization/cover.gif' },
  { id: 'analytics-reporting', title: 'Analytics & Reporting Dashboard', category: 'Reporting', description: 'A reporting layer for Search Console, GA4, traffic snapshots, and optimization priorities.', brief: 'Performance summaries connected to next steps.', problem: 'Metrics lacked clear action paths.', process: 'KPI snapshots → issue scoring.', output: 'Weekly report cards.', tools: ['Looker Studio', 'GA4'], visualType: 'report', coverImage: '/cases/reporting-dashboard/cover.png' },
  { id: 'b2b-outreach', title: 'B2B Outreach Workflow', category: 'Outreach', description: 'A structured workflow for prospect review, message angles, follow-up timing, and inquiry conversion.', brief: 'Repeatable outreach powered by company context.', problem: 'Messaging quality dropped without research depth.', process: 'Account brief → message framework → follow-up timeline.', output: 'Message cards and outreach calendars.', tools: ['CRM board', 'Templates'], visualType: 'research', coverImage: '/cases/outreach-workflow/cover.png' }
];

function App() {
  const [view, setView] = useState<View>('home');
  const [selectedId, setSelectedId] = useState<string>('promo-visual');
  const selected = useMemo(() => cases.find((c) => c.id === selectedId) ?? cases[0], [selectedId]);
  const nav: [string, View][] = [['Home', 'home'], ['Cases', 'cases'], ['Workflow', 'workflow'], ['Refinement', 'refinement'], ['Profile', 'profile'], ['Contact', 'contact']];

  return <main className="site"><nav className="nav"><strong>Mos Digital Archive</strong><div>{nav.map(([n, v]) => <button key={n} className={view === v ? 'is-active' : ''} onClick={() => setView(v)}>{n}</button>)}</div></nav>
    {view === 'home' ? <Hero onViewCases={() => setView('cases')} /> : null}
    {view === 'cases' ? <CaseGallery cases={cases} onOpenCase={(id) => { setSelectedId(id); setView('caseDetail'); }} /> : null}
    {view === 'caseDetail' ? <CaseDetail item={selected} onBack={() => setView('cases')} /> : null}
    {view === 'workflow' ? <Workflow /> : null}
    {view === 'refinement' ? <RefinementSlider /> : null}
    {view === 'profile' ? <section className="section profile-section"><h2>Profile</h2><p>I build practical digital project systems that connect research, visual production, website structure, SEO/GEO optimization, reporting, and outreach.</p><h3>Current focus</h3><ul><li>Visual case studies</li><li>UI and page-structure experiments</li><li>SEO/GEO workflows</li><li>Reporting and visibility tracking</li><li>B2B outreach systems</li></ul><a className="btn primary" href="mailto:hello@example.com">Start a conversation</a></section> : null}
    {view === 'contact' ? <section className="section"><h2>Contact</h2><p>If you want to review a case, workflow, or practical collaboration idea, send a note.</p><a className="btn primary" href="mailto:hello@example.com">Contact Me</a></section> : null}
  </main>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
