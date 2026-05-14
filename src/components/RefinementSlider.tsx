import { useMemo, useState } from 'react';
import { motion } from 'motion/react';

type PromptChip = {
  text: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delayStart: number;
  orbitRange: number;
  rotation: number;
};

const prompts: PromptChip[] = [
  { text: '洁净的商业照明', startX: -280, startY: -120, endX: -26, endY: -18, delayStart: 32, orbitRange: 10, rotation: -9 },
  { text: '功能优势布局', startX: -250, startY: -186, endX: 18, endY: -14, delayStart: 34, orbitRange: 10, rotation: 8 },
  { text: '优质产品海报', startX: -210, startY: -58, endX: -12, endY: 12, delayStart: 36, orbitRange: 12, rotation: -6 },
  { text: '工厂能力可视化', startX: -160, startY: 44, endX: 6, endY: 18, delayStart: 39, orbitRange: 8, rotation: 9 },
  { text: '柔和的阴影', startX: 232, startY: -170, endX: 14, endY: -20, delayStart: 35, orbitRange: 10, rotation: -8 },
  { text: 'B2B营销构成', startX: 284, startY: -84, endX: -14, endY: -10, delayStart: 33, orbitRange: 12, rotation: 10 },
  { text: '清晰的产品层级', startX: 248, startY: 26, endX: 8, endY: 12, delayStart: 37, orbitRange: 10, rotation: -9 }
];

const beforeImage = '/cases/product-visuals/before-product.png';
const afterImage = '/cases/product-visuals/final-poster.png';

const clamp = (n: number, min = 0, max = 1) => Math.max(min, Math.min(max, n));
const range = (p: number, start: number, end: number) => clamp((p - start) / (end - start));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function RefinementSlider() {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [beforeLoadError, setBeforeLoadError] = useState(false);
  const [afterLoadError, setAfterLoadError] = useState(false);

  const phase = progress <= 33 ? '原图' : progress <= 75 ? '视觉重构' : '成品海报';
  const markers = useMemo(() => [0, 50, 100], []);
  const activeMarker = progress <= 33 ? 0 : progress <= 75 ? 1 : 2;

  const beforeOpacity = progress <= 38 ? 1 : progress < 45 ? 1 : progress <= 85 ? 1 - range(progress, 45, 85) : 0;
  const beforeBlur = progress < 55 ? 0 : progress <= 80 ? lerp(0, 3, range(progress, 55, 80)) : 3;
  const beforeScale = progress < 45 ? 1 : lerp(1, 0.96, range(progress, 45, 85));

  const afterOpacity = progress <= 45 ? 0 : progress < 55 ? 0.05 * range(progress, 45, 55) : lerp(0, 1, range(progress, 55, 92));
  const afterBlur = progress < 55 ? 8 : lerp(8, 0, range(progress, 55, 90));
  const afterScale = progress < 55 ? 0.96 : lerp(0.96, 1, range(progress, 55, 92));

  const reconstructionOpacity = progress < 25 ? 0 : progress <= 45 ? range(progress, 25, 45) : progress <= 72 ? 1 : 1 - range(progress, 72, 85);
  const trailsOpacity = progress < 18 ? 0 : progress > 85 ? 0 : clamp(range(progress, 18, 28) * (1 - range(progress, 70, 85)));
  const glowOpacity = progress < 62 ? 0 : clamp(range(progress, 62, 80) * (1 - range(progress, 84, 95)));

  return <section className="section"><h2>Refinement</h2><div className="refine-wrap"><div className="stage-label">阶段：{phase}</div><div className="slider-scene">
    <div className="poster before" style={{ opacity: beforeOpacity, filter: `blur(${beforeBlur}px)`, transform: `scale(${beforeScale})` }}>
      <img src={beforeImage} alt="原图产品" className="poster-image" onError={() => setBeforeLoadError(true)} onLoad={() => setBeforeLoadError(false)} />
      {beforeLoadError ? <small className="image-error">图片加载失败：{beforeImage}</small> : null}
      <span>原图</span>
    </div>

    <div className="reconstruction-layer" style={{ opacity: reconstructionOpacity }}>
      <div className="layout-grid" />
      <div className="focus-frame" style={{ transform: `scale(${lerp(0.97, 1, range(progress, 35, 70))})` }} />
      <div className="headline-block" />
      <div className="layout-block block-a" />
      <div className="layout-block block-b" />
      <div className="layout-block block-c" />
      <div className="annotation a1" /><div className="annotation a2" /><div className="annotation a3" />
      <div className="palette-dots"><i /><i /><i /><i /></div>
      <div className="feature-tags"><span>卖点层级</span><span>光影方向</span><span>版式权重</span></div>
    </div>

    <div className="poster after" style={{ opacity: afterOpacity, filter: `blur(${afterBlur}px)`, transform: `scale(${afterScale})` }}>
      <div className="poster-frame">
        <img src={afterImage} alt="成品海报" className="poster-image" onError={() => setAfterLoadError(true)} onLoad={() => setAfterLoadError(false)} />
      </div>
      {afterLoadError ? <small className="image-error">图片加载失败：{afterImage}</small> : null}
      <span>成品海报</span>
    </div>

    <div className="center-glow" style={{ opacity: glowOpacity }} />

    <svg className="trails" viewBox="0 0 1000 420" style={{ opacity: trailsOpacity }}>
      {prompts.map((p, i) => {
        const absorbProgress = range(progress, p.delayStart, 72);
        const sx = 500 + p.startX * 0.9;
        const sy = 210 + p.startY * 0.9;
        const cx = 500 + p.startX * 0.35 + (i % 2 ? -60 : 60);
        const cy = 210 + p.startY * 0.2 - 28;
        return <g key={`${p.text}-path`} style={{ opacity: (1 - absorbProgress) * trailsOpacity }}><path d={`M ${sx} ${sy} Q ${cx} ${cy}, 500 210`} /><circle r="2.5" className="glyph-dot"><animateMotion dur={`${1.8 + i * 0.12}s`} repeatCount="indefinite" path={`M ${sx} ${sy} Q ${cx} ${cy}, 500 210`} /></circle></g>;
      })}
    </svg>

    {prompts.map((p, i) => {
      const appear = range(progress, 18, 30);
      const absorbProgress = range(progress, p.delayStart, 72);
      const drift = range(progress, 20, 35) * (1 - absorbProgress);
      const pulse = 0.96 + Math.sin((progress + i * 9) / 8) * 0.03;
      const x = p.startX + (p.endX - p.startX) * absorbProgress + Math.sin((progress + i * 10) / 9) * p.orbitRange * drift;
      const y = p.startY + (p.endY - p.startY) * absorbProgress + Math.cos((progress + i * 8) / 10) * p.orbitRange * drift;
      const chipOpacity = progress < 18 ? 0 : appear * (1 - absorbProgress) * (1 - range(progress, 70, 83));
      return <motion.div key={p.text} className="prompt-chip" style={{ left: '50%', top: '50%', x, y, opacity: chipOpacity, scale: (1 - absorbProgress * 0.6) * pulse, rotate: p.rotation * (1 - absorbProgress), filter: `blur(${lerp(0, 1.6, absorbProgress)}px)` }}><span>{p.text}</span></motion.div>;
    })}
  </div>

  <div className="slider-ui">
    <div className="stage-markers">{markers.map((m, i) => <span key={m} className={i === activeMarker ? 'active' : ''} style={{ left: `${m}%` }} />)}</div>
    <div className="stage-words"><small>原图</small><small>视觉重构</small><small>成品海报</small></div>
    <div className="slider-track-fill" style={{ width: `${progress}%` }} />
    <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} className={`slider-input ${isDragging ? 'dragging' : ''}`} onPointerDown={() => setIsDragging(true)} onPointerUp={() => setIsDragging(false)} onBlur={() => setIsDragging(false)} />
  </div>
  </div></section>;
}
