import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

type Props = { onViewCases: () => void; onContact: () => void };

export function Hero({ onViewCases, onContact }: Props) {
  return <section className="hero">
    <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>DIGITAL CASE ARCHIVE</motion.p>
    <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>Building digital growth cases through research, visuals, tools, and web optimization.</motion.h1>
    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>A personal archive of SEO/GEO workflows, market research systems, promotional visuals, product image refinement, and website UI optimization cases.</motion.p>
    <div className="hero-actions"><button className="btn primary" onClick={onViewCases}>View Cases <ArrowRight size={16} /></button><button className="btn" onClick={onContact}>Contact Me</button></div>
    <div className="float-card">Preview: Research → Visuals → UI Optimization</div>
  </section>;
}
