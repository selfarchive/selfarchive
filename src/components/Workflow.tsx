const steps = [
  { n: '01', title: 'Research', purpose: 'Collect practical signals to define direction.', input: 'market signals', output: 'direction' },
  { n: '02', title: 'Prompt Direction', purpose: 'Set context before visual production starts.', input: 'product/context', output: 'visual brief' },
  { n: '03', title: 'Visual Refinement', purpose: 'Turn raw material into reusable visual assets.', input: 'raw material', output: 'usable visual assets' },
  { n: '04', title: 'Web Layout', purpose: 'Improve scanning, hierarchy, and page flow.', input: 'page goals', output: 'clearer structure' },
  { n: '05', title: 'SEO/GEO', purpose: 'Review pages and fix visibility blockers.', input: 'site pages', output: 'visibility fixes' },
  { n: '06', title: 'Reporting', purpose: 'Translate analytics into a focused task list.', input: 'GA4/GSC data', output: 'priority list' },
  { n: '07', title: 'Outreach', purpose: 'Build contact angles based on account context.', input: 'target accounts', output: 'contact angle' }
];

export function Workflow() {
  return <section className="section">
    <h2>Workflow</h2>
    <p className="sub">A simple operating strip from research to outreach.</p>
    <div className="workflow-strip">{steps.map((s) => <article key={s.n} className="workflow-step"><small>{s.n}</small><h3>{s.title}</h3><p>{s.purpose}</p><div><span>Input: {s.input}</span><span>Output: {s.output}</span></div></article>)}</div>
  </section>;
}
