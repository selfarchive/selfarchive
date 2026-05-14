import { motion } from 'motion/react';
import { useMemo, type CSSProperties } from 'react';

type Props = { mouseX: number; mouseY: number };

type DeckPanel = {
  id: string;
  title: string;
  className: string;
  style: CSSProperties;
  enterDelay: number;
  floatDuration: number;
  finalRotateX: number;
  finalRotateY: number;
};

const panels: DeckPanel[] = [
  { id: 'seo', title: 'SEO/GEO Report', className: 'deck-seo', style: { left: '46%', top: '16%' }, enterDelay: 0.2, floatDuration: 8, finalRotateX: 10, finalRotateY: -9 },
  { id: 'research', title: 'Research Board', className: 'deck-research', style: { left: '18%', top: '30%' }, enterDelay: 0.32, floatDuration: 9, finalRotateX: 12, finalRotateY: 8 },
  { id: 'visual', title: 'Product Visual Refinement', className: 'deck-visual', style: { left: '42%', top: '43%' }, enterDelay: 0.44, floatDuration: 7.5, finalRotateX: 8, finalRotateY: 3 },
  { id: 'ui', title: 'Website UI Optimization', className: 'deck-ui', style: { left: '66%', top: '36%' }, enterDelay: 0.56, floatDuration: 8.6, finalRotateX: 9, finalRotateY: -6 },
  { id: 'outreach', title: 'Outreach Workflow', className: 'deck-outreach', style: { left: '58%', top: '58%' }, enterDelay: 0.68, floatDuration: 10, finalRotateX: 7, finalRotateY: 10 }
];

export function ArchiveDeckIntro({ mouseX, mouseY }: Props) {
  const parallax = useMemo(() => ({ rotateX: -mouseY * 4, rotateY: mouseX * 5 }), [mouseX, mouseY]);

  return <div className="archive-deck-bg" aria-hidden>
    <div className="deck-grid" />
    <motion.div className="deck-glow" animate={{ x: mouseX * 14, y: mouseY * 14 }} transition={{ duration: 0.8, ease: 'easeOut' }} />
    <motion.div className="archive-deck" animate={parallax} transition={{ type: 'spring', stiffness: 90, damping: 20 }}>
      {panels.map((panel, i) => <motion.article
        key={panel.id}
        className={`deck-panel ${panel.className}`}
        style={panel.style}
        initial={{ opacity: 0, y: 80, z: -200, rotateX: 18, rotateY: (i % 2 ? -1 : 1) * (10 + i), scale: 0.86, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: [10, 0], z: 0, rotateX: panel.finalRotateX, rotateY: panel.finalRotateY + mouseX * 2, scale: 1, filter: 'blur(0px)' }}
        transition={{ delay: panel.enterDelay, y: { duration: 1.2 }, duration: 1.25 + i * 0.08, type: 'spring', stiffness: 80, damping: 16 }}
      >
        <small>{panel.title}</small>
        <motion.div className="panel-preview" animate={{ y: [0, -6, 0], rotateY: [0, panel.finalRotateY > 0 ? 1 : -1, 0] }} transition={{ duration: panel.floatDuration, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.article>)}
    </motion.div>
  </div>;
}
