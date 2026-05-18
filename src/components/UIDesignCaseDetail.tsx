import { useState } from 'react';
import { motion } from 'motion/react';

const chips = ['UI Design', 'Mobile UX', 'CTA Flow', 'Product Page', 'Conversion Layout'];

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
    description: 'A cinematic entry sequence that frames the project as a premium visual archive.',
    src: '/cases/ui-optimization/gif-hero-opening.gif',
    badge: 'Motion'
  },
  {
    title: 'Case Card Hover Interaction',
    description: 'Interactive case cards with hover reveal, image scaling, overlay control, and smooth return states.',
    src: '/cases/ui-optimization/gif-case-hover.gif',
    badge: 'Interaction',
    pending: true
  },
  {
    title: 'Mobile Responsive Layout',
    description: 'Responsive UI adaptation across desktop and mobile layouts.',
    src: '/cases/ui-optimization/gif-mobile-responsive.gif',
    badge: 'Mobile',
    pending: true
  },
  {
    title: 'CTA Path Highlight',
    description: 'Visual emphasis on quote/contact routes and conversion paths.',
    src: '/cases/ui-optimization/gif-cta-path.gif',
    badge: 'CTA',
    pending: true
  },
  {
    title: 'Before / After Layout Refinement',
    description: 'Layout hierarchy refinement from rough structure to polished interface.',
    src: '/cases/ui-optimization/gif-before-after.gif',
    badge: 'Refinement',
    pending: true
  }
];

const processSteps = [
  ['01', 'Structure Audit', 'Identify unclear hierarchy, weak CTA flow, and layout friction.'],
  ['02', 'Interface Direction', 'Define visual hierarchy, section rhythm, responsive behavior, and conversion path.'],
  ['03', 'Layout Assembly', 'Build desktop and mobile page structures using reusable UI blocks.'],
  ['04', 'Interaction Polish', 'Add hover states, motion timing, visual feedback, and smoother transitions.'],
  ['05', 'Final Delivery', 'Prepare reusable UI patterns for landing pages, product pages, and case studies.']
];

const principles = [
  'Clear hierarchy',
  'Conversion-focused CTA',
  'Mobile-first readability',
  'Smooth interaction feedback',
  'Reusable visual system'
];

function GalleryCard({ item, featured = false }: { item: GalleryItem; featured?: boolean }) {
  return (
    <motion.article
      className={`ui-gallery-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 24px 32px rgba(42,36,24,.12)' }}
    >
      <div className="ui-gallery-media-wrap">
        {!item.pending ? (
          <>
            <img className="ui-gallery-media ui-gallery-blur" src={item.src} alt="" aria-hidden="true" />
            <motion.img className="ui-gallery-media ui-gallery-main" src={item.src} alt={item.title} whileHover={{ scale: 1.03 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} />
          </>
        ) : (
          <div className="ui-gallery-pending">
            <p>GIF pending</p>
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
        <div>
          <small className="eyebrow">UI / UX</small>
          <h2>Website UI Design &amp; Optimization</h2>
          <p>Interface systems for clearer hierarchy, stronger CTA paths, mobile adaptation, and conversion-focused layouts.</p>
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

      <section className="ui-gallery-section">
        <div className="ui-section-head">
          <small className="eyebrow">Case Media</small>
          <h3>Interface Motion Gallery</h3>
          <p>Core interface studies from this case, preserving the original archive media and sequencing it with clearer presentation rhythm.</p>
        </div>
        <div className="ui-gallery-grid">
          <GalleryCard item={galleryItems[0]} featured />
          <div className="ui-gallery-subgrid">{galleryItems.slice(1).map((item) => <GalleryCard item={item} />)}</div>
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
        <div className="ui-principle-grid">{principles.map((item) => (
          <article key={item} className="ui-principle-card">{item}</article>
        ))}</div>
      </section>
    </section>
  );
}
