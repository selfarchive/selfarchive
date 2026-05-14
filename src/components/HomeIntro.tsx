import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

type Props = { onViewCases: () => void; onContact: () => void };

type Panel = { id: string; label: string; className: string; start: { x: number; y: number; z: number; rx: number; ry: number; s: number }; mid: { x: number; y: number; z: number; rx: number; ry: number; s: number }; end: { x: number; y: number; z: number; rx: number; ry: number; s: number } };

const panels: Panel[] = [
  { id: 'seo', label: 'SEO/GEO Report', className: 'intro-panel-seo', start: { x: -360, y: -140, z: -650, rx: 30, ry: -24, s: 0.85 }, mid: { x: -224, y: -92, z: 240, rx: 12, ry: -10, s: 1.03 }, end: { x: -30, y: -16, z: 12, rx: 1, ry: 1, s: 0.68 } },
  { id: 'research', label: 'Research Board', className: 'intro-panel-research', start: { x: 350, y: -170, z: -720, rx: -24, ry: 26, s: 0.82 }, mid: { x: 190, y: -84, z: 290, rx: -10, ry: 9, s: 1.04 }, end: { x: 18, y: 8, z: 8, rx: 0, ry: 0, s: 0.66 } },
  { id: 'visual', label: 'Product Visual Refinement', className: 'intro-panel-visual', start: { x: -290, y: 180, z: -760, rx: -12, ry: -26, s: 0.84 }, mid: { x: -130, y: 90, z: 210, rx: -6, ry: -11, s: 1.02 }, end: { x: -14, y: 10, z: 8, rx: 0, ry: 0, s: 0.66 } },
  { id: 'ui', label: 'Website UI Optimization', className: 'intro-panel-ui', start: { x: 330, y: 130, z: -620, rx: 20, ry: 18, s: 0.86 }, mid: { x: 195, y: 84, z: 260, rx: 8, ry: 8, s: 1.03 }, end: { x: 19, y: 12, z: 7, rx: 0, ry: 0, s: 0.67 } },
  { id: 'outreach', label: 'Outreach Workflow', className: 'intro-panel-outreach', start: { x: -50, y: -240, z: -700, rx: -30, ry: -4, s: 0.8 }, mid: { x: -22, y: -130, z: 300, rx: -10, ry: -2, s: 1 }, end: { x: 0, y: -10, z: 6, rx: 0, ry: 0, s: 0.62 } },
  { id: 'gallery', label: 'Visual Gallery', className: 'intro-panel-gallery', start: { x: 60, y: 250, z: -700, rx: 24, ry: 4, s: 0.8 }, mid: { x: 42, y: 120, z: 280, rx: 9, ry: 2, s: 1.03 }, end: { x: 4, y: 14, z: 6, rx: 0, ry: 0, s: 0.62 } }
];

export function HomeIntro({ onViewCases, onContact }: Props) {
  const [runId, setRunId] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t1 = window.setTimeout(() => setShowFinal(true), 3200);
    const t2 = window.setTimeout(() => setShowActions(true), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [runId]);

  const words = useMemo(() => ['Mos', 'Digital', 'Archive', 'is', 'here.'], []);
  const skipIntro = () => { setShowFinal(true); setShowActions(true); };
  const replayIntro = () => { setRunId((n) => n + 1); setShowFinal(false); setShowActions(false); setTilt({ x: 0, y: 0 }); };

  return <section className="home-intro" key={runId} onMouseMove={(e) => {
    if (!showFinal) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  }}>
    <div className="intro-vignette" />
    <div className="intro-noise" />
    <div className="intro-bloom" />
    <div className="intro-scan" />
    <div className="intro-particles" />
    <motion.div className="intro-depth-scene" animate={showFinal ? { rotateX: -tilt.y * 2.2, rotateY: tilt.x * 3.2, scale: 1.01 } : { rotateX: 0, rotateY: 0, scale: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
      {panels.map((panel, i) => <motion.article key={panel.id} className={`intro-panel ${panel.className}`}
        initial={{ opacity: 0, filter: 'blur(15px)', transform: `translate3d(${panel.start.x}px, ${panel.start.y}px, ${panel.start.z}px) rotateX(${panel.start.rx}deg) rotateY(${panel.start.ry}deg) scale(${panel.start.s})` }}
        animate={{ opacity: [0, 0.96, 0], filter: ['blur(15px)', 'blur(1.5px)', 'blur(11px)'], transform: [`translate3d(${panel.start.x}px, ${panel.start.y}px, ${panel.start.z}px) rotateX(${panel.start.rx}deg) rotateY(${panel.start.ry}deg) scale(${panel.start.s})`, `translate3d(${panel.mid.x}px, ${panel.mid.y}px, ${panel.mid.z}px) rotateX(${panel.mid.rx}deg) rotateY(${panel.mid.ry}deg) scale(${panel.mid.s})`, `translate3d(${panel.end.x}px, ${panel.end.y}px, ${panel.end.z}px) rotateX(${panel.end.rx}deg) rotateY(${panel.end.ry}deg) scale(${panel.end.s})`] }}
        transition={{ duration: 2.5, delay: 0.62 + i * 0.1, ease: [0.22, 0.74, 0.2, 1] }}>
        <small>{panel.label}</small><div className="intro-panel-visuals" />
      </motion.article>)}
    </motion.div>

    <AnimatePresence>
      {showFinal ? <motion.div className="home-intro-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.h1 initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
          {words.map((word) => <motion.span key={word} variants={{ hidden: { opacity: 0, y: 22, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}>{word}&nbsp;</motion.span>)}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.3 }}>
          visual case studies · research workflows · digital growth systems
        </motion.p>
      </motion.div> : null}
    </AnimatePresence>

    <AnimatePresence>
      {showActions ? <motion.div className="home-intro-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <button className="btn primary" onClick={onViewCases}>View Cases</button>
        <button className="btn" onClick={onContact}>Contact Me</button>
      </motion.div> : null}
    </AnimatePresence>

    <div className="intro-controls">
      {!showActions ? <button onClick={skipIntro}>Skip Intro</button> : <button onClick={replayIntro}>Replay Intro</button>}
    </div>
  </section>;
}
