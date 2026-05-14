import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

type Props = { onViewCases: () => void; onContact: () => void };

type Panel = { id: string; label: string; className: string; start: { x: number; y: number; z: number; rx: number; ry: number }; mid: { x: number; y: number; z: number; rx: number; ry: number }; end: { x: number; y: number; z: number; rx: number; ry: number } };

const panels: Panel[] = [
  { id: 'seo', label: 'SEO/GEO Report', className: 'intro-panel-seo', start: { x: -340, y: -140, z: -520, rx: 26, ry: -24 }, mid: { x: -220, y: -76, z: 120, rx: 8, ry: -10 }, end: { x: -40, y: -20, z: 10, rx: 0, ry: 0 } },
  { id: 'research', label: 'Research Board', className: 'intro-panel-research', start: { x: 300, y: -170, z: -640, rx: -22, ry: 22 }, mid: { x: 170, y: -90, z: 70, rx: -8, ry: 8 }, end: { x: 20, y: 10, z: 4, rx: 0, ry: 0 } },
  { id: 'visual', label: 'Product Visual', className: 'intro-panel-visual', start: { x: -280, y: 170, z: -700, rx: -10, ry: -26 }, mid: { x: -130, y: 92, z: 88, rx: -5, ry: -10 }, end: { x: -14, y: 8, z: 4, rx: 0, ry: 0 } },
  { id: 'ui', label: 'UI Optimization', className: 'intro-panel-ui', start: { x: 320, y: 130, z: -580, rx: 18, ry: 18 }, mid: { x: 196, y: 80, z: 94, rx: 7, ry: 6 }, end: { x: 18, y: 12, z: 2, rx: 0, ry: 0 } }
];

export function HomeIntro({ onViewCases, onContact }: Props) {
  const [runId, setRunId] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setShowFinal(true), 3200);
    const t2 = window.setTimeout(() => setShowActions(true), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [runId]);

  const words = useMemo(() => ['Mos', 'Digital', 'Archive', 'is', 'here.'], []);
  const skipIntro = () => { setShowFinal(true); setShowActions(true); };
  const replayIntro = () => { setRunId((n) => n + 1); setShowFinal(false); setShowActions(false); };

  return <section className="home-intro" key={runId}>
    <div className="intro-noise" />
    <div className="intro-scan" />
    <div className="intro-particles" />
    <div className="intro-depth-scene">
      {panels.map((panel, i) => <motion.article key={panel.id} className={`intro-panel ${panel.className}`}
        initial={{ opacity: 0, filter: 'blur(14px)', transform: `translate3d(${panel.start.x}px, ${panel.start.y}px, ${panel.start.z}px) rotateX(${panel.start.rx}deg) rotateY(${panel.start.ry}deg) scale(0.9)` }}
        animate={{ opacity: [0, 0.92, 0], filter: ['blur(14px)', 'blur(2px)', 'blur(10px)'], transform: [`translate3d(${panel.start.x}px, ${panel.start.y}px, ${panel.start.z}px) rotateX(${panel.start.rx}deg) rotateY(${panel.start.ry}deg) scale(0.9)`, `translate3d(${panel.mid.x}px, ${panel.mid.y}px, ${panel.mid.z}px) rotateX(${panel.mid.rx}deg) rotateY(${panel.mid.ry}deg) scale(1)`, `translate3d(${panel.end.x}px, ${panel.end.y}px, ${panel.end.z}px) rotateX(${panel.end.rx}deg) rotateY(${panel.end.ry}deg) scale(0.65)`] }}
        transition={{ duration: 2.4, delay: 0.8 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}>
        <small>{panel.label}</small><div className="intro-panel-visuals" />
      </motion.article>)}
    </div>

    <AnimatePresence>
      {showFinal ? <motion.div className="home-intro-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.h1 initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
          {words.map((word) => <motion.span key={word} variants={{ hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}>{word}&nbsp;</motion.span>)}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.25 }}>
          visual case studies · research workflows · digital growth systems
        </motion.p>
      </motion.div> : null}
    </AnimatePresence>

    <AnimatePresence>
      {showActions ? <motion.div className="home-intro-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <button className="btn primary" onClick={onViewCases}>View Cases</button>
        <button className="btn" onClick={onContact}>Contact Me</button>
        <div className="hero-chips"><span>SEO/GEO</span><span>Research</span><span>Visual Refinement</span><span>UI Optimization</span></div>
      </motion.div> : null}
    </AnimatePresence>

    <div className="intro-controls">
      {!showActions ? <button onClick={skipIntro}>Skip Intro</button> : <button onClick={replayIntro}>Replay Intro</button>}
    </div>
  </section>;
}
