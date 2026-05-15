import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { CaseCard } from './CaseCard';
import type { CaseCategory, CaseItem } from './types';

const filters: ('Show All' | CaseCategory)[] = ['Show All', 'SEO/GEO', 'Research', 'Visuals', 'UI', 'Reporting', 'Outreach'];

export function CaseGallery({ cases, onOpenCase }: { cases: CaseItem[]; onOpenCase: (id: string) => void }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Show All');
  const filtered = useMemo(() => filter === 'Show All' ? cases : cases.filter((c) => c.category === filter), [cases, filter]);

  return <section className="section">
    <h2>Selected Cases</h2>
    <p className="sub">Selected case work across research, visual production, website structure, reporting, and outreach.</p>
    <div className="pills">{filters.map((f) => <motion.button key={f} className={f === filter ? 'active' : ''} onClick={() => setFilter(f)} whileHover={{ y: -2 }} whileTap={{ y: 1, scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
      {f}
    </motion.button>)}</div>
    <div className="gallery">{filtered.map((item) => <CaseCard key={item.id} item={item} onOpen={onOpenCase} caseNumber={cases.findIndex((c) => c.id === item.id) + 1} />)}</div>
  </section>;
}
