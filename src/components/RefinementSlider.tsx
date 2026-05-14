import { useState } from 'react';
import { motion } from 'motion/react';

const prompts = ['clean commercial lighting','feature-benefit layout','premium product poster','factory capability visual','soft shadows','B2B marketing composition','clear product hierarchy','high-trust visual style','commercial background polish','marketing headline structure'];
const pos = prompts.map((_, i) => ({ x: -260 + (i % 3) * 40, y: -150 + i * 30, start: 20 + i * 3 }));

export function RefinementSlider() {
  const [progress, setProgress] = useState(0);
  return <section className="section"><h2>Refinement</h2><div className="refine-wrap"><div className="slider-scene">
    <div className="poster before"><div className="photo" /><span>Original Product Image</span></div>
    <div className="poster after" style={{ opacity: Math.max(0, (progress - 55) / 45) }}><div className="layout-grid" /><div className="headline" /><div className="chips" /><span>Final Promotional Visual</span></div>
    <div className="center-glow" style={{ opacity: Math.max(0, (progress - 20) / 80) }} />
    <svg className="trails" viewBox="0 0 1000 420">{prompts.map((p, i) => { const f = Math.max(0, Math.min(1, (progress - pos[i].start) / 40)); return <path key={p} d={`M ${140 + i * 6} ${200 + i * 4} Q ${350 + i * 8} ${100 + i * 3}, 500 200`} style={{ opacity: f * (1 - f), strokeDashoffset: 220 - f * 180 }} />; })}</svg>
    {prompts.map((txt, i) => { const p = pos[i]; const f = Math.max(0, Math.min(1, (progress - p.start) / 40)); return <motion.div key={txt} className="prompt-chip" style={{ left: '50%', top: '50%', x: p.x * (1 - f), y: p.y * (1 - f), opacity: progress < 20 ? 0 : 1 - f, scale: 1 - f * 0.45, rotate: (i % 2 ? 8 : -8) * (1 - f) }}>{txt}</motion.div>; })}
    <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} className="slider-input" />
  </div></div></section>;
}
