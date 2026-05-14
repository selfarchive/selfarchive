import { motion } from 'motion/react';
import type { CaseItem } from './types';

export function CaseCard({ item, onOpen }: { item: CaseItem; onOpen: (id: string) => void }) {
  return <motion.article className="case-card" whileHover="hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <button className="cover" onClick={() => onOpen(item.id)}>
      <div className={`cover-art ${item.id}`} />
      <motion.div className="overlay" variants={{ hover: { opacity: 1 } }}>
        <span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><em>View Case →</em>
      </motion.div>
    </button>
  </motion.article>;
}
