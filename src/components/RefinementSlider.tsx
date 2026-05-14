import { useMemo, useState } from 'react';
import { motion } from 'motion/react';

type PromptChip = { text: string; startX: number; startY: number; endX: number; endY: number; delayStart: number; orbitRange: number; rotation: number };

const prompts: PromptChip[] = [
  { text: '洁净的商业照明', startX: -320, startY: -140, endX: -20, endY: -22, delayStart: 30, orbitRange: 14, rotation: -11 },
  { text: '功能优势布局', startX: -260, startY: -200, endX: 14, endY: -16, delayStart: 33, orbitRange: 11, rotation: 8 },
  { text: '优质产品海报', startX: -210, startY: -70, endX: -10, endY: 15, delayStart: 36, orbitRange: 16, rotation: -6 },
  { text: '工厂能力可视化', startX: -170, startY: 40, endX: 8, endY: 18, delayStart: 39, orbitRange: 9, rotation: 10 },
  { text: '柔和的阴影', startX: 260, startY: -190, endX: 12, endY: -24, delayStart: 35, orbitRange: 10, rotation: -9 },
  { text: 'B2B营销构成', startX: 310, startY: -94, endX: -15, endY: -10, delayStart: 31, orbitRange: 15, rotation: 12 },
  { text: '清晰的产品层级', startX: 270, startY: 20, endX: 6, endY: 12, delayStart: 34, orbitRange: 13, rotation: -10 },
  { text: '高信任度视觉风格', startX: 240, startY: 120, endX: -10, endY: 16, delayStart: 38, orbitRange: 12, rotation: 7 }
];

const clamp = (n: number, min = 0, max = 1) => Math.max(min, Math.min(max, n));

export function RefinementSlider() {
  const [progress, setProgress] = useState(0);
  const showPromptStart = 18;
  const absorptionStart = 35;
  const absorptionEnd = 78;
  const phase = progress < 45 ? '原图' : progress < 90 ? '视觉重构' : '成品海报';
  const marker = useMemo(() => [0, 50, 100], []);

  const visibleProgress = clamp((progress - showPromptStart) / 18);
  const compositionProgress = clamp((progress - absorptionStart) / 35);
  const finalPosterProgress = clamp((progress - 70) / 24);

  return <section className="section"><h2>Refinement</h2><div className="refine-wrap"><div className="stage-label">阶段：{phase}</div><div className="slider-scene">
    <div className="poster before"><div className="photo" /><span>原图</span></div>
    <div className="reconstruct-layer" style={{ opacity: compositionProgress }}><div className="layout-grid" /><div className="headline" /><div className="feature-chips" /><div className="product-focus" /></div>
    <div className="poster after" style={{ opacity: finalPosterProgress }}><div className="layout-grid" /><div className="headline" /><div className="chips" /><div className="cta-pill">Campaign Ready</div><span>成品海报</span></div>
    <div className="center-glow" style={{ opacity: clamp((progress - absorptionStart) / 40) }} />
    <svg className="trails" viewBox="0 0 1000 420">
      {prompts.map((p, i) => {
        const absorbProgress = clamp((progress - p.delayStart) / 40);
        const pathOpacity = progress < showPromptStart ? 0 : visibleProgress * clamp((absorbProgress - 0.05) * 2.4) * (1 - absorbProgress) * (progress < absorptionEnd ? 1 : clamp((100 - progress) / 20));
        const sx = 500 + p.startX * 0.9;
        const sy = 200 + p.startY * 0.9;
        const cx = 500 + p.startX * 0.35 + (i % 2 ? -60 : 60);
        const cy = 200 + p.startY * 0.2 - 28;
        return <g key={`${p.text}-path`} style={{ opacity: pathOpacity }}><path d={`M ${sx} ${sy} Q ${cx} ${cy}, 500 200`} /><circle r="3" className="glyph-dot"><animateMotion dur={`${1.8 + i * 0.12}s`} repeatCount="indefinite" path={`M ${sx} ${sy} Q ${cx} ${cy}, 500 200`} /></circle></g>;
      })}
    </svg>
    {prompts.map((p, i) => {
      const absorbProgress = clamp((progress - p.delayStart) / 40);
      const orbitPhase = clamp((progress - showPromptStart) / 24) * (1 - absorbProgress);
      const pulse = 0.92 + Math.sin((progress + i * 9) / 7) * 0.05;
      const x = p.startX + (p.endX - p.startX) * absorbProgress + Math.sin((progress + i * 10) / 8) * p.orbitRange * orbitPhase;
      const y = p.startY + (p.endY - p.startY) * absorbProgress + Math.cos((progress + i * 8) / 9) * p.orbitRange * orbitPhase;
      const opacity = progress < showPromptStart ? 0 : clamp(visibleProgress * 0.92) * (1 - absorbProgress);
      return <motion.div key={p.text} className="prompt-chip" style={{ left: '50%', top: '50%', x, y, opacity, scale: (1 - absorbProgress * 0.55) * pulse, rotate: p.rotation * (1 - absorbProgress) }}><span>{p.text}</span></motion.div>;
    })}
  </div>
  <div className="slider-ui"><div className="stage-markers">{marker.map((m) => <span key={m} style={{ left: `${m}%` }} />)}</div>
    <div className="stage-words"><small>原图</small><small>视觉重构</small><small>成品海报</small></div>
    <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} className="slider-input" />
  </div>
  </div></section>;
}
