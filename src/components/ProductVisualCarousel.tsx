import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

type CarouselImage = {
  src: string;
  title: string;
  category: string;
};

export function ProductVisualCarousel({ images, intervalMs = 2000 }: { images: CarouselImage[]; intervalMs?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (images.length < 2 || isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs, isHovered]);

  useEffect(() => {
    setActiveIndex(0);
    setFailedImages({});
  }, [images]);

  if (!images.length) return null;

  const active = images[activeIndex];
  const isFallback = failedImages[active.src];
  const isPortraitPoster = /dress|tee|ceramic|earbuds/i.test(active.src) || /campaign|tableware/i.test(active.title);

  return (
    <div
      className="product-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Product visual carousel"
    >
      <div className="product-carousel-frame">
        <AnimatePresence mode="wait">
          <motion.article
            key={active.src}
            className="product-carousel-slide"
            initial={{ opacity: 0, y: 14, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.995 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            {!isFallback ? (
              <img
                src={active.src}
                alt={active.title}
                className={isPortraitPoster ? 'poster-contain' : 'poster-cover'}
                onError={() => setFailedImages((prev) => ({ ...prev, [active.src]: true }))}
              />
            ) : (
              <div className="poster-fallback" aria-hidden="true" />
            )}

            <div className="product-carousel-overlay" />
            <span className="output-badge">Case Output</span>
            <div className="product-carousel-meta">
              <small>{active.category}</small>
              <h4>{active.title}</h4>
            </div>
          </motion.article>
        </AnimatePresence>

        {images.length > 1 ? (
          <>
            <button className="carousel-arrow left" onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)} aria-label="Previous image">‹</button>
            <button className="carousel-arrow right" onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)} aria-label="Next image">›</button>
          </>
        ) : null}
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Carousel pagination">
        {images.map((image, idx) => (
          <button
            key={image.src}
            className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Show ${image.title}`}
            aria-selected={idx === activeIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
