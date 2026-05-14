import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ArchiveDeckIntro } from './ArchiveDeckIntro';

type Props = { onViewCases: () => void; onContact: () => void };

export function Hero({ onViewCases, onContact }: Props) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const titleWords = useMemo(() => 'Building digital growth cases through research, visuals, tools, and web optimization.'.split(' '), []);

  return <section className="hero" onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: (e.clientX - rect.left) / rect.width - 0.5, y: (e.clientY - rect.top) / rect.height - 0.5 });
  }}>
    <ArchiveDeckIntro mouseX={cursor.x} mouseY={cursor.y} />
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>DIGITAL CASE ARCHIVE</motion.p>
      <motion.h1 className="hero-title" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 1.15 } } }}>
        {titleWords.map((word, i) => <motion.span key={`${word}-${i}`} variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}>{word} </motion.span>)}
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45 }}>A personal archive of SEO/GEO workflows, market research systems, promotional visuals, product image refinement, and website UI optimization cases.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }}><button className="btn primary" onClick={onViewCases}>View Cases <ArrowRight size={16} /></button><button className="btn" onClick={onContact}>Contact Me</button></motion.div>
      <motion.div className="hero-chips" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.85 }}>
        <span>SEO/GEO</span><span>Research Systems</span><span>Visual Refinement</span><span>UI Optimization</span>
      </motion.div>
    </div>
  </section>;
}
