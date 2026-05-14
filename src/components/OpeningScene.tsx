import { motion } from 'motion/react';
import { useMemo } from 'react';

type Props = { mouseX: number; mouseY: number };

const previewCards = [
  { id: 'seo', title: 'SEO/GEO Report', cls: 'preview-report', x: '-34%', y: '14%' },
  { id: 'research', title: 'Research Board', cls: 'preview-notes', x: '-28%', y: '64%' },
  { id: 'poster', title: 'Product Poster', cls: 'preview-poster', x: '78%', y: '18%' },
  { id: 'wireframe', title: 'UI Layout', cls: 'preview-wire', x: '72%', y: '66%' }
];

export function OpeningScene({ mouseX, mouseY }: Props) {
  const particles = useMemo(
    () => Array.from({ length: 30 }, (_, i) => ({ id: i, x: 10 + ((i * 17) % 80), y: 8 + ((i * 23) % 82), size: 2 + (i % 3), delay: i * 0.03 })),
    []
  );

  return (
    <div className="opening-scene" aria-hidden>
      <motion.div
        className="mesh-glow"
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, x: mouseX * 10, y: mouseY * 10 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />

      <svg className="archive-lines" viewBox="0 0 1000 560" preserveAspectRatio="none">
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M ${140 + i * 160} ${120 + i * 56} Q ${420 + i * 70} ${20 + i * 96}, ${850 - i * 70} ${210 + i * 76}`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.42 }}
            transition={{ duration: 1, delay: 0.4 + i * 0.08 }}
          />
        ))}
      </svg>

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0.15, 0.65, 0.25], y: [0, -8, 0], x: [0, 3, 0], scale: [0.7, 1, 0.8] }}
          transition={{ delay: 0.2 + p.delay, duration: 4 + (p.id % 4), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {previewCards.map((card, i) => (
        <motion.div
          key={card.id}
          className={`preview-card ${card.cls}`}
          style={{ left: `calc(50% + ${card.x})`, top: card.y }}
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: [12, -8, 12], x: mouseX * (i % 2 ? -8 : 8), filter: 'blur(0px)' }}
          transition={{ delay: 0.6 + i * 0.08, opacity: { duration: 0.6 }, y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }, x: { duration: 0.9 } }}
        >
          <small>{card.title}</small>
        </motion.div>
      ))}
    </div>
  );
}
