import { useState } from 'react';
import { motion } from 'motion/react';

const chips = ['Interface System', 'Responsive Layout', 'CTA Flow', 'Motion Detail', 'Case Presentation'];

type GalleryItem = {
  title: string;
  description: string;
  src: string;
  badge: string;
  pending?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    title: 'Hero Opening Motion',
    description: 'A cinematic entry sequence that introduces the archive before resolving into the main title.',
    src: '/cases/ui-optimization/gif-hero-opening.gif',
    badge: 'Motion',
    pending: false
  },
  {
    title: 'Case Card Hover Interaction',
    description: 'Hover states with image scaling, overlay control, text reveal, and smooth return motion.',
    src: '/cases/ui-optimization/gif-case-hover.gif',
    badge: 'Interaction',
    pending: true
  },
  {
    title: 'Mobile Responsive Layout',
    description: 'Responsive page adaptation across desktop and mobile viewports.',
    src: '/cases/ui-optimization/gif-mobile-responsive.gif',
    badge: 'Mobile',
    pending: true
  },
  {
    title: 'CTA Path Highlight',
    description: 'Visual guidance for contact, quote, and conversion paths.',
    src: '/cases/ui-optimization/gif-cta-path.gif',
    badge: 'CTA',
    pending: true
  },
  {
    title: 'Before / After Layout Refinement',
    description: 'A transition from rough layout structure to a clearer final interface.',
    src: '/cases/ui-optimization/gif-before-after.gif',
    badge: 'Refinement',
    pending: true
  }
];

const processSteps = [
  ['01', 'Structure Audit', 'Find unclear hierarchy, weak CTA placement, and layout friction.'],
  ['02', 'Interface Direction', 'Define the visual rhythm, responsive behavior, and content hierarchy.'],
  ['03', 'Layout Assembly', 'Build reusable page sections and case-study blocks.'],
  ['04', 'Interaction Polish', 'Tune hover states, transitions, motion timing, and feedback.'],
  ['05', 'Final Delivery', 'Prepare a reusable case presentation pattern for future pages.']
];

const principles = [
  ['Clear hierarchy', 'Important content is scanned in the right order.'],
  ['Image-first case presentation', 'Visual outputs lead each story before supporting copy.'],
  ['Mobile-first readability', 'Section hierarchy and spacing remain legible on smaller screens.'],
  ['Smooth motion feedback', 'Interactions feel guided, lightweight, and intentional.'],
  ['Reusable visual system', 'Patterns are repeatable across future case detail pages.']
];

function GalleryCard({ item, featured = false }: { item: GalleryItem; featured?: boolean }) {
  return (
    <motion.article
      className={`ui-gallery-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="ui-gallery-media-wrap">
        {!item.pending ? (
          <>
            <img className="ui-gallery-media ui-gallery-blur" src={item.src} alt="" aria-hidden="true" />
            <motion.img className="ui-gallery-media ui-gallery-main" src={item.src} alt={item.title} whileHover={{ scale: 1.03 }} transition={{ duration: 0.45 }} />
          </>
        ) : (
          <div className="ui-gallery-pending">
            <span>In Progress</span>
            <p>Archive motion is being finalized for this interaction sequence.</p>
          </div>
        )}
      </div>
      <div className="ui-gallery-copy">
        <span className="ui-gallery-badge">{item.badge}</span>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </motion.article>
  );
}

export function UIDesignCaseDetail({ onBack }: { onBack: () => void }) {
  const [heroError, setHeroError] = useState(false);

  return (
    <section className="section ui-detail-shell">
      <button className="btn" onClick={onBack}>← Back to Cases</button>

      <article className="ui-hero-card">
        <div className="ui-hero-copy">
          <small className="eyebrow">UI / UX CASE STUDY</small>
          <h2>Website UI Design &amp; Optimization</h2>
          <p>Interface experiments focused on hierarchy, responsive structure, CTA clarity, and smoother case presentation.</p>
          <div className="tags">{chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
        </div>
        <div className="ui-hero-media">
          {!heroError ? (
            <img src="/cases/ui-optimization/cover.gif" alt="Website UI Design & Optimization cover animation" onError={() => setHeroError(true)} />
          ) : (
            <div className="ui-hero-fallback">Cover GIF unavailable</div>
          )}
        </div>
      </article>

      <section className="ui-statement-grid">
        <h3>Designed for clarity, motion, and reuse.</h3>
        <div>
          <p>This case collects interface experiments that improve how digital work is presented: opening motion, card interaction, mobile adaptation, CTA direction, and before/after layout refinement.</p>
          <dl>
            <div><dt>Focus</dt><dd>Case-study UI</dd></div>
            <div><dt>Output</dt><dd>Motion gallery</dd></div>
            <div><dt>Format</dt><dd>GIF-based interaction archive</dd></div>
          </dl>
        </div>
      </section>

      <section className="ui-gallery-section">
        <div className="ui-section-head">
          <small className="eyebrow">Case Media</small>
          <h3>Interface Motion Gallery</h3>
        </div>
        <div className="ui-gallery-grid">
          {galleryItems.map((item, idx) => <GalleryCard key={item.title} item={item} featured={idx === 0} />)}
        </div>
      </section>

      <section>
        <div className="ui-section-head">
          <small className="eyebrow">Method</small>
          <h3>Optimization Process</h3>
        </div>
        <div className="ui-process-grid">{processSteps.map(([num, title, desc]) => (
          <article key={num} className="ui-process-step">
            <small>{num}</small>
            <h4>{title}</h4>
            <p>{desc}</p>
          </article>
        ))}</div>
      </section>

      <section>
        <div className="ui-section-head">
          <small className="eyebrow">System</small>
          <h3>Design Principles</h3>
        </div>
        <div className="ui-principle-grid">{principles.map(([title, desc]) => (
          <article key={title} className="ui-principle-card">
            <i aria-hidden="true" />
            <h4>{title}</h4>
            <p>{desc}</p>
          </article>
        ))}</div>
      </section>
    </section>
  );
}
