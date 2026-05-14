import type { CaseItem } from './types';
import { RefinementSlider } from './RefinementSlider';
import { ProductVisualCarousel } from './ProductVisualCarousel';

const productPosterImages = [
  { src: '/cases/product-visuals/poster-dress.png', title: 'Floral Slip Dress Campaign', category: 'Fashion' },
  { src: '/cases/product-visuals/poster-crop-tee.png', title: 'Black Crop Tee Campaign', category: 'Apparel' },
  { src: '/cases/product-visuals/poster-ceramic.png', title: 'Handmade Ceramic Tableware', category: 'Home & Lifestyle' },
  { src: '/cases/product-visuals/poster-earbuds.png', title: 'Wireless Earbuds Campaign', category: 'Consumer Electronics' }
];

export function CaseDetail({ item, onBack }: { item: CaseItem; onBack: () => void }) {
  return <section className="section"><button className="btn" onClick={onBack}>← Back to Cases</button>
    <article className="detail"><div><small>{item.category}</small><h2>{item.title}</h2><p>{item.brief}</p><h4>Problem</h4><p>{item.problem}</p><h4>Process</h4><p>{item.process}</p><h4>Output</h4><p>{item.output}</p><div className="tags">{item.tools.map((t) => <span key={t}>{t}</span>)}</div></div>
    {item.id === 'promo-visual' ? <ProductVisualCarousel images={productPosterImages} /> : <div className={`detail-visual ${item.visualType}`} />}</article>
    {item.category === 'Visuals' ? <RefinementSlider /> : null}
  </section>;
}
