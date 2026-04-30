import * as React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { useIsMobile } from './ui/use-mobile';
import {
  googleMapsReviewsUrl,
  googleReviewsSummary,
  guestReviews
} from '../data/guestReviews';

type GoogleReviewsSectionProps = {
  limit?: number;
  titleClassName?: string;
  layout?: 'grid' | 'carousel';
};

function ReviewCard({
  author,
  relativeDate,
  rating,
  quote,
  occasion,
  className = ''
}: {
  author: string;
  relativeDate: string;
  rating: number;
  quote: string;
  occasion: string;
  className?: string;
}) {
  return (
    <article className={`google-review-card ${className}`.trim()}>
      <div className="stack-md">
        <div className="flex items-start justify-between gap-4">
          <div className="stack-xs">
            <p className="type-meta">{author}</p>
            <p className="type-body-sm opacity-70">{relativeDate}</p>
          </div>
          <span className="google-review-source">Google</span>
        </div>

        <div className="stack-sm">
          <div className="flex items-center gap-3">
            <RatingStars rating={rating} />
            <span className="type-body-sm font-medium text-slate-600">{rating}.0</span>
          </div>
          <p className="type-quote">"{quote}"</p>
        </div>

        <p className="type-body-sm text-slate-600">{occasion}</p>
      </div>
    </article>
  );
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export function GoogleReviewsSection({
  limit = guestReviews.length,
  titleClassName = 'type-kicker type-kicker-dark',
  layout = 'grid'
}: GoogleReviewsSectionProps) {
  const isMobile = useIsMobile();
  const reviewsToShow = guestReviews.slice(0, limit);
  const groupSize = layout === 'carousel' ? (isMobile ? 1 : 3) : reviewsToShow.length;
  const reviewGroups = React.useMemo(() => {
    if (layout !== 'carousel') {
      return [reviewsToShow];
    }

    const groups = [];
    for (let index = 0; index < reviewsToShow.length; index += groupSize) {
      groups.push(reviewsToShow.slice(index, index + groupSize));
    }
    return groups;
  }, [groupSize, layout, reviewsToShow]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [groupSize]);

  React.useEffect(() => {
    if (layout !== 'carousel' || reviewGroups.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((currentIndex) => (currentIndex + 1) % reviewGroups.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [layout, reviewGroups.length]);

  const goToPrevious = React.useCallback(() => {
    setDirection(-1);
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? reviewGroups.length - 1 : currentIndex - 1
    );
  }, [reviewGroups.length]);

  const goToNext = React.useCallback(() => {
    setDirection(1);
    setActiveIndex((currentIndex) => (currentIndex + 1) % reviewGroups.length);
  }, [reviewGroups.length]);

  return (
    <section className="page-section page-section-soft">
      <div className="content-shell stack-xl">
        <div className="mx-auto max-w-3xl text-center stack-sm">
          <h2 className={titleClassName}>Guest Experiences</h2>
          <h3 className="type-display">Trusted on Google</h3>
          <p className="type-body">
            Real guest feedback pulled from the public Google listing, paired with the current
            rating snapshot.
          </p>
        </div>

        {layout === 'carousel' ? (
          <div className="google-review-carousel-wrap">
            <div className="google-review-carousel-stage">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`review-group-${activeIndex}`}
                  initial={{ opacity: 0, x: direction > 0 ? 16 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -16 : 16 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div
                    className={`grid gap-6 ${
                      isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                    }`}
                  >
                    {reviewGroups[activeIndex].map((review) => (
                      <ReviewCard
                        key={`${review.author}-${review.occasion}`}
                        {...review}
                        className="google-review-carousel-card"
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="google-review-carousel-controls">
              <button
                type="button"
                onClick={goToPrevious}
                className="google-review-carousel-button"
                aria-label="Previous review"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <p className="type-body-sm google-review-carousel-count">
                {activeIndex + 1} / {reviewGroups.length}
              </p>
              <button
                type="button"
                onClick={goToNext}
                className="google-review-carousel-button"
                aria-label="Next review"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviewsToShow.map((review) => (
              <ReviewCard key={`${review.author}-${review.occasion}`} {...review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
