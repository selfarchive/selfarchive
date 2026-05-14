export function Workflow() {
  return <section className="section"><h2>Workflow</h2><div className="workflow">{['Research', 'Prompt Direction', 'Visual Refinement', 'Web Layout', 'SEO/GEO', 'Reporting', 'Outreach'].map((s) => <div key={s}>{s}</div>)}</div></section>;
}
