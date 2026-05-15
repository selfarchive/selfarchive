import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

type Props = { onViewCases: () => void };

type Panel = { label: string; className: string; x: string; y: string; rz: number; rx: number; delay: number; z: number };

const PANELS: Panel[] = [
  { label: 'SEO/GEO', className: 'intro-panel-seo', x: '-28%', y: '-20%', rz: -10, rx: 4, delay: 0.12, z: -460 },
  { label: 'Market Research', className: 'intro-panel-research', x: '26%', y: '-16%', rz: 9, rx: -4, delay: 0.22, z: -520 },
  { label: 'Product Visuals', className: 'intro-panel-visual', x: '-20%', y: '18%', rz: 8, rx: -3, delay: 0.32, z: -560 },
  { label: 'UI Design', className: 'intro-panel-ui', x: '16%', y: '20%', rz: -8, rx: 4, delay: 0.42, z: -500 }
];

export function HomeIntro({ onViewCases }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [runId, setRunId] = useState(0);
  const [showFinal, setShowFinal] = useState(prefersReducedMotion);
  const [showActions, setShowActions] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowFinal(true);
      setShowActions(true);
      return;
    }
    const t1 = window.setTimeout(() => setShowFinal(true), 1800);
    const t2 = window.setTimeout(() => setShowActions(true), 2450);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [runId, prefersReducedMotion]);

  const words = useMemo(() => ['Mos', 'Digital', 'Archive', 'is', 'here.'], []);
  const replayIntro = () => {
    setRunId((n) => n + 1);
    setShowFinal(prefersReducedMotion);
    setShowActions(prefersReducedMotion);
  };

  return (
    <section className="home-intro" key={runId}>
      <div className="intro-vignette" />
      <div className="intro-noise" />
      <div className="intro-bloom" />
      <div className="intro-particles" />

      <div className="intro-depth-scene" aria-hidden>
        {PANELS.map((panel) => (
          <motion.div
            key={`${runId}-${panel.label}`}
            className={`intro-panel ${panel.className}`}
            initial={{ opacity: 0, transform: `translate3d(${panel.x}, ${panel.y}, ${panel.z}px) rotateX(${panel.rx}deg) rotateY(${panel.rz / 2}deg) rotateZ(${panel.rz}deg) scale(0.8)` }}
            animate={{
              opacity: [0, 0.95, 0],
              transform: [
                `translate3d(${panel.x}, ${panel.y}, ${panel.z}px) rotateX(${panel.rx}deg) rotateY(${panel.rz / 2}deg) rotateZ(${panel.rz}deg) scale(0.8)`,
                `translate3d(${panel.x}, ${panel.y}, 40px) rotateX(${panel.rx - 2}deg) rotateY(${panel.rz / 2}deg) rotateZ(${panel.rz}deg) scale(1)`,
                'translate3d(0, 0, 40px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.72)'
              ]
            }}
            transition={{ duration: 1.06, delay: panel.delay, ease: [0.22, 1, 0.36, 1], times: [0, 0.65, 1] }}
          >
            <small>{panel.label}</small>
            <div className="intro-panel-visuals" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showFinal ? (
          <motion.div className="home-intro-copy" initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <motion.h1 initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
              {words.map((word) => (
                <motion.span key={word} variants={{ hidden: { opacity: 0, y: 22, filter: 'blur(5px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}>
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
              A working archive of visual cases, research workflows, UI experiments, and practical growth systems.
            </motion.p>
            <motion.ul className="home-index" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.36 }}>
              <li>Research</li><li>Visuals</li><li>UI</li><li>SEO/GEO</li><li>Reporting</li><li>Outreach</li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showActions ? (
          <motion.div className="home-intro-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <button className="btn primary" onClick={onViewCases}>View Cases</button>
            <button className="btn" onClick={replayIntro}>Replay Intro</button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
