import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

type Props = { onViewCases: () => void; onContact: () => void };

export function HomeIntro({ onViewCases, onContact }: Props) {
  const [runId, setRunId] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setShowFinal(true), 1700);
    const t2 = window.setTimeout(() => setShowActions(true), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [runId]);

  const words = useMemo(() => ['Mos', 'Digital', 'Archive', 'is', 'here.'], []);
  const skipIntro = () => { setShowFinal(true); setShowActions(true); };
  const replayIntro = () => { setRunId((n) => n + 1); setShowFinal(false); setShowActions(false); };

  return <section className="home-intro" key={runId}>
    <div className="intro-vignette" />
    <div className="intro-noise" />
    <div className="intro-bloom" />

    <AnimatePresence>
      {showFinal ? <motion.div className="home-intro-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.h1 initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
          {words.map((word) => <motion.span key={word} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>{word}&nbsp;</motion.span>)}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          A working archive of visual cases, research workflows, UI experiments, and practical growth systems.
        </motion.p>
        <motion.ul className="home-index" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <li>Research</li><li>Visuals</li><li>Web UI</li><li>SEO/GEO</li><li>Reporting</li><li>Outreach</li>
        </motion.ul>
      </motion.div> : null}
    </AnimatePresence>

    <AnimatePresence>
      {showActions ? <motion.div className="home-intro-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <button className="btn primary" onClick={onViewCases}>View Cases</button>
        <button className="btn" onClick={onContact}>Contact</button>
      </motion.div> : null}
    </AnimatePresence>

    <div className="intro-controls">
      {!showActions ? <button onClick={skipIntro}>Skip Intro</button> : <button onClick={replayIntro}>Replay Intro</button>}
    </div>
  </section>;
}
