import { useMemo, useState } from 'react';
import { CaseCard } from './CaseCard';
import type { CaseCategory, CaseItem } from './types';

const filters: ('Show All' | CaseCategory)[] = ['Show All', 'SEO/GEO', 'Research', 'Visuals', 'UI', 'Reporting'];

export function CaseGallery({ cases, onOpenCase }: { cases: CaseItem[]; onOpenCase: (id: string) => void }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Show All');
  const filtered = useMemo(() => filter === 'Show All' ? cases : cases.filter((c) => c.category === filter), [cases, filter]);

  return <section className="section">
    <h2>Selected Case Studies</h2>
    <p className="sub">Visual case studies covering SEO/GEO tools, market research workflows, product visuals, and website UI optimization.</p>
    <div className="pills">{filters.map((f) => <button key={f} className={f === filter ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
    <div className="gallery">{filtered.map((item) => <CaseCard key={item.id} item={item} onOpen={onOpenCase} />)}</div>
  </section>;
}
