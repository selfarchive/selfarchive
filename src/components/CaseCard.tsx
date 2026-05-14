import { motion } from 'motion/react';
import type { CaseItem } from './types';

const hoverTransition = { duration: 0.58, ease: 'easeOut' as const };

function PreviewDetails({ id }: { id: string }) {
  return <div className={`case-preview case-preview-${id}`} aria-hidden>
    <span className="detail index">01</span>
    <span className="detail badge">Case Type</span>
    <span className="detail status">Live</span>
    <div className="detail-block a" />
    <div className="detail-block b" />
    <div className="detail-block c" />
    <div className="detail-block d" />
    <div className="detail-chip x" />
    <div className="detail-chip y" />
    <div className="detail-chip z" />
    <div className="detail-line l1" />
    <div className="detail-line l2" />
    <div className="detail-line l3" />
    <div className="scan-dot s1" />
    <div className="scan-dot s2" />
    <div className="scan-dot s3" />
  </div>;
}

export function CaseCard({ item, onOpen }: { item: CaseItem; onOpen: (id: string) => void }) {
  return <motion.article className="case-card" whileHover="hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <motion.button className="cover" onClick={() => onOpen(item.id)} whileHover="hover" initial="rest" animate="rest">
      <motion.div className={`cover-art ${item.id}`} variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }} transition={hoverTransition}>
        <PreviewDetails id={item.id} />
      </motion.div>

      <motion.div className="overlay" variants={{ rest: { opacity: 0.25 }, hover: { opacity: 0.86 } }} transition={hoverTransition} />

      <div className="overlay-content">
        <motion.span className="case-tag" variants={{ rest: { opacity: 0.72, y: 0 }, hover: { opacity: 1, y: -3 } }} transition={hoverTransition}>{item.category}</motion.span>
        <motion.h3 variants={{ rest: { y: 0 }, hover: { y: -6 } }} transition={hoverTransition}>{item.title}</motion.h3>
        <motion.p variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 0.95, y: 0 } }} transition={hoverTransition}>{item.description}</motion.p>
        <motion.em variants={{ rest: { opacity: 0.38, x: 0 }, hover: { opacity: 1, x: 8 } }} transition={hoverTransition}>View Case <span aria-hidden>→</span></motion.em>
      </div>
    </motion.button>
  </motion.article>;
}
