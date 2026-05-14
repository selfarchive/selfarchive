import { motion } from 'motion/react';
import { useState } from 'react';
import type { CaseItem } from './types';

const hoverTransition = { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const };

function PreviewDetails({ id }: { id: string }) {
  return <div className={`case-preview case-preview-${id}`} aria-hidden>
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

export function CaseCard({ item, onOpen, caseNumber }: { item: CaseItem; onOpen: (id: string) => void; caseNumber: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showCover = Boolean(item.coverImage) && !imageFailed;

  return <motion.article className="case-card" whileHover="hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={hoverTransition}>
    <motion.button className="cover" onClick={() => onOpen(item.id)} whileHover="hover" initial="rest" animate="rest" variants={{ rest: { y: 0 }, hover: { y: -4 } }} transition={hoverTransition}>
      <motion.div className={`cover-art ${item.id}`} variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.045, y: -6 } }} transition={hoverTransition}>
        {showCover ? <motion.img className="cover-media" src={item.coverImage} alt={`${item.title} cover`} onError={() => setImageFailed(true)} style={{ objectFit: 'cover', objectPosition: item.coverPosition ?? 'center center' }} variants={{ rest: { scale: 1, y: 0, filter: 'saturate(0.95) contrast(1.02)' }, hover: { scale: 1.045, y: -6, filter: 'saturate(1) contrast(1.05)' } }} transition={hoverTransition} /> : <>
          <PreviewDetails id={item.id} />
          <span className="cover-unavailable">Cover unavailable</span>
        </>}
      </motion.div>

      <motion.div className="overlay" variants={{ rest: { opacity: 0.85 }, hover: { opacity: 1 } }} transition={hoverTransition} />

      <div className="overlay-content">
        <motion.span className="case-index" variants={{ rest: { opacity: 0.9 }, hover: { opacity: 1 } }} transition={hoverTransition}>{String(caseNumber).padStart(2, '0')}</motion.span>
        <motion.span className="case-tag" variants={{ rest: { opacity: 0.78, y: 0 }, hover: { opacity: 1, y: -2 } }} transition={hoverTransition}>{item.category}</motion.span>
        <motion.span className="case-status" variants={{ rest: { opacity: 0.84 }, hover: { opacity: 1 } }} transition={hoverTransition}>Live</motion.span>
        <div className="case-meta">
          <motion.h3 variants={{ rest: { y: 0 }, hover: { y: -6 } }} transition={hoverTransition}>{item.title}</motion.h3>
          <motion.p variants={{ rest: { opacity: 0.84, y: 5 }, hover: { opacity: 1, y: 0 } }} transition={hoverTransition}>{item.description}</motion.p>
          <motion.em variants={{ rest: { opacity: 0.7, x: 0 }, hover: { opacity: 1, x: 6 } }} transition={hoverTransition}>View Case <span aria-hidden>→</span></motion.em>
        </div>
      </div>
    </motion.button>
  </motion.article>;
}
